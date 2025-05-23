import React from "react";
import { Link } from "react-router-dom";
import { BsLightningChargeFill } from "react-icons/bs";

const EventCard = ({ event }) => {
  const { _id, photoURL, taskTitle, category, deadline, budget, description } =
    event;

  return (
    <>
      <div className="w-full relative p-6 pb-20 rounded-md shadow-md min-h-[620px]  bg-base-200 ">
        <img
          loading="lazy"
          src={photoURL}
          alt={taskTitle}
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-6 mb-2">
          <span className="block text-xs font-medium tracking-w_idest uppercase text-primary">
            {category}
          </span>
          <div className="text-md lg:text-lg font-semibold tracking-w_ide">
            {taskTitle}
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-sm text-gray-500">
            <b>Deadline :</b> {deadline}
          </p>
          <p className="text-sm font-semibold text-blue-600">
            Budget : {budget} <b className="text-green-600">$</b>
          </p>
          <p className="text-sm text-gray-500">
            <b>Description:</b>{" "}
            <span
              dangerouslySetInnerHTML={{ __html: description.slice(0, 120) }}
            />
            ...
          </p>
        </div>
        <div className="absolute bottom-5">
          <Link to={`/tasks/${_id}`}>
            <button
              href="#_"
              className="relative cursor-pointer mt-5 rounded px-4 py-2 overflow-hidden group bg-[#2f7562]  hover:bg-gradient-to-r hover:from-[#1F4B3F] hover:to-[#2ab993] text-white hover:ring-2 hover:ring-offset-2 hover:ring-green-500 transition-all ease-out duration-100"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
              <span className="relative flex items-center gap-1 font-bold">
                <BsLightningChargeFill className="yellow" size={18} /> See
                Details
              </span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventCard;
