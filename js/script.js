// login event listern add
const transictionArea = document.getElementById('transiction_area');
transictionArea.style.display = 'none';

const loginButton = document.getElementById('login_btn');

loginButton.addEventListener('click', function() {
    const loginArea = document.getElementById('login_area');
    loginArea.style.display = 'none'
    transictionArea.style.display = 'block'
})

// use for diposit

const depositBtn = document.getElementById('deposit_btn');
depositBtn.addEventListener('click', function() {

    const inputDepositNumber = getInput('input_deposit')

    document.getElementById('input_deposit').value = ''

    // update diposit balance
    spanUpdate('diposit_amount', inputDepositNumber)
        // update currentBlance
    spanUpdate('current_balance', inputDepositNumber)
})

function spanUpdate(id, inputNumber) {
    const getSpanValue = document.getElementById(id).innerText;
    const getSpanNumber = parseFloat(getSpanValue);

    const currentTotal = getSpanNumber + inputNumber;

    document.getElementById(id).innerText = currentTotal;
}

function getInput(id) {
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue);
    return inputValueNumber;
}


//start Withdraw btn enventListener

const withdrawBtn = document.getElementById('withdraw_btn');
withdrawBtn.addEventListener('click', function() {

    const withDrawNumber = getInput('input_withdraw')
    spanUpdate('withdraw_amount', withDrawNumber);
    document.getElementById('input_withdraw').value = ''

    spanUpdate('current_balance', -1 * withDrawNumber)

})