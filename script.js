// Variable declaration and conditional

let username = '';

document.getElementById('greetBtn').addEventListener('click', () => {
    username = document.getElementById('nameInput').value;

    if (username.trim() === ''){
        document.getElementById('greetingOutput').textContent = 'Please enter your name.'
    }else{
        document.getElementById('greetingOutput').textContent = `Hello, ${username}!`;
    }
})

// Functions - Calculate total

function multiply(a, b){
    return a * b
}

console.log(multiply(3, 4))

// Loops
// For loop
document.getElementById('showNumbersBtn').addEventListener('click', () => {
    const list = document.getElementById('numberList');
    list.innerHTML = '' ;

    for (let i=1; i<=5; i++){
        const li = document.createElement('li');
        li.textContent = `Number ${i}`;
        list.appendChild(li);
    }
});

// while loop
let countdown = 0;
while (countdown > 0){
    console.log('Countdown:', countdown)
    countdown --
};


// Toggle
let myButton = document.getElementById('toggleTextBtn')
myButton.addEventListener('click', () => {
    const text = document.getElementById('toggleText')
    if (text.style.display === 'none' || text.style.display === '') {
        text.style.display = 'block';
    } else {
        text.style.display = 'none';
    }
})