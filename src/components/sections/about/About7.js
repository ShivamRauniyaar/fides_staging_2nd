import Image from "next/image";
import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import TestimonialSlide3 from "@/components/shared/testimonials/TestimonialSlide3";
const About7 = ({ id, type = 2 }) => {
  const [selectedAccordion, setSelectedAccordion] = useState(0);
  const chooseAccordionSection = [
    {
      id: 1,
      heading: "What is an Independent firm?",
      subHeading:
        "Independent firms are owned by the principals or partners of the firm. We are not employees of a large, “brand name” firm. Because of our independence, we have certain freedoms that an “employee” may not have. For instance, we are under no obligation to represent or use specific financial products or instruments produced by any particular firm which may not always be the best for you. We provide financial and health solutions to our clients from the basket of variety of resources available. That means we offer advice based on clients specific needs",
    },
    {
      id: 2,
      heading: "We are Relationship oriented",
      subHeading:
        "Our professionals can offer a comprehensive look at your financial affairs. Our focus is on relationship orientation. We are not transaction driven. We take the time to understand your vision for your future and that of your family. Once we understand you needs and what your goals are, we look at your whole financial picture to see what steps we need to take to help you achieve those goals. Only then we will make recommendations on investments, insurance, or tax and estate planning. At Fides, we attempt to ensure that each piece of your financial strategy is integrated and all aligned with your goals.",
    },
    {
      id: 3,
      heading: "A Team of Like Minded People",
      subHeading:
        "Although we are independent, we are not alone. We are a team of highly qualified professionals. Who are always ready to help you. We are here to make long term relationship and full fill your goals",
    },
  ];

  const testimonialsData = [
    {
      author: "Dr. Pratibha",
      profession: "",
      review:
        "I fully confide in Fides Group as it has left me so carefree with my finance management. The team of Fides are committed & reliably and the guidance given is remarkable as they seem to be masters in their fields. I feel blessed to have such a good supporting team that shares the whole burden of investment so that I can sit back and concentrate on my other priorities. Thanks guys. All the best. I will be your lifetime customer.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/DR-PRATIBHA-150x150.jpg",
    },
    {
      author: "Anik Dahiya",
      profession: "Student",
      review:
        "I renewed the insurance of my dad's car from Fides Group. Recently, when I required the claim for the same due to a minor accident, they helped me find a nearby showroom which provided a cashless settlement. Thanks guys for your prompt service.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/ANIK-DAHIYA-150x150.jpg",
    },
    {
      author: "Dr. Nitin Shiwach",
      profession: "",
      review:
        "Very happy with the insurance suggested for my car. I also took health insurance from them. I never expected such a professional approach. Thank you Fides Group. Keep up the good job. I have recommended Fides Group to more than 5 colleagues already just for their approach and support.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/DR-NITIN-SHIWACH-150x150.jpg",
    },
    {
      author: "Dr. Anshu",
      profession: "",
      review:
        "Very impressed with the comprehensive knowledge of various health disorders and helping me get the right insured amount and the right company for me and my family. Thank you very much.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/DR-ANSHU-150x150.jpg",
    },
    {
      author: "Amit Kumar Singh",
      profession: "IT Professional",
      review:
        "Fides is an absolute one-door solution for your financial problems. Their staff always makes sure to give the best advice irrespective of their profit. I have left my finances management and car insurance to them for the last 3-4 years and am relaxing myself. The best thing about Fides is that they will never keep you in the dark, are straightforward, and friendly. I wish you guys good luck for the future and count me as your lifetime customer.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/AMIT-KUMAR-SINGH-150x150.jpg",
    },
    {
      author: "DS Rawat",
      profession: "Govt. Officer",
      review:
        "I have been associated with Fides Group since its establishment, dealing with motor vehicle insurance, travel insurance, SIP & mutual funds, and other financial products. I really appreciate and commend the company's comprehensive, prompt, genuine, and unparalleled services in the field. I am glad to be part of the company.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/DS-RAWAT-150x150.jpg",
    },
    {
      author: "Dr. Ritu Singh",
      profession: "",
      review:
        "I am a working mother and hence I have the least time to take care of finances and insurances. As my husband is most of the time busy with his professional commitments, he introduced me to Fides Group. Believe me, these guys have made my life much easier. I don’t have to worry about my car insurance, tax saving, and any financial-related query. Staff is so caring and friendly to suggest the best deal. Thank you guys for making my life easier and because of you I can devote time to my baby girl and work. Wishing you all the best for your future endeavors.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/05/DR-RITU-150x150.jpg",
    },
    {
      author: "Naresh Kumar",
      profession: "Retd. Asst. Director (MHA)",
      review:
        "Staff of Fides Group is very cordial, honest, and dedicated towards their customers in financial investment and healthcare schemes. I have been in contact with them for the last 5-6 years. They advise customers according to their needs and also provide the best services to the customers. Thank you for giving me the best advice and services.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/04/NARESH-KUMAR-150x150.jpg",
    },
    {
      author: "Naveen Rawat",
      profession: "IT Professional",
      review:
        "The favorite thing about Fides Group is that they serve all my finance-related needs & I need not hunt for the best rates and customer service for my health, car, and travel insurance needs. The customer service is wonderful and my adviser is my go-to person for any doubts or questions. As for investment, I have SIP through Fides which takes care of my monthly investment budget and my risk appetite. I need not do daily trades as they manage it all based on my risk profile. Also, if the market is going up, my portfolio grows, and I need not worry about tracking individual stocks. Fides Group has made my finances easy so I can focus on work-life balance and enjoy what I love the most — my family.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/04/NAVEEN-RAWAT-150x150.jpg",
    },
    {
      author: "Dr. Manish Bhargava",
      profession: "",
      review:
        "Thank you for providing me with the best insurance premium. Your team has fantastic knowledge about various companies and the best-suited option for my car. Moreover, they are always polite, courteous, and able to answer even the worst of my questions. Thank you once again.",
      image:
        "https://www.fidesgroup.in/wp-content/uploads/2016/04/DR-MANISH-BHARGAVA-150x150.jpg",
    },
  ];
  return (
    <div
      className="about position-relative sp_bottom_120 sp_top_120"
      id={id ? id : "about__mission__area"}
    >
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div
              className="row position-relative"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <Swiper
                className="testimonial__3__slider__active position-static"
                grabCursor={true}
                pagination={
                  type === 1
                    ? null
                    : {
                        clickable: true,
                      }
                }
                navigation={true}
                slidesPerView={1}
                modules={type === 2 ? [Navigation] : [Navigation, Pagination]}
                breakpoints={{
                  768: {
                    slidesPerView: 1,
                  },

                  1200: {
                    slidesPerView: 1,
                  },
                }}
              >
                {testimonialsData?.map((slide, idx) => (
                  <SwiperSlide
                    className="testimonial__3__single__wraper  col-md-4"
                    key={idx}
                  >
                    <TestimonialSlide3 slide={slide} type={type} />
                  </SwiperSlide>
                ))}

                <div className="slider__controls__wrap slider__controls__pagination slider__controls__arrows">
                  <div
                    className={`swiper-button-next arrow-btn ${
                      type === 2 ? "arrow-btn-3" : "b"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4297 5.92999L20.4997 12L14.4297 18.07"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 12H20.33"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div
                    className={`swiper-button-prev arrow-btn ${
                      type === 2 ? "arrow-btn-3" : "b"
                    }`}
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.57031 5.92999L3.50031 12L9.57031 18.07"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.5 12H3.67"
                        stroke="#fff"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2  sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">Why Choose Us?</span>
                </div>
                <div className="section__title__heading">
                  <span>
                    We believe not all the financial advices and benefit are
                    same. There are differences in the way advisors and
                    consultant recommend solutions for their clients and the way
                    they apply the solution. We are an independent firm.
                  </span>
                </div>
              </div>
              <div className="faq__accordion">
                <div className="accordion">
                  {chooseAccordionSection?.map((item, index) => (
                    <div className="accordion-item" key={index}>
                      <h2
                        className="accordion-header"
                        id="headingOne"
                        onClick={() => {
                          setSelectedAccordion(
                            selectedAccordion === index ? null : index
                          );
                        }}
                      >
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          {item?.heading}
                        </button>
                      </h2>
                      {selectedAccordion === index && (
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                          style={{
                            transition: " 0.4s ease, opacity 0.4s ease",
                          }}
                        >
                          <div className="accordion-body">
                            <p>{item?.subHeading}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About7;
