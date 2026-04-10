const firebaseConfig = {
apiKey: "AIzaSyDLvK-Q4v1hZ2B-mtxZzNXs5m1tCS6LdGw",
authDomain: "neobank-app-3ebbe.firebaseapp.com",
databaseURL: "https://neobank-app-3ebbe-default-rtdb.firebaseio.com",
projectId: "neobank-app-3ebbe",
storageBucket: "neobank-app-3ebbe.firebasestorage.app",
messagingSenderId: "258331631270",
appId: "1:258331631270:web:f4eeeb8ac1e3177bb21e67"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

document.getElementById("leadForm").addEventListener("submit", e=>{
e.preventDefault();

db.ref("leads").push({
name: name.value,
email: email.value,
message: message.value,
status: "new",
time: new Date().toLocaleString()
});

alert("Request sent 🚀");

window.location.href = "https://wa.me/2349168144059";
});