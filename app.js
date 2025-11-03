// import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Define the port number where our server will listen
const PORT = 3006;

const appointments = [];

app.get("/", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/appointment.html`);
});

app.post("/submit", (req, res) => {
	const newAppointment = {
		fname: req.body.fname,
		lname: req.body.lname,
		date: req.body.date,
		time: req.body.time,
		createdAt: new Date().toISOString(),
	};

	appointments.push(newAppointment);
	console.log(appointments);
	res.redirect("/confirmation.html");
});

app.get("/admin", (req, res) => {
	res.send(appointments);
});

app.get("/confirmation.html", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

//Start the server and make it listen on the port
// specified
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
