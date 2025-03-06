import Image from "next/image";
import Link from "next/link";
import downladable from "@/assets/img/herobaner/downloadable.jpg";
import teamImage15 from "@/assets/img/team/team_15.png";
import ButtonPrimary from "../buttons/ButtonPrimary";

const TeamCard2 = ({ teamSingle, type }) => {
  const { id, name, desig, img, duration, description } = teamSingle;
  return (
    <div
      className={`  ${
        type === 2 ? "col-xxl-3 col-xl-4" : "col-xl-3"
      }   col-lg-4 col-md-6 col-sm-6 col-12`}
      data-aos="fade-up"
      data-aos-duration={duration}
      style={{
        width: "fit-content",
      }}
    >
      <div
        className={`team__member__3__single ${
          type === 2 ? "team__member__border" : ""
        } text-center single__transform`}
      >
        <div className="team__member__3__single__inner">
          <div
            className="team__member__3__img"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* <Image src={teamImage15} alt="" /> */}
            <div
              style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${img})`, // Ensure the image is handled correctly
                height: "170px", // Fixed height value
                width: "170px",
              }}
            />
          </div>
          <div className="team__member__name">
            <h6>
              <Link href={`/team/${id}`}>{name}</Link>
            </h6>
            <p>{description}</p>
          </div>

          <ButtonPrimary text={"Click to download"} type="submit" />
          
        </div>
      </div>
    </div>
  );
};

export default TeamCard2;
