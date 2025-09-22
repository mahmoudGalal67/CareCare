import Brands from "@/components/Brands";
import ContactForm from "@/components/Contact";
import Counter from "@/components/Counter";
import Feature1 from "@/components/Feature1";
import Feature2 from "@/components/Feature2";
import FloatingButtons from "@/components/FloatingButtons";
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
      <Counter />
      <Feature2 />
      <ContactForm />
      <FloatingButtons />
    </div>
  );
}
