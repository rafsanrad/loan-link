import React from "react";
import Container from "../Shared/Container";

const features = [
  {
    id: 1,
    title: "Fast Approval",
    desc: "Get your loan approved within 24–48 hours with our quick verification system.",
    icon: "⚡",
  },
  {
    id: 2,
    title: "Secure Process",
    desc: "Your data is protected with industry-level security and encryption.",
    icon: "🔒",
  },
  {
    id: 3,
    title: "Flexible EMI Plans",
    desc: "Choose repayment plans that suit your financial situation.",
    icon: "📊",
  },
  {
    id: 4,
    title: "Real-time Tracking",
    desc: "Track your loan status, approvals, and payments from your dashboard.",
    icon: "📈",
  },
  {
    id: 5,
    title: "Trusted Platform",
    desc: "Used by hundreds of users for reliable and transparent loan services.",
    icon: "⭐",
  },
  {
    id: 6,
    title: "Easy Application",
    desc: "Apply for loans in just a few simple steps without hassle.",
    icon: "📝",
  },
];

const WhyChooseUs = () => {
  return (
    <Container>
      <section className=" py-16 px-4 md:px-10">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose LoanLink?
            </h2>
            <p className="text-gray-600">
              We provide a fast, secure, and user-friendly loan experience
              designed to meet your financial needs.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="hover:bg-red-200  rounded-xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};

export default WhyChooseUs;
