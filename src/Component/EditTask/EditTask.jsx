import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditTask = () => {
  const { id } = useParams(); // Get Task ID from URL params
  const navigate = useNavigate();
  const [task, setTask] = useState({});

  // ✅ Fetch Task Data
  useEffect(() => {
    const fetchTask = async () => {
      try {
        const { data } = await axios.get(
          `${import.meta.env.VITE_API_URL}/all-task/${id}`
        );
        setTask(data);
      } catch (error) {
        console.error("❌ Error fetching task:", error.message);
        toast.error("Failed to fetch task details.");
      }
    };

    fetchTask();
  }, [id]);

  // ✅ Handle Task Update
  const handleUpdateTask = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    const updatedTask = {
      title,
      description,
      category,
    };

    try {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/edit-task/${id}`,
        updatedTask
      );
      toast.success("Task updated successfully!");
      navigate("/allTask"); // Redirect back to task list
    } catch (error) {
      toast.error("Failed to update task.");
      console.error("❌ Error updating task:", error);
    }
  };

  return (
    <div className="mt-20 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border-sky-400 border-2">
      <h1 className="text-3xl font-bold text-center mb-6">Update Task</h1>

      <form onSubmit={handleUpdateTask} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-semibold">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={task.title}
            required
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter task title"
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
            defaultValue={task.description}
            className="w-full p-2 border border-gray-300 rounded mt-1"
            placeholder="Enter task description"
            maxLength="200"
          ></textarea>
        </div>

        {/* Category Dropdown */}
        <div>
          <label className="block text-gray-700 font-semibold">Category:</label>
          <select
            name="category"
            defaultValue={task.category}
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
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTask;
