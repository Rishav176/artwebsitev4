'use client'
import { useParams } from "next/navigation";
import ProductsPreview from "../_components/products-preview";
import ProductsOverview from "../_components/products-overview";

export default function Home() {
    const params = useParams();
    console.log(params);
    return (
        <div>
            {params.products.length>1 ? (
                <ProductsOverview />
            ) : (
                <ProductsPreview products={params.products} />
            )}
        </div>
    );
}