function insereNumero(){
    let numeroInserido = document.getElementById('numero').value;
    if(validaEntrada(numeroInserido)){
        console.log('Entrada válida');
    }else{
        alert('Entrada inválida: Digite um número inteiro entre 1 e 10.');
    }
}

function validaEntrada(entrada){
    // valida que a entrada seja não vazia e inteira maior que 0 e menor que 10
    if(entrada.trim() === ''){
        return false
    }else{
        entrada_int = parseInt(entrada, 10);
        return verificarInteiro(entrada) && !isNaN(entrada_int) && entrada_int >= 1 && entrada_int <= 10;
    }
}

function verificarInteiro(valor) {
    return /^-?\d+$/.test(valor);
}