const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

// main flip function
function flipCard() {
    //toggle to change the state, change the side of the card
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle('flip');


    if (!hasFlippedCard) {
        // first click 
        hasFlippedCard = true;
        firstCard = this;
        let flip = new Audio('sounds/flip.wav');
        flip.play();
        return;
    }
    // second click 
    hasFlippedCard = false;
    let flip = new Audio('sounds/flip.wav');
    flip.play();
    secondCard = this;

    checkForMatch();
}


function checkForMatch() {
    // check if cards match 

    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    // isMatch ? disableCards(), document.getElementById('success').play();: unflipCards();

    if (isMatch) {
        let matchSound = new Audio('sounds/success.wav');
        matchSound.play();
        disableCards();
    } else {
        unflipCards();
    }

    console.log('Function was executed!')
}

function disableCards() {
    // remove ability to flip
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
    // stopTimer();
}

function unflipCards() {
    lockBoard = true;
    let flip = new Audio('sounds/flip.wav');
    flip.play();
    // not a match 
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        lockBoard = false;
    }, 1500);
}


function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function stopTimer() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    if (isMatch.length === 12) {
        clearTimeout(t);
    }
}


(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();


// add event listeners here  
cards.forEach(card => card.addEventListener('click', flipCard));

// this section is for the timer

var h1 = document.getElementsByTagName('h1')[0],
    start = document.getElementById('start'),
    stop = document.getElementById('stop'),
    clear = document.getElementById('clear'),
    seconds = 0,
    minutes = 0,
    hours = 0,
    t;

function add() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    h1.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);

    timer();
}

function timer() {
    t = setTimeout(add, 1000);
}
timer();


/* Start button */
// start.onclick = timer;

/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
}

// Set the difficulty , Easy, Medium, Hard


let easyButton = document.getElementById("Easy");
let mediumButton = document.getElementById("Medium");
let hardButton = document.getElementById("Hard");


// easyButton.addEventListener("click", function() {
//     jack.style.display = "none";
//     king.style.display = "none";
// });

// mediumButton.addEventListener("click", function() {
//     king.style.display = "none";
// });

// hardButton.addEventListener("click", function() {
//     // empty .. should display everything 
//     jack.style.display = "initial";
//     king.style.display = "initial";
//     queen.style.display = "initial";
// });

function easyMode() {
    let jack = document.getElementsByName("King");
    for (var i = 0; i < jack.length; i++) {
        jack[i].style.display = "none"; // depending on what you're doing
    }
}


function easy() {
    document.getElements("King").style.display = "none";
}