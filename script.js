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

// CONTACT FORM
document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

db.ref("clients").push({
name: name.value,
email: email.value,
message: message.value,
time: new Date().toLocaleString()
});

alert("Request sent 🚀");

// AUTO WHATSAPP REDIRECT
window.location.href = "https://wa.me/2349168144059?text=Hello%20I%20just%20submitted%20a%20form";

this.reset();
});

// EMAIL SUBSCRIBERS
document.getElementById("emailForm").addEventListener("submit", function(e){
e.preventDefault();

db.ref("subscribers").push({
email: subscriberEmail.value,
time: new Date().toLocaleString()
});

alert("Subscribed 🎉");
this.reset();
});

// CHATBOT
const input = document.getElementById("chatInput");
const body = document.getElementById("chatBody");

input.addEventListener("keypress", function(e){
if(e.key === "Enter"){
let text = input.value.toLowerCase();
body.innerHTML += `<p><b>You:</b> ${text}</p>`;

let reply="Chat us on WhatsApp.";

if(text.includes("price")) reply="Starts from $15.";
if(text.includes("time")) reply="2-5 days delivery.";
if(text.includes("website")) reply="We build business & portfolio websites.";

setTimeout(()=>{
body.innerHTML += `<p><b>Bot:</b> ${reply}</p>`;
},500);

input.value="";
}
});