// const admin = require('firebase-admin');

// const db = admin.firestore();

// module.exports = { admin, db };

const admin = require('firebase-admin');

admin.initializeApp({
    credential: admin.credential.cert(require('../../admin.json'))
});

// admin.initializeApp();

const db = admin.firestore();

module.exports = { admin, db };