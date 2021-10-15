import React from "react";
import image from "../david-clode-PteQb2-8rmY-unsplash.jpg";

export default function Home() {
    return (
        <main>
            <img src={image} alt="Palm Licuala Grandis" className="absolute object-cover w-full h-full"  />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug home-name">I'm Yani!</h1><br /><br /> 
                   
                   <div class="">
                    <br />
                    <br /> 
                    <br />
                    <br /> 
                    <br />
                    <br /> 
                        <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                            Latest Blog
                        </button>
                        <button class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded">
                            Latest Project
                        </button>
                    </div> 
            </section>
        </main>

        
    )
} 