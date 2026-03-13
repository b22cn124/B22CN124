const express = require("express");
const router = express.Router();
const Student = require("../models/student");


router.post("/students", async (requ, res) => {
    const student = new Student(requ.body);
    await student.save();
    res.send(student);
});

router.get("/students", async (req, res) => {
    const students = await Student.find();
    res.send(students);
});

module.exports = router;
