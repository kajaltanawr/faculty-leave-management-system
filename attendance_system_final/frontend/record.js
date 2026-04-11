// Logout
function logout() {
  alert("Logged out!");
  window.location.href = "index.html";
}

// Chart
const ctx = document.getElementById('attendanceChart');

new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Present', 'Absent', 'Leave'],
    datasets: [{
      data: [45, 3, 2],
      backgroundColor: ['green', 'red', 'purple']
    }]
  }
});

// Table Data
const records = [
  { date: "09/12/2022", status: "Present" },
  { date: "08/12/2022", status: "Absent" },
  { date: "07/12/2022", status: "Absent" },
  { date: "06/12/2022", status: "Present" },
  { date: "05/12/2022", status: "Absent" }
];

const tableBody = document.getElementById("tableBody");

records.forEach((rec, index) => {
  const row = `
    <tr>
      <td>${index + 1}</td>
      <td>${rec.date}</td>
      <td>${rec.status}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});