document.addEventListener("DOMContentLoaded", function () {
    const textElements = document.querySelectorAll(".fade-in");

    // Trigger fade-in animation for each text element with a delay
    textElements.forEach((element, index) => {
        element.style.animationDelay = `${index * 1.5}s`; // Set delay based on index
    });

    // Event listeners for "Yes" buttons
    const yesButtons = document.querySelectorAll(".yes, .yes2");
    yesButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Wait for 3 seconds before adding the fadeAway2 class
            setTimeout(() => {
                const containerFluid = document.querySelector(".container-fluid");
                const img = document.querySelector(".img");
                containerFluid.classList.add("fadeAway2");
                img.classList.add("fade-in");
                img.classList.remove("d-none");
            }, 3000);

            // Fade out all elements
            const allElements = document.querySelectorAll(".fade-in");
            allElements.forEach(element => {
                element.style.opacity = 0;
            });

            // Display the image
            const valentineImage = document.getElementById('valentineImage');
            valentineImage.classList.remove('hidden');

            // Trigger confetti effect
            confetti();
        });
    });

    // Event listener for "No" button
    const noButton = document.querySelector(".no");
    noButton.addEventListener("click", function () {
        // Move the "No" button to a random position
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        const randomX = Math.random() * (vw - 100); // subtract button width
        const randomY = Math.random() * (vh - 100); // subtract button height
        noButton.style.position = "absolute";
        noButton.style.left = randomX + "px";
        noButton.style.top = randomY + "px";
    });
});
