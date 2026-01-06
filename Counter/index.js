let count = 0


const decrease = document.getElementById("decrease")
const reset = document.getElementById("reset")
const increase = document.getElementById("increase")
const countValue = document.getElementById("countValue")


increase.onclick = function(){
    count++;
    countValue.textContent =count
}

decrease.onclick = function(){
    count--;
    countValue.textContent =count
}

reset.onclick = function(){
    count=0;
    countValue.textContent =count
}

