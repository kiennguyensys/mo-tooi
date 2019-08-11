
const keystone = require('keystone');
// Then to get access to our API route we will use importer
var importRoutes = keystone.importer(__dirname);
// And finally set up the api on a route
var routes = {
	api: importRoutes('./api'),
};

// Setup Route Bindings
exports = module.exports = nextApp => keystoneApp => {

	// Next request handler
	const handle = nextApp.getRequestHandler();

	keystoneApp.get('/api/posts', keystone.middleware.api, routes.api.posts.list);
	keystoneApp.get('*', (req, res) => {
		return handle(req, res);
	});
};
