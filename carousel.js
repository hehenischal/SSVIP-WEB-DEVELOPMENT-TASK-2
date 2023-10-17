// Get elements
const decrementButton = document.getElementById('decrement');
const incrementButton = document.getElementById('increment');
const quantityInput = document.getElementById('quantity');

// Add event listeners
decrementButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value, 10);
    if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
    }
});

incrementButton.addEventListener('click', () => {
    const currentQuantity = parseInt(quantityInput.value, 10);
    quantityInput.value = currentQuantity + 1;
});
