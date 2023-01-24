
class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.sleepiness = 100;
        this.boredom = 100;
        this.age = 0;
    }
}

function showNameForm() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("name-form").style.display = "block";
}

function createTamagotchi() {
    let name = document.getElementById("name-input").value;
    tamagotchi = new Tamagotchi(name);
    console.log(tamagotchi);  
    document.getElementById("hunger-bar").classList.remove("hidden");

    document.getElementById("hunger-level").style.width = "100%";
    document.getElementById("sleepiness-bar").classList.remove("hidden");
    document.getElementById("sleepiness-level").style.width = "100%";
    document.getElementById("boredom-bar").classList.remove("hidden");
    document.getElementById("boredom-level").style.width = "100%";
    document.getElementById("action-buttons").style.display = "block"; 
    document.getElementById("name-form").style.display = "none"; 
    document.getElementById("feed-button").innerHTML = "Feed " + tamagotchi.name;
    document.getElementById("sleep-button").innerHTML = "Put " + tamagotchi.name + " down for a nap"
    document.getElementById("play-button").innerHTML = "Entertain " + tamagotchi.name;


let hungerInterval = setInterval(decreaseHungerBar, 5000);
let sleepinessInterval = setInterval(decreaseSleepinessBar, 5000);
let boredomInterval = setInterval(decreaseBoredomBar, 5000);
}

function decreaseHungerBar() {
  if(tamagotchi.hunger > 0) {
  tamagotchi.hunger -= 10;
  document.getElementById("hunger-level").style.width = tamagotchi.hunger + "%";
} else {
  clearInterval(hungerInterval);
  hungerInterval = undefined;
}
}

function decreaseSleepinessBar() {
  if(tamagotchi.sleepiness > 0) {
  tamagotchi.sleepiness -= 10;
document.getElementById("sleepiness-level").style.width = tamagotchi.sleepiness + "%";
} else {
  clearInterval(sleepinessInterval);
  sleepinessInterval = undefined;
}
}

function decreaseBoredomBar() {
  if(tamagotchi.boredom > 0) {
  tamagotchi.boredom -= 10;
  document.getElementById("boredom-level").style.width = tamagotchi.boredom + "%"
} else {
  clearInterval(boredomInterval);

  boredomInterval = undefined;
}
}

function increaseHungerBar() {
if(tamagotchi.hunger < 100) {
tamagotchi.hunger += 10;
document.getElementById("hunger-level").style.width = tamagotchi.hunger + "%"
}
}

function increaseSleepinessBar() {
    if(tamagotchi.sleepiness < 100) {
    tamagotchi.sleepiness += 10;
    document.getElementById("sleepiness-level").style.width = tamagotchi.sleepiness + "%";
    }
    }

function increaseBoredomBar() {
    if(tamagotchi.boredom < 100) {
    tamagotchi.boredom += 10;
    document.getElementById("boredom-level").style.width = tamagotchi.boredom + "%";
    }
    }

    
    document.getElementById("start-button").addEventListener("click", showNameForm);
    document.getElementById("name-form").addEventListener("submit", function(event) {
    event.preventDefault()
    createTamagotchi()
    });
    
document.getElementById("feed-button").addEventListener("click", increaseHungerBar)

document.getElementById("sleep-button").addEventListener("click", increaseSleepinessBar)

document.getElementById("play-button").addEventListener("click", increaseBoredomBar)