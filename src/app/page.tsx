import Hero from "@/components/Hero";
import AboutJattari from "@/components/AboutJattari";
// import ExploreJattari from "@/components/ExploreJattari";
import PropertyInvestment from "@/components/PropertyInvestment";

export default function Home() {
  return (
    <div
      id="home"
      className="min-h-screen w-full overflow-x-clip bg-background text-foreground"
    >
      <Hero />

      <AboutJattari />



      <PropertyInvestment />

    
    </div>
  );
}