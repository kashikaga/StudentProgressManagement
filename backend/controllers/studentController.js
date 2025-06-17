const Student = require('../models/studentModel');

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.addStudent = async (req, res) => {
  const student = new Student(req.body);
  await student.save();
  res.status(201).json(student);
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  res.json(student);
};

// backend/routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/', studentController.getAllStudents);
router.post('/', studentController.addStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);
router.get('/:id', studentController.getStudentById);

module.exports = router;
