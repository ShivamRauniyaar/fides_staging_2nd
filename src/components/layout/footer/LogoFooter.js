import Image from "next/image";
import Link from "next/link";
import logoImag1 from "@/assets/img/logo/Logo_1.png";
import logoImag2 from "@/assets/img/logo/Logo_2.png";
import logoImg from "@/assets/img/logo/logofidesgroup.jpg";

const LogoFooter = ({ style }) => {
  return (
    <div
      className={`col-xl-4 ${!style ? "col-lg-6" : "col-lg-4"} col-md-6`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <div
        className="footer__widget footer__left position-relative "
        // style={{ zIndex: 10 }}
      >
        <div className="footer__logo">
          {style === 2 ? (
            <>
              <Image src={logoImg} alt="" className="logo-image1" />
              <Image src={logoImg} alt="" className="logo-image2" />
            </>
          ) : (
            <Image src={logoImg} alt="" />
          )}
        </div>
        <div className="footer__text">
          <p>Trust, Faith, Belief & Confidence</p>
        </div>
        <div className="footer__icon">
          <ul>
            <li>
              <Link href="#">
                <i className="icofont-facebook"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-twitter"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-skype"></i>
              </Link>
            </li>
            <li>
              <Link href="#">
                <i className="icofont-linkedin"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LogoFooter;
