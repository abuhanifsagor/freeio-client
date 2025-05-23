import React from "react";
import { Helmet } from "react-helmet";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-10 ">
        <Helmet>
          <title>Freeio - Terms of Service</title>
        </Helmet>

        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
          <p className="opacity-70">
            Welcome to Freeio! By accessing or using our freelance task marketplace, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our services.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Description of Service</h2>
          <p className="opacity-70">
            Freeio is a freelance task marketplace that connects clients with skilled freelancers for task-based work. Clients can post tasks with budgets and deadlines, and freelancers can place bids to offer their services. We facilitate communication, agreements, and collaboration between users.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. User Accounts</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>You must create an account to access task posting and bidding features.</li>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>Provide accurate and up-to-date information when registering or updating your account.</li>
            <li>You may not share or transfer your account access to others.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Posting Tasks</h2>
          <p className="opacity-70">Clients are expected to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Provide clear and complete task details, including scope, budget, and deadline.</li>
            <li>Communicate respectfully and fairly with freelancers.</li>
            <li>Release payment only upon satisfactory task completion.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">5. Freelancer Responsibilities</h2>
          <p className="opacity-70">Freelancers are expected to:</p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Submit accurate bids and deliver high-quality work on time.</li>
            <li>Maintain professional communication with clients.</li>
            <li>Respect client confidentiality and comply with applicable laws.</li>
            <li>Avoid plagiarism and ensure all submitted work is original.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">6. Payments & Fees</h2>
          <p className="opacity-70">
            All transactions must be made through the Freeio platform. Platform service fees may apply, and these will be communicated transparently. Funds will be released to freelancers upon client approval of task completion.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">7. Intellectual Property</h2>
          <p className="opacity-70">
            Clients own the final deliverables unless otherwise agreed upon. Freelancers must not reuse, resell, or repurpose client work without permission. Freeio may use anonymized task data to enhance platform features.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">8. Account Suspension or Termination</h2>
          <p className="opacity-70">
            Freeio reserves the right to suspend or terminate user accounts in case of policy violations, fraudulent behavior, or misuse of services. Affected users will be notified accordingly.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
          <p className="opacity-70">
            Freeio provides services on an "as-is" basis. We are not liable for any disputes, delays, or damages resulting from user interactions, incomplete tasks, or third-party issues.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">10. Updates to Terms</h2>
          <p className="opacity-70">
            We may modify these Terms of Service at any time. Continued use of Freeio indicates your acceptance of the latest terms. Please check this page periodically for updates.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">11. Contact Us</h2>
          <p className="opacity-70">
            For any questions or concerns regarding these Terms, contact us at{" "}
            <a href="mailto:support@freeio.com" className="text-green-600 underline">
              support@freeio.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
