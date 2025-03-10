import BrandBadge from "@/components/shared/badges/BrandBadge";
import Image from "next/image";
import heroBgImage1 from "@/assets/img/herobaner/herobanner__bg__1.png";
import heroImage5 from "@/assets/img/herobaner/herobanner__5.jpg";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const Hero2 = ({ title, img, description }) => {
  return (
    <div
      className="herobanner herobanner--2 position-relative d-flex align-items-center height__1028 herobanner__with__transparent__header"
      style={{ background: `url('${heroBgImage1.src}')` }}
    >
      <div className="container">
        <div className="herobanner__wrapper">
          <div className="herobanner__single">
            <div className="row align-items-center">
              <div
                className="col-xl-6 col-lg-6 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <div className="herobanner__content__wrapper">
                  <div className="herobanner__title herobanner__title--2">
                    <h1>{title ? title : "NAVIGATION SUCCESS TOGETHER"}</h1>
                  </div>
                  <div className="herobanner__text herobanner__text--2">
                    <p>{description}</p>
                  </div>
                  <div className="herobanner__button">
                    <ButtonPrimary text="OUR ALL SERVICES" path="/services" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BrandBadge badge={"hero"} />
      {console.log(img, "img")}

      <div
        className="herobanner__img herobanner__img--2"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage:  `url(${img.src})`, // Ensure the image is handled correctly
          height: "100%", // Fixed height value
          width: "100%"
          
        }}
      >
        {/* Optionally use Image component for SEO or better image handling */}
        {/* <Image src={img ? img.src : heroImage5} alt="Hero Image" /> */}
      </div>
    </div>
  );
};

export default Hero2;
