// script.js

let data = JSON.parse(localStorage.getItem("dashboard")) || {
    newReceipts: 0,
    approved: 0,
    rejected: 0,
    sales: 0,
    profit: 0
};

const cards = document.querySelectorAll(".card h2");

function updateDashboard() {
    cards[0].textContent = data.newReceipts;
    cards[1].textContent = data.rejected;
    cards[2].textContent = data.approved;
    cards[3].textContent = "$" + data.sales;
    cards[4].textContent = "$" + data.sales;
    cards[5].textContent = "$" + data.profit;

    localStorage.setItem("dashboard", JSON.stringify(data));
}

updateDashboard();

document.querySelector(".add").addEventListener("click", () => {

    let amount = prompt("بڕی فرۆشتن بنووسە");

    if(amount === null) return;

    amount = Number(amount);

    if(isNaN(amount) || amount <= 0){
        alert("تکایە ژمارەیەکی دروست بنووسە.");
        return;
    }

    data.newReceipts++;
    data.approved++;
    data.sales += amount;
    data.profit += amount * 0.2;

    updateDashboard();

    alert("وەسڵ بە سەرکەوتوویی زیادکرا.");
});

function resetDashboard(){

    if(confirm("هەموو داتا بسڕدرێتەوە؟")){

        data = {
            newReceipts:0,
            approved:0,
            rejected:0,
            sales:0,
            profit:0
        };

        updateDashboard();

    }

}

document.querySelector(".logout").addEventListener("dblclick",resetDashboard);
