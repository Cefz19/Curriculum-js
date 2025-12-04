const resolveRoutes = (route) => {
    if(route.match(/^([0-9]+)$/)) {
        let validRoute = route === '/' 
        ? route : '/:id';
        return validRoute;
    }
    return `/${route}`;
}

export default resolveRoutes;