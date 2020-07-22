

function goNav() {
  alert("Heya");
  window.open("https://www.google.com", "_self");
}

function openc1() {
  alert("Heya");
  window.open("https://www.google.com", "_self");
}

function openc2() {
  alert("Heya");
  window.open("https://www.google.com", "_self");
}

function copyPhone() {
  alert("Hello");
  var txt = "+91 76390 03967";
  var number = document.createElement("input");
  number.style.display = 'none';
  document.body.appendChild(number);
  number.setAttribute("id", "pn");
  document.getElementById("pn").value = txt;
  number.select();
  document.execCommand("copy");
  alert("Phone number copied to clipboard")
  document.body.removeChild(number);
}

function copyEmail() {
  alert("Hello");
  var txt = "ishwaryaa555@gmail.com";
  var number = document.createElement("input");
  number.style.display = 'none';
  document.body.appendChild(number);
  number.setAttribute("id", "mail");
  document.getElementById("mail").value = txt;
  number.select();
  document.execCommand("copy");
  alert("Email ID copied to clipboard")
  document.body.removeChild(number);
}

function openLinkedIn() {
  alert("Heya");
  window.open("https://www.google.com");
}

function scrollToTop() {
  elmnt.scrollIntoView(true);
}

function scrollToBottom(elemt) {
  elmnt.scrollIntoView(false);
}
