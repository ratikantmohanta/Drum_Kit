// Basic syntax of  event listner
// addEventListener(typeOfEvent, callback) 

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        makeSound(this.innerHTML);
    });
}

document.addEventListener("keydown", function (event) {

    makeSound(event.key);
});

function makeSound(input) {
    switch (input) {
        case "w":
            buttonAnimation(input);
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.loop = false;
            tom1.play();
            break;

        case "a":
            buttonAnimation(input);
            let tom2 = new Audio('sounds/tom-2.mp3');
            tom2.loop = false;
            tom2.play();
            break;

        case "s":
            buttonAnimation(input);
            let tom3 = new Audio('sounds/tom-3.mp3');
            tom3.loop = false;
            tom3.play();
            break;

        case "d":
            buttonAnimation(input);
            let tom4 = new Audio('sounds/tom-4.mp3');
            tom4.loop = false;
            tom4.play();
            break;

        case "j":
            buttonAnimation(input);
            var snare = new Audio('sounds/snare.mp3');
            snare.loop = false;
            snare.play();
            break;

        case "k":
            buttonAnimation(input);
            let crash = new Audio('sounds/crash.mp3');
            crash.loop = false;
            crash.play();
            break;

        case "l":
            buttonAnimation(input);
            let kick = new Audio('sounds/kick-bass.mp3');
            kick.loop = false;
            kick.play();
            break;

        default:
            
            break;
    }

}

function buttonAnimation(key) {
    document.querySelector("." + key).classList.add("pressed");

    setTimeout(function () {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
