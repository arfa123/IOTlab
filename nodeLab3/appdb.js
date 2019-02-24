const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());

mongoose.connect("mongodb://localhost/LocalDB")
.then(console.log("Mongo is connected"))
.catch(err => console.log(err))

require('./models/Students');

const Student = mongoose.model('students');

app.post('/student', (req, res) => {
	const newStudent = {
		id: req.body.id,
		name: req.bode.name
		}
	new Student(newStudent)
	.save()
	.then(s => res.send("Student Saved"))
	.catch(err => console.log("Error:",err))
	});

app.listen(3000, () => console.log("server running"))
