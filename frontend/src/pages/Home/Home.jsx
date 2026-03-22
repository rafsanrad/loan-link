import FaqSection from "../../components/Home/Faq/FaqSection";
import HeroBanner from "../../components/Home/HeroBanner";
import HowItWorks from "../../components/Home/HowItWorks";
import Plants from "../../components/Home/Plants";
import Reviews from "../../components/Home/Reviews/Reviews";
import WhyChooseUs from "../../components/Home/WhyChooseUs";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Plants />
      <HowItWorks></HowItWorks>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      <WhyChooseUs></WhyChooseUs>
      <FaqSection></FaqSection>
      {/* More components */}
    </div>
  );
};

export default Home;
