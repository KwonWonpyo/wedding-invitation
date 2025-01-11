import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

const images = [
  `${process.env.PUBLIC_URL}/images/photos/4_5.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/1_6.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/1_5.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/1_8.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/2_1.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/3_1.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/3_2.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/3_4.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/3_5.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/4_2.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/4_3.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/4_6.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/1_1.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/4_8.jpg`,
  `${process.env.PUBLIC_URL}/images/photos/4_10.jpg`,
];

function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Mobile Layout */}
      <div className="flex flex-col w-full md:hidden items-center">
        <h1 className="text-3xl mb-5 font-noto-serif">갤러리</h1>
        {/* Main Image Slider */}
        <Swiper
          modules={[Navigation, Thumbs]}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          style={{ width: '300px', height: '450px' }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} style={{ display: 'flex', alignItems: 'center' }}>
              <img src={src} alt={`Slide ${index + 1}`} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          modules={[Pagination, Thumbs]}
          pagination={{ clickable: true, dynamicBullets: true }}
          onSwiper={setThumbsSwiper}
          spaceBetween={1}
          slidesPerView={5}
          watchSlidesProgress
          className="thumbnail-slider"
          style={{ width: '375px', height: '80px', marginTop: '30px' }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="thumbnail-slide">
              <div
                className="thumbnail-wrapper"
                style={{
                  width: '54px',
                  height: '54px',
                  overflow: 'hidden',
                  position: 'relative',
                  margin: 'auto',
                }}
              >
                <img
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: '54px',
                    height: '54px',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* PC Layout */}
      <h1 className="hidden md:block text-5xl mb-10">포토 갤러리</h1>
      <div className="hidden md:flex w-full flex-row max-w-[1080px] mx-auto">
        {/* Left Section: Main Image */}
        <div className="flex-1 flex justify-center items-center mr-10">
          <img
            src={images[currentIndex]}
            alt={`Big Banner `}
            className="h-[814px] object-contain"
          />
        </div>

        {/* Right Section: Thumbnails */}
        <div className="flex-1 grid grid-cols-3 gap-4 max-w-fit">
          {images.map((src, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-[150px] h-[150px] overflow-hidden cursor-pointer border ${
                index === currentIndex ? "border-gray-700" : "border-gray-300"
              }`}
            >
              <img
                src={src}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
