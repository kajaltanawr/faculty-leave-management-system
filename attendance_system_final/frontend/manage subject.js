// Sample Data
let subjects = [
  {
    name: "Advanced Algorithms",
    code: "CS15104",
    faculty: "11",
    course: "btech",
    year: "3",
    branch: "CSE",
    sem: "5"
  },
  {
    name: "Database Management System",
    code: "CS15103",
    faculty: "12",
    course: "btech",
    year: "3",
    branch: "CSE",
    sem: "5"
  },
  {
    name: "Theory Of Computation",
    code: "CS15102",
    faculty: "13",
    course: "btech",
    year: "3",
    branch: "CSE",
    sem: "5"
  },
  {
    name: "Artificial Intelligence",
    code: "CS15101",
    faculty: "13",
    course: "btech",
    year: "3",
    branch: "CSE",
    sem: "5"
  }
];

// Render Table
function renderTable() {
  let table = document.getElementById("subjectTable");
  table.innerHTML = "";

  subjects.forEach((sub, index) => {
    table.innerHTML += `
      <tr>
        <td>${sub.name}</td>
        <td>${sub.code}</td>
        <td>${sub.faculty}</td>
        <td>${sub.course}</td>
        <td>${sub.year}</td>
        <td>${sub.branch}</td>
        <td>${sub.sem}</td>
        <td>
          <button class="update-btn" onclick="updateSubject(${index})">Update</button>
          <button class="delete-btn" onclick="deleteSubject(${index})">Delete</button>
        </td>
      </tr>
    `;
  });
}

// Delete
function deleteSubject(index) {
  subjects.splice(index, 1);
  renderTable();
}

// Update
function updateSubject(index) {
  let newName = prompt("Enter new subject name:");
  if (newName) {
    subjects[index].name = newName;
    renderTable();
  }
}

// Add
function addSubject() {
  let name = prompt("Enter subject name:");
  if (name) {
    subjects.push({
      name: name,
      code: "NEW001",
      faculty: "00",
      course: "btech",
      year: "1",
      branch: "CSE",
      sem: "1"
    });
    renderTable();
  }
}

function logout() {
  alert("Logging out...");
}

// Initial Load
renderTable();