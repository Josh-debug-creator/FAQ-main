// Get all images
const images = document.querySelectorAll("img");

// Get all answers
const answers = document.querySelectorAll(".answer");

// Get all questions
const questions = document.getElementsByClassName("question");

// Get all plus icons
const plusIcons = document.querySelectorAll(".btn-plus");

// Get all minus icons
const minusIcons = document.querySelectorAll(".btn-minus");

// Function to hide answer and toggle icons
function hideAnswer(index) {
    answers[index].classList.add("display-none");
    minusIcons[index].classList.add("display-none");
    plusIcons[index].classList.remove("display-none");
}

// Function to show answer and toggle icons
function showAnswer(index) {
    answers[index].classList.remove("display-none");
    minusIcons[index].classList.remove("display-none");
    plusIcons[index].classList.add("display-none");
}

// Attach event listeners to plus icons
plusIcons.forEach(function(plusIcon, index) {
    plusIcon.addEventListener("click", function() {
        showAnswer(index);
    });
});

// Attach event listeners to minus icons
minusIcons.forEach(function(minusIcon, index) {
    minusIcon.addEventListener("click", function() {
        hideAnswer(index);
    });
});
