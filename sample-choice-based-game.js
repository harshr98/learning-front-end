const prompt = require("prompt-sync")();
const name = prompt("What is your name Mrs./Mrs.? ");
console.log("Hello", name, "Welcome to our Game!");

const should_we_play = prompt("Do you want to play? ").toLowerCase();

if (should_we_play === "yes") {
    console.log("Okay Let's play", name, "!");

    // Game Logic
    const left_or_right = prompt("So You go to a hill, do you want to go to the left or the right direction? ").toLowerCase();
    if (left_or_right === "left") {
        console.log("You go left and see a bridge to the other side of the valley...");
        const cross = prompt("Do you want to cross this bridge and go to the other hill? the Valley is deep! ").toLowerCase();
        if (cross === "yes") {
            console.log("You crossed the bridge, but the bridge was old and it broke in the middle makeing you fall deep into the valley. Game over");
        } else {
            console.log("Good choice... you are at home, safe and sound!");
        }
    } else {
        console.log("You go right and fall off to another valley!", name);
    }
} else if (should_we_play === "no") {
    console.log("Sad to see you go", name, "!");
} else {
    console.log("Why like dis? huh? huh?", name, "Try again! >:(");
}

