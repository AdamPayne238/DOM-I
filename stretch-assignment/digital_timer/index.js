const start = document.createElement('button');
start.textContent = "start";
document.querySelector('body').appendChild(start);

let time = 0;
const maxTime = 3000;
const secondTens = document.querySelector('#secondTens'),
      secondOnes = document.querySelector('#secondOnes'),
      msHundreds = document.querySelector('#msHundreds'),
      msTens = document.querySelector('msTens'),
      digits = document.querySelectorAll('.digits');

start.addEventListener('click', event => {
      digits.forEach(digit => digit.style.color = null);
      time = 0;
      start.disabled = true;
    const timerInterval = setInterval(() => {
        time += 10;
        console.log(time);
        msTens.textContent = (time / 10) % 10;
        msHundreds.textContent = Math.floor(time / 10) % 10;
        secondOnes.textContent = Math.floor(time / 100) % 10;
        secondTens.textcontent = Math.floor(time / 1000) % 10;
        if (time >= 10){
            clearInterval(timerInterval);
            digits.forEach(digit => digit.style.color = "red");
            start.disabled = false;
        // }else{
        //     return false;
        }
    }, 10);
});