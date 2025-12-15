'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

export default function InteractiveBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="fixed inset-0 -z-50 bg-slate-950 overflow-hidden pointer-events-none">
            {/* Background Pattern - Modern Grid */}
            <div className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage: `radial-gradient(#4f46e5 1px, transparent 1px)`,
                    backgroundSize: '32px 32px'
                }}
            />

            {/* Interactive Mouse Spotlight */}
            <motion.div
                className="absolute inset-0 z-0 transition-opacity duration-300"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            600px circle at ${mouseX}px ${mouseY}px,
                            rgba(79, 70, 229, 0.15),
                            transparent 80%
                        )
                    `
                }}
            />

            {/* Background Gradient Orbs for Atmosphere */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-pulse delay-1000" />
            </div>
        </div>
    );
}
