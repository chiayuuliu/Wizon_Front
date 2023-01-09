import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

const Banner = ({ bannerList }) => {

  return (
    <div className="bannerWrap">
      <Swiper
        slidesPerView={1.8}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.8,
            spaceBetween: 20,
          },
          1120: {
            slidesPerView: 2.5,
            spaceBetween: 20,
          }
        }}
      >
        {bannerList.map((v) => {
          return (
            <SwiperSlide
              key={v.file_id}>
              <img src=
                "https://fs.minilive.xyz/p/wizon/flceihnt3in5665rp308h0.jpg" alt="" />
            </SwiperSlide>
          )

        })}
        <SwiperSlide>
          <img src=" https://picsum.photos/id/9/600/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src=" https://picsum.photos/id/11/600/300" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Banner