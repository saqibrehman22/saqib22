function rollDice() {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1; 
    let randomDiceImage = "dice" + randomNumber1 + ".png"; 
    let randomImageSource = "Images/" + randomDiceImage; 
    let image1 = document.getElementById("img");
    image1.src = randomImageSource;
}