import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyToChoose from "@/components/WhyToChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home px-3">
      <Hero />
      <Services />
      <WhyToChoose />
    </div>
  );
}
