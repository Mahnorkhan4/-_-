const ageForm = document.getElementById("ageForm");
const output = document.getElementById("output");

ageForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const year = parseInt(document.getElementById("year").value);
  const month = parseInt(document.getElementById("month").value) - 1; // Months are 0-indexed in JavaScript
  const day = parseInt(document.getElementById("day").value);

  const today = new Date();
  const birthDate = new Date(year, month, day);

  // Calculate the difference in milliseconds
  const diffInMs = today.getTime() - birthDate.getTime();

  // Convert milliseconds to years (rounded down)
  const ageInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365.25));

  output.textContent = "Your age is approximately " + ageInYears + " years old.";
});
