var hrHand = document.getElementById("hour-hand");
var minHand = document.getElementById("min-hand");
var secHand = document.getElementById("sec-hand");
let hrdeg = 0;
let mindeg = 0;
let secdeg = 0;
var d = new Date();
console.log(d);
let hr = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
hrdeg = (hr + min / 60 + sec / 3600 - 3) * 30;
mindeg = (min + sec / 60 - 15) * 6;
secdeg = (sec - 15) * 6;
setInterval(myTimer1, 1000);
setInterval(myTimer2, 1000);
setInterval(myTimer3, 1000);
function myTimer1() {
  let prop = "rotate(" + hrdeg.toString() + "deg)";
  hrHand.style.transform = prop;
  hrdeg += 0.00833333333;
}

function myTimer2() {
  let prop = "rotate(" + mindeg.toString() + "deg)";
  minHand.style.transform = prop;
  mindeg += 0.1;
}

function myTimer3() {
  let prop = "rotate(" + secdeg.toString() + "deg)";
  secHand.style.transform = prop;
  secdeg += 6;
}
