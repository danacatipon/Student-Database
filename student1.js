const logoutLink = document.getElementById('logoutLink');
const editButton = document.getElementById('editButton');
const saveButton = document.getElementById('saveButton'); // Check that this ID matches the Save button in the modal
const personalInfoTab = document.getElementById('personalInfo');
const editModal = document.getElementById('editModal');


// Event listener for logout link
logoutLink.addEventListener('click', function() {
  window.location.href = 'index.html';
});

// Function to show a specific tab/section
function showTab(tabName) {
  var tabs = document.getElementsByClassName("tab");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

// Show personal information tab by default
showTab('enrollment');
updateStats();

// Event listener for edit button
editButton.addEventListener('click', function() {
  openModal();
});

// Function to open the modal
function openModal() {
  editModal.style.display = "block";
}

// Function to close the modal
function closeModal() {
  editModal.style.display = "none";
}
// Function to save personal information
function savePersonalInfo() {
  var dob = document.getElementById("dob").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;
  var nationality = document.getElementById("nationality").value;
  var religion = document.getElementById("religion").value;
  var contact = document.getElementById("contact").value;
  var email = document.getElementById("email").value;
  var address = document.getElementById("address").value;

  // Update the personal information display with the new values
  document.querySelector(".info-container .info-box p:nth-child(2) strong").textContent = dob;
  document.querySelector(".info-container .info-box p:nth-child(2) strong").nextElementSibling.textContent = age;
  document.querySelector(".info-container .info-box p:nth-child(6) strong").textContent = gender;
  document.querySelector(".info-container .info-box p:nth-child(8) strong").textContent = nationality;
  document.querySelector(".info-container .info-box p:nth-child(10) strong").textContent = religion;
  document.querySelector(".info-container .info-box p:nth-child(12) strong").textContent = contact;
  document.querySelector(".info-container .info-box p:nth-child(14) strong").textContent = email;
  document.querySelector(".info-container .info-box p:nth-child(16) strong").textContent = address;

  // Close the modal
  closeModal();
}

// Function to show a specific section
function showSection(section) {
  var sections = document.querySelectorAll('.section');
  sections.forEach(function(sec) {
    sec.style.display = 'none';
  });
  section.style.display = 'block';
}

// Event listener for save button
saveButton.addEventListener('click', function() {
  savePersonalInfo();
});
