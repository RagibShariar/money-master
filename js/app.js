const incomeInput = document.getElementById('income');
const foodInput = document.getElementById('food');
const rentInput = document.getElementById('rent');
const clothsInput = document.getElementById('cloths');
const errorMsg = document.getElementById('error-msg');
const expensesInner = document.getElementById('expenses');
const balanceInner = document.getElementById('balance');
const savingsInput = document.getElementById('savings-input');
const savingsAmount = document.getElementById('savings-amount');
const remainingBalance = document.getElementById('remaining-balance');

function calculateCost() {
    const expensesResult = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothsInput.value);
    const expensesTotal = expensesResult + parseFloat(expenses.innerText);
    const balanceTotal = parseFloat(incomeInput.value) - expensesTotal;

    expensesInner.innerText = expensesTotal;
    balanceInner.innerText = balanceTotal;

    // validation 
    if (incomeInput.value == '' || foodInput.value == '' || rentInput.value == '' || clothsInput == '') {
        errorMsg.innerText = "❌ input field can't be empty. Please reload the page";
        expensesInner.innerText = 0;
        balanceInner.innerText = 0;
    }
    else if (incomeInput.value < 0 || foodInput.value < 0 || rentInput.value < 0 || clothsInput.value < 0) {
        errorMsg.innerText = "❌ input can't be negative. Please reload the page";
        expensesInner.innerText = 0;
        balanceInner.innerText = 0;
    }
    else if (expensesTotal > parseFloat(incomeInput.value)) {
        errorMsg.innerText = "❌ You can't expense more than your income! Please reload the page";
        expensesInner.innerText = 0;
        balanceInner.innerText = 0;
    }
};
function calculateSavings(){
    const savingsPercentage = parseFloat(savingsInput.value) / 100;
    const savingsTotal = parseFloat(incomeInput.value) * savingsPercentage;
    const balanceTotalRemain = parseFloat(incomeInput.value) - (savingsTotal + parseFloat(expenses.innerText));
    
    savingsAmount.innerText = savingsTotal;
    remainingBalance.innerText = balanceTotalRemain;

    // validation
    if (parseFloat(savingsAmount.innerText) > parseFloat(balance.innerText)) {
        savingsAmount.innerText = "Not have enough money for saving :(";
        remainingBalance.innerText = 0;
    }
    if (savingsInput.value =='') {
        savingsAmount.innerText = 'Enter how much you want to save';
        remainingBalance.innerText = 0;
    }
};