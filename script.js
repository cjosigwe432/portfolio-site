// FIREBASE CONFIG (ADD YOUR OWN)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLvK-Q4v1hZ2B-mtxZzNXs5m1tCS6LdGw",
  authDomain: "neobank-app-3ebbe.firebaseapp.com",
  projectId: "neobank-app-3ebbe",
  storageBucket: "neobank-app-3ebbe.firebasestorage.app",
  messagingSenderId: "258331631270",
  appId: "1:258331631270:web:f4eeeb8ac1e3177bb21e67",
  measurementId: "G-9VRK9ZZXYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// SEND MESSAGE TO DATABASE
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    db.ref("clients").push({
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    });

    alert("Message sent 🚀 I will contact you soon");

    this.reset();
});