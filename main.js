

let seconds ;
let minutes;
let hours; 

setInterval(() => {
  let d = new Date();
  seconds = d.getSeconds();
  minutes = d.getMinutes();
  hours = d.getHours();
  if (hours > 12) {
    hours = hours - 12;
  }
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;
  document.getElementById("second").innerHTML = seconds;
}, 1000);

window.onresize = function() {
  console.log();
  if (window.innerWidth < "600"){
    document.getElementById("img").src= "img/mountain-lake-forest-nature-scenery-phone-wallpaper-4k-uhdpaper.com-135@0@i.jpg"
  }
  else{
    document.getElementById("img").src = "img/car-outrun-road-mountain-retrowave-digital-art-4k-wallpaper-uhdpaper.com-205@3@a.jpg"
  }
}
 

if( window.screen.width < 700){
  document.getElementById("img").src = "img/two.jpg"

}


