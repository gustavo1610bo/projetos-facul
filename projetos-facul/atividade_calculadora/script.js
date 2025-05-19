function adicionar(num){
    let display = document.getElementById('resp');
    if (display.textContent === 'DISPLAY'){
        display.textContent = '';
    }
    display.textContent = display.textContent + num;
}

function calcular(){
    let display = document.getElementById('resp');
    let expressao = display.textContent;
    display.textContent = new Function('return ' + expressao)();
}


function calcular() {
    let resultado = eval(document.getElementById('resp').innerHTML);
    document.getElementById('resp').innerHTML = resultado;
}

function deletar() {
    let display = document.getElementById('resp');
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length - 1);
}

function isOperador(caractere) {
    return ['+', '-', '*', '/'].includes(caractere);
}

function adicionar(num) {
    let display = document.getElementById('resp');
    
    if (display.textContent === 'DISPLAY') {
        display.textContent = '';
    }

    if (isOperador(num) && isOperador(display.textContent.slice(-1))) {
        return;
    }

    display.textContent = display.textContent + num;
}
