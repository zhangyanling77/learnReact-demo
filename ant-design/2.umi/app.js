export function patchRoutes(routes) {
    routes.unshift({
        path: '/foo',
        component: () => <div>foo</div>
    });
}