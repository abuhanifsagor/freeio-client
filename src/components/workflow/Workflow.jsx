// HowItWorks.jsx
import React, { useEffect, useState } from "react";

const Workflow = () => {
  const steps = [
    {
      title: "Post a job",
      description:
        "It’s free and easy to post a job. Simply fill in a title, description.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      ),
    },
    {
      title: "Freelancers",
      description:
        "Browse profiles, view portfolios, and select the right talent for your project.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: "Pay safely",
      description:
        "Secure payments are released only when work is completed and approved.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="1" y="4" width="22" height="16" rx="2"></rect>
          <line x1="1" y1="10" x2="23" y2="10"></line>
        </svg>
      ),
    },
    {
      title: "We’re here to help",
      description:
        "Our support team is available to assist you at every step of the way.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
    },
  ];
 const [scrolledDown, setScrolledDown] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setScrolledDown(window.scrollY > 50); // adjust threshold if needed
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section
      className={`
        py-15 absolute w-full z-30 rounded-[40px] bg-base-100 px-4
         duration-300 ease-in-out
        ${scrolledDown ? '-top-20' : '-top-10'}
      `}
    >
      <div className="container  mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold ">Need something done?</h2>
        <p className="text-lg  opacity-55 mb-8">
          Most viewed and all-time top-selling services
        </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex space-y-4  flex-col items-center md:items-start">
              <div className="p-3 rounded-full  bg-[#D1E7DD] text-[#1F4B3F]">
                {step.icon}
              </div>
              <div>
                <h3 className="text-lg text-center sm:text-xl md:text-start font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm md:text-base text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
