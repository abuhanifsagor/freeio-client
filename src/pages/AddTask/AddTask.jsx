import React, { use, useState } from "react";
import { AuthContext } from "../../provider/AuthContextProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { format } from "date-fns";

const AddTask = () => {
  const { user } = use(AuthContext);
  const { displayName, email } = user;
  const [loading, setLoading] = useState(false);
  const handeleFromsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTask = Object.fromEntries(formData.entries());
    if (newTask.deadline) {
      newTask.deadline = format(new Date(newTask.deadline), "MM/dd/yyyy");
    }
    //https://freeio-server.vercel.app/
    
    // Send data to server
    setLoading(true);
    fetch("https://freeio-server.vercel.app/addTask", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Task Added Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          setLoading(false);
          form.reset();
        }
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          position: "center",
          timer: 1500,
          showConfirmButton: false,
          text: "Something went wrong!",
        });
      });
  };
  return (
    <div className="min-h-screen flex items-center">
      <Helmet>
        <title> Freeio - Add Task </title>
      </Helmet>
      <div className="container px-4  mx-auto">
        <h1 className="text-3xl font-semibold">
          Add Your Task to - <b className="text-[#328166]">Freeio</b>
        </h1>
        <div className="mt-8 pb-5    ">
          <div className="max-w-3xl  border border-gray-200 mx-auto py-10 p-4 md:p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Add a New Task
            </h2>
            <form onSubmit={handeleFromsubmit} className="space-y-5">
              <label className="floating-label block">
                <span>Task Title</span>
                <input
                  type="text"
                  name="taskTitle"
                  required
                  placeholder="Enter task title"
                  minLength={5}
                  className="input validator input-md w-full"
                />
                <p>Must be at least 5 characters</p>
              </label>

              <div className="grid grid-cols-2 gap-4">
                <label className="floating-label block">
                  <span>Category</span>
                  <select
                    name="category"
                    required
                    className="input validator  select  input-md w-full"
                  >
                    <option disabled selected value="" >Select a category</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Design">Design</option>
                    <option value="Mobile Development">
                      Mobile Development
                    </option>
                    <option value="Data Science">Data Science</option>
                    <option value="AI">AI</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Cybersecurity">Cybersecurity</option>
                    <option value="Cloud Computing">Cloud Computing</option>
                    <option value="Blockchain">Blockchain</option>
                    <option value="Product Management">
                      Product Management
                    </option>
                    <option value="Writing">Writing</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                  </select>
                  <p className="validator-hint">Required</p>
                </label>
                <label className="floating-label block">
                  <span>Budget ($)</span>
                  <input
                    name="budget"
                    type="number"
                    required
                    min="5"
                    placeholder="Enter your budget"
                    className="input validator input-md w-full"
                  />
                  <p className="validator-hint">Must be at least 5$</p>
                </label>
              </div>
              <label className="floating-label block">
                <span>Photo URL</span>
                <input
                  name="photoURL"
                  required
                  placeholder="Photo URL"
                  className="input input-md w-full"
                  type="url"
                  defaultValue={"https://i.ibb.co/YFqFN7pM/image.png"}
                />
              </label>
              <label className="floating-label block">
                <span>Description</span>
                <textarea
                  name="description"
                  required
                  minLength={25}
                  placeholder="Describe what needs to be done"
                  className="textarea textarea-md w-full"
                />
              </label>

              <label className="floating-label block">
                <span>Deadline</span>
                <input
                  type="date"
                  name="deadline"
                  className="input validator input-md w-full"
                  required
                  placeholder="Pick a date in 2025"
                  min="2025-01-01"
                  title="Must be valid URL"
                />
                <p className="validator-hint">Must be 2025</p>
              </label>

              <input
                type="text"
                readOnly
                name="username"
                placeholder={displayName}
                defaultValue={displayName}
                className="input text-stone-400 input-md w-full"
              />

              <input
                type="text"
                readOnly
                name="email"
                defaultValue={email}
                placeholder={email}
                className="input text-stone-400 input-md w-full"
              />
              <button
                type="submit"
                className={`btn hover:bg-[#27634e] text-white bg-[#328166] w-full ${loading ? "cannot" : ""}`}
              >
                {loading ? "Adding Task..." : "Add Task"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
