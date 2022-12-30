import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 3000,
      arrows: false,
      slidesToShow: 2.5,
      slidesToScroll: 1
    };
    return (
      <div className="bannerWrap">
        <Slider {...settings}>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
          <div className="imgWrap">
            <img src=" https://picsum.photos/id/1/600/300" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}