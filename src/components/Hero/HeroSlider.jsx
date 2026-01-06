import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import slide1 from "../../assets/cover.JPG";
import slide2 from "../../assets/2.jpg";
import slide3 from "../../assets/80.jpg";

const HeroSlider = () => {
  return (
    <div className="w-full h-[360px] md:h-[520px] rounded-2xl overflow-hidden shadow-lg">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="w-full h-full">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide3}
              className="w-full h-full object-cover"
              alt="SSC Batch"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="px-6 md:px-16 max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold">
                  Welcome to <br /> SSC Batch 2018
                </h1>
                <p className="mt-4 text-sm md:text-lg text-white/90">
                  A journey of friendship, memories & unforgettable school days.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide1}
              className="w-full h-full object-cover"
              alt="Friends"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center">
              <div className="text-white">
                <h1 className="text-3xl md:text-5xl font-bold">
                  More Than Classmates
                </h1>
                <p className="mt-3 text-sm md:text-lg text-white/90">
                  We became a family 🤍
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={slide2}
              className="w-full h-full object-cover"
              alt="Memories"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center">
              <div className="px-6 md:px-16 max-w-2xl text-white">
                <h1 className="text-3xl md:text-5xl font-extrabold">
                  Memories That Last Forever 🎓
                </h1>
                <p className="mt-4 text-sm md:text-lg text-white/90">
                  SSC 2018 — Once a batch, always a bond.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
