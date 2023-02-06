function display(value) {
    let input = document.getElementById('current_input')
    let prev= document.getElementById('prev_input')

    if(value === '+' || value === '-' || value === '*' || value === '/'){
        if ( prev!== "" || prev!==" " || prev!= 0){
            prev.innerText = input.textContent
            
        } else{
            prev.innerText = calculate() + value
        }
        input.innerText = ""
    } else {
        prev.innerText = input.innerText + value
    }
}

function deleteOne() {
    let input = document.getElementById('current_input')
    input.innerText = (input.innerText.length === 1)? "0.0" :  input.innerText.slice(0,-1)
}



function calculate() {
    let prev_output = document.getElementById('prev_input').innerText
    let new_output = document.getElementById('current_input').innerText

    let calc = eval(prev_output + new_output) 
    console.log(calc)
    document.getElementById('current_input').innerText = calc;
    document.getElementById('prev_input').textContent = "";
    return calc
}

function clearScreen() {
    document.getElementById('prev_input').innerText = "";
    document.getElementById('current_input').innerText = "0.0"
}