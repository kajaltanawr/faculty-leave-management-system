function next() {
  alert("Going to next page...");
  window.location.href = "faculty.html"; // go back to login page
}

function logout() {
  alert("Logged out successfully!");
  window.location.href = "index.html"; // go back to login page
}

// Optional: card click action
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    alert("Opening subject details...");
  });
});