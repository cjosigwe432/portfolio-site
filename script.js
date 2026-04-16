function track(){
  let id = document.getElementById("trackId").value;
  let result = document.getElementById("result");

  if(!id){
    result.innerHTML = "Please enter tracking number";
    return;
  }

  let status = [
    "Shipment picked up 📦",
    "In transit ✈️",
    "Arrived at sorting facility 🏢",
    "Custom clearance done 🛃",
    "Out for delivery 🚚",
    "Delivered ✅"
  ];

  let random = status[Math.floor(Math.random()*status.length)];

  result.innerHTML = `
    <h3>Tracking ID: ${id}</h3>
    <p>Status: ${random}</p>
  `;
}