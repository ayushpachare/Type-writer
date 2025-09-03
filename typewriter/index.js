let inputPara = document.querySelector("input");
let para = document.getElementById("paragraph");

inputPara.addEventListener("input" , function(){
    let inputValue = this.value;
    para.innerText = inputValue;
})