const incrementButton = document.getElementById('incrementButton');
const counter = document.getElementById('counter');

let count = 0;

incrementButton.addEventListener('click', () => {
    count++;
    counter.textContent = count;
});