import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const SwiperHome = () => {
  return (
    <div className="w-full h-[450px] top-[245px]  flex justify-center py-12">
      <Swiper
        slidesPerView={5}
        spaceBetween={5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-01-pz1lq4necupf49mjbs81pyp0ongj06e4mq4muqb6z0.webp"
            alt="Slide 1"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-02-pz1lpzy7eoizi7td386wvhvppq3oxovgy2v7gci5u4.webp"
            alt="Slide 2"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-03-pz1lok92ysk7rnwgh3ufkcxd1j6i6c68eyzi24mtcc.webp"
            alt="Slide 3"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-04-pz1lq8er46ukeph2ptujzxqv26xzuyt1z8qkru5ma4.webp"
            alt="Slide 4"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-01-pz1lq4necupf49mjbs81pyp0ongj06e4mq4muqb6z0.webp"
            alt="Slide 4"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-02-pz1lpzy7eoizi7td386wvhvppq3oxovgy2v7gci5u4.webp"
            alt="Slide 4"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-03-pz1lok92ysk7rnwgh3ufkcxd1j6i6c68eyzi24mtcc.webp"
            alt="Slide 4"
            className="rounded-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://emart.wpthemedemos.com/fashion-hub/wp-content/uploads/sites/4/elementor/thumbs/fashion-hub-slider-img-04-pz1lq8er46ukeph2ptujzxqv26xzuyt1z8qkru5ma4.webp"
            alt="Slide 4"
            className="rounded-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
