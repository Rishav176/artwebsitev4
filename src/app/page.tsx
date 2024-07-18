'use server'
import   HeroParallax  from "../components/ui/hero-parallax";
import { products } from "@/lib/constant";
import Featured from "@/components/global/featured";
import Products_Featured from "@/components/global/products-featured";
import PromoSection from "@/components/global/promo-section";
import FAQ from "@/components/global/faq";
import Testimonials from "@/components/global/testimonial";
import { storefront } from "@/utils";
export default async function Home() {
  const products = await getProducts()
  return (
    <main >
      
      <HeroParallax/>
      
      <Featured />
      <PromoSection />
      
     <Products_Featured products={getProducts()}/>
      <FAQ />
      
      
    </main>
  );
}

export async function getProducts() {
      const {data} = await storefront(productsQuery)
      return data.products
    }
  
const productsQuery= 
`{
  products(first:12){
    edges{
      node{
        title
				handle
        tags
        priceRange{
          minVariantPrice{
            amount
          }
        }
        images(first:1){
          edges{
            node{
              url(transform:{})
              
            }
          }
        }
      }
    }
  }
}`