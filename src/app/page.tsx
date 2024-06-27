import Image from "next/image";
import {  HeroParallax } from "../components/ui/hero-parallax";
import  Header  from "../components/global/header";
import { products } from "@/lib/constant";
import Featured from "@/components/global/featured";
import { LayoutGridDemo } from "@/components/global/layout-grid-demo";
export default function Home() {
  return (
    <main >
      <Header />
      <HeroParallax products={products}/>
      <Featured />
      <LayoutGridDemo />
    </main>
  );
}
