// import the express module
import express from "express";

// Create an instance of an Express application
const app = express();

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

//Define the port number where our server will listen
const PORT = 3006;

app.get("/", (req, res) => {
	res.sendFile(`${import.meta.dirname}/views/appointment.html`);
});

app.post("/submit", (req, res) => {
	const appointments = [];

	const newAppointment = {
		name: req.body.fname,
		email: req.body.lname,
		date: req.body.date,
		time: req.body.time,
		createdAt: new Date().toISOString(),
	};

	appointments.push(newAppointment);
	console.log(appointments);
});

app.get("/admin", (req, res) => {
	res.send(appointments);
});

//Start the server and make it listen on the port
// specified
app.listen(PORT, () => {
	console.log(`Server is running at http://localhost:${PORT}`);
});
