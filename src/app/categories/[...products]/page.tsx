'use client'
import { useParams, usePathname } from "next/navigation";
import ProductsPreview from "../_components/products-preview";
import ProductsOverview from "../_components/products-overview";

export default function Home() {
    const params = useParams();
    const path=usePathname();
   
    return (
        <div>
            {params.products.length>1 ? (
                <ProductsOverview name={params.products[1]}/>
            ) : (
                <ProductsPreview path={path} />
            )}
        </div>
    );
}