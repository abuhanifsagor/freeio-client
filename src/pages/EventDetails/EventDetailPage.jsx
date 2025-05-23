"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import EventCard from "../../components/EventCard/EventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContextProvider";
import { TiStarFullOutline } from "react-icons/ti";
import CommentsSection from "../../components/Comments/CommentsSection";
import { FcInfo } from "react-icons/fc";

const EventDetailPage = () => {
  const { user } = useContext(AuthContext);
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [relatedtasks, setRelatedtasks] = useState([]);
  const [progressValues, setProgressValues] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const randomValues = Array.from({ length: 5 }, () =>
      Math.floor(Math.random() * 101)
    );
    setProgressValues(randomValues);
  }, []);
  useEffect(() => {
    setLoading(true);
    fetch("https://freeio-server.vercel.app/alltasks")
      .then((response) => response.json())
      .then((data) => {
        const selectedTask = data.find((t) => t._id === taskId);
        setTask(selectedTask);

        const shuffledTasks = data
          .filter((t) => t._id !== taskId)
          .sort(() => Math.random() - 0.5);

        setRelatedtasks(shuffledTasks);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch tasks:", error);
      });
  }, [taskId]);
  if (loading) {
    return;
  }
  if (!task) {
    return (
      <div className="flex justify-center items-center h-screen px-5">
        <div className="max-w-xl text-xl text-center">
          The task you are looking for is not found , please try again or
          contact us
        </div>
      </div>
    );
  }

  //  BID FUNCTION
  const handleBid = async (id, taskEmail, email = user?.email) => {
    if (email === taskEmail) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can't bid on your own task",
      });

    } 
    
    else {
      try {
        const res = await fetch(
          `https://freeio-server.vercel.app/alltasks/${id}/bid`,
          {
            method: "PATCH",
          }
        );
        const data = await res.json();

        if (data.modifiedCount > 0) {
          Swal.fire("Success!", "You have bid for this task!", "success");
          setTask((prev) => ({
            ...prev,
            bidsCount: (prev.bidsCount || 0) + 1,
          }));
        } else {
          Swal.fire("Oops!", "Could not update bid count.", "warning");
        }
      } catch (error) {
        Swal.fire("Error", "Failed to bid", "error");
        console.error(error);
      }
    }
  };
  // progress bar rating

  return (
    <>
      <Helmet>
        <title> Freeio - Task Details | {task.taskTitle} </title>
      </Helmet>

      <section className="min-h-screen mt-10">
        <div className="container min-h-screen p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4  items-start justify-between">
            <span className="text-2xl font-extrabold md:text=3xl p-4 hover:border-red-600 border-b-2 duration-600 border-primary rounded-l-full">
              Task Details
            </span>

            <div role="alert" className="alert mx-auto sm:mx-0">
              {task.bidsCount > 0 ? (
                <p className="flex gap-2 italic items-center">
                  <FcInfo />
                  <span>
                    {" "}
                    You've bid for{" "}
                    <strong className="text-purple-500 text-lg">
                      {" "}
                      {task.bidsCount || 0}
                    </strong>{" "}
                    opportunities
                  </span>
                </p>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="md:grid mt-15 flex flex-col grid-cols-12 gap-6">
            <div className="w-full order-1 h-64 rounded sm:h-96 md:col-span-7  bg-base-300">
              <img
                loading="lazy"
                src={task.photoURL}
                alt={task.taskTitle}
                className="object-contain object-center w-full h-full "
              />
            </div>

            <div className="p-6  relative   order-0 md:order-2 space-y-2 md:col-span-5">
              <div className="flex items-center gap-5">
                <h3 className="text-xl md font-semibold sm:text-4xl">
                  {task.username}
                </h3>
              </div>
              <p>
                <b>Contact mail:</b> {task.email}
              </p>
              <p>
                <strong>Budget:</strong> {task.budget}
              </p>

              <div className="w-full lg:absolute lg:bottom-0">
                <button
                  onClick={() => handleBid(task._id, task.email)}
                  className="relative mt-5 cursor-pointer px-5 py-2 font-medium w-2/3  text-white group"
                >
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform translate-x-0 -skew-x-12 bg-[#245749] group-hover:bg-[#173d33c7] group-hover:skew-x-12"></span>
                  <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-out transform skew-x-12 bg-[#173d33c7] group-hover:bg-[#245749] group-hover:-skew-x-12"></span>
                  <span className="absolute bottom-0 left-0 hidden w-10 h-20 transition-all duration-100 ease-out transform -translate-x-8 translate-y-10 bg-[#245749] -rotate-12"></span>
                  <span className="absolute bottom-0 right-0 hidden w-10 h-20 transition-all duration-100 ease-out transform translate-x-10 translate-y-8 bg-[#173d33c7] -rotate-12"></span>

                  <span className="relative">Bid now</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col  justify-between">
            <div className="mt-12   space-y-3 md:max-w-md lg:max-w-4xl">
              <h2 className="text-3xl font-bold mb-6">Task Description</h2>
              <p className="text-2xl md:text-3xl font-bold">{task.taskTitle}</p>

              <div className="flex gap-3 flex-col md:flex-row md:gap-5">
                <p>
                  <b>Category:</b> {task.category}
                </p>
                <p>
                  <b>Deadline :</b> {task.deadline}
                </p>
              </div>
              <p>
                <b>
                  Description: <br />
                </b>
                <span dangerouslySetInnerHTML={{ __html: task.description }} />
              </p>

              <div className="flex flex-col gap-2">
                <h2 className="text-2xl font-bold py-4">Rating</h2>
                {progressValues.map((value, index) => (
                  <span key={index} className="flex items-center gap-3">
                    <span className="flex items-center justify-between  w-8 ">
                      {index + 1}{" "}
                      <TiStarFullOutline className="text-yellow-400" />
                    </span>{" "}
                    <progress
                      className="progress progress-warning  max-w-md"
                      value={value}
                      max="100"
                    ></progress>
                  </span>
                ))}
              </div>

              <CommentsSection taskId={taskId} />
            </div>
            <div className="max-w-3xl mx-auto my-10 px-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Task FAQs</h2>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="task-faq" defaultChecked />
                <div className="collapse-title font-semibold">
                  How do I place a bid on this task?
                </div>
                <div className="collapse-content text-sm">
                  Click the <strong>"Bid Now"</strong> button on this page.
                  You’ll need to be logged in to place a bid. Once submitted,
                  the task owner will see your offer and contact you if
                  selected.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="task-faq" />
                <div className="collapse-title font-semibold">
                  What payment methods are supported?
                </div>
                <div className="collapse-content text-sm">
                  Payments are handled outside the platform based on mutual
                  agreement between the task poster and the freelancer. We
                  recommend using trusted platforms like PayPal, bKash, or bank
                  transfers for secure transactions.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300 mb-2">
                <input type="radio" name="task-faq" />
                <div className="collapse-title font-semibold">
                  How do I know this task is legitimate?
                </div>
                <div className="collapse-content text-sm">
                  Our platform encourages users to verify their email and use
                  real profile details. Always review a user’s profile and
                  communicate clearly before accepting any work or sending
                  payment. If something feels off, report the task to our
                  support team.
                </div>
              </div>

              <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="task-faq" />
                <div className="collapse-title font-semibold">
                  Can I cancel my bid after submitting it?
                </div>
                <div className="collapse-content text-sm">
                  Once submitted, bids are not automatically cancellable. You
                  can contact the task owner and ask them to ignore your bid if
                  it was submitted by mistake.
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 ">
            <h2 className="text-3xl font-bold mb-6">Related tasks</h2>
            {relatedtasks.length > 0 ? (
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Pagination, Autoplay]}
                breakpoints={{
                  640: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {relatedtasks.map((relatedEvent) => (
                  <SwiperSlide key={relatedEvent._id}>
                    <EventCard event={relatedEvent} />
                  </SwiperSlide>
                ))}
                <br />
                <br />
              </Swiper>
            ) : (
              <p>No related tasks found.</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default EventDetailPage;
