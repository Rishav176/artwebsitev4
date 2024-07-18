'use client'
import {  useParams } from "next/navigation";
import ProductsPreview from "../_components/products-preview";

export default function Home() {
    const params = useParams();
    return (
        <div>
          <ProductsPreview products={ProductsPreview} />
        </div>
    )
}
