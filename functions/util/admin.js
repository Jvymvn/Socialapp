const admin = require('firebase-admin');

admin.initializeApp({
    storageBucket: "socialapp-6f25a.appspot.com"
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };

//credential: admin.credential.cert(require('../../admin.json')),