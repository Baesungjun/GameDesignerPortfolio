'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
                        Game Designer & AI
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                        AI와 협업하는<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            신입 게임 기획자 배성준
                        </span>
                        입니다.
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed break-keep">
                        1년간의 연구원 경험과 2년간의 해외 경험을 바탕으로 논리적인 기획을 합니다.<br />
                        AI를 활용하여 Unity와 GameMaker2 구현이 가능한 신입 게임 기획자, 배성준입니다.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <button
                        onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        className="group relative px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-50 transition-all flex items-center gap-2 mx-auto overflow-hidden"
                    >
                        <span className="relative z-10">프로젝트 보기</span>
                        <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity" />
                    </button>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
                <ArrowDown className="w-6 h-6 text-gray-500" />
            </motion.div>
        </section>
    );
}
