var gameRunning = false;


$("button").click(function(){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    
});

$(document).keydown(function(event){
    console.log(event.key);
    makeSound(event.key);
});


function makeSound(key){
    switch (key) {
        case "q":
            var greenSound = new Audio('sounds/green.mp3');
            greenSound.play();        
            break;

        case "w":
            var redSound = new Audio('sounds/red.mp3');
            redSound.play();        
            break;

        case "a":
            var yellowSound = new Audio('sounds/yellow.mp3');
            yellowSound.play();        
            break;    
    
         case "s":
             var blueSound = new Audio('sounds/blue.mp3');
             blueSound.play();
             break;

        default:
            console.log(key);
            console.log("defaulted")
            break;
    }
}

function playGame(){
var score = 0;
var sequence = [];
}