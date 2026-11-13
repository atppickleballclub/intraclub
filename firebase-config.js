// Firebase settings for the Christmas 3x3 intraclub site (project: ATP Events).
// These values are not secret: the Firestore rules decide who can change scores.
// Same project as the Dural and Defend the Kitchen sites; this event is saved under events/christmas-3x3-2026.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAykyvBpr-3H4_gCm--8tDN2IhV-2EFfj0",
  authDomain: "atp-events.firebaseapp.com",
  projectId: "atp-events",
  storageBucket: "atp-events.firebasestorage.app",
  messagingSenderId: "273200954086",
  appId: "1:273200954086:web:5e60331be74192b6741927"
};

// This event's own record in the database. Each site uses a different name.
window.EVENT_ID = "christmas-3x3-2026";
