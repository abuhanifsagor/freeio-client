import React from "react";
import EventCard from "../EventCard/EventCard";

const FeaturedTasks = ({ tasks }) => {
  return (
    <div className=" container px-4 mx-auto">
      <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600  border-b-2 duration-600  border-primary   rounded-l-full">
        Featured Tasks
      </span>
      <div className="grid mt-15 grid-cols-1 md:grid-cols-2   lg:grid-cols-3  gap-4">
        {tasks.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      <div
        className="flex mt-20 justify-center space-x-1 dark:text-gray-800"
        bis_skin_checked="1"
      >
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            checked="checked"
            readOnly
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="2"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="3"
          />
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="4"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturedTasks;
