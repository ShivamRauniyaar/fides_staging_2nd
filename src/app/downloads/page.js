import ContactMain from "@/components/layout/main/ContactMain";
import ThemeController from "@/components/shared/others/ThemeController";
import PageWrapper from "@/components/shared/wrappers/PageWrapper";

export const metadata = {
  title: "Contact | Bastun- Business Consulting Next Js Template",
  description: "Contact | Bastun- Business Consulting Next Js Template",
};

export default function Downloads() {

  return (
    <PageWrapper
      headerStyle={2}
      footerStyle={2}

    >
      <ThemeController />
      <ContactMain />
    </PageWrapper>
  );
}
