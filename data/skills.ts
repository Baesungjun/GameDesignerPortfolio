export interface Skill {
    name: string;
    icon: string; // URL or Lucide icon name if generic
    level: number; // 1 to 5
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Engine",
        skills: [
            { name: "Unity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg", level: 3 },
            { name: "GameMaker2", icon: "/images/gm2.png", level: 3 },
        ]
    },
    {
        title: "Collaboration",
        skills: [
            { name: "Notion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg", level: 3 },
            { name: "Discord", icon: "/images/discord.jpg", level: 4 },
        ]
    },
    {
        title: "AI Tools",
        skills: [
            { name: "Gemini", icon: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Google_Gemini_logo.svg", level: 4 },
            { name: "ChatGPT", icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg", level: 3 },
            { name: "Antigravity", icon: "/images/antigravity.png", level: 4 },
        ]
    },
    {
        title: "OA & Design",
        skills: [
            { name: "Excel", icon: "/images/excel.png", level: 3 },
            { name: "PowerPoint", icon: "/images/ppt.png", level: 4 },
            { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 3 },
        ]
    }
];
