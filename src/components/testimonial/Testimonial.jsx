import React from "react";
import Pricing from "../Pricing/Pricing";
import ReviewSlider from "../ReviewSlider/ReviewSlider";
import Marquee from "react-fast-marquee";
const Testimonial = () => {
  const brandLogos = [
    {
      name: "Nike",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    },
    {
      name: "Apple",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    },
    {
      name: "Samsung",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
    },
    {
      name: "Adobe",
      logo: "https://blog.adobe.com/en/publish/2020/05/28/media_1d87bf78b1ce19defbef0c7858b4df696215a4048.png?width=750&format=png&optimize=medium",
    },
    {
      name: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    },
  ];
  return (
    <div>
      <section className="p-6 container mx-auto ">
        <div className=" p-4  text-center" bis_skin_checked="1">
          <h2 className="text-4xl font-bold">
            Trusted by the world’s leading brands
          </h2>
        </div>

        <div className="py-4 max-w-4xl mt-5 mx-auto">
          <Marquee
            speed={80}
            gradient={false}
            direction="left"
            pauseOnHover={true}
          >
            {brandLogos.map((brand, index) => (
              <div key={index} className="mx-8 flex items-center space-x-2">
                <div className="flex justify-center items-center">
                  <img
                    loading="lazy"
                    src={brand.logo}
                    alt={brand.name}
                    className="w-12 rounded-full p-2 h-12 bg-[#F5F5F5] object-contain"
                  />
                </div>
                <span className="text-lg font-semibold ">{brand.name}</span>
              </div>
            ))}
          </Marquee>
        </div>
      </section>
      <Pricing></Pricing>

      <div className="max-w-3xl mx-auto px-7">
        <ReviewSlider></ReviewSlider>
      </div>
    </div>
  );
};

export default Testimonial;
