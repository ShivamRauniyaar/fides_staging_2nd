"use client";
import About2 from "@/components/sections/about/About2";
import Blogs2 from "@/components/sections/blogs/Blogs2";
import Brands2 from "@/components/sections/brands/Brands2";
import Contact1 from "@/components/sections/contacts/Contact1";
import CounterUp from "@/components/sections/counter-up/CounterUp";
import Hero2 from "@/components/sections/hero-banners/Hero2";
import Projects2 from "@/components/sections/projects/Projects2";
import Services2 from "@/components/sections/services/Services2";
import Team2 from "@/components/sections/team/Team2";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import PinkColor from "@/components/shared/others/PinkColor";
import { useHeaderContex } from "@/providers/HeaderContex";
import heroWebAgencyImage5 from "@/assets/img/herobaner/insuarance.jpg";
import Offer2 from "@/components/sections/offers/Offer2";
import aboutHrImage from "@/assets/img/about/about__hr.png";
import Pricing from "@/components/sections/pricing/Pricing";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import heroImage5 from "@/assets/img/herobaner/herobanner__5.jpg";  //mutualfunds.jpg
import mutualfunds from "@/assets/img/herobaner/mutualfunds.jpg";  //carinsuarance.jpg
import carinsuarance from "@/assets/img/herobaner/carinsuarance.jpg";   //lifeinsuarannce.jpg
import lifeinsuarannce from "@/assets/img/herobaner/lifeinsuarannce.jpg"; //smartinvestment.jpg
import smartinvestment from "@/assets/img/herobaner/smartinvestment.jpg";  //lifeinsuarance2.jpg
import lifeinsuarance2 from "@/assets/img/herobaner/lifeinsuarance2.jpg"; //lifeinsuarance3.jpg
import lifeinsuarance3 from "@/assets/img/herobaner/lifeinsuarance3.jpg";
import "swiper/css";
import "swiper/css/pagination";
const Home17Main = () => {
  const { isOnepage } = useHeaderContex();
  const homeSectionData = [
    {
      id: 1,
      t1: "Smart",
      t2: "Investing",
      description: "Find the perfect mutual fund for your goals.",
      img: heroWebAgencyImage5,
    },
    {
      id: 2,
      t1: "Secure",
      t2: "Your Future",
      description:
        "Protect your loved ones with the right life insurance plan.",
      img: lifeinsuarance3,
    },
    {
      id: 3,
      t1: "Drive",
      t2: "With Confidence",
      description:
        "Get comprehensive car insurance coverage at the best rates.",
      img: carinsuarance,
    },
    {
      id: 4,
      t1: "Maximize",
      t2: "Your Wealth",
      description: "Grow your wealth with top-performing mutual funds.",
      img: smartinvestment,
    },
    {
      id: 5,
      t1: "Protect",
      t2: "What Matters",
      description: "Reliable insurance solutions for life's uncertainties.",
      img: lifeinsuarannce,
    },
  ];
  

  return (
    <main>
      {/* <Hero2
        title={
          <>
            Smart <span className="text__gradient">Investing</span>
          </>
        }
        img={heroWebAgencyImage5}
      /> */}

      <Swiper
        // className="testimonial__slider__active__2 position-static"
        grabCursor={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1} // Keep it as 1 for full-slide view
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 1000, // Change slide every 5 seconds (adjust as needed)
          disableOnInteraction: false, // Allows autoplay to continue even after user interaction
        }}
        loop={true} // Ensure the slider loops around
        breakpoints={{
          575: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          992: {
            slidesPerView: 1,
          },
          1200: {
            slidesPerView: 1,
          },
          1500: {
            slidesPerView: 1,
          },
        }}
        // wrapperClass="testimonial__2__wrap"
      >
        {homeSectionData?.map((testimonial, idx) => (
          <SwiperSlide className="testimonial__single__slider wfull" key={idx}>
          <div>
            <Hero2
              title={
                <>
                  {testimonial?.t1}{" "}
                  <span className="text__gradient"> {testimonial?.t2}</span>
                </>
              }
              img={testimonial?.img}
              description={testimonial?.description}
            />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* <Brands2 isRotate={true} /> */}
      <About2 />
      <Testimonials2 />
      <Services2
        service={2}
        isBg={true}
        title={"We are providing following services available."}
      />
      <Offer2
        img={aboutHrImage}
        title={"RESOURCE PLANNING, SIMPLE TOOLS, POWERFUL EFFECTS."}
        tag="What we Offer"
        id={"about__mission__area"}
        isVideo={true}
      />
      <CounterUp />
      <Team2 />
      <PinkColor />
      <Projects2 />
      <div className="border__line"></div>
      <Testimonials2 />
      <Pricing plan={2} tag={"Price & Planning"} isGrdient={true} />
      <Blogs2 />
      {isOnepage ? <Contact1 pt={true} /> : ""}
    </main>
  );
};

export default Home17Main;
