// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { Link } from "react-router-dom";

// const fetchTasks = async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-task`);
//   return data;
// };

// // delete
// const handleDelete = async (id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then(async (result) => {
//     if (result.isConfirmed) {
//       const response = await axios.delete(
//         `${import.meta.env.VITE_API_URL}/delete-task/${id}`
//       );
//       const { data } = response;

//       if (data.deletedCount > 0) {
//         Swal.fire({
//           title: "Deleted!",
//           text: "Task has been deleted.",
//           icon: "success",
//         });
//       }
//     }
//   });
// };

// const AllTask = () => {
//   const queryClient = useQueryClient();
//   const {
//     data: tasks,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: fetchTasks,
//   });

//   // const mutation = useMutation({
//   //   mutationFn: deleteTask,
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(["tasks"]);
//   //   },
//   // });

//   const [category, setCategory] = useState("To-Do");

//   if (isLoading) return <p>Loading tasks...</p>;
//   if (error) return <p>Error fetching tasks</p>;

//   const filteredTasks = tasks?.filter((task) => task.category === category);

//   return (
//     <div className="container mx-auto mt-10">
//       <h1 className="text-4xl font-bold text-center mb-5">All Tasks</h1>

//       {/* Category Buttons */}
//       <div className="flex justify-center gap-4 mb-5">
//         {["To-Do", "In Progress", "Done"].map((cat) => (
//           <button
//             key={cat}
//             onClick={() => setCategory(cat)}
//             className={`px-4 py-2 rounded-lg ${
//               category === cat ? "bg-blue-500 text-white" : "bg-gray-300"
//             }`}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Task Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {filteredTasks?.map((task) => (
//           <div key={task._id} className="p-5 border rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold">{task.title}</h2>
//             <p className="text-gray-600">{task.description}</p>
//             <p className="text-sm text-gray-400 mt-2">
//               Timestamp: {new Date(task.timestamp).toLocaleString()}
//             </p>
//             <Link>
//               <button
//                 // onClick={() => mutation.mutate(task._id)}
//                 onClick={() => handleDelete(_id)}
//                 className="mt-3 px-3 py-1 bg-red-500 text-white rounded"
//               >
//                 Delete Task
//               </button>
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AllTask;

// DND KIT
// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import axios from "axios";
// import {
//   DndContext,
//   closestCorners,
//   useDraggable,
//   useDroppable,
// } from "@dnd-kit/core";
// import LoadinSpinner from "../LoadinSpinner/LoadinSpinner";

// const fetchTasks = async () => {
//   const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-task`);
//   return data;
// };

// // const fetchTasks = async () => {
// //   console.log("Fetching latest tasks..."); // ✅ Debugging purpose
// //   const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-task`);
// //   return data; // ✅ Ensure fresh data is loaded
// // };

// // const {
// //   data: tasks,
// //   isLoading,
// //   error,
// // } = useQuery({
// //   queryKey: ["tasks"],
// //   queryFn: fetchTasks,
// //   staleTime: 5000, // ✅ Ensure data isn't stale for long
// //   cacheTime: 10000,
// // });

// const deleteTask = async (id) => {
//   await axios.delete(`${import.meta.env.VITE_API_URL}/task-delete/${id}`);
// };

// // const updateTaskCategory = async ({ id, newCategory }) => {
// //   await axios.put(`${import.meta.env.VITE_API_URL}/task-update/${id}`, {
// //     category: newCategory,
// //   });
// // };

// const updateTaskCategory = async ({ id, newCategory }) => {
//   try {
//     const response = await axios.put(
//       `${import.meta.env.VITE_API_URL}/task-update/${id}`,
//       {
//         category: newCategory,
//       }
//     );

//     // console.log("✅ Task Updated:", response.data);
//     return response.data; // Ensure the updated data is returned
//   } catch (error) {
//     console.error("❌ Error updating task:", error.response?.data || error);
//     throw error;
//   }
// };

// const AllTask = () => {
//   const queryClient = useQueryClient();
//   const {
//     data: tasks,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["tasks"],
//     queryFn: fetchTasks,
//   });

//   const deleteMutation = useMutation({
//     mutationFn: deleteTask,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["tasks"]);
//     },
//   });

//   // const updateCategoryMutation = useMutation({
//   //   mutationFn: updateTaskCategory,
//   //   onSuccess: () => {
//   //     queryClient.invalidateQueries(["tasks"]);
//   //   },
//   // });

//   const updateCategoryMutation = useMutation({
//     mutationFn: updateTaskCategory,
//     onSuccess: () => {
//       queryClient.invalidateQueries(["tasks"]); // ✅ Ensures refetch after mutation
//     },
//     onSettled: () => {
//       queryClient.invalidateQueries(["tasks"]); // ✅ Ensures data is refreshed after mutation
//     },
//   });

//   const categories = ["To-Do", "In Progress", "Done"];

//   if (isLoading) return <LoadinSpinner></LoadinSpinner>;
//   if (error) return <p>Error fetching tasks</p>;

//   const handleDragEnd = (event) => {
//     const { active, over } = event;

//     if (!over) return; // Drop area not valid
//     if (active.id === over.id) return; // Dropped on the same category

//     const taskId = active.id;
//     const newCategory = over.id;

//     updateCategoryMutation.mutate({ id: taskId, newCategory });
//   };

