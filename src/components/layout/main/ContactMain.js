import ContactPrimary from "@/components/sections/contacts/ContactPrimary";
import HeroInner from "@/components/sections/hero-banners/HeroInner";
import Map from "@/components/sections/map/Map";
import Testimonials from "@/components/sections/testimonials/Testimonials";
import Testimonials2 from "@/components/sections/testimonials/Testimonials2";
import Testimonials3 from "@/components/sections/testimonials/Testimonials3";
import TeamCard2 from "@/components/shared/cards/TeamCard2";

const ContactMain = () => {
  const TabsData = [
    {
      id: 1,
      name: "MF Forms Online",
      subData: [
        {
          id: 1,
          name: "KYC Form",
          description:
            "Each investor has to under go Know Your Customer process only once in the securities market.",
          img: "https://www.yourmutualfunddistributor.com/images/download-icon2.png",
        },
        {
          id: 2,
          name: "FATCA Form",
          description:
            "Investors have to provide the information in the stand alone Foreign Account Tax Compliance Act declaration form.",
          img: "https://www.yourmutualfunddistributor.com/images/download-icon3.png",
        },
        {
          id: 3,
          name: "Open Investment Account",
          description:
            "Account helps you to invest in all mutual funds using a single platform.",
          img: "https://www.yourmutualfunddistributor.com/images/download-icon1.png",
        },
        {
          id: 4,
          name: "ACH(One-time) Mandate",
          description:
            "Implementing Automated Clearing House mandate will allow transactions to be cleared in real-time mode.",
          img: "https://www.yourmutualfunddistributor.com/images/download-icon4.png",
        },
      ],
    },
    {
      id: 2,
      name: "MF Forms Online",
    },
    {
      id: 3,
      name: "Income Tax Forms",
    },
    {
      id: 4,
      name: "KYC",
    },
    {
      id: 5,
      name: "FATCA/UBO",
    },
    {
      id: 6,
      name: "Challan",
    },
    {
      id: 6,
      name: "Pan",
    },
    {
      id: 6,
      name: "Misc. Forms",
    },
  ];
  return (
    <main>
      <HeroInner title={"Downloads"} currentItem={"Downloads"} />
      <div className="contact sp_ top_140  mt-4">
        <div
          className="container  gap-2"
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {TabsData?.map((item, index) => (
            <div
              className="section__title__button"
              style={{
                cursor: "pointer",
              }}
              key={index}
            >
              <span className="text__gradient">{item?.name}</span>
            </div>
          ))}
        </div>

        <div
          className="container grid-cols-4"
          style={{
            display: "grid",
            gap: "1rem",
          }}
        >
          {TabsData?.[0]?.subData?.map((item, idx) => (
            <div key={idx}>
              <TeamCard2 key={idx} teamSingle={item} />
            </div>
          ))}
        </div>
      </div>

      {/* <ContactPrimary />
      <Testimonials />
      <Testimonials2 />
      <Testimonials3 />

      <Map /> */}
    </main>
  );
};

export default ContactMain;
