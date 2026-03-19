import React from "react";
import Container from "../Shared/Container";

const steps = [
  {
    id: 1,
    title: "Apply for Loan",
    desc: "Fill out a simple application form with your basic details and loan requirements.",
    icon: "📝",
  },
  {
    id: 2,
    title: "Get Verified",
    desc: "Our team reviews your application and verifies your information quickly.",
    icon: "🔍",
  },
  {
    id: 3,
    title: "Loan Approval",
    desc: "Once approved, your loan is processed and ready for disbursement.",
    icon: "✅",
  },
  {
    id: 4,
    title: "Receive & Repay",
    desc: "Get your funds and repay easily with flexible EMI plans.",
    icon: "💳",
  },
];

const HowItWorks = () => {
  return (
    <Container>
      <div className="bg-white mt-20">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            How It Works
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Follow these simple steps to apply and manage your microloan بسهولة.
          </p>

          {/* Steps */}
          <div className="mt-12 grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-gray-50 hover:bg-amber-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div className="text-4xl">{step.icon}</div>

                {/* Step Number */}
                <div className="mt-3 text-sm font-semibold text-blue-600">
                  Step {step.id}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mt-2">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mt-2 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HowItWorks;
