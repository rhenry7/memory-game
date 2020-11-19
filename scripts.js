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
        console.log("Cards matched!")
        window.alert("Black Lives Matter :)");
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

// function stopTimer() {
//     cards.forEach(card => {
//                 let isMatch = firstCard.dataset.name === secondCard.dataset.name;
//                 if (card === isMatch) {
//                     clearTimeout(t);
//                 }
//             }




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
arr = document.getElementsByName("Jack");

for (i = 0; i < arr.length; i++) {
    // window.console.log(arr[i]);
    arr[i].style.display = "none"
}

function easyMode() {
    jack = document.getElementsByName("Jack");

    for (i = 0; i < jack.length; i++) {
        // window.console.log(jack[i]);
        // console.log(jack[i]);
        jack[i].style.display = "none";
    }

    king = document.getElementsByName("King");

    for (i = 0; i < king.length; i++) {
        // window.console.log(king[i]);
        // console.log(king[i]);
        king[i].style.display = "none";
    }
    console.log("button clicked")
    $('.button').click(function() {
        $(this).toggleClass('active');
    });

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

    $('.button').click(function() {
        $(this).toggleClass('active');
        console.log("button clicked")
    });
}

$('.buttons').on('click', '.button', function() {
    $(this).addClass('active').siblings().removeClass('active');
});

$('.button').click(function() {
    $(this).toggleClass('active');
    console.log("button clicked")
});

document.getElementById("buttons")
    .addEventListener("click", function() {
        console.log("button clicked!");
        if (this.classList.contains("active")) {
            this.classList.remove("active");
        } else this.classList.add("active");
    });