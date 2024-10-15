document.getElementById("anoNascimento").addEventListener("input", function() {
    const anoNascimento = this.value;
    const idade = 2024 - anoNascimento;

    if (anoNascimento) {
        document.getElementById("resultadoIdade").innerText = `Sua idade é: ${idade} anos`;
    } else {
        document.getElementById("resultadoIdade").innerText = '';
    }
});