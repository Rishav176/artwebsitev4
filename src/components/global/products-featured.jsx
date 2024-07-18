'use client';
import { useEffect, useState } from 'react';
import Button from '../ui/button';
import { getProducts } from '@/lib/constant';

export default function Products_Featured() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;
  if (!products || !products.edges) return <p>No products available</p>;

  const extractedProducts = products.edges;
    
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

 
  // export async function getStaticProps() {
    //   const initial = await storefront(productsQuery)
    //   const products= initial.data.products.edges
    //   return products
    // }
    
 