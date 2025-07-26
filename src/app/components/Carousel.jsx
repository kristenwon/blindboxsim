"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "../globals.css";

import figuresData from '../components/figures.json';

export default function Carousel() {
    useEffect(() => {
        localStorage.removeItem("chosenFigure");
    }, []);

    const hironos = figuresData[0].hironos;
    const router = useRouter();

    const figureWeights = hironos.map((figure) => {
        const denominator = parseInt(figure.rarity.split('/')[1]);
        return {
            ...figure,
            weight: 1 / denominator,
        };
    });

    const totalWeight = figureWeights.reduce((sum, f) => sum + f.weight, 0);

    function getRandomHirono() {
        const rand = Math.random();
        let cumulative = 0;

        for(const figure of figureWeights) {
            cumulative += figure.weight / totalWeight;
            if(rand < cumulative) {
                const figureString = JSON.stringify(figure);
                localStorage.setItem("chosenFigure", figureString);
                router.push("/hirono-result");
                return;
            }
        }
        const fallback = figureWeights[figureWeights.length - 1];
        localStorage.setItem("chosenFigure", JSON.stringify(fallback));
        setTimeout(() => {
            router.push("/hirono-result");
        }, 50);
    }

    var settings = {
        className: "center",
        infinite: true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-full flex justify-center">
            <div className="max-w-xs">
                <Slider {...settings}>
                    <button onClick={getRandomHirono}>
                        <Image
                            src="/images/hirono-box.png"
                            height={300}
                            width={300}
                            alt="Hirono Box"
                            className="mb-10 w-full h-full transition-transform duration-300 hover:-rotate-2"
                            priority
                        />
                    </button>
                    <button>
                        <Image
                            src="/images/nyota-box.png"
                            height={300}
                            width={300}
                            alt="Nyota Box"
                            className="mb-10 transition-transform duration-300 hover:-rotate-2"
                            priority
                        />
                    </button>
                </Slider>
            </div>
        </div>

    );
}