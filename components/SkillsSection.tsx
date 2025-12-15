'use client';

import { motion } from 'framer-motion';
import { skillCategories, Skill } from '@/data/skills';

const SkillCard = ({ skill }: { skill: Skill }) => {
    return (
        <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl hover:border-indigo-500/50 transition-colors h-full flex flex-col">
            {/* Top Row: Icon, Name, Level */}
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                    <div className="relative w-8 h-8 flex-shrink-0 bg-white/10 rounded-lg p-1">
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-full h-full object-cover rounded-sm"
                        />
                    </div>
                    <span className="font-semibold text-slate-200">
                        {skill.name}
                    </span>
                </div>

                <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((level) => (
                        <div
                            key={level}
                            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-[1px] ${level <= skill.level
                                ? 'bg-indigo-500'
                                : 'bg-slate-700'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Bottom Row: Description (Always Visible) */}
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed break-keep">
                {skill.description}
            </p>
        </div>
    );
};

export default function SkillsSection() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-transparent border-t border-slate-900/50">
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
                        보유한 기술 스택과 상세 역량입니다.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-indigo-400 mb-4 flex items-center gap-2 border-b border-slate-800 pb-2">
                                {category.title}
                            </h3>
                            <div className="flex flex-col gap-4">
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
