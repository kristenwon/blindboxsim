"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function HironoCard() {
    const [figure, setFigure] = useState(null);
    const [back, setBack] = useState(false);
    const [shared, setShared] = useState(false);
    const popupRef = useRef();
    const shareBtnRef = useRef();
    const router = useRouter();

    function flipBack() {
        setBack(!back);
    }
    useEffect(() => {
        const stored = localStorage.getItem("chosenFigure");
        if (stored) {
            setFigure(JSON.parse(stored));
        }
    }, []);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                popupRef.current &&
                !popupRef.current.contains(event.target) &&
                !shareBtnRef.current.contains(event.target)
            ) {
                setShared(false);
            }
        }

        if (shared) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [shared]);

    return (
        <div className="min-h-screen w-full flex flex-col items-center justify-center px-4 py-8 space-y-8 overflow-auto">
            {/* Flip Card */}
            <button onClick={flipBack} className="w-[400px] h-[400px] perspective mb-6">
                <div className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${back ? "rotate-y-180" : ""}`}>
                    {/* Front */}
                    <div className="absolute w-full h-full backface-hidden">
                        <Image
                            src="/images/card.png"
                            alt="Front of Card"
                            width={350}
                            height={350}
                            className="absolute inset-0 m-auto z-0"
                        />
                        {figure && (
                            <Image
                                src={figure.image}
                                alt={figure.name}
                                width={150}
                                height={150}
                                className="absolute inset-0 m-auto z-10"
                            />
                        )}
                    </div>

                    {/* Back */}
                    <div className="absolute w-full h-full rotate-y-180 backface-hidden">
                        <Image
                            src="/images/blank-card.png"
                            alt="Back of card"
                            width={350}
                            height={350}
                            className="absolute inset-0 m-auto z-0"
                        />
                        {figure && (
                            <div className="absolute inset-0 m-auto z-10 font-yuji flex flex-col items-center justify-between text-center px-4 text-md leading-snug max-w-[225px] max-h-[150px]">
                                <p>{figure.description}</p>
                                <p>{figure.name}</p>
                            </div>
                        )}
                    </div>
                </div>
            </button>

            {/* Buttons */}
            <div className="relative flex flex-row space-x-4">
                <button
                    className="bg-[#685050] px-8 py-2 flex items-center justify-center text-white rounded-full font-yuji"
                    onClick={() => router.replace("/hirono-result")}
                >
                    Back
                </button>
            </div>
        </div>
    );
}
