document.getElementById('Deposit-button').addEventListener('click',function (){
    const depositInputField = document.getElementById('Diposit-input');

    const depositText = depositInputField.value
    // console.log(depositText);

    const priviousDipositeTotal = document.getElementById('deposite-total');
    // console.log(priviousDipositeTotal);

    const totalDeposit = parseFloat(depositInputField) + parseFloat(depositText)

    priviousDipositeTotal.innerText = depositText;

    // Clear the input Fild
    depositInputField.value ='';

})

// Widhdrow proses
document.getElementById('Withdrow-button').addEventListener('click',function (){
    const withdrowInputField = document.getElementById('Withdrow-input');

    const withdrowText = withdrowInputField.value
    // console.log(withdrowText);

    const priviousWithdrowTotal = document.getElementById('withdrow-total');
    // console.log(priviousWithdrowTotal);

    const totalWithdrow = parseFloat(withdrowInputField) + parseFloat(withdrowText)

    priviousWithdrowTotal.innerText = withdrowText;

    // Clear the input Fild
    withdrowInputField.value ='';

})

document.getElementById('Balance-total').addEventListener('click',function (){
    const balanceTotalField = document.getElementById('Balance-total');

    const balanceText = balanceTotalField.value
    // console.log(balanceText);

    const priviousBalanceTotal = document.getElementById('Balance-total');
    // console.log(priviousBalanceTotal);

    const totalBalance = parseFloat(balanceTotalField) + parseFloat(balanceText)

    priviousBalanceTotal.innerText = depositText;

    // Clear the input Fild
    balanceTotalField.value ='';

})