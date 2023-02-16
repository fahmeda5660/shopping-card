// phone
function updatePhoneNum(isIncrease){
    const phoneNumberField = document.getElementById('phone-num');
    const numberPhoneFieldString = phoneNumberField.value;
    const PrevPhoneNumber = parseInt(numberPhoneFieldString);
    let newPhoneNumber;
    if(isIncrease){
        newPhoneNumber = PrevPhoneNumber+1;
    }else{
        newPhoneNumber = PrevPhoneNumber-1;
    }
    phoneNumberField.value = newPhoneNumber;
    return newPhoneNumber;
}
function updatePhoneTotal(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber*1219;
    console.log(phoneTotalPrice);
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
// common function start
function getTextElementValueId(ElementId){
    const totalElement = document.getElementById(ElementId);
    const currentTotalString = totalElement.innerText;
    const currentTotal = parseInt(currentTotalString);
    return currentTotal;
}
function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal = getTextElementValueId('phone-total');
    const currentCoverTotal = getTextElementValueId('cover-total');
    const currentSubTotal = currentPhoneTotal+currentCoverTotal;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText=currentSubTotal;

    // Calculate Tax
    const taxString = (currentSubTotal*.1 ).toFixed(2);
    const taxAmount = parseFloat(taxString);
    const tax = document.getElementById('tax-amount');
    tax.innerText=taxAmount;

    // final
    const finalAmount = currentSubTotal+taxAmount;
    const final = document.getElementById('final-total');
    final.innerText = finalAmount;




}
// common function end
document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNum(true);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();
});
document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneNumber = updatePhoneNum(false);
    updatePhoneTotal(newPhoneNumber);
    calculateSubTotal();
});
// Cover
function updateCoverNum(isIncrease){
    const coverNumberField = document.getElementById('cover-num');
    const numberCoverFieldString = coverNumberField.value;
    const PrevCoverNumber = parseInt(numberCoverFieldString);
    let newCoverNumber;
    if(isIncrease){
        newCoverNumber = PrevCoverNumber+1;
    }else{
        newCoverNumber = PrevCoverNumber-1;
    }
    coverNumberField.value = newCoverNumber;
    return newCoverNumber;
}
function updateCaseTotal(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber*59;
    console.log(phoneTotalPrice);
    const phoneTotalElement = document.getElementById('cover-total');
    phoneTotalElement.innerText = phoneTotalPrice;

}
document.getElementById('btn-cover-plus').addEventListener('click',function(){
    const newCoverNumber = updateCoverNum(true);
    updateCaseTotal(newCoverNumber);
        calculateSubTotal();

});
document.getElementById('btn-cover-minus').addEventListener('click',function(){
    const newCoverNumber = updateCoverNum(false);
    updateCaseTotal(newCoverNumber);
        calculateSubTotal();
});

// document.getElementById('btn-phone-minus').addEventListener('click',function(){
//     const phoneNumberField = document.getElementById('phone-num');
//     const numberFieldString = phoneNumberField.value;
//     let number = parseInt(numberFieldString);
//     number = number-1;
//     phoneNumberField.value=number;
//     console.log(number);
// })
// document.getElementById('btn-phone-plus').addEventListener('click',function(){
//     const phoneNumberField = document.getElementById('phone-num');
//     const numberFieldString = phoneNumberField.value;
//     let number = parseInt(numberFieldString);
//     number = number+1;
//     phoneNumberField.value=number;
//     console.log(number);
// })
// document.getElementById('btn-cover-minus').addEventListener('click',function(){
//     const coverNumberField = document.getElementById('cover-num');
//     const numberFieldString = coverNumberField.value;
//     let number = parseInt(numberFieldString);
//     number = number-1;
//     coverNumberField.value=number;
//     console.log(number);
// })
// document.getElementById('btn-cover-plus').addEventListener('click',function(){
//     const coverNumberField = document.getElementById('cover-num');
//     const numberFieldString = coverNumberField.value;
//     let number = parseInt(numberFieldString);
//     number = number+1;
//     coverNumberField.value=number;
//     console.log(number);
// })
