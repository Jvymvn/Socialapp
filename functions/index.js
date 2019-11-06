const functions = require('firebase-functions');
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login } = require('./handlers/users');
const FBAuth = require('./util/FBAuth');


const app = require('express')();

//scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

//users routes
app.post('/signup', signup);
app.post('/login', login);


exports.api = functions.https.onRequest(app);