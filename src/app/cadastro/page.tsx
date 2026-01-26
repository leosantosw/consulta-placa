import RegisterSection from "@/components/sections/auth/RegisterSection";
import FooterSection from "@/components/sections/home/FooterSection";
import MarketingHeader from "@/components/sections/home/MarketingHeader";

export const metadata = {
  title: "Cadastro"
};

export default function RegisterPage() {
  return (
    <>
      <MarketingHeader />
      <RegisterSection />
      <FooterSection />
    </>
  )
}
