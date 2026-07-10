// script.js

let receipts = 0;

const receiptCount = document.querySelector(".card h2");

function addReceipt() {
    receipts++;
    receiptCount.textContent = receipts;
}

document.querySelector(".add").addEventListener("click", addReceipt);
