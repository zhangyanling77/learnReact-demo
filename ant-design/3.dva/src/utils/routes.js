import { Route, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
export function renderRoutes(routeConfig, app) {
    return (
        routeConfig.map(({ path, component, exact = false, routes = [] }, index) => (
            <Route
                path={path}
                exact={exact}
                key={index}
                component={
                    dynamic({
                        app,
                        models: () => [],
                        component: () => {
                            return component().then(result => {
                                let Component = result.default || result;
                                return props => <Component {...props} routes={routes} app={app} />;
                            });
                        }
                    })
                }
            />
        ))
    )
}
//渲染重定向 exact={exact} from="from"
export function renderRedirect(from, exact, routeConfig) {
    let redirectRoute = routeConfig.find(route => route.redirect) || routeConfig[0];
    return <Redirect exact={exact} from={from} to={redirectRoute.path} />
}