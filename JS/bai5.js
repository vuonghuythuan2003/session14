var names = ["Nguyễn Văn A", "Vũ Thị B", "Nguyễn Minh C"];

const nameList = document.getElementById("nameList");


function dislayNamae() {
    nameList.innerHTML = '';
    names.forEach(hhhh => {
        const li = document.createElement("li");
        li.textContent = hhhh;
        nameList.appendChild(li);
    })
}
dislayNamae();