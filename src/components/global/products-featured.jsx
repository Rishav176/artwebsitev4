'use client'
import Button from '../ui/button'
import {storefront} from '@/utils/index'
import Client from 'shopify-buy';
const Staticproducts = [
    {
      id: 1,
      name: 'Machined Pen',
      color: 'Black',
      price: '$35',
      href: '#',
      imageSrc: '/art5.jpg',
      imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
    },
    {
        id: 2,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
       
      },
      {
        id: 3,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
       
      },
      {
        id: 4,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        
      },
      {
        id: 5,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      
      },
      {
        id: 6,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      
      },
      {
        id: 7,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
      
      },
      {
        id: 8,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'art6.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
     
      },
      {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: '/art5.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
       
      },
      {
          id: 2,
          name: 'Machined Pen',
          color: 'Black',
          price: '$35',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
          imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
         
        },
        {
          id: 3,
          name: 'Machined Pen',
          color: 'Black',
          price: '$35',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
          imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
         
        },
        {
          id: 4,
          name: 'Machined Pen',
          color: 'Black',
          price: '$35',
          href: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
          imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
          
        },

    // More products...
  ]
  
  export default async function Products_Featured(products) {
    //const prods= getAllProducts()
    const extractedProducts=JSON.parse(products.products.value).edges
    console.log(extractedProducts)
    return (
      <div className="bg-white">
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-screen-2xl lg:px-8">
          <div className="flex items-center justify-between px-4 sm:px-6 lg:px-0">
            <h2 className="text-2xl font-bold tracking-tight text-[#c19434]">Trending products</h2>
            <a href="/categories" className="hidden text-sm font-semibold text-[#c19434] hover:opacity-75 hover:border-b hover:border-[#c19434] sm:block">
              Browse Collections
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
  
          <div className="relative mt-8">
            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
              <ul
                role="list"
                className="mx-4 inline-flex space-x-8 sm:mx-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-x-8 lg:space-x-0 "
              >
                {extractedProducts.map((item) => {
                  const product= item.node
                  const image= product.images.edges[0].node
                  return (
                  <li key={product.handle} className="inline-flex w-64 flex-col text-center lg:w-auto pb-6">
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                        <img
                          src={image.url}
                          alt=''
                          className="h-full w-full object-cover object-center  group-hover:scale-125 transition-all duration-300 ease-in-out"
                        />
                      </div>
                      <div className="mt-6">
                        <p className="text-sm text-gray-500"></p>
                        <h3 className="mt-1 font-semibold text-gray-900">
                          <a href='/'>
                            <span className="absolute inset-0" />
                            {product.title}
                          </a>
                        </h3>
                        <p className="mt-1 text-gray-900">${product.priceRange.minVariantPrice.amount}</p>
                      </div>
                    </div>
  
                    <h4 className="sr-only">Available colors</h4>
                    <ul role="list" className="mt-auto flex items-center justify-center space-x-3 pt-6">
                      <Button>Purchase</Button>
                    </ul>
                  </li>
                )})}
              </ul>
            </div>
          </div>
  
          <div className="mt-12 flex px-4 sm:hidden">
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-500">
              See everything
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
      </div>
    )
  }
  const gql= String.raw
    const productsQuery = gql`
  {
  products(first:12){
    edges{
      node{
        title
        handle
        tags
        priceRangeV2{
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
  export async function shopifyFetch({ query, variables={}}) {
    const endpoint = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
    const key = process.env.NEXT_PUBLIC_STOREFRONT_ACCESS_TOKEN;
  
    try {
      const result = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': key
        },
        body: { query, variables } && JSON.stringify({ query, variables })
      });
      
      return {
        status: result.status,
        body: await result.json()
      };
    } catch (error) {
      console.error('Error:');
      return {
        status: 500,
        error: 'Error receiving data'
      };
    }
  }
  export async function getAllProducts(){
    return shopifyFetch({ query: `{
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
}` });
  }
 
  // export async function getStaticProps() {
    //   const initial = await storefront(productsQuery)
    //   const products= initial.data.products.edges
    //   return products
    // }
    
 