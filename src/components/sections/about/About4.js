import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import aboutImage3 from "@/assets/img/about/fidgetasset.jpg";
const About4 = () => {
  return (
    <div
      className="about position-relative sp_bottom_140 sp_top_140"
      id="about__mission__area"
    >
      <div className="container">
        <div className="row align-items-center">
          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div
              className="about__img__wrapper about__img__wrapper--3"
              data-tilt
            >
              <Image className="about__img__1" src={aboutImage3} alt="" />
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="about__inner">
              <div className="section__title section__title--2 ">
                <div className="section__title__small">
                  <span>About us</span>
                </div>
                <div className="section__title__heading">
                  <h3>Trust, Faith, Belief & Confidence.</h3>
                </div>
              </div>
              <div className="about__text__2">
                <p>
                  The word FIDES has been derived from Latin Dictionary means
                  Trust, Faith, Belief & Confidence indicating the companies
                  Principles and values. Fides Group is one of the ever growing
                  company in the Financial Sector which deals in all Financial
                  Products. Its one point solution for all finance related
                  queries. Our vision is to provide best financial product from
                  variety of products available in market. The company managed
                  by a team of experienced business management professionals &
                  chartered accountants.
                </p>
              </div>

            

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About4;
