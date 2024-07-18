
import { storefront } from "@/utils"

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
export async function getProducts() {
  const {data} = await storefront(productsQuery)
  return data.products
}
