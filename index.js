// Errors
let billError = document.getElementById('b-error-message');
let peopleError = document.getElementById('p-error-message');

// Inputs
let billTotal = document.getElementById('bill-total');
let peopleTotal = document.getElementById('people-total');
let customTip = document.getElementById('custom-tip');

// Buttons
let button = document.querySelectorAll('.tip-btn');
let resetButton = document.querySelector('.reset');
let current = document.querySelector('.current');
let defaultButton = document.querySelector('.default');

// Totals
let tipTotal = document.getElementById('tip-total');
let tipAmount = document.getElementById('tip-amount');


// Catch number of people or bill total === 0
function isError(value, element) {

    if(Number(value) <= 0) {

        element.textContent = "Number > 0";
        return false;

    }

    element.textContent = "";
    return true;
};

// Button event listener / validation
button.forEach((tipPercentage) => {

    tipPercentage.addEventListener('click', () => {

        let percent = Number(tipPercentage.textContent.replace('%', "")) / 100;

        // Set current button to button clicked
        current.classList.remove('current');
        tipPercentage.classList.add('current');
        current = tipPercentage;

        if(isError(billTotal.value, billError) && isError(peopleTotal.value, peopleError)) {

            getResult(percent);

        }

    });

});

function getResult(percentage) {

    let bill = Number(billTotal.value);
    let people = Number(peopleTotal.value);
    

    let tip = ((bill * percentage) / people).toFixed(2);

    let totalAmount = ((bill / people) + Number(tip)).toFixed(2);
    
    tipAmount.textContent = `$${tip}`;
    tipTotal.textContent = `$${totalAmount}`;


    return;
};

resetButton.addEventListener('click', () => {

    tipAmount.textContent = "$0.00";
    tipTotal.textContent = "$0.00";

    billError.textContent = "";
    peopleError.textContent = "";

    billTotal.value = '';
    peopleTotal.value = '';

    current.classList.remove('current');
    defaultButton.classList.add('current');
    current = defaultButton;

})