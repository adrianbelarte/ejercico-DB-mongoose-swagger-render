const express = require("express");
const router = express.Router();
const Task = require("../models/Task.js");

// CREATE TASK
router.post("/create", async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, completed: false });
    res.status(201).send({ message: "Task successfully created", task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error creating task" });
  }
});

// GET ALL TASKS
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching tasks" });
  }
});

// GET TASK BY ID
router.get("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findById(req.params._id);
    if (!task) return res.status(404).send({ message: "Task not found" });
    res.send(task);
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error fetching task by ID" });
  }
});

// MARK TASK AS COMPLETED (opcional, fuera de los 4 endpoints solicitados)
router.put("/markAsCompleted/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { completed: true },
      { new: true }
    );
    if (!task) return res.status(404).send({ message: "Task not found" });
    res.send({ message: "Task marked as completed", task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating task status" });
  }
});

// UPDATE TASK TITLE ONLY
router.put("/id/:_id", async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).send({ message: "Title is required" });

    const task = await Task.findByIdAndUpdate(
      req.params._id,
      { title },
      { new: true }
    );
    if (!task) return res.status(404).send({ message: "Task not found" });

    res.send({ message: "Task title updated", task });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error updating task" });
  }
});

// DELETE TASK
router.delete("/id/:_id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params._id);
    if (!task) return res.status(404).send({ message: "Task not found" });

    res.status(204).send(); // 204 = No Content
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Error deleting task" });
  }
});

module.exports = router;