//   return (
//     <div className="container mx-auto mt-20">
//       <h1 className="text-4xl font-bold text-center mb-5">All Tasks</h1>

//       <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
//         <div className="flex justify-center gap-6">
//           {categories.map((category) => (
//             <TaskColumn key={category} id={category} tasks={tasks} />
//           ))}
//         </div>
//       </DndContext>
//     </div>
//   );
// };

// const TaskColumn = ({ id, tasks }) => {
//   const { setNodeRef, isOver } = useDroppable({ id });

//   return (
//     <div
//       ref={setNodeRef}
//       className={`w-1/3 p-4 border rounded-lg shadow-md ${
//         isOver ? "bg-blue-100" : "bg-gray-100"
//       }`}
//     >
//       <h2 className="text-2xl font-bold text-center mb-3">{id}</h2>
//       {tasks
//         ?.filter((task) => task.category === id)
//         .map((task) => (
//           <TaskCard key={task._id} task={task} />
//         ))}
//     </div>
//   );
// };

// const TaskCard = ({ task }) => {
//   const { attributes, listeners, setNodeRef, transform } = useDraggable({
//     id: task._id,
//   });

//   return (
//     <div
//       ref={setNodeRef}
//       {...attributes}
//       {...listeners}
//       className="p-4 bg-white border rounded-md mt-2 shadow cursor-pointer"
//       style={{ transform: `translate(${transform?.x}px, ${transform?.y}px)` }}
//     >
//       <h3 className="text-lg font-semibold">{task.title}</h3>
//       <p className="text-gray-600">{task.description}</p>
//       <p className="text-sm text-gray-400 mt-1">
//         {new Date(task.timestamp).toLocaleString()}
//       </p>
//       <button
//         onClick={() => deleteTask(task._id)}
//         className="mt-2 px-3 bg-red-500 rounded-lg text-white"
//         px-3
//         py-1
//         bg-red-500
//         text-white
//         rounded
//       >
//         Delete Task
//       </button>
//     </div>
//   );
// };

// export default AllTask;

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import {
  DndContext,
  closestCorners,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import LoadinSpinner from "../LoadinSpinner/LoadinSpinner";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const fetchTasks = async () => {
  const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-task`);
  return data;
};

// const deleteTask = async (id) => {
//   await axios.delete(`${import.meta.env.VITE_API_URL}/task-delete/${id}`);
// };
const handleDelete = async (id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then(async (result) => {
    if (result.isConfirmed) {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_URL}/task-delete/${id}`
      );
      const { data } = response;

      if (data.deletedCount > 0) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    }
  });
};

const updateTaskCategory = async ({ id, newCategory }) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_API_URL}/task-update/${id}`,
      { category: newCategory }
    );
    return response.data;
  } catch (error) {
    console.error("❌ Error updating task:", error.response?.data || error);
    throw error;
  }
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

  // const deleteMutation = useMutation({
  //   mutationFn: deleteTask,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(["tasks"]);
  //   },
  // });

  const updateCategoryMutation = useMutation({
    mutationFn: updateTaskCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });

  const categories = ["To-Do", "In Progress", "Done"];

  if (isLoading) return <LoadinSpinner />;
  if (error) return <p>Error fetching tasks</p>;

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;
    updateCategoryMutation.mutate({ id: active.id, newCategory: over.id });
  };

  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5">
        All Tasks
      </h1>
      <DndContext collisionDetection={closestCorners} onDragEnd={handleDragEnd}>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          {categories.map((category) => (
            <TaskColumn
              key={category}
              id={category}
              tasks={tasks}
              // deleteMutation={deleteMutation} // Pass deleteMutation here
            />
          ))}
        </div>
      </DndContext>
    </div>
  );
};

const TaskColumn = ({ id, tasks, deleteMutation }) => {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`w-full md:w-1/3 p-4 border rounded-lg shadow-md ${
        isOver ? "bg-blue-100" : "bg-gray-100"
      }`}
    >
      <h2 className="text-2xl font-bold text-center mb-3">{id}</h2>
      {tasks
        ?.filter((task) => task.category === id)
        .map((task) => (
          <TaskCard
            key={task._id}
            task={task}
            deleteMutation={deleteMutation}
          />
        ))}
    </div>
  );
};

const TaskCard = ({ task, deleteMutation }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task._id,
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      className="p-4 bg-white border rounded-md mt-2 shadow cursor-pointer"
      style={{ transform: `translate(${transform?.x}px, ${transform?.y}px)` }}
    >
      <h3 className="text-lg font-semibold dark:text-black">{task.title}</h3>
      <p className="text-gray-600 dark:text-gray-800">{task.description}</p>
      <p className="text-sm text-gray-400 mt-1">
        {new Date(task.timestamp).toLocaleString()}
      </p>
      <Link>
        <button
          // onClick={() => deleteMutation.mutate(task._id)}
          onClick={() => handleDelete(task._id)}
          className="mt-2 px-3 py-1 bg-red-500 rounded-lg text-white"
        >
          Delete Task
        </button>
      </Link>
      <Link to={`/editTask/${task._id}`}>
        <button className="mt-2 ml-2 px-3 py-1 bg-blue-500 rounded-lg text-white">
          Update Task
        </button>
      </Link>
    </div>
  );
};

export default AllTask;
