var botones = document.querySelectorAll(".drum")
 
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", playSound)
}
 
document.addEventListener("keydown", playSound)
 
function playSound(e){
    switch (this.innerHTML || e.key) {
        case "w":
            new Audio('sounds/tom-1.mp3').play();
            break;
        case "a":
            new Audio('sounds/tom-2.mp3').play();
            break;
        case "s":
            new Audio('sounds/tom-3.mp3').play();
            break;
        case "d":
            new Audio('sounds/tom-4.mp3').play();
            break;
        case "j":
            new Audio('sounds/snare.mp3').play();
            break;
        case "k":
            new Audio('sounds/crash.mp3').play();
            break;
        case "l":
            new Audio('sounds/kick-bass.mp3').play();
            break;
        default:
            console.log(e.key)
            break;
    }
}