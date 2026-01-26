import LoginSection from "@/components/sections/auth/LoginSection";
import FooterSection from "@/components/sections/home/FooterSection";
import MarketingHeader from "@/components/sections/home/MarketingHeader";

export const metadata = {
  title: "Login",
};

export default function LoginPage() {
  return (
    <>
      <MarketingHeader />
      <LoginSection />
      <FooterSection />
    </>
  )
}
