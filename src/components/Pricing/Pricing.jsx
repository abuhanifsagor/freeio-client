import React, { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div>
      <section className="py-6 ">
        <div className="container mx-auto p-4 sm:p-10">
          <div className="mb-16 space-y-4 text-center">
            <h1 className="text-4xl font-semibold leading-tight">Pricing</h1>
            <p className="px-4 sm:px-8 lg:px-24">
              Choose the plan that fits your needs. Our flexible pricing is designed for freelancers, professionals, and agencies.
            </p>
            <div>
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-4 py-1 font-semibold border rounded-l-lg ${
                  !isAnnual
                    ? "dark:bg-green-600 dark:border-green-600 dark:text-gray-50"
                    : "dark:border-green-600"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-4 py-1 border rounded-r-lg ${
                  isAnnual
                    ? "dark:bg-green-600 dark:border-green-600 dark:text-gray-50"
                    : "dark:border-green-600"
                }`}
              >
                Annually
              </button>
            </div>
          </div>

          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md">
              <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-green-600 dark:text-gray-50">
                Personal
              </span>
              <p className="my-6 text-4xl font-bold dark:text-green-600">
                FREE
              </p>
              <ul className="flex-1 space-y-2">
                <li>✅ Basic task browsing</li>
                <li>✅ Post up to 2 tasks/month</li>
                <li>✅ Limited bidding access</li>
                <li>✅ Email support only</li>
              </ul>
              <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-green-600 cursor-pointer duration-300 hover:bg-green-600 hover:text-gray-50">
                Subscribe
              </button>
            </div>

            <div className="relative flex flex-col items-center p-8 border-2 rounded-md dark:border-green-600 ">
              <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-green-600 dark:text-gray-50">
                Professional
              </span>
              <p className="flex items-center justify-center my-6 space-x-2 font-bold">
                {isAnnual ? (
                  <>
                    <span className="text-lg line-through ">
                      384$
                    </span>
                    <span className="pb-2 text-4xl dark:text-green-600">199$</span>
                    <span className="text-lg">/year</span>
                  </>
                ) : (
                  <>
                    <span className="text-lg line-through ">
                      32$
                    </span>
                    <span className="pb-2 text-4xl dark:text-green-600">19$</span>
                    <span className="text-lg">/mo</span>
                  </>
                )}
              </p>
              <ul className="flex-1 space-y-2">
                <li>✅ Unlimited task posting</li>
                <li>✅ Unlimited bidding</li>
                <li>✅ Profile boost & featured badge</li>
                <li>✅ Priority email & chat support</li>
              </ul>
              <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-green-600 cursor-pointer duration-300 hover:text-gray-50 hover:bg-green-600">
                Subscribe
              </button>
            </div>

            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md">
              <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-green-600 dark:text-gray-50">
                Enterprise
              </span>
              <p className="my-6 text-4xl font-bold dark:text-green-600">
                {isAnnual ? "499$" : "49$"}
              </p>
              <ul className="flex-1 space-y-2">
                <li>✅ Team account access</li>
                <li>✅ API integration & analytics</li>
                <li>✅ Dedicated account manager</li>
                <li>✅ 24/7 live support</li>
              </ul>
              <button className="px-4 py-2 mt-4 cursor-pointer duration-300 hover:bg-green-600 hover:text-gray-50 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-green-600 ">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
