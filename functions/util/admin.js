const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(require('../../admin.json')),
    storageBucket: "socialapp-6f25a.appspot.com"
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };