function calculateTotal() {
    let debitTotal = 0;
    let creditTotal = 0;

    document.querySelectorAll('.debit').forEach(function(input) {
        debitTotal += parseFloat(input.value) || 0;
    });

    document.querySelectorAll('.credit').forEach(function(input) {
        creditTotal += parseFloat(input.value) || 0;
    });

    document.getElementById('total-debit').innerText = debitTotal.toFixed(2);
    document.getElementById('total-credit').innerText = creditTotal.toFixed(2);
}

function addRow() {
    const table = document.getElementById('journal-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);

    cell1.innerHTML = '<input type="date" class="date">';
    cell2.innerHTML = '<input type="text" class="description">';
    cell3.innerHTML = '<input type="text" class="account">';
    cell4.innerHTML = '<input type="number" step="0.01" class="debit" oninput="calculateTotal()">';
    cell5.innerHTML = '<input type="number" step="0.01" class="credit" oninput="calculateTotal()">';
}

function undoRow() {
    const table = document.getElementById('journal-table').getElementsByTagName('tbody')[0];
    if (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
        calculateTotal();
    }
}

function calculateDifference() {
    const debitTotal = parseFloat(document.getElementById('total-debit').innerText) || 0;
    const creditTotal = parseFloat(document.getElementById('total-credit').innerText) || 0;

    const difference = debitTotal - creditTotal;

    document.getElementById('debit-credit-difference').innerText = `Debit/Credit Difference: ₱${difference.toFixed(2)}`;
}
