import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";

const ReviewSlider = () => {
  return (
    <>
      <div className="grid py-5 mb-8 grid-cols-3 items-center md:grid-cols-2  gap-5">
        <div className="col-span-1">
          <h1 className="text-2xl md:text-4xl font-bold">
            What People Say About <b className="text-[#258d3fee]">Freeio</b>
          </h1>
        </div>
        <div className="col-span-2  rounded-md md:col-span-1">
          <Swiper
            grabCursor={true}
            autoplay={{ delay: 2000 }}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <Card className="mt-6 text-black rounded-lg  rounded-lg bg-[#dbfce7]  w-full">
                <CardBody className="">
                  <img
                    loading="lazy"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 mt-2"
                  >
                    UI/UX Designer
                  </Typography>
                  <Typography className="opacity-70">
                    Because it&apos;s about motivating the doers. Because
                    I&apos;m here to follow my dreams and inspire others.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-black rounded-lg bg-[#dbfce7]  w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://cdn.pixabay.com/photo/2022/03/27/00/55/black-woman-7093911_960_720.jpg"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 mt-2"
                  >
                    Full-Stack Developer
                  </Typography>
                  <Typography className="opacity-70">
                    Building scalable apps from scratch. I simplify complex
                    problems using modern tools to deliver solutions.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-black rounded-lg bg-[#dbfce7]  w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://i.ibb.co/TBXNkYhX/image.png"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 mt-2"
                  >
                    Digital Marketer
                  </Typography>
                  <Typography>
                    Turning clicks into conversions with strategy, content, and
                    analytics. Helping brands grow in the digital world.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>

            <SwiperSlide>
              <Card className="mt-6 text-black rounded-lg bg-[#dbfce7]  w-full">
                <CardBody>
                  <img
                    loading="lazy"
                    src="https://i.ibb.co/3mCZjGhd/image.png"
                    alt=""
                    className="w-12 h-12 object-cover rounded-full"
                  />
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 mt-2"
                  >
                    Content Writer
                  </Typography>
                  <Typography className="opacity-70">
                    Creating meaningful, engaging, and SEO-friendly content that
                    informs, inspires, and drives action.
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <a href="#" className="inline-block">
                    <Button
                      size="sm"
                      variant="text"
                      className="flex items-center gap-2"
                    >
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-4 w-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        />
                      </svg>
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default ReviewSlider;
