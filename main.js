const squares = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    });
    let randomSquarePosition = squares[Math.floor(Math.random() * 9)];
    randomSquarePosition.classList.add('mole');

    //assign the id of the randomSquarePosition to hitPosition for us to use it later
    hitPosition = randomSquarePosition.id;
};

squares.forEach(square => {
    square.addEventListener('click', () => {
        if (square.id === hitPosition) {
            result++;
            score.textContent = result;
        }
    })
});

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 1000)
}

moveMole();

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime === 0) {
        clearInterval(timerId);
        alert('The GAME is OVER. Your score is: ' + result);
    }
}

let timerId = setInterval(countDown, 1000);