"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function HironoResult() {
    const [figure, setFigure] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const stored = localStorage.getItem("chosenFigure");
        if (stored) {
            setFigure(JSON.parse(stored));
        }
    }, []);

    return (
        <div className="h-full w-full flex flex-col items-center justify-center space-y-10">
            <div className="flex flex-col space-y-2 items-center justify-center">
                <p className="font-fifth text-3xl text-[#685050]">
                    You Got :
                </p>
                {figure && (
                    <p className="font-fifth text-3xl text-[#685050]">{figure.name}</p>
                )}
            </div>

            {/* Fixed-size image container */}
            <div style={{ width: 300, height: 300 }} className="relative">
                {figure ? (
                    <Image
                        src={figure.image}
                        alt={figure.name}
                        height={300}
                        width={300}
                        className="w-full h-full object-contain"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-[#685050]">
                        Loading...
                    </div>
                )}
            </div>

            <div className="flex flex-row space-x-4">
                <button
                    className="bg-[#685050] px-8 py-2 flex items-center justify-center text-white rounded-full font-yuji"
                    onClick={() => router.push('/hirono-card')}
                >
                    Card
                </button>
                <button
                    className="bg-[#685050] px-8 py-2 flex items-center justify-center text-white rounded-full font-yuji"
                    onClick={() => {
                        router.replace('/');
                    }}
                >
                    New
                </button>
            </div>
        </div>
    );
}
