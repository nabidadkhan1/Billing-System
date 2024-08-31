document.getElementById('fullName').addEventListener('input', updateBill);
document.getElementById('email').addEventListener('input', updateBill);
document.getElementById('samosaQty').addEventListener('input', updateBill);
document.getElementById('cheeseRollQty').addEventListener('input', updateBill);
document.getElementById('parathaQty').addEventListener('input', updateBill);
document.getElementById('chaiQty').addEventListener('input', updateBill);

function updateBill() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const samosaQty = parseInt(document.getElementById('samosaQty').value) || 0;
    const cheeseRollQty = parseInt(document.getElementById('cheeseRollQty').value) || 0;
    const parathaQty = parseInt(document.getElementById('parathaQty').value) || 0;
    const chaiQty = parseInt(document.getElementById('chaiQty').value) || 0;

    document.getElementById('billName').innerText = fullName;
    document.getElementById('billEmail').innerText = email;
    document.getElementById('samosaQtyBill').innerText = samosaQty;
    document.getElementById('cheeseRollQtyBill').innerText = cheeseRollQty;
    document.getElementById('parathaQtyBill').innerText = parathaQty;
    document.getElementById('chaiQtyBill').innerText = chaiQty;

    const samosaAmount = samosaQty * 30;
    const cheeseRollAmount = cheeseRollQty * 150;
    const parathaAmount = parathaQty * 50;
    const chaiAmount = chaiQty * 60;

    document.getElementById('samosaAmount').innerText = samosaAmount;
    document.getElementById('cheeseRollAmount').innerText = cheeseRollAmount;
    document.getElementById('parathaAmount').innerText = parathaAmount;
    document.getElementById('chaiAmount').innerText = chaiAmount;

    const totalAmount = samosaAmount + cheeseRollAmount + parathaAmount + chaiAmount;
    document.getElementById('totalAmount').innerText = totalAmount;
}
