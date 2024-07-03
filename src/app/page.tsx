import {  HeroParallax } from "../components/ui/hero-parallax";
import { products } from "@/lib/constant";
import Featured from "@/components/global/featured";
import Products_Featured from "@/components/global/products-featured";
import PromoSection from "@/components/global/promo-section";
import FAQ from "@/components/global/faq";
import Testimonials from "@/components/global/testimonial";
export default function Home() {
  return (
    <main >
      
      <HeroParallax products={products}/>
      <Featured />
      <Products_Featured />
      <PromoSection />
      <FAQ />
      
      
    </main>
  );
}
