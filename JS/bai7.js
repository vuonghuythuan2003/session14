const myTable = document.getElementById('myTable');
const addRowButton = document.getElementById('addRowButton');

let rowCount = 1;

addRowButton.addEventListener('click', () => {
    rowCount++;
    const newRow = myTable.insertRow();
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);

    cell1.textContent = `Cell 1 row ${rowCount}`;
    cell2.textContent = `Cell 2 row ${rowCount}`;
    cell3.textContent = `Cell 3 row ${rowCount}`;
});
