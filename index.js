

function goNav() {
  window.open("https://shriishwaryaa.github.io/180100112_WEB_DEV/#navBar", "_self");
}

function openc1() {
  window.open("https://github.com/shriishwaryaa/180100112_WEB_DEV/blob/master/Shri%20Ishwaryaa%20S%20V%20Android.pdf", "_self");
}

function openc2() {
  window.open("https://courses.edx.org/certificates/0c1e671755bf4665afe6b7bf277ce8d8", "_self");
}

function copyPhone() {
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
  window.open("https://www.linkedin.com/shriishwaryaasv");
}

function scrollToTop() {
  elmnt.scrollIntoView(true);
}

function scrollToBottom(elemt) {
  elmnt.scrollIntoView(false);
}
