const express = require('express');
const app = express();

app.use(express.json());

var Students = [{id: 01, name: "faheem"}, {id: 02, name: "zain"}, {id: 03, name: "ibad"}];

app.get('/', (req, res) => {
	res.send(Students);
});

app.post('/student', (req,res) => {
	const Student = {
		id: Students.length + 1,
		name: req.body.name
	}
	Students.push(Student);
	res.send(Student);
});

app.put('/student/:id', (req,res) => {
	const student = Students.find(s => s.id === parseInt(req.params.id));
	student.name = req.body.name;
	res.send(student);
});

app.delete('/student/:id', (req,res) => {
	const student = Students.find(s => s.id === parseInt(req.params.id));
	const index = Students.indexOf(student);
	Students.splice(index, 1);
	res.send(student);
});

app.listen(3000, () => console.log("Server is running 3000"));