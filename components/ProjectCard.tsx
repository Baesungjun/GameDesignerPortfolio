'use client';

import { motion } from 'framer-motion';
import { Project } from '@/data/projects';
import { Play, FileText, Monitor } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
    project: Project;
    onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-indigo-500/20 transition-all duration-300"
            onClick={onClick}
        >
            {/* Thumbnail */}
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />

                {/* Genre Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-xs font-semibold text-indigo-300">
                        {project.genre}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="text-xs text-slate-500 bg-slate-800/50 px-2 py-1 rounded">
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Action Hint */}
                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 group-hover:text-white transition-colors border-t border-slate-800 pt-4">
                    {project.videoUrls && project.videoUrls.length > 0 && (
                        <span className="flex items-center gap-1"><Play className="w-3 h-3" /> 영상</span>
                    )}
                    {project.gddUrl && (
                        <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> 기획서</span>
                    )}
                    <span className="flex items-center gap-1"><Monitor className="w-3 h-3" /> 상세</span>
                </div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-500/30 rounded-2xl pointer-events-none transition-colors duration-300" />
        </motion.div>
    );
}
