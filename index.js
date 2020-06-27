var gameRunningStatus = false;
var sequence = ["q","w","a","s"];
var userInput = [];
var score = 0;

function isGameRunning (gameRunningStatus){
    if (gameRunningStatus == false) {
        $("h1").text("Press Space To Start!")
    } else {
        $("h1").text("Game ON!")
    }    


};


$("button").click(function(){
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonPressedAnimation(buttonInnerHTML);
    
});

$(document).keydown(function(event){
    console.log(event);
    if (event.key == " "){
        playGame();
        console.log("play game works");
    } else if (event.key == "q" || event.key == "w" || event.key == "a" || event.key == "s"){
        makeSound(event.key);
        buttonPressedAnimation(event.key);
    }
    
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
            playSequence()
        console.log(key);
        console.log("defaulted")
        break;
    }
}

function playGame(){
    
    gameRunningStatus = true;
    isGameRunning(gameRunningStatus);
    sequenceGenerator(gameRunningStatus);
    gameIsRunning(gameRunningStatus);
}

function sequenceGenerator(){
    
    var score = sequence.length;
    
    if (gameRunningStatus){
        sequence.push(randomizer(Math.floor(Math.random()*4)));
        console.log(sequence);
    };
    
};

function randomizer(number){
    switch (number) {
        case 0:
        return "q";
        break;
        
        case 1:
        return "w";
        break;
        
        case 2: 
        return "a";
        break;
        
        case 3:
        return "s";
        break;
        
        default:
        break;
    }
}

function buttonPressedAnimation (currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    // stops errors for any button pressed without class   
    if (activeButton.classList.contains("q") || activeButton.classList.contains("w") || activeButton.classList.contains("a") || activeButton.classList.contains("s")) {
        activeButton.classList.add("pressed"); 
        setTimeout(function(){
            activeButton.classList.remove("pressed");
        }, 100);
    } else {
        console.log("not a class button")
    } 
    
}

function gameIsRunning (gameRunningStatus){
    score = sequence.length;
    // while (gameRunningStatus){
    //     score = sequence.length
    //     $("score").text("Score: " + score)
    // };
}

function playSequence (){
    for (var i = 0; i <= sequence.length; i++){
        console.log(i);
        makeSound(i);
        buttonPressedAnimation(i);
    }
}
