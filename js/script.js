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
    const inputDeposit = document.getElementById('input_deposit').value;
    const inputDepositNumber = parseFloat(inputDeposit);
    // update span innerText
    const dipositAmount = document.getElementById('diposit_amount').innerText;
    const depositAmountNumber = parseFloat(dipositAmount);


    // total deposit 
    const totalDepositAmount = inputDepositNumber + depositAmountNumber

    //update span finished here
    document.getElementById('diposit_amount').innerText = totalDepositAmount;
    console.log('update span = ',
        totalDepositAmount)

})