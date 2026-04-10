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

document.getElementById("contactForm").addEventListener("submit", function(e){
e.preventDefault();

db.ref("clients").push({
name: name.value,
email: email.value,
message: message.value,
time: new Date().toLocaleString()
});

alert("Sent!");

window.location.href="https://wa.me/2349168144059";

this.reset();
});

// CHATBOT
const input = document.getElementById("chatInput");
const body = document.getElementById("chatBody");

input.addEventListener("keypress", function(e){
if(e.key==="Enter"){
let text=input.value;
body.innerHTML+=`<p>You: ${text}</p>`;

let reply="Chat on WhatsApp.";

if(text.includes("price")) reply="$15 - $80+";
if(text.includes("time")) reply="2-5 days";

setTimeout(()=>{
body.innerHTML+=`<p>Bot: ${reply}</p>`;
},500);

input.value="";
}
});