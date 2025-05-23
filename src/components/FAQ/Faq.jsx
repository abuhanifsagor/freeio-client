import React from "react";

const Faq = () => {
  return (
    <div>
      <section className=" pt-20">
        <div className="container max-w-5xl px-4 py-12 mx-auto">
          <div className="grid gap-4 mx-4 sm:grid-cols-12">
            <div className="col-span-12 sm:col-span-3">
              <div className="text-center sticky top-24 sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-[#2A6F57]">
                <h3 className="text-3xl font-semibold">How It Works</h3>
                <span className="text-sm font-bold tracking-wider uppercase text-gray-500">
                  Hire elite talent in easy steps
                </span>
              </div>
            </div>

            <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
              <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#2A6F57]">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Register or Login
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-500">
                    Step 1
                  </time>
                  <p className="mt-3">
                    Create an account or log in to your existing account to get
                    started.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#2A6F57]">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Find Out What You Need
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-500">
                    Step 2
                  </time>
                  <p className="mt-3">
                    Browse proposals from top-rated freelancers, review
                    portfolios, and pick the best fit.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#2A6F57]">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Get Started
                  </h3>
                  <time className="text-xs tracking-wide uppercase text-gray-500">
                    Step 3
                  </time>
                  <p className="mt-3">
                    Work directly with your freelancer using built-in tools, and
                    only pay when you're satisfied.
                  </p>
                </div>

                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#2A6F57]">
                  <h3 className="text-xl font-semibold tracking-wide">
                    Success Together 🥰
                  </h3>
                  <p className="mt-3">
                    Deliver high-quality results faster by working with vetted
                    experts who understand your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
