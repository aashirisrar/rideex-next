import LandingContent from "@/components/landing-content";
import LandingHero from "@/components/landing-hero";
import LandingNavbar from "@/components/landing-navbar";
import LandingFooter from "@/components/landing-footer";
import KeyFeatures from "@/components/landing-key-features";
import LandingTestimonials from "@/components/landing-testimonials";
import LandingAbout from "@/components/landing-about";

const LandingPage = () => {
  return (
    <div className="mx-auto h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
      <KeyFeatures />
      <LandingTestimonials />
      <LandingAbout />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
