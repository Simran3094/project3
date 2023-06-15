var buttonClicked = document.querySelectorAll(".drum").length;

for(var i = 0; i < buttonClicked; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       
        var buttonInnerHTML = this.innerHTML;

        keyPressed(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

document.addEventListener("keypress", function(event){

    keyPressed(event.key);
    buttonAnimation(event.key);
});

function keyPressed(key){
    switch (key) {
        case "q":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

        case "w":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

        case "e":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

        case "r":
        var tom4 = new Audio("sounds/tom-1.mp3");
        tom4.play();  
        break;   

        case "t":
        var tom5 = new Audio("sounds/tom-4.mp3");
        tom5.play();
        break;

        case "y":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

        case "u":
        var kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

        case "i":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

    default:
        console.log(buttonInnerHTML);
}
}

function buttonAnimation(currentKey){

 var currentButton = document.querySelector("." +currentKey);
 currentButton.classList.add("pressed");

 setTimeout(function(){
    currentButton.classList.remove("pressed");
 }, 100);

}



