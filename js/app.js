let tamagotchi;
let hungerLevel = 100;
let sleepinessLevel = 100;
let boredomLevel = 100;

class Tamagotchi {
    constructor(name) {
        this.name = name;
        this.hunger = 0;
        this.sleepiness = 0;
        this.boredom = 0;
        this.age = 0;
    }
}

document.getElementById("start-button").addEventListener("click", function() {
    document.getElementById("name-form").style.display = "block";
});

function createTamagotchi() {
    let name = document.getElementById("name-input").value;
    tamagotchi = new Tamagotchi(name);
    console.log(tamagotchi);  
    document.getElementById("hunger-bar").classList.remove("hidden");
    document.getElementById("sleepiness-bar").classList.remove("hidden");
    document.getElementById("boredom-bar").classList.remove("hidden");

    let hungerInterval = setInterval(decreaseHungerBar, 5000);
    let sleepinessInterval = setInterval(decreaseSleepinessBar, 5000);
    let boredomInterval = setInterval(decreaseBoredomBar, 5000);
}

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
