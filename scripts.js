const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let audio = new Audio("sounds/background.mp3")
let matches = 0;
let moves = 0;
let EASY_WIN = 4
let MEDIUM_WIN = 8
let HARD_WIN = 12





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
        matches++;
        matchSound.play();
        console.log("Cards matched! ...from isMatch")
        console.log(matches)
            // window.alert("Black Lives Matter :)");
        disableCards();
    } else {
        unflipCards();
    }
    console.log('Function was executed!')
        // this matches == 4 only works with easy mode on
        // end game, for easy mode

    // $(".easy.button.active")

    if (matches == 4) {
        clearTimeout(t);
        window.alert("Congratulations! You won! Black Lives Matter <3")
        lockBoard = true;
        audio.pause();
    }

    /* 


    the following section is supposed to stop the game depending on which button/difficulty is active 


        if (matches == EASY_WIN & $(".easy.button.active")) {
            clearTimeout(t);
            window.alert("Congratulations! You won! Black Lives Matter <3")
            lockBoard = true;
            audio.pause();
        }

        if (matches == MEDIUM_WIN & $(".medium.button.active")) {
            clearTimeout(t);
            window.alert("Congratulations! You won! Black Lives Matter <3")
            lockBoard = true;
            audio.pause();
        } 
        
        */

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

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
        // reset the matches to 0, so the stop timer condition works 
        matches = 0;
    });
})();


function gameOver() {
    flippedCard = document.getElementsByClassName(".memory-card")
    for (i = 0; i < flippedCard.length; i++) {
        window.alert("Game over baby!");
        if (flippedCard[i].style.display = true) {
            clearTimeout(t);
        }
    }
}


// add event listeners here  
cards.forEach(card => card.addEventListener('click', flipCard));


// this section is for the timer
let h1 = document.getElementsByTagName('h1')[0],
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

function easyMode() {
    let easyButton = document.getElementsByClassName("easy button active");
    jack = document.getElementsByName("Jack");
    for (i = 0; i < jack.length; i++) {
        jack[i].style.display = "none";
    }
    king = document.getElementsByName("King");
    for (i = 0; i < king.length; i++) {
        king[i].style.display = "none";
    }

    // if (matches == 4 && $(".easy.button.active")) {
    //     clearTimeout(t);
    //     window.alert("Congratulations! You won! Black Lives Matter <3")
    //     lockBoard = true;
    //     audio.pause();
    // }
}


function mediumMode() {

    jack = document.getElementsByName("Jack");

    for (i = 0; i < jack.length; i++) {
        // window.console.log(jack[i]);
        // console.log(jack[i]);
        jack[i].style.display = "initial";
    }


    king = document.getElementsByName("King");

    for (i = 0; i < king.length; i++) {
        // window.console.log(king[i]);
        // console.log(king[i]);
        king[i].style.display = "none";
    }


}


function hardMode() {

    jack = document.getElementsByName("Jack");

    for (i = 0; i < jack.length; i++) {
        // window.console.log(jack[i]);
        // console.log(jack[i]);
        jack[i].style.display = "initial";
    }

    king = document.getElementsByName("King");

    for (i = 0; i < king.length; i++) {
        // window.console.log(king[i]);
        // console.log(king[i]);
        king[i].style.display = "initial";
    }
    queen = document.getElementsByName("Queen");

    for (i = 0; i < queen.length; i++) {
        // window.console.log(queen[i]);
        // console.log(queen[i]);
        queen[i].style.display = "initial";
    }

}


function backgroundMusic() {
    let musicButton = document.querySelector('active');
    if (musicButton.classList.contains('active')) {
        audio.play();

    }
}


// maybe this is the solve? button on click, toggle active state,
// if active, music play, else, audio.pause()

// const div = document.querySelector('div');
// div.classList.toggle('show');