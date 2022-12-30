import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

const Banner = ({ bannerList }) => {

  return (
    <div className="bannerWrap">
      <Swiper
        slidesPerView={2.5}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
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