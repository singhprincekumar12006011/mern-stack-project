

import task from "../models/taskModel.js";
import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const {
      date,
      type,
      link,
      description,
      createdBy,
      createdFor,
      remarks,
      reminder,
    } = req.body;

    // ✅ Validation: check all required fields
    if (!date || !type || !description || !createdBy || !createdFor) {
      return res.status(400).json({
        success: false,
        message: "All required fields must be filled!",
      });
    }

    // ✅ Create new task
    const newTask = await Task.create({
      date,
      type,
      link,
      description,
      createdBy,
      createdFor,
      remarks,
      reminder,
    });

    // ✅ Send success response
    res.status(201).json({
      success: true,
      message: "Task created successfully!",
      data: newTask,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating task.",
      error: error.message,
    });
  }
};



export const getTask = async (req, res) => {
  try {
    const data = await Task.find()
      .populate("createdBy", "name email")   // optional: populate user info
      .populate("createdFor", "name email"); // optional: populate assigned user info

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No tasks found"
      });
    }

    res.status(200).json({
      success: true,
      count: data.length,
      tasks: data
    });

  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching tasks",
      error: error.message
    });
  }
};



export const updateTask = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from URL
    const updates = req.body;  // Get updated data from request body

    const updatedTask = await Task.findByIdAndUpdate(id, updates, {
      new: true, // return updated document
      runValidators: true // validate schema before update
    });

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task updated successfully",
      task: updatedTask
    });

  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({
      success: false,
      message: "Server error while updating task",
      error: error.message
    });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params; // Get task ID from URL

    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Task deleted successfully"
    });

  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({
      success: false,
      message: "Server error while deleting task",
      error: error.message
    });
  }
};