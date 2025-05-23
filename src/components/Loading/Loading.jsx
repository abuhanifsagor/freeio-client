import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center fixed top-0 z-50 overflow-hidden items-center w-full h-screen bg-base-100">
      <div className="flex justify-center items-center max-w-2xl  h-screen">
        <div>
          <DotLottieReact
            src="https://lottie.host/036d35a8-fdd9-467b-8366-0bee7e2a84b1/QZsGtOBnZM.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
