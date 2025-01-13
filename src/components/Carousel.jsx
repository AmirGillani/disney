import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y,Autoplay  } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Carousel.css";

export default function SwiperComponent() {
  return (
   <div className="relative">

     <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay ]}
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
      className="swiper-container"
    >
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 w-full relative bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://res.cloudinary.com/dhh9j0ion/image/upload/v1736773763/disney-pink-castle-wallpaper-2560x1440_vzfu56.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 w-full relative bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://res.cloudinary.com/dhh9j0ion/image/upload/v1736773750/pink-disney-wallpaper-1500x857_rfwrqe.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 w-full relative bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://res.cloudinary.com/dhh9j0ion/image/upload/v1736773744/aesthetic-pink-and-purple-disney-wallpaper-computer-1920x960_vhlzqm.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 w-full relative bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://wallpapercat.com/w/full/0/5/8/163074-2000x1381-desktop-hd-frozen-wallpaper-photo.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 w-full relative bg-fixed bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://images7.alphacoders.com/710/710298.jpg')] bg-cover bg-center flex justify-center items-center"></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-container md:h-screen h-96 bg-fixed w-full relative bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.2),rgba(0,0,0,5)),url('https://wallpapercat.com/w/full/f/6/4/87265-3840x2160-desktop-4k-encanto-background-photo.jpg')] bg-cover bg-center flex justify-center items-center">
         
        </div>
      </SwiperSlide>
      {/* Additional slides can be added here */}
    </Swiper>
    
   </div>
  );
}
