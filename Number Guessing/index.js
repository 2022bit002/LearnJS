const min =1
const max= 100 

const answer = Math.floor(Math.random()*(max-min+1))
console.log(answer)

let attempts =0
let guess ;
let run = true;
while(run){
    guess = window.prompt(`guess a number between ${min}-${max}`)
    guess = Number(guess)

    if(isNaN(guess)){
        window.alert("Pleasse enter an number!!!!")
    }
    else if(guess<min || guess>max){
        window.alert("Enter an valid number");

    }
    else{
        attempts++;

    if (guess>answer){

        window.alert("the guess is higher than the actual number");
    }
    else if(guess<answer){
        window.alert("it is lower than the answer")

    }
    else{
        window.alert(`it is the correct number and you have taken ${attempts} attempts to crack it`)
    }
}
}