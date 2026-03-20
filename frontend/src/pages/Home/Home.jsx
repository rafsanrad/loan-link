import HeroBanner from "../../components/Home/HeroBanner";
import HowItWorks from "../../components/Home/HowItWorks";
import Plants from "../../components/Home/Plants";
import Reviews from "../../components/Home/Reviews/Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());
const Home = () => {
  return (
    <div>
      <HeroBanner></HeroBanner>
      <Plants />
      <HowItWorks></HowItWorks>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      {/* More components */}
    </div>
  );
};

export default Home;
