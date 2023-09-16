const textarea = document.getElementById("myTextarea");
const box = document.getElementById("box")

function saveToLocalStorage() {
    localStorage.setItem("savedText", textarea.value);
    if (localStorage.getItem("savedText")) {
    textarea.value = localStorage.getItem("savedText");
    alert(textarea.value)
}
}



textarea.addEventListener('dblclick', ()=>{
    saveToLocalStorage()
});