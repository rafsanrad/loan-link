import React, { useEffect, useState } from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import Container from "../../Shared/Container";

const Reviews = ({ reviewsPromise }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    reviewsPromise.then((data) => {
      setReviews(data);
    });
  }, [reviewsPromise]);

  return (
    <Container>
      <div className="my-16 px-4 md:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="font-bold text-3xl md:text-4xl mb-4">
            What our customers are saying
          </h3>
          <p className="text-gray-600 max-w-xl mx-auto">
            Real feedback from our users who trust LoanLink for fast and easy
            microloans.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // Responsivee
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          spaceBetween={10}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            scale: 0.85,
            slideShadows: false,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
};

export default Reviews;
