import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddTask = () => {
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate();

  const handleAddTask = async (e) => {
    e.preventDefault();
    const form = e.target;

    // Taking values from form fields
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    // Constructing Task Data
    const taskData = {
      title,
      description,
      category,
      timestamp: startDate,
    };

    console.table(taskData);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/add-task`,
        taskData
      );
      form.reset();
      navigate("/");
      toast.success("Task added successfully!");
    } catch (error) {
      toast.error(error.message);
      console.error("Error adding task:", error);
    }
  };

  return (
    <div className="mt-20 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border-sky-400 border-2">
      <h1 className="text-3xl font-bold text-center mb-6">Add Task</h1>

      <form onSubmit={handleAddTask} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter task title "
            maxLength="50"
          />
        </div>

        {/* Description Input */}
        <div>
          <label className="block text-gray-700 font-semibold">
            Description:
          </label>
          <textarea
            name="description"
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter task description "
            maxLength="200"
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-gray-700 font-semibold">Category:</label>
          <select
            name="category"
            className="w-full p-2 border border-gray-300 rounded mt-1"
          >
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
