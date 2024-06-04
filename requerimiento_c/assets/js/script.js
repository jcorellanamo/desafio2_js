function verificaPassword() {
    const digit1 = document.getElementById('digit1').value;
    const digit2 = document.getElementById('digit2').value;
    const digit3 = document.getElementById('digit3').value;
    
    const password = digit1 + digit2 + digit3;
    const resultElement = document.getElementById('result');
    
    if (password === '911') {
        resultElement.textContent = 'password 1 correcto';
    } else if (password === '714') {
        resultElement.textContent = 'password 2 correcto';
    } else {
        resultElement.textContent = 'password incorrecto';
    }
}