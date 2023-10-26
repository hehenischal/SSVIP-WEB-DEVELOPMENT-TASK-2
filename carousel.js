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
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");

    stars.forEach((star, index) => {
        star.addEventListener("click", () => {
            // Set the rating (1 to 5 stars)
            const rating = index + 1;

            // Highlight selected stars
            stars.forEach((s, i) => {
                if (i <= index) {
                    s.classList.add("selected");
                } else {
                    s.classList.remove("selected");
                }
            });
        });
    });
});

