import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import EventCard from "../../components/EventCard/EventCard";
import { Helmet } from "react-helmet";

const BrowseTasks = () => {
  const alltask = useLoaderData();
  const [tasks, setTasks] = useState(alltask);
  const [sortOrder, setSortOrder] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");

  useEffect(() => {
    let filtered = [...alltask];

    // Filtering
    if (filterCategory !== "all") {
      filtered = filtered.filter((task) => task.category === filterCategory);
    }

    // Sorting
    if (sortOrder === "asc") {
      filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    } else if (sortOrder === "desc") {
      filtered.sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    }

    setTasks(filtered);
  }, [sortOrder, filterCategory, alltask]);

  const categories = ["all", ...new Set(alltask.map((task) => task.category))];

  return (
    <div className="min-h-screen container mt-25 mx-auto px-5">
      <Helmet>
        <title>Freeio - Browse Tasks</title>
      </Helmet>

      {/* Header Row */}
      <div className="flex flex-row items-center justify-between">
        <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
          All Tasks
        </span>
        <span className="text-2xl font-extrabold md:text=3xl p-2 px-3 hover:border-red-600 border-2 duration-600 border-primary rounded-full">
          {tasks.length}
        </span>
      </div>

      {/* Filter & Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-5 gap-4">
        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-full md:w-auto focus:outline-none border-2  border-primary"
        >
          <option value="">Sort by Deadline</option>
          <option value="asc">Deadline: Ascending</option>
          <option value="desc">Deadline: Descending</option>
        </select>

        {/* Filter */}
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="select select-bordered w-full md:w-auto focus:outline-none border-2 border-primary"
        >
          {categories.map((cat, idx) => (
            <option key={idx} value={cat}>
              {cat === "all" ? "All Categories" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Task Grid */}
      <div className="grid mt-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tasks.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      {/* Pagination Placeholder */}
      <div className="flex py-20 justify-center space-x-1">
        <div className="join">
          <input
            className="join-item btn btn-square"
            type="radio"
            name="options"
            aria-label="1"
            defaultChecked
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
