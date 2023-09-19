import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingFooter from "@/components/landing-footer";
import KeyFeatures from "@/components/landing-key-features";
import LandingTestiomonials from "@/components/landing-testimonials";

const LandingPage = () => {
  return (
    <div className="mx-auto max-w-screen-lg h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <KeyFeatures />
      <LandingTestiomonials />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
