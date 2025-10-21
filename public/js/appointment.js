const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const date = document.getElementById("date");
const time = document.getElementById("time");

// error span elements
const errFname = document.getElementById("err-fname");
const errLname = document.getElementById("err-lname");
const errDate = document.getElementById("err-date");
const errTime = document.getElementById("err-time");

form.addEventListener("submit", function (e) {
	e.preventDefault(); // Prevent form submission
	clearErrors();

	let isValid = true;

	// Validate first name
	if (fname.value.trim() === "") {
		errFname.style.display = "block";
		isValid = false;
	}

	// Validate last name
	if (lname.value.trim() === "") {
		errLname.style.display = "block";
		isValid = false;
	}

	// Validate date
	if (date.value === "") {
		errDate.style.display = "block";
		isValid = false;
	}

	// Validate time
	if (time.value === "") {
		errTime.style.display = "block";
		isValid = false;
	}

	// If all valid, submit the form
	if (isValid) {
		form.submit();
	}
});

function clearErrors() {
	let errors = document.getElementsByClassName("error");
	for (let i = 0; i < errors.length; i++) {
		errors[i].style.display = "none";
	}
}
