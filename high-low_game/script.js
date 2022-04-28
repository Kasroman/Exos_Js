const input = document.querySelector('#input');
const submitBtn = document.querySelector('#submit-btn');
const restartBtn = document.querySelector('#restart-btn');
const displayContainer = document.querySelector('#display-container');
const body = document.querySelector('body');

body.style.background = '#9AC6FF';


let number;

(function getRandomNumber(){
    number = Math.floor(Math.random() * 1000);
})();

function getRgbColor(diff){  
    value = Math.floor((diff / 1000) * 255);
    return `rgb(${255 - value}, 0, ${0 + value})`;
}

function compareNumbers(inputNumber) {
    if(inputNumber === number){
        return [`Bravo ! Le nombre était bien ${number} !`, 'green'];
    }else if(inputNumber > number && inputNumber <= 1000){
        return ['C\'est trop grand !', getRgbColor(inputNumber - number)];
    }else if(inputNumber < number && inputNumber >= 0){
        return ['C\'est trop petit !', getRgbColor(number - inputNumber)];
    }else{
        return ['Rentrez un NOMBRE entre 0 et 1000 svp !!!', 'rgb(0 ,0 ,0 )'];
    }
}

function display(){
    let arrayResults = compareNumbers(parseInt(input.value));
    let displayMsg = document.createElement('p');
    displayMsg.classList.add('fw-bold','ms-3','me-3', 'text-center');
    displayMsg.setAttribute('style', `color: ${arrayResults[1]}`);
    displayMsg.textContent = arrayResults[0];
    displayMsg.classList.add(arrayResults[2]);
    displayContainer.prepend(displayMsg);

    body.style.background = arrayResults[1];
}

function restart(){
    location.reload();
}

submitBtn.addEventListener('click', display);
restartBtn.addEventListener('click', restart);

