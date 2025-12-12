'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/projects';
import { X, Play, FileText, CheckCircle } from 'lucide-react';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

import { useEffect, useRef } from 'react';

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    const modalRef = useRef<HTMLDivElement>(null);

    // Prevent background scrolling and forward outer scroll to modal
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';

            const handleWheel = (e: WheelEvent) => {
                if (modalRef.current) {
                    modalRef.current.scrollTop += e.deltaY;
                }
            };

            window.addEventListener('wheel', handleWheel);

            return () => {
                document.body.style.overflow = 'unset';
                window.removeEventListener('wheel', handleWheel);
            };
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-6xl h-[90vh] bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        {/* Scroll Wrapper */}
                        <div
                            ref={modalRef}
                            className="w-full h-full overflow-y-auto custom-scrollbar"
                        >
                            {/* Header Image - Reduced height for more content space */}
                            <div className="relative h-40 sm:h-56 shrink-0">
                                <img
                                    src={project.thumbnail}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                                <button
                                    onClick={onClose}
                                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="absolute bottom-6 left-6 sm:left-10">
                                    <span className="px-3 py-1 bg-indigo-500/80 rounded-full text-xs font-bold text-white mb-2 inline-block">
                                        {project.genre}
                                    </span>
                                    <h2 className="text-3xl sm:text-4xl font-bold text-white">{project.title}</h2>
                                </div>
                            </div>

                            {/* Scaleable Body */}
                            <div className="p-6 sm:p-10 space-y-10 pb-20">

                                {/* 1. Overview */}
                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-indigo-500 rounded-full" />
                                        프로젝트 개요
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed mb-4">
                                        {project.details.overview}
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-3">
                                        {project.details.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                                                <CheckCircle className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </section>

                                {/* 2. Contribution */}
                                <section className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <span className="w-1 h-6 bg-purple-500 rounded-full" />
                                        나의 기여도
                                    </h3>
                                    <p className="text-lg text-indigo-300 font-medium mb-2">
                                        {project.contribution}
                                    </p>
                                    <div className="text-sm text-slate-400">
                                        주요 역할: {project.roleText}
                                    </div>
                                </section>

                                {/* 3. Gameplay Video - Conditionally Rendered */}
                                {project.videoUrls && project.videoUrls.length > 0 && (
                                    <section>
                                        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                            <Play className="w-5 h-5 text-indigo-400" />
                                            플레이 영상
                                        </h3>
                                        <div className="grid gap-6">
                                            {project.videoUrls.map((url, index) => {
                                                // Helper to convert watch URL to embed URL
                                                let embedUrl = url;
                                                if (url.includes('watch?v=')) {
                                                    const v = url.split('v=')[1]?.split('&')[0];
                                                    if (v) embedUrl = `https://www.youtube.com/embed/${v}`;
                                                } else if (url.includes('youtu.be/')) {
                                                    const v = url.split('youtu.be/')[1]?.split('?')[0];
                                                    if (v) embedUrl = `https://www.youtube.com/embed/${v}`;
                                                }

                                                return (
                                                    <div key={index} className="space-y-2">
                                                        {project.videoUrls.length > 1 && (
                                                            <p className="text-sm text-slate-400 ml-1">영상 #{index + 1}</p>
                                                        )}
                                                        <div className="aspect-video w-full bg-black rounded-xl overflow-hidden border border-slate-700 relative group">
                                                            <iframe
                                                                className="w-full h-full"
                                                                src={embedUrl}
                                                                title={`Gameplay Video ${index + 1}`}
                                                                frameBorder="0"
                                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                                allowFullScreen
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>
                                )}

                                {/* 4. GDD Viewer */}
                                <section>
                                    <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-indigo-400" />
                                        기획서 보기
                                    </h3>
                                    <div className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                                        <iframe
                                            src={`${project.gddUrl}#view=FitH`}
                                            className="w-full h-[600px] bg-white"
                                            title="기획서 뷰어"
                                        />
                                        <div className="p-4 flex justify-between items-center bg-slate-900 border-t border-slate-800">
                                            <span className="text-slate-400 text-sm">
                                                미리보기가 보이지 않으시나요?
                                            </span>
                                            <a
                                                href={project.gddUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-indigo-400 hover:text-indigo-300 underline"
                                            >
                                                PDF 파일 직접 열기
                                            </a>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
