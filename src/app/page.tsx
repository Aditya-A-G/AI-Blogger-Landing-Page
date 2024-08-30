import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductShowcase />
      <Pricing />
      <Testimonials />
    </>
  );
}
