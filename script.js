
document.addEventListener("DOMContentLoaded", function () {
    // Feature 1: Destination filters
    const filterButtons = document.querySelectorAll(".filter-btn");
    const destinationCards = document.querySelectorAll(".card.destination");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.dataset.filter;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            destinationCards.forEach(function (card) {
                const category = card.dataset.category;

                if (selectedCategory === "all" ||
                    category === selectedCategory) {
                    card.style.display = "";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});

// Feature 2: Travel enquiry submission feedback
document.addEventListener("DOMContentLoaded", function () {
    const enquiryForm = document.querySelector(".form-section form");
    const feedback = document.getElementById("form-feedback");

    if (!enquiryForm || !feedback) {
        return;
    }

    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!enquiryForm.checkValidity()) {
            enquiryForm.reportValidity();
            return;
        }

        feedback.textContent =
            "Thank you! Your travel enquiry has been completed successfully. This demo form does not send your details.";

        feedback.classList.add("form-success");
        feedback.style.display = "block";
        feedback.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    });

    enquiryForm.addEventListener("reset", function () {
        feedback.textContent = "";
        feedback.classList.remove("form-success");
        feedback.style.display = "none";
    });
});
