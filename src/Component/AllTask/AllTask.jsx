import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const fetchTasks = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-task`);
  return data;
};

const deleteTask = async (id) => {
  await axios.delete(`${import.meta.env.VITE_API_URL}/${id}`);
};

const AllTask = () => {
  const queryClient = useQueryClient();
  const {
    data: tasks,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: fetchTasks,
  });

  const mutation = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const [category, setCategory] = useState("To-Do");

  if (isLoading) return <p>Loading tasks...</p>;
  if (error) return <p>Error fetching tasks</p>;

  const filteredTasks = tasks?.filter((task) => task.category === category);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-4xl font-bold text-center mb-5">All Tasks</h1>

      {/* Category Buttons */}
      <div className="flex justify-center gap-4 mb-5">
        {["To-Do", "In Progress", "Done"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg ${
              category === cat ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Task Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTasks?.map((task) => (
          <div key={task._id} className="p-5 border rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{task.title}</h2>
            <p className="text-gray-600">{task.description}</p>
            <p className="text-sm text-gray-400 mt-2">
              Timestamp: {new Date(task.timestamp).toLocaleString()}
            </p>
            <button
              onClick={() => mutation.mutate(task._id)}
              className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
            >
              Delete Task
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
