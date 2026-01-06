

const textBox =  document.getElementById("textbox")
const toFah =  document.getElementById("toFahrenheit")
const toCel =  document.getElementById("toCelsius")
const result =  document.getElementById("result")

let temp;

function convert(){

    if(toFah.checked){ 
        temp = Number(textBox.value)
        temp = temp*9/5+32
        result.textContent = temp.toFixed(1) +"F"
    }
    else if(toCel.checked){
            temp = Number(textBox.value)
        temp = (temp-32
    )*(5/9)
        result.textContent = temp.toFixed(1) +"F"
    }
    else{
        result.textContent = "Select a unit"
    }

}