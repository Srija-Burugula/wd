document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");
    const userTable = document.getElementById("userTable").getElementsByTagName('tbody')[0];
  
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const dob = document.getElementById("dob").value;
      const acceptTerms = document.getElementById("acceptTerms").checked;
  
      // Validate DOB: Age 18-55
      const today = new Date();
      const dobDate = new Date(dob);
      const age = today.getFullYear() - dobDate.getFullYear();
      if (age < 18 || age > 55) {
        alert("Date of Birth must be between ages 18 and 55.");
        return;
      }
  
      const newRow = userTable.insertRow();
      newRow.innerHTML = `<td>${name}</td><td>${email}</td><td>${password}</td><td>${dob}</td><td>${acceptTerms ? "Yes" : "No"}</td>`;
  
      registrationForm.reset();
    });
  });
  