var names = ["Item1", "Item123"];

const nameList = document.getElementById("nameList");

function dislayNamae() {
    nameList.innerHTML = '';
    names.forEach(hhhh => {
        const li = document.createElement("li");
        li.textContent = hhhh;
        nameList.appendChild(li); // appendChild để push cái elenmet của li vào mảng nameList Ul

    })
}
dislayNamae();

const nameInput = document.getElementById('nameInput');
        const addNameButton = document.getElementById('addNameButton');

        addNameButton.addEventListener('click', () =>{
            const newName = nameInput.value;
            if(newName) {
                names.push(newName);
                dislayNamae();
                nameInput.value = '';
                nameInput.focus();
            }
            else{
                console.log("Trả về giá trị rỗng");
            }
        });