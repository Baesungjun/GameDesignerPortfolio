'use client';

import { motion } from 'framer-motion';
import { skillCategories, Skill } from '@/data/skills';
import Image from 'next/image';

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/50 transition-colors group">
            <div className="flex items-center gap-3">
                <div className="relative w-8 h-8 flex-shrink-0 bg-white/10 rounded-lg p-1">
                    {/* Fallback to simple img if domain config issue persists, or just standard img for external icons */}
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-full h-full object-contain"
                    />
                </div>
                <span className="font-semibold text-slate-200 group-hover:text-white transition-colors">
                    {skill.name}
                </span>
            </div>

            <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((level) => (
                    <div
                        key={level}
                        className={`w-3 h-3 sm:w-4 sm:h-4 rounded-sm transition-colors ${level <= skill.level
                                ? 'bg-indigo-500'
                                : 'bg-slate-800'
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 border-t border-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl font-bold text-white mb-2 flex items-center gap-2">
                        <span className="w-2 h-8 bg-indigo-500 rounded-full" />
                        Skills & Tools
                    </h2>
                    <p className="text-slate-400">
                        실무에서 활용 가능한 기술 스택입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-indigo-400 mb-6 flex items-center gap-2">
                                {category.title}
                            </h3>
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                                {category.skills.map((skill) => (
                                    <SkillCard key={skill.name} skill={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
