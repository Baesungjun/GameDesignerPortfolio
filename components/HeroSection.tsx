'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import { ArrowDown } from 'lucide-react';

// 3D 카러셀에 사용할 데이터 정의 (이미지 + 비디오)
// 이전 3D 캐러셀 데이터 제거 (아치형 롤링에 필요 없음)

export default function HeroSection() {
    // 3D 캐러셀에 사용되던 상수 제거 (아치형 롤링에 필요 없음)

    return (
        // [중요] perspective를 60px로 낮춰 어안 렌즈 효과를 극대화
        <section className="relative h-screen w-screen flex flex-col items-center justify-center overflow-hidden bg-slate-950">

            {/* 배경 그라데이션 */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000" />
            </div>

            <div className="w-full h-full flex flex-col items-center text-center z-10 pointer-events-none">


                {/* 텍스트 영역 */}
                <div className="flex-grow flex flex-col justify-end items-center mb-10 relative z-20 pointer-events-none">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-indigo-300 text-sm font-medium mb-6 backdrop-blur-sm">
                        Game Designer & AI
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-xl">
                        AI와 협업하는<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            신입 게임 기획자 배성준
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed break-keep">
                        1년간의 연구원 경험과 2년간의 해외 경험을 바탕으로 논리적인 기획을 합니다.<br />
                        AI를 활용하여 다양한 형태로 구현이 가능한 신입 게임 기획자, 배성준입니다.
                    </p>
                </div>

                {/* 무한 롤링 영역 (Flat Infinite Scroll) */}
                <div className="relative w-full overflow-hidden z-10 pointer-events-none pb-28 pt-10 select-none">
                    {/* mask-image로 좌우 페이드 효과 추가 */}
                    <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-slate-950 via-transparent to-slate-950" />

                    <motion.div
                        className="flex w-max"
                        animate={{ x: "-50%" }}
                        transition={{
                            duration: 50,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {/* 프로젝트와 비디오 혼합 배치 (P1, V1, P2, V2, V3, V4 패턴) */}
                        {(() => {
                            const videoItems = [
                                { id: 'v1', type: 'video', src: '/videos/coco.mp4', title: '코코두기 플레이', genre: 'Puzzle Platformer' },
                                { id: 'v2', type: 'video', src: '/videos/poker.mp4', title: 'Three Poker Defense 플레이', genre: 'Casual Defense' },
                                { id: 'v3', type: 'video', src: '/videos/navi.mp4', title: '나비탭 플레이', genre: '2D Action Platformer' },
                                { id: 'v4', type: 'video', src: '/videos/touche.mp4', title: 'Touché 플레이', genre: '2D Action Battle' },
                            ];

                            // 기본 리스트 구성: 사용자 요청 순서대로 배치
                            // 코코두기 이미지 > 코코두기 영상 > 쿠키런 이미지 > 포커 영상 > 포커 이미지 > 투셰 영상 > 투셰 이미지 > 나비텝 영상 > 나비텝 이미지
                            const baseList = [
                                projects[0],          // Cocodugi Image
                                videoItems[0],        // Cocodugi Video
                                projects[1],          // Cookie Run Image
                                videoItems[1],        // Poker Video
                                projects[2],          // Poker Image
                                videoItems[3],        // Touche Video
                                projects[3],          // Touche Image
                                videoItems[2],        // NaviTap Video
                                projects[4]           // NaviTap Image
                            ].filter(Boolean);

                            // 무한 스크롤을 위해 리스트 복제 (2세트 - -50% 이동 시 완벽한 루프를 위해)
                            const infiniteList = [...baseList, ...baseList];

                            return infiniteList.map((item: any, i) => (
                                <div key={i} className="flex flex-col gap-4 w-[500px] shrink-0 mr-8">
                                    {/* 미디어 영역 (이미지 또는 비디오) */}
                                    <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 relative bg-slate-900 group">
                                        {item.type === 'video' ? (
                                            <video
                                                src={item.src}
                                                muted
                                                autoPlay
                                                loop
                                                playsInline
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            />
                                        ) : (
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                                            />
                                        )}
                                        {/* 오버레이 (선택 사항) */}
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                    </div>

                                    {/* 텍스트 영역 (하단 배치) */}
                                    <div className="text-left px-2">
                                        <h3 className="text-white font-bold text-2xl leading-tight mb-1">{item.title}</h3>
                                        <p className="text-indigo-400 text-base font-medium">{item.genre}</p>
                                    </div>
                                </div>
                            ));
                        })()}
                    </motion.div>
                </div>
            </div>

            {/* 하단 버튼 */}
            <div className="absolute bottom-12 z-20 pointer-events-auto">
                <button
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-8 py-3 bg-white text-slate-900 font-bold rounded-full hover:bg-indigo-50 transition-all flex items-center gap-2"
                >
                    프로젝트 보기 <ArrowDown className="w-4 h-4" />
                </button>
            </div>
        </section>
    );
}
