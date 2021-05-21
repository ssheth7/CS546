let myForm = document.getElementById('numberForm');
let myUl = document.getElementById('results');
let textInput = document.getElementById('numberInput');
let errorDiv = document.getElementById('error');
if (myForm) {
    textInput.focus();
    myForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if (textInput.value.trim()) {
            errorDiv.hidden = true;
            let li = document.createElement('li');
            let fibonacciNumber = fibonacci(textInput.value);
            li.innerHTML = "The Fibonacci of " + textInput.value + " is " + fibonacciNumber;
            li.className = (isPrime(fibonacciNumber)) ? "is-prime" : "not-prime";
            myUl.appendChild(li);
            myForm.reset();
            textInput.focus();
        } else {
            textInput.value = '';
            errorDiv.hidden = false;
            errorDiv.innerHTML = 'You must enter a value';
            textInput.focus();
        }
    });
}
const fibonacci = (num) => {
    num = Number(num);
    if (num < 1) {
        return 0;
    }
    if (num == 2) {
        return num;
    }
    let sequence = new Array(num + 1);
    sequence[0] = 0;
    sequence[1] = 1;
    for (let i = 2; i < sequence.length; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence[num];
};

const isPrime = (num) => {
    num = Number(num);
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};