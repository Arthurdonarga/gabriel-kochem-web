"use client";

import { motion } from "framer-motion";

interface ScaleOfJusticeProps {
    className?: string;
}

export function ScaleOfJustice({ className = "w-full h-full text-gold" }: ScaleOfJusticeProps) {
    // Animation configuration
    const beamAnimation = {
        rotate: [2, -2, 2], // Gentle sway
        transition: {
            duration: 5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
        },
    };

    // Counter-rotation for pans to keep them vertical while beam rotates
    const panAnimation = {
        rotate: [-2, 2, -2],
        transition: {
            duration: 5,
            ease: "easeInOut" as const,
            repeat: Infinity,
            repeatType: "mirror" as const,
        },
    };

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
            >
                {/* --- Static Base & Pillar --- */}
                {/* Base Pedestal */}
                <path
                    d="M70 180 L130 180 L120 170 H80 L70 180Z"
                    fill="currentColor"
                    opacity="0.8"
                />
                <rect x="95" y="40" width="10" height="130" fill="currentColor" rx="1" />

                {/* Detailed Pillar Accents */}
                <path
                    d="M90 170 H110 L105 160 H95 L90 170Z"
                    fill="currentColor"
                />

                {/* Static Center Pivot Pin (Moved out of rotating beam) */}
                <circle cx="100" cy="45" r="4" fill="currentColor" />
                <circle cx="100" cy="45" r="2" fill="var(--background, #0a0f1c)" />

                {/* --- Moving Beam System --- */}
                <motion.g
                    initial={{ rotate: 2 }}
                    animate={beamAnimation}
                    style={{ originX: "100px", originY: "45px" }} // Pivot point at the top/center of the pillar
                >
                    {/* Main Horizontal Beam */}
                    <path
                        d="M20 45 L180 45"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                    />
                    {/* Beam Center Ring (Visual connection only, no pin) */}
                    <circle cx="100" cy="45" r="6" stroke="currentColor" strokeWidth="2" fill="none" />

                    {/* Beam Tips Accents */}
                    <circle cx="20" cy="45" r="3" fill="currentColor" />
                    <circle cx="180" cy="45" r="3" fill="currentColor" />

                    {/* --- Left Pan Group --- */}
                    <motion.g
                        initial={{ rotate: -2 }}
                        animate={panAnimation}
                        style={{ x: 20, y: 45, originX: 0, originY: 0 }} // Attached to left tip
                    >
                        {/* Chains Left (Wider) */}
                        <path d="M0 0 L -24 60" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                        <path d="M0 0 L 24 60" stroke="currentColor" strokeWidth="1" opacity="0.7" />

                        {/* Pan Dish Left (Wider and Deeper) */}
                        <path
                            d="M-30 60 Q 0 85 30 60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </motion.g>

                    {/* --- Right Pan Group --- */}
                    <motion.g
                        initial={{ rotate: -2 }}
                        animate={panAnimation}
                        style={{ x: 180, y: 45, originX: 0, originY: 0 }} // Attached to right tip
                    >
                        {/* Chains Right (Wider) */}
                        <path d="M0 0 L -24 60" stroke="currentColor" strokeWidth="1" opacity="0.7" />
                        <path d="M0 0 L 24 60" stroke="currentColor" strokeWidth="1" opacity="0.7" />

                        {/* Pan Dish Right (Wider and Deeper) */}
                        <path
                            d="M-30 60 Q 0 85 30 60"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </motion.g>
                </motion.g>
            </svg>
        </div>
    );
}
