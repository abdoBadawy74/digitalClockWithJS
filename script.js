document.body.style.cssText = "background-color:#E4DBCF";

function currentTime() {
  let date = new Date();
  
  let hours = date.getHours();
  
  let minutes = date.getMinutes();
  
  let secs = date.getSeconds();
  
  let time = "AM";

  if (hours === 0) {
    hours = 12;
  }

  if (hours > 12) {
    hours -= 12;
    time = "PM";
  }

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (secs < 10) {
    secs = "0" + secs;
  }

  document.querySelector(
    ".clock"
  ).innerHTML = `${hours}: ${minutes}: ${secs} ${time}`;

  setTimeout(() => {
    currentTime();
  }, 1000);
}

document.querySelector(
    ".clock"
  ).style.cssText = "position:absolute; top:50%;left:50%;transform:translate(-50%,-50%); width:200px; height:60px;background-color:#2F4858;color:white; display:flex; justify-content:center;align-items:center;font-size:25px;"

currentTime();
