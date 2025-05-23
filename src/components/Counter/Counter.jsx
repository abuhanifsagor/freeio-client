import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Counter = () => {
  const { ref, inView } = useInView({
    threshold: 0.9,
  });
  return (
    <div className="scale-90 lg:scale-100">
      <div ref={ref} className=" mx-auto    rounded-lg mt-10 ">
        <div className="grid grid-cols-2  md:grid-cols-4 gap-6 text-center">
          <div className="p-2  md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={470} duration={2} />} M
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Total Freelancer
            </p>
          </div>
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={850} duration={2} />} M
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Positive Review
            </p>
          </div>
          <div className="p-2 md:p-3 ">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={98} duration={2} />} M
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Order recieved
            </p>
          </div>
          <div className="p-2 md:p-3">
            <h3 className="text-3xl font-bold">
              {inView && <CountUp end={250} duration={2} />} M
            </h3>
            <p className="mt-2 text-sm font-medium text-gray-400">
              Projects Completed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
