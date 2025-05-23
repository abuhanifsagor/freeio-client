import React from "react";
import { useLoaderData } from "react-router-dom";
import FeaturedTasks from "../../components/FeaturedTasks/FeaturedTasks";
import Banner from "../../components/Banner/Banner";
import Faq from "../../components/FAQ/Faq";
import Testimonial from "../../components/testimonial/Testimonial";
import { Helmet } from "react-helmet";
import Workflow from "../../components/workflow/Workflow";

const HomePage = () => {
  const tasks = useLoaderData();
  return (
    <div className="min-h-screen">
      <Helmet>
        <title> Freeio - Home </title>
      </Helmet>
      <Banner></Banner>
      <div className=" relative mb-96">
        <Workflow></Workflow>
      </div>
      <div className="md:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="hidden md:block lg:hidden">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <FeaturedTasks tasks={tasks} />
      <Faq></Faq>

      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
