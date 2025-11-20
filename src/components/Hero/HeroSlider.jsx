import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const HeroSlider = () => {
  return (
    <div className="w-full h-[350px] md:h-[500px] rounded-xl overflow-hidden mt-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        loop={true}
        className="w-full h-full">
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/16723837/pexels-photo-16723837.jpeg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Keep Your Pets Warm This Winter ❄️🐶
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/34746680/pexels-photo-34746680.jpeg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Cozy Outfits for Every Pet 🐾🧣
              </h1>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src="https://images.pexels.com/photos/34714770/pexels-photo-34714770.jpeg"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1 className="text-white text-3xl md:text-5xl font-bold">
                Safe, Warm & Healthy Pets ❤️❄️
              </h1>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
