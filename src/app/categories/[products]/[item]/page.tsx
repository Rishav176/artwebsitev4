'use client'
import * as React from 'react';
import {  useParams } from "next/navigation";
import ProductsOverview from "../../_components/products-overview";

export default function Home() {
    const params = useParams();
    return (
        <div>
          <ProductsOverview product={ProductsOverview}/>
        </div>
    )
}
