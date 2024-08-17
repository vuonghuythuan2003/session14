document.addEventListener('DOMContentLoaded', () => {
    const myTable = document.getElementById('myTable');
    
    myTable.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains('deleteButton')) {
            const row = e.target.closest('tr'); 
            row.remove(); 
        }
    });
});
