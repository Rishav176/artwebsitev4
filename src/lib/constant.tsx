
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

// const SingleProductQuery = (handle: string) => {}
const SingleProductQuery = `
query SingleProduct($handle: String!){
  product(handle: $handle){
    title
		description
    tags
    priceRange{
      minVariantPrice{
        amount
      }
    }
    images(first:4){
      edges{
        node{
          url(transform:{})
          altText
        }
      }
    }
      variants(first:1){
      edges{
        node{
        id
        }
      }}
  }
}
`
const CheckoutQuery = `
mutation CheckoutCreate($variantId: ID!) {
checkoutCreate(input: {
lineItems:{
variantId: $variantId,
quantity:1
}
}){
checkout{
webUrl
}}
}
`
export async function getSingleProduct(handle: string) {
  const { data } = await storefront(SingleProductQuery, { handle })
  
  return data.product

}

export async function getProducts() {
  const {data} = await storefront(productsQuery)
  return data.products
}
