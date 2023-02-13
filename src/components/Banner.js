import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-2 h-32 bg-gradient-to-t from-gray-100 to to-transparent   " />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        dynamicHeight={false}
        showIndicator={false}
        showThumbs={false}
        interval={2000}
      >
        <div>
          <img
            className="object-fill h-50 w-96"
            loading="lazy"
            src={
              "https://n1.sdlcdn.com/imgs/k/f/v/12_april_WB_Kitchen_Essentials_WEB-cca82.jpg"
            }
            alt="c1"
          />
        </div>
        <div>
          <img
            className="object-fill h-50 w-96"
            loading="lazy"
            src={
              "https://n3.sdlcdn.com/imgs/j/8/e/Health_ID_Snapdeal_ABDM_1300X410-6c79d.jpg"
            }
            alt="c2"
          />
        </div>
        <div>
          <img
            className="object-fill h-50 w-96"
            loading="lazy"
            src={
              "https://n3.sdlcdn.com/imgs/k/f/v/12_april_WB_Breezy_Dresses_WEB-5febf.jpg"
            }
            alt="c3"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
