// class Oop {
//     constructor(name) {
//       this.name = name
//       this.hunger = 0
//       this.sleepiness = 0
//       this.boredom = 0;
//       this.age = 
//     }
// }



 hungerLevel = 100;
 hungerInterval = setInterval(decreaseHungerBar, 1000);

function decreaseHungerBar() {
  hungerLevel -= 10;
  document.getElementById("hunger-level").style.width = hungerLevel + "%";
  if (hungerLevel <= 0) {
    clearInterval(hungerInterval)
  }
}

sleepinessLevel = 100;
sleepinessInterval = setInterval(decreaseSleepinessBar, 1000);

function decreaseSleepinessBar() {
sleepinessLevel -= 10;
document.getElementById("sleepiness-level").style.width = sleepinessLevel + "%";
if (sleepinessLevel <= 0) {
clearInterval(sleepinessInterval);
}
}



