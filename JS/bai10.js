function gettextContent(){
    const text = document.getElementById("dom").textContent;
    document.getElementById("douma").innerText = text;
}
function getinnerText(){
    const text = document.getElementById("dom").innerText;
    document.getElementById("douma").innerText = text;
}
function getinnerHTML() {
    const text = document.getElementById("dom").innerHTML;
    document.getElementById("douma").innerText = text;
}   
