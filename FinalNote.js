const title = document.getElementById("h1-title");
const number1 = document.getElementById("note1");
const number2 = document.getElementById("note2");
const number3 = document.getElementById("note3");
const response = document.getElementById("response");
const calculate = document.getElementById("btn-calculate");


window.addEventListener("DOMContentLoaded", greet);
number3.addEventListener("keyup",calculateNotes);
calculate.addEventListener("click", final);

function greet() {
    title.textContent = "Calculate your final grade";
    title.style.color = "purple";
    title.style.textShadow = "-10px -10px 20px ";  
}

function calculateNotes (){

    let note1 = Number(number1.value);
    let note2 = Number(number2.value);
    let note3 = Number(number3.value);

    if (note1 >= 0 && note2 >= 0 && note3 >=0) {

        
        // typeof sirve para validar el tipo de variable
        // console.log(typeof note1);

        let result = ( note1 * 0.30) + (note2 * 0.30) + (note3 * 0.40);
        // console.log("Este llega de CalculateNotes: "+result);
        return result;    
    } else {
        alert("Debe ingresar algún número")
    }    
}


function final (){
    let result = calculateNotes();
    
    // console.log("Este llega de final: "+result);
    if (typeof (result) === "number" ) {
        if(result > 4.5 && result <= 5){
            response.textContent = "Excelente, su nota final es "+result;
        } else if(result >= 3.5 && result <= 4.5){
            response.textContent = "Buena, su nota final es "+result;
        } else if(result >= 2 && result <= 3.4){
            response.textContent = "Perdiste la materia pero puedes recuperar, su nota final es "+result;
        } else if(result > 0 && result < 2){
            response.textContent = "Perdiste la materia y deberás repetirla, su nota final es "+result
        } else {
            response.textContent = "No es un dato válido";
        }
    } else {
        response.textContent = "No es un dato válido";
    }
}