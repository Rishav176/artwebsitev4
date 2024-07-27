
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
      }
    }
  }
}
`
export const CheckoutQuery = `
mutation CheckoutCreate($variantId: ID!) {
  cartCreate(input:{
    lines:{
      merchandiseId: $variantId,
      quantity:1
    }
  }) {
    cart{
      checkoutUrl
    }
  }
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
