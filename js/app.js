// class Oop {
//     constructor(name) {
//       this.name = name
//       this.hunger = 0
//       this.sleepiness = 0
//       this.boredom = 0;
//       this.age = 
//     }
// }
document.getElementById("instructions-button").addEventListener("click", function() {
    alert("instructions here")
});


 hungerLevel = 100;
 hungerInterval = setInterval(decreaseHungerBar, 5000);

function decreaseHungerBar() {
  hungerLevel -= 10;
  document.getElementById("hunger-level").style.width = hungerLevel + "%";
  if (hungerLevel <= 0) {
    clearInterval(hungerInterval)
  }
}

sleepinessLevel = 100;
sleepinessInterval = setInterval(decreaseSleepinessBar, 5000);

function decreaseSleepinessBar() {
sleepinessLevel -= 10;
document.getElementById("sleepiness-level").style.width = sleepinessLevel + "%";
if (sleepinessLevel <= 0) {
clearInterval(sleepinessInterval);
}
}


boredomLevel = 100;
boredomInterval = setInterval(decreaseBoredomBar, 5000);

function decreaseBoredomBar() {
boredomLevel -= 10;
document.getElementById("boredom-level").style.width = boredomLevel + "%";
if (boredomLevel <= 0) {
clearInterval(boredomInterval);
}
}

