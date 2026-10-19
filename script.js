// Shows a message when the Contact button is clicked
function showMessage() {
    document.getElementById("message").textContent =
        "Thank you for contacting us!";
}

// ===== Unused code (never called anywhere) =====
function openModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.querySelector(".modal");
    modal.style.display = "none";
}

function nextSlide() {
    var items = document.querySelectorAll(".carousel-item");
    for (var i = 0; i < items.length; i++) {
        items[i].style.transform = "translateX(-100%)";
    }
}

function validateForm(name, email) {
    if (name === "" || email === "") {
        return false;
    }
    return true;
}
