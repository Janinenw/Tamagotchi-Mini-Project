
function showInstructions() {
    alert("Congratulations.  Someone tama gotcha a cute lil surprise!  Make sure you keep it fed, well rested and entertained.  Oh and btw, it only eats blood. ");
}

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
    document.getElementById("instruction-button").style.display ="none"
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
    document.getElementById("sleep-button").addEventListener("click", restoreSleep);
    document.getElementById("play-button").innerHTML = "Entertain " + tamagotchi.name;
    document.getElementById("tamagotchi-image").style.display ="block"
    displayAge();
    
    document.getElementById("sleep-button").addEventListener("click", restoreSleep);
}

let ageInterval = setInterval(increaseAge, 1000)
function increaseAge() {
    if (tamagotchi.hunger <= 0 || tamagotchi.sleepiness <= 0 || tamagotchi.boredom <= 0) {
        clearInterval(ageInterval)
    } else {
        tamagotchi.age++;
        displayAge();
    }
}


    function displayAge() {
        let age = tamagotchi.age;
        if (age === 1) {
          document.getElementById("age-display").innerHTML = tamagotchi.name + " is " + age + " year old";
        } else {
            document.getElementById("age-display").innerHTML = tamagotchi.name + " is " + age + " years old";
          }
      }

      
 
      let ageCheckInterval = setInterval(checkAge, 1000);

      function checkAge() {
          if (tamagotchi.age === 3) {
              alert("My how time flies! " + tamagotchi.name + " is growing so quickly!");
              changeImage();
          } else if (tamagotchi.age === 20) {
              alert("Remember the good old days when " + tamagotchi.name + " drank blood straight from the bottle? They grow up so fast");
              changeImageTwo();
          } else if (tamagotchi.age === 30) {
              alert("Congratulations! You won the game! And also created a monster");
              changeImageThree();
          }
      }
      
      function changeImage() {
          if (tamagotchi.age === 3) {
              document.getElementById("tamagotchi-image").style.display = "none";
              document.getElementById("tamagotchi-image-two").style.display = "block";
          }
      }
      
      function changeImageTwo() {
          if (tamagotchi.age === 20) {
              document.getElementById("tamagotchi-image-two").style.display = "none";
              document.getElementById("tamagotchi-image-three").style.display = "block";
          }
      }
      
      function changeImageThree() {
          if (tamagotchi.age === 30) {
              document.getElementById("tamagotchi-image-three").style.display = "none";
              document.getElementById("tamagotchi-image-four").style.display = "block";
          }
      }
      

  let hungerInterval = setInterval(decreaseHungerBar, 2000);
  let sleepinessInterval = setInterval(decreaseSleepinessBar, 2000);
  let boredomInterval = setInterval(decreaseBoredomBar, 2000);
  
  function decreaseHungerBar() {
    if(tamagotchi.hunger > 0 && tamagotchi.boredom > 0 && tamagotchi.sleepiness > 0) {
        tamagotchi.hunger -= 10;
        document.getElementById("hunger-level").style.width = tamagotchi.hunger + "%";
    } else {
        endGame();
    }
}
  
 

  function decreaseSleepinessBar() {
      if(tamagotchi.sleepiness > 0 && tamagotchi.boredom > 0 && tamagotchi.hunger > 0 ) {
          tamagotchi.sleepiness -= 10;
          document.getElementById("sleepiness-level").style.width = tamagotchi.sleepiness + "%";
      } else {
          endGame()
      }
  }
  
  function decreaseBoredomBar() {
    if(tamagotchi.boredom > 0 && tamagotchi.sleepiness > 0 && tamagotchi.hunger > 0 ) {
    tamagotchi.boredom -= 10;
    document.getElementById("boredom-level").style.width = tamagotchi.boredom + "%"
  } else {
   endGame()
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


    function restoreSleep() {
        tamagotchi.sleepiness = 100;
        document.getElementById("sleepiness-level").style.width = tamagotchi.sleepiness + "%";
        let timeout = setTimeout(function() {
        document.getElementById("feed-button").disabled = false;
        document.getElementById("play-button").disabled = false;
        document.getElementById("sleep-button").disabled = false;
        }, 5000);
        document.getElementById("feed-button").disabled = true;
        document.getElementById("play-button").disabled = true;
        document.getElementById("sleep-button").disabled = true;
        clearInterval(sleepinessInterval);
        sleepinessInterval = setInterval(decreaseSleepinessBar, 2000); {
            document.body.style.filter = "brightness(0.5)";
            setTimeout(function(){
                document.body.style.filter = "brightness(1)";
            }, 5000);
        }
        }
        
     function endGame() {
        clearInterval(hungerInterval);
        clearInterval(sleepinessInterval);
        clearInterval(boredomInterval);
        clearInterval(ageInterval);
        document.getElementById("hunger-bar").classList.add("hidden");
        document.getElementById("sleepiness-bar").classList.add("hidden");
        document.getElementById("boredom-bar").classList.add("hidden");
        document.getElementById("action-buttons").style.display = "none";
        document.getElementById("start-button").style.display = "block";
        document.getElementById("instruction-button").style.display = "block";
        tamagotchi = null;
        
            alert("Your Tamagotchi has passed away.");
        }

