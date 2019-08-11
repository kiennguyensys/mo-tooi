// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();

// Next app
const next = require('next');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

// Require keystone
const keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
              // The name of the KeystoneJS application
    'name': 'mơ-tooi',
    // Paths to our application static files
    'static': [
             './server/public/js/',
             './server/public/img/',
             ],
    // Keystone includes an updates framework,
    // which you can enable by setting the auto update option to true.
    // Updates provide an easy way to seed your database,
    // transition data when your models change,
    // or run transformation scripts against your database.
    'auto update': true,
    'cloudinary config': 'cloudinary://915351483667299:9im4e4B0Xd0060utUk82TN41s14@giaphatocphamphu',
    // The url for your MongoDB connection
    'mongo': 'mongodb://NeoTheSecond1404:NeoTheSecond1404^^@ds159574.mlab.com:59574/mo-tooi',
    // Whether to enable built-in authentication for Keystone's Admin UI,
    'auth': true,
    // The key of the Keystone List for users, required if auth is set to true
    'user model': 'User',
    // The encryption key to use for your cookies.
    'cookie secret': '6D61822FBEAED8635A4A52241FEC3',
});

// Load your project's Models
keystone.import('./server/models');

// Start Next app
app.prepare()
	.then(() => {

		// Load your project's Routes
		keystone.set('routes', require('./server/routes')(app));

		// Configure the navigation bar in Keystone's Admin UI
		keystone.set('nav', {
			posts: ['posts', 'post-categories'],
			users: 'users',
		});

		keystone.start();
	});
