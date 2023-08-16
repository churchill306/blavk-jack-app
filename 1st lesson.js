let player = {
    Name: "churchill",
    Chips:  "N1,000"
}
let cards = []
let sum = 0;
let message = ""
let hasBlackJack = false;
let isAlive = true;

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")


playerEl.textContent = player.Name + ": " + player.Chips

function getrandomCard (){
    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10 
    }else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getrandomCard()
    let secondCard = getrandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){

    sumEl.textContent = "sum: " + sum;
    cardsEl.textContent = "cards: " 
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    if (sum < 21){
        message = "Do you want to take another card";
    }
    else if (sum === 21){
        message = "You've got black jacked!";
        hasBlackJack = true;
    }
    else {
        message = "You have lost the game";
        isAlive = false;
    }
    
    messageEl.textContent = message;

}


function newCard (){
     //console.log("Drawing a new card from the deck!")
     if(isAlive === true && hasBlackJack === false){
    
     
     let card = getrandomCard();
     
     sum += card;
     cards.push(card)
     renderGame()
     }
}