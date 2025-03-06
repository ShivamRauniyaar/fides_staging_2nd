"use client";
import getAllServices from "@/libs/getAllServices";
import serviceBgImage2 from "@/assets/img/service/service__bg__2.png";
import serviceBgImage5 from "@/assets/img/service/service__bg__5.png";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import Video2 from "../videos/Video2";
import { useSearchParams } from "next/navigation";
import Nodata from "@/components/shared/no-data/Nodata";
import projectImage15 from "@/assets/img/service/service__details__1.png";
import serviceImage6 from "@/assets/img/service/service__6.png";

const Services2 = ({ all, service, type, title, pt, pb, isBg, isNotTitle }) => {
  const currentCategory = useSearchParams().get("category");
  const allServices = getAllServices();
  const services = allServices
    ?.slice(all ? 0 : 10, all ? 6 : 13)
    .filter(({ category }) =>
      currentCategory
        ? category.toLowerCase().split(" ").join("-") === currentCategory
        : true
    );

  const allProvidingService = [
    {
      id: 1,
      title: "CAR INSURANCE",
      desc: "Way to Love your Car",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
    {
      id: 2,
      title: "HEALTH INSURANCE",
      desc: "Insure your future…..Today",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
    {
      id: 3,
      title: "HOME INSURANCE",
      desc: "Protection Guard for Your Loving Memories",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
    {
      id: 1,
      title: "TRAVEL INSURANCE",
      desc: "Go Ahead you can rely on us",
      detailsImg: projectImage15,
      img: serviceImage6,
      category: "Strategic Planning",
      duration: "1500",
    },
  ];
  return (
    <div
      className="service__video__sec__wrap"
      style={
        service === 2 && !isBg
          ? {}
          : {
              background: `var(--pinkcolor) url('${
                type === 2 ? serviceBgImage5.src : serviceBgImage2.src
              }')`,
            }
      }
    >
      {/* service__section__start --> */}
      <div
        className={`service__2   special__spacing ${
          pt || pb
            ? pt && pt
              ? `${pt} ${pb}`
              : pt
              ? pt
              : pb
            : service === 2
            ? `${
                isBg ? "sp_top_140 sp_bottom_70" : "ssp_bottom_100 sp_top_80 "
              }`
            : "sp_bottom_70 sp_top_140"
        }`}
        id="service__area"
      >
        <div className="container">
          {isNotTitle ? (
            ""
          ) : (
            <div className="row" data-aos="fade-up" data-aos-duration="1500">
              <div className="col-xl-12">
                <div className="section__title text-center sp_bottom_50">
                  <div className="section__title__button">
                    <span className="text__gradient">Our Service</span>
                  </div>
                  <div className="section__title__heading">
                    <h3>{title ? title : "WE OFFER CONSULTANCY SERVICES."}</h3>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            {!services?.length ? (
              <Nodata text={"No Service"} />
            ) : (
              allProvidingService?.map((service, idx) => (
                <ServiceCard2 key={idx} service={service} type={type} />
              ))
            )}
          </div>
        </div>
      </div>
      {/* service__section__end --> */}

      {/* video__section__start --> */}
      {service === 2 ? "" : <Video2 />}
      {/* video__section__end --> */}
    </div>
  );
};

export default Services2;
