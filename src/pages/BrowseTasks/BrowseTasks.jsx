import React from "react";
import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard/EventCard";
import { Helmet } from "react-helmet";

const BrowseTasks = () => {
    const alltask = useLoaderData();
  return (

    <div className=" min-h-screen container mt-25 mx-auto mt-10">
        <Helmet>
        <title> Freeio - Browse Tasks </title>
      </Helmet>
      <div className="flex flex-row items-center justify-between">
        <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600  border-b-2 duration-600  border-primary   rounded-l-full">
        All  Tasks 
      </span>
      <span className="text-2xl font-extrabold md:text=3xl p-2 px-3 hover:border-red-600  border-2 duration-600  border-primary   rounded-full">
         {alltask.length} 
      </span>
      </div>
      <div className="grid mt-15 grid-cols-1 md:grid-cols-2   lg:grid-cols-4  gap-4">
        {alltask.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
      <div
        className="flex py-20 justify-center space-x-1"
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

export default BrowseTasks;
