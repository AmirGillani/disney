import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function SwiperComponent() {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 2500, // Set the autoplay delay (2.5 seconds per slide)
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM2XkhVNJUg8kY53cEaVw8vrGe1JvTLDtmVw&s" alt="" className="w-full h-full" />
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
         
        </SwiperSlide>
        <SwiperSlide>
          
        </SwiperSlide>
        <SwiperSlide>
         
        </SwiperSlide>
        <SwiperSlide>
         
        </SwiperSlide>
        {/* Additional slides can be added here */}
      </Swiper>
    </div>
  );
}
