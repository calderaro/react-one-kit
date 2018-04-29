const React = require('react')
const matchRoutes = require('react-router-config').matchRoutes
const h = React.createElement

/**
 * Returns a new React component, ready to be instantiated.
 * Note the closure here protecting Component, and providing a unique
 * instance of Component to the static implementation of `load`.
 */
function generateAsyncRouteComponent({ name, loader, Placeholder }) {
  let Component = null
  return class AsyncRouteComponent extends React.Component {
    /**
     * Static so that you can call load against an uninstantiated version of
     * this component. This should only be called one time outside of the
     * normal render path.
     */
    static load() {
      return loader().then((ResolvedComponent) => {
        Component = ResolvedComponent.default || ResolvedComponent
        return {name, seo: Component.seo}
      })
    }

    constructor() {
      super()
      this.updateState = this.updateState.bind(this)
      this.state = {
        Component,
      }
    }

    componentWillMount() {
      AsyncRouteComponent.load().then(this.updateState)
    }

    updateState() {
      // Only update state if we don't already have a reference to the
      // component, this prevent unnecessary renders.
      if (this.state.Component !== Component) {
        this.setState({
          Component,
        })
      }
    }

    render() {
      const ComponentFromState = this.state.Component
      if (ComponentFromState) {
        return h(ComponentFromState, this.props, null)
      }

      if (Placeholder) {
        return h(Placeholder, this.props, null)
      }

      return null
    }
  }
}

/**
 * First match the routes via react-router-config's `matchRoutes` function.
 * Then iterate over all of the matched routes, if they've got a load function
 * call it.
 *
 * This helps us to make sure all the async code is loaded before rendering.
 */
function ensureReady(routeConfig, providedLocation) {
  const matches = matchRoutes(routeConfig, providedLocation || location.pathname)
  return Promise.all(matches.map((match) => {
    const component = match.route.component
    if (component && component.load) {
      return component.load()
    }
    return null
  }))
}

function convertCustomRouteConfig(customRouteConfig, parentRoute) {
  return customRouteConfig.map((route) => {
    if (typeof route.path === 'function') {
      const pathResult = route.path(parentRoute || '').replace('//', '/')
      return {
        path: pathResult,
        component: route.component,
        exact: route.exact,
        routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : [],
      }
    }
    const pathResult = `${parentRoute}${route.path}`
    return {
      path: pathResult,
      component: route.component,
      exact: route.exact,
      routes: route.routes ? convertCustomRouteConfig(route.routes, pathResult) : [],
    }
  })
}

module.exports = {convertCustomRouteConfig, ensureReady,  generateAsyncRouteComponent}
