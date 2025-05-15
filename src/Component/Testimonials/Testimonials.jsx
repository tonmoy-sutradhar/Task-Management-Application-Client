import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      name: "Tonmoy Sutradhar",
      title: "Project Manager, TaskFlow Inc.",
      feedback:
        "This task management tool has completely streamlined our workflow. The drag-and-drop interface makes planning a breeze!",
      image: "https://i.ibb.co/S7tC1yGw/tonmoy.jpg",
    },
    {
      name: "Michael Lee",
      title: "Team Lead, DevSync Solutions",
      feedback:
        "Real-time updates and collaboration features keep my team aligned at all times. It's a must-have for remote teams!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Emily Carter",
      title: "Freelancer & Content Creator",
      feedback:
        "Managing my projects has never been easier. The intuitive design and reminders help me stay focused and meet deadlines.",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-12 bg-white mt-10">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        What Our Users Say
      </h2>
      <p className="mt-2 text-gray-600 text-center">
        Hear how our task management app boosts productivity.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {testimonialData.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 text-center shadow hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mb-4">{item.title}</p>
            <p className="text-gray-700">{item.feedback}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
