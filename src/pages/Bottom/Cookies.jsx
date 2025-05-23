import React from "react";
import { Helmet } from "react-helmet";

const Cookies = () => {
  return (
    <div className="max-w-4xl min-h-screen mx-auto px-6 py-10 text-acent">
      <Helmet>
        <title>Freeio - Cookie Policy</title>
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Cookie Policy</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">What Are Cookies?</h2>
        <p className="opacity-70">
          Cookies are small data files placed on your device when you visit a website. They help websites remember your actions and preferences over time. At Freeio, we use cookies to enhance your experience, analyze how our site is used, and provide personalized services.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">How We Use Cookies</h2>
        <p className="opacity-70">We use cookies and similar tracking technologies for the following purposes:</p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>
            <strong className="border-b border-acent border-dashed"> Essential Cookies:</strong> These are necessary for the website to function properly. They enable basic features like page navigation and access to secure areas of the site.
          </li>
          <li>
            <strong className="border-b border-acent border-dashed">Performance and Analytics Cookies:</strong> These help us understand how visitors interact with our platform by collecting anonymous data about page visits, session duration, and more. This helps us improve user experience and site performance.
          </li>
          <li>
            <strong className="border-b border-acent border-dashed">Functionality Cookies:</strong> These allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, personalized features.
          </li>
          <li>
            <strong className="border-b border-acent border-dashed">Marketing and Advertising Cookies:</strong> These are used to deliver relevant advertisements based on your interests. They also help measure the effectiveness of advertising campaigns.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Types of Cookies We Use</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong className="border-b border-acent border-dashed">Session Cookies:</strong> Temporary cookies that expire when you close your browser.</li>
          <li><strong className="border-b border-acent border-dashed">Persistent Cookies:</strong> Remain on your device for a set period or until manually removed.</li>
          <li><strong className="border-b border-acent border-dashed">Third-Party Cookies:</strong> Set by external services such as Google Analytics or advertising partners.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Managing Cookies</h2>
        <p>
          Most web browsers allow some control over cookies through their settings. You can usually:
        </p>
        <ul className="list-disc ml-6 space-y-2 mt-2">
          <li>Block cookies from specific sites</li>
          <li>Delete existing cookies</li>
          <li>Get notified when a cookie is placed</li>
        </ul>
        <p className="mt-2">
          However, disabling certain cookies may impact the functionality of Freeio and prevent you from using some features like login or job posting.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Your Consent</h2>
        <p>
          By continuing to use our website, you consent to our use of cookies as described in this policy. You can withdraw your consent at any time by adjusting your browser settings or contacting us.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Changes to This Cookie Policy</h2>
        <p>
          We may update this Cookie Policy periodically to reflect changes in our practices or for legal or regulatory reasons. Any updates will be posted here with an updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact us at{" "}
          <a href="mailto:support@freeio.com" className="text-green-600 underline">
            support@freeio.com
          </a>
        </p>
      </section>
    </div>
  );
};

export default Cookies;