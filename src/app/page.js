import Brands from "@/components/Brands";
import Feature1 from "@/components/Feature1";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyToChoose from "@/components/WhyToChoose";

export default function Home() {
  return (
    <div className="home px-3">
      <Hero />
      <Services />
      <WhyToChoose />
      <Brands />
      <Feature1 />
    </div>
  );
}
