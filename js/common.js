let currentFontSize = 16;
const content = document.getElementById("main-content");

// Decrease Font Size
document.getElementById("decrease-font").addEventListener("click", function () {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        content.style.fontSize = currentFontSize + "px";
    }
});

// Reset Font Size
document.getElementById("reset-font").addEventListener("click", function () {
    currentFontSize = 16;
    content.style.fontSize = currentFontSize + "px";
});

// Increase Font Size
document.getElementById("increase-font").addEventListener("click", function () {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        content.style.fontSize = currentFontSize + "px";
    }
});

// Dark Mode Toggle
document.getElementById("toggle-dark-mode").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.querySelector(".search-icon");
    const searchInput = document.querySelector(".search-input");

    // Toggle search input on icon click
    searchIcon.addEventListener("click", function (event) {
        searchInput.classList.toggle("active");
        if (searchInput.classList.contains("active")) {
            searchInput.focus();
        }
    });

    // Hide search input when clicking outside
    document.addEventListener("click", function (event) {
        if (!searchIcon.contains(event.target) && !searchInput.contains(event.target)) {
            searchInput.classList.remove("active");
        }
    });
});

