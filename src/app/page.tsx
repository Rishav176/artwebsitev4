
import   HeroParallax  from "../components/ui/hero-parallax";

import Featured from "@/components/global/featured";
import Products_Featured from "@/components/global/products-featured";
import PromoSection from "@/components/global/promo-section";
import FAQ from "@/components/global/faq";
import Testimonials from "@/components/global/testimonial";
import { get } from "http";
import { getProducts } from "@/lib/constant";

export default function Home() {
  
  return (
    <main >
      
      <HeroParallax/>
      
      <Featured />
      <PromoSection />
      
     <Products_Featured />
      <FAQ />
      
      
    </main>
  );
}

