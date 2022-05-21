import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Lazy, Autoplay, Pagination, Navigation } from "swiper";
import bannar1 from "../../../../assets/Images/Bannar-1.jpg";
import bannar2 from "../../../../assets/Images/Bannar-2.jpg";
import bannar3 from "../../../../assets/Images/Bannar-3.jpg";
import sign from "../../../../assets/Images/sign.png";
import bannarStyle from "../../../../assets/Styles/Bannar.module.css";


const Bannar = () => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                lazy={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Lazy, Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide style={{ position: "relative" }}>
                    <img src={bannar1} alt="Slider Bannar" />
                    <div className={bannarStyle.textPosition}>
                        <h1>RADIO. <span className={bannarStyle.headingColor}>102.5</span> </h1>
                        <h1>ONAIR.</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <img src={sign} alt="Bannar Sign" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar2} alt="Slider Bannar" />
                    <div className={bannarStyle.textPosition}>
                        <h1>RADIO. <span className={bannarStyle.headingColor}>102.5</span> </h1>
                        <h1>ONAIR.</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <img src={sign} alt="Bannar Sign" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={bannar3} alt="Slider Bannar" />
                    <div className={bannarStyle.textPosition}>
                        <h1>RADIO. <span className={bannarStyle.headingColor}>102.5</span> </h1>
                        <h1>ONAIR.</h1>
                        <p>Nullam et interdum odio. Etiam laoreet ex id gravida volutpat.
                            Vestibulum pulvinar nisl quis lobortis bibendum.</p>
                        <img src={sign} alt="Bannar Sign" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Bannar;