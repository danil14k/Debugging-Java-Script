function calcularSuma() {
    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const suma = num1 + num2; 
    document.getElementById('resultado').innerText = `La suma es: ${suma}`;
}
