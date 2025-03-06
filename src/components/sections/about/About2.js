import aboutImage2 from "@/assets/img/about/about__2.png";
import aboutSmallImage2 from "@/assets/img/about/about__small__img__2.png";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";
import Link from "next/link";

const About2 = ({ id }) => {
  return (
    <div
      className="about position-relative sp_bottom_140 sp_top_140"
      id={id || "about__mission__area"}
    >
      <div className="container">
        <div className="row">
          {/* Left Column - Image Section */}
          <div
            className="col-xl-6 col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="1800"
          >
            <div className="about__img__wrapper about__img__wrapper--2 position-relative" data-tilt>
              <Image
                className="about__img__1"
                src={aboutImage2}
                alt="Company overview image"
                placeholder="blur"
              />
              <div className="about__big__title">
                <h1>About Us</h1>
              </div>
              <div className="section__strock__line__animation">
                <Image
                  className="ssla__animation ssl__img__3"
                  src={aboutSmallImage2}
                  alt="Decorative animation"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content Section */}
          <div
            className="col-xl-6 col-lg-6 col-md-12"
            data-aos="fade-up"
            data-aos-duration="2100"
          >
            <div className="about__inner about__inner--2">
              <div className="section__title section__title--2 sp_bottom_30">
                <div className="section__title__button">
                  <span className="text__gradient">About Company</span>
                </div>
                <div className="section__title__heading">
                  <h3>Trust, Loyalty, Assurance &amp; Integrity.</h3>
                </div>
              </div>

              <div className="about__vision__wrapper">
                <div className="about__text__wrapper">
                  <div className="about__misson">
                    <h6>Mission &amp; Vision</h6>
                  </div>
                  <div className="about__text__2">
                    <p>
                      {`The word "FIDES" is derived from Latin, signifying Trust, 
                      Loyalty, Assurance, and Integrity, reflecting the company's 
                      core values and commitment to its clients. Fides Group is a 
                      dynamic and growing entity in the Financial Sector, offering a 
                      comprehensive suite of financial services and solutions. It serves 
                      as a one-stop platform for all financial planning and investment needs.`}
                    </p>
                    <p>
                      {`Our vision is to deliver the most reliable and customized 
                      financial products from a vast array of options available in 
                      the market. The company is led by a team of experienced financial 
                      strategists and certified chartered accountants, dedicated to 
                      ensuring customer satisfaction and financial success.`}
                    </p>
                  </div>
                  <div className="about__button">
                    <ButtonPrimary
                      text="LEARN MORE ABOUT"
                      path="/about"
                      button="black"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
