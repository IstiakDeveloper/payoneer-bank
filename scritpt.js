//login button click handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function(){
    const loginArea = document.getElementById("login-area");

    loginArea.style.display = "none";

    const transectionArea = document.getElementById("transection-area");
    transectionArea.style.display = "block";
});



// Deposit button
const depostitBtn = document.getElementById("addDeposit");
depostitBtn.addEventListener("click", function(){
   const depositNumber = getInputNumber("depositAmount");



    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

   document.getElementById("depositAmount").value = "";


});
// Withdraw Button
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
    const withdrawNumber = getInputNumber("withdrawAmount");
});

function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + depositNumber;

    document.getElementById(id).innerText = totalAmount;
}