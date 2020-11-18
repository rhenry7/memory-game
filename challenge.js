let king = document.getElementById("King");
let queen = document.getElementById("Queen");
let jack = document.getElementById("Jack");
let easyButton = document.getElementById("Easy");
let mediumButton = document.getElementById("Medium");
let hardButton = document.getElementById("Hard");

easyButton.addEventListener("click", function() {
    jack.style.display = "none";
    king.style.display = "none";
})

mediumButton.addEventListener("click", function() {
    king.style.display = "none";
})

hardButton.addEventListener("click", function() {
    // empty .. should display everything 
    jack.style.display = "initial";
    king.style.display = "initial";
    queen.style.display = "initial";
})