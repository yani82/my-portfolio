import React from "react";
import image from "../david-clode-PteQb2-8rmY-unsplash.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Palm Licuala Grandis" className="absolute object-cover w-full h-full" imageStyle= 
            {{opacity:0.1}} />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name text-shadow: 3px 3px 6px rgb(0 0 0 / 26%), 0 0 5px rgb(15 3 86 / 22%)">I'm Yani!</h1><br /><br /> 
            </section>
        </main>

        
    )
} 