import React from "react";
import { Helmet } from "react-helmet";

const Policy = () => {
  return (
    <div>
      <div className="max-w-4xl min-h-screen mx-auto px-6 py-10 ">
        <Helmet>
          <title> Freeio - Privacy & Policy </title>
        </Helmet>
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introduction</h2>
          <p className="opacity-70">
            Your privacy is important to us. At <b>Freeio</b>, we are committed
            to protecting the personal information you share with us. This
            Privacy Policy outlines how we collect, use, disclose, and safeguard
            your information when you visit our website or use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Information We Collect</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <strong className="border-b border-acent border-dashed">Personal Data:</strong> When you register, log in, or
              interact with our platform, we may collect personal information
              such as your name, email address, phone number, and profile
              picture.
            </li>
            <li>
              <strong className="border-b border-acent border-dashed">Usage Data:</strong> We automatically collect information
              about how you access and use our website, including device
              information, IP address, browser type, and pages visited.
            </li>
            <li>
              <strong className="border-b border-acent border-dashed">Cookies:</strong> We use cookies and similar tracking
              technologies to enhance user experience, analyze usage patterns,
              and personalize content.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p className="opacity-70">We may use your information to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide and maintain our services;</li>
            <li>Improve, personalize, and expand our offerings;</li>
            <li>
              Communicate with you, including sending updates, promotional
              materials, and support;
            </li>
            <li>Process transactions and manage reservations;</li>
            <li>Prevent fraud and ensure security;</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Data Retention</h2>
          <p className="opacity-70">
            We retain your personal data only for as long as necessary to
            fulfill the purposes outlined in this Privacy Policy or as required
            by law. After that, your data will be deleted or anonymized.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Your Rights</h2>
          <p className="opacity-70">You have the right to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Access the personal information we hold about you;</li>
            <li>Request correction of inaccurate or incomplete data;</li>
            <li>Request deletion of your personal data;</li>
            <li>Object to or restrict processing of your data;</li>
            <li>Withdraw consent where applicable.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Policy;
