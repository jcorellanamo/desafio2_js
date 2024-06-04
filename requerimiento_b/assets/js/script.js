const inputs = document.querySelectorAll('input[type="number"]');
const result = document.getElementById('result');

inputs.forEach(input => {
    input.addEventListener('input', () => {
        let total = 0;
        inputs.forEach(input => {
            total += parseInt(input.value) || 0;
        });

        if (total <= 10) {
            result.textContent = `Llevas ${total} stickers`;
            result.style.color = 'green';
        } else {
            result.textContent = 'Llevas demasiados stickers';
            result.style.color = 'red';
        }
    });
});