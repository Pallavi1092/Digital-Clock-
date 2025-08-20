const container = document.getElementById("container");
container.style.backgroundColor="black";
container.style.height="55%";
container.style.width="70%";



//const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//const d = new Date();
//let day = weekday[d.getDay()];

function clock()
{
const n =new Date();
let hours= n.getHours();
let minutes = n.getMinutes(); 
let second = n.getSeconds();

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];


let ampm = hours >=12 ? "PM":"AM";

let timestring = hours+":"+minutes+":"+second+  "        "  +"       "+day;
//let sec=document.getElementById("container2").innerHTML=day;
//container.appendChild(sec);


const final=document.getElementById("container");
final.innerText=timestring;
final.style.color="white";
final.style.paddingTop="20%";
final.style.paddingLeft="30%";
final.style.textAlign="centre";
final.style.fontSize="50px";
final.style.fontFamily="digital-7";

}
setInterval(clock,1000);
clock();