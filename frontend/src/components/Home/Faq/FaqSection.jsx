import FaqCard from "./FaqCard";

const faqData = [
  {
    question: "How do I apply for a loan?",
    answer:
      "You can apply for a loan by selecting a loan from the 'All Loans' page and clicking the 'Apply Now' button. Fill out the application form with your details and submit it for review."
  },
  {
    question: "How long does loan approval take?",
    answer:
      "Loan approval usually takes 24–48 hours depending on verification. You can track your application status from your dashboard in real-time."
  },
  {
    question: "What documents are required for loan application?",
    answer:
      "You need to provide your National ID or Passport number, income details, contact information, and address. Additional documents may be required based on the loan type."
  },
  {
    question: "Can I cancel my loan application?",
    answer:
      "Yes, you can cancel your loan application anytime before it is approved. Once approved, cancellation may not be available."
  },
  {
    question: "How do I pay the loan application fee?",
    answer:
      "You can pay the application fee through the 'Pay' button in your dashboard. The payment is securely processed via Stripe."
  },
  {
    question: "Who can apply for a loan?",
    answer:
      "Any registered user with a valid account can apply for a loan. However, managers and admins are not allowed to apply."
  }
];

const FaqSection = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-10 py-10 space-y-6">
      
      {/* Heading */}
      <div className="text-center max-w-2xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold mb-4">
          Frequently Asked Questions
        </h3>
        <p className="text-gray-600 text-sm md:text-base">
          Everything you need to know about applying, managing, and repaying loans with LoanLink.
        </p>
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <FaqCard
            key={index}
            question={item.question}
            answer={item.answer}
          />
        ))}
      </div>

    </section>
  );
};

export default FaqSection;