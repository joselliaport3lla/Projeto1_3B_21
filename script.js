function verificarTernasPitagoricas(a, b, c) {
    return (a * a) + (b * b) === (c * c);
}

document.getElementById('verificarBtn').addEventListener('click', function() {
    const a = parseInt(document.getElementById('a').value);
    const b = parseInt(document.getElementById('b').value);
    const c = parseInt(document.getElementById('c').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        resultado.innerText = "Por favor, insira três números válidos.";
        resultado.style.color = 'red';
        return;
    }

    if (verificarTernasPitagoricas(a, b, c)) {
        resultado.innerText = `${a}, ${b} e ${c} formam uma terna pitagórica!`;
        resultado.style.color = 'green';
    } else {
        resultado.innerText = `${a}, ${b} e ${c} não formam uma terna pitagórica.`;
        resultado.style.color = 'red';
    }
});
