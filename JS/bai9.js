let valueItem = null;

 function editName(button) {
    let text = document.getElementById("inputText");
    valueItem = button.parentElement.query("span");
    text.value = valueItem.textContent;
 }
 function editItem(){
    let text = document.getElementById("inputText");
    if(valueItem !== null) {
        valueItem.textContent = text.value;
        valueItem = null;
        valueItem.focus();
        text.value = '';
    }
 }