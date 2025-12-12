export interface Skill {
    name: string;
    icon: string; // URL or Lucide icon name if generic
    level: number; // 1 to 5
    description?: string;
}

export interface SkillCategory {
    title: string;
    skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "엔진",
        skills: [
            {
                name: "Unity",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
                level: 3,
                description: "게임 로직을 구현하고, 유니티 엔진의 다양한 기능을 활용하여 게임을 제작한 경험이 있습니다."
            },
            {
                name: "GameMaker2",
                icon: "/images/gm2.png",
                level: 3,
                description: "프로토타입을 제작하고, GML을 사용하여 게임을 제작한 경험이 있습니다."
            },
        ]
    },
    {
        title: "협업",
        skills: [
            {
                name: "Notion",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg",
                level: 3,
                description: "프로젝트 일정을 관리하고, 팀원들과 문서를 공유하며 협업한 경험이 있습니다."
            },
            {
                name: "Discord",
                icon: "/images/discord.jpg",
                level: 4,
                description: "팀 커뮤니케이션을 주도하고, 봇을 활용하여 업무 효율성을 높인 경험이 있습니다."
            },
        ]
    },
    {
        title: "OA",
        skills: [
            {
                name: "Excel",
                icon: "/images/excel.png",
                level: 3,
                description: "데이터를 정리하고 분석하여 결과를 도출할 수 있고, 표와 차트를 활용하여 밸런스를 디자인 한 경험이 있습니다."
            },
            {
                name: "PowerPoint",
                icon: "/images/ppt.png",
                level: 4,
                description: "설득력 있는 발표 자료를 제작하고, 효과적인 프레젠테이션을 진행할 수 있습니다."
            },
        ]
    },
    {
        title: "AI",
        skills: [
            {
                name: "Gemini",
                icon: "/images/gemini.png",
                level: 4,
                description: "AI를 활용하여 아이디어를 구체화하고, 개발 과정에서 발생하는 문제를 해결하는데 능숙합니다."
            },
            {
                name: "ChatGPT",
                icon: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
                level: 3,
                description: "AI를 활용하여 아이디어를 구체화하고, 개발 과정에서 발생하는 문제를 해결하는데 능숙합니다."
            },
            {
                name: "Antigravity",
                icon: "/images/antigravity.png",
                level: 4,
                description: "차세대 AI 코딩 어시스턴트를 활용하여 개발 생산성을 극대화할 수 있고, 게임을 개발한 경험이 있습니다."
            },
        ]
    },
    {
        title: "언어",
        skills: [
            {
                name: "영어",
                icon: "/images/english.jpg",
                level: 3,
                description: "기본적인 의사소통이 가능하며, 해외 기업에서 근무한 이력이 있습니다."
            },
        ]
    },
    {
        title: "디자인",
        skills: [
            {
                name: "Figma",
                icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
                level: 3,
                description: "UI/UX 컨셉을 도출하고, 와이어프레임 및 프로토타입을 제작하여 디자인을 구체화할 수 있습니다."
            }
        ]
    }
];
