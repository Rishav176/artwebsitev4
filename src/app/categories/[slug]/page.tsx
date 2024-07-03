'use client'
import {  useParams } from "next/navigation";

export default function Home() {
    const params = useParams();
    return (
        <div>
          {params.slug}
        </div>
    )
}