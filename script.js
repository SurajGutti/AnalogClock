const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPos = (hr*360/12)+(min*(360/60)/12);
let minPos = (min*360/60)+(sec*(360/60)/60);
let secPos = sec*360/60;

function runClock(){
   secPos = secPos+6;
   minPos = minPos+(6/60);
   hrPos = hrPos+(3/360);

    HOURHAND.style.transform = "rotate("+hrPos+"deg)";
    MINUTEHAND.style.transform = "rotate("+minPos+"deg)";
    SECONDHAND.style.transform = "rotate("+secPos+"deg)";
}

var interval = setInterval(runClock, 1000);