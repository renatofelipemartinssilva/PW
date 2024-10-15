document.getElementById("numero").addEventListener("input", function() {
    const numero = this.value;

    if (numero !== '') {
        if (numero % 2 === 0) {
            document.getElementById("resultadoParImpar").innerText = `O número ${numero} é par.`;
        } else {
            document.getElementById("resultadoParImpar").innerText = `O número ${numero} é ímpar.`;
        }
    } else {
        document.getElementById("resultadoParImpar").innerText = '';
    }
});