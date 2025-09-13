import InfiniteMarquee from "../../components/section/Marquee";
import ContactSection from "./ContactSection";
import HeroSection from "./HeroSection";
import ProjectGallery from "./ProjectGallery";
import ProjectSection from "./ProjectSection";
import StatsSection from "./StatsSection";
import TechStack from "./TechStack";

const Home = () => {
  const stats = [
    "1.5+ / year experience",
    "100% / satisfied clients",
    "18+ / project completed",
    "1.5+ / year experience",
    "100% / satisfied clients",
    "18+ / project completed",
  ];
  const stats2 = [
    "Healthcare",
    "SaaS Solutions",
    "Portfolio",
    "Landing Pages",
    "Ecommerce Platforms",
    "Entertainment",
    "Food & Restaurants",
    "Fitness & Wellness",
    "Travel & Tourism",
    "Event Management",
    "Music & Entertainment",
    "Social Media Apps",
    "Sports & Recreation"
  ];
  return (
    <div>
      <HeroSection />
      <InfiniteMarquee items={stats} speed={45} gap={56} />
      <ProjectSection />
      <TechStack />
      <InfiniteMarquee items={stats2} speed={45} gap={56} />
      <ProjectGallery/>
      <StatsSection />
      <ContactSection/>
      <InfiniteMarquee items={stats} speed={45} gap={56} />

    </div>
  );
};

export default Home;
