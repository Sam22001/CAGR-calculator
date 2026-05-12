const number_input = document.querySelectorAll(".cagr_input");
const button = document.querySelector("#calculate_button");


number_input.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && input.value != "") {
            event.preventDefault();
            const next = number_input[index + 1];
            if (next) {
                next.focus();
            } else {
                const form = input.closest("form");
                if (form) {
                    form.requestSubmit();
                }
            }
        } else if (event.key === "Enter" && input.value === "") {
            event.preventDefault();
            alert("You need to fill number.")
        }
    });
});

function showPopup() {
    document.getElementById("popup").classList.add("show");
}

function closePopup() {
    document.getElementById("popup").classList.remove("show");
}

setTimeout(showPopup, 1000);