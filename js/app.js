class Tamagotchi {
    constructor(name) {
    this.name = name;
    this.hunger = 0;
    this.sleepiness = 0;
    this.boredom = 0;
    this.age = 0;
    }
    }


document.getElementById("instructions-button").addEventListener("click", function() {
    alert("instructions here")


// this makes bars run at correct interval, but need to add event
//listener with anonymous function so these buttons only run when start is clicked

//  hungerLevel = 100;
//  hungerInterval = setInterval(decreaseHungerBar, 5000);

// function decreaseHungerBar() {
//   hungerLevel -= 10;
//   document.getElementById("hunger-level").style.width = hungerLevel + "%";
//   if (hungerLevel <= 0) {
//     clearInterval(hungerInterval)
//   }
// }

// sleepinessLevel = 100;
// sleepinessInterval = setInterval(decreaseSleepinessBar, 5000);

// function decreaseSleepinessBar() {
// sleepinessLevel -= 10;
// document.getElementById("sleepiness-level").style.width = sleepinessLevel + "%";
// if (sleepinessLevel <= 0) {
// clearInterval(sleepinessInterval);
// }
// }


// boredomLevel = 100;
// boredomInterval = setInterval(decreaseBoredomBar, 5000);

// function decreaseBoredomBar() {
// boredomLevel -= 10;
// document.getElementById("boredom-level").style.width = boredomLevel + "%";
// if (boredomLevel <= 0) {
// clearInterval(boredomInterval);
// }
// }

});
let hungerLevel = 100;
let hungerInterval;
let sleepinessLevel = 100;
let sleepinessInterval;
let boredomLevel = 100;
let boredomInterval;

document.getElementById("start-button").addEventListener("click", function() {
  if(hungerInterval === undefined) {
    hungerInterval = setInterval(decreaseHungerBar, 5000);
  } else {
    clearInterval(hungerInterval);
    hungerInterval = undefined;
  }
  if(sleepinessInterval === undefined) {
    sleepinessInterval = setInterval(decreaseSleepinessBar, 5000);
  } else {
    clearInterval(sleepinessInterval);
    sleepinessInterval = undefined;
  }
  if(boredomInterval === undefined) {
    boredomInterval = setInterval(decreaseBoredomBar, 5000);
  } else {
    clearInterval(boredomInterval);
    boredomInterval = undefined;
  }
});

function decreaseHungerBar() {
  hungerLevel -= 10;
  document.getElementById("hunger-level").style.width = hungerLevel + "%";
  if (hungerLevel <= 0) {
    clearInterval(hungerInterval);
    hungerInterval = undefined;
  }
}

function decreaseSleepinessBar() {
  sleepinessLevel -= 10;
  document.getElementById("sleepiness-level").style.width = sleepinessLevel + "%";
  if (sleepinessLevel <= 0) {
    clearInterval(sleepinessInterval);
    sleepinessInterval = undefined;
  }
}

function decreaseBoredomBar() {
  boredomLevel -= 10;
  document.getElementById("boredom-level").style.width = boredomLevel + "%";
  if (boredomLevel <= 0) {
    clearInterval(boredomInterval);
    boredomInterval = undefined;
  }
}