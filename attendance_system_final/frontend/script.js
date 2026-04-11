function switchTab(role) {
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  if (role === 'student') {
    tabs[0].classList.add('active');
  } else {
    tabs[1].classList.add('active');
  }
}

// Form submit
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    alert("Please fill all fields");
  } else {
    // alert("Login Successful (Demo)");
     alert("redirecting to dashboard...");
  }
});