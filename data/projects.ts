export interface Project {
    id: number;
    title: string;
    genre: string;
    thumbnail: string;
    tags: string[];
    description: string;
    contribution: string;
    videoUrls: string[];
    gddUrl: string;
    roleText: string;
    details: {
        overview: string;
        features: string[];
    };
}

export const projects: Project[] = [
    {
        id: 1,
        title: "코코두기: 기업 협약 프로젝트",
        genre: "Corporate Project",
        thumbnail: "/images/coco_v2.png",
        tags: ["기업 미션", "팀(10인)"],
        description: "기획 4명, 개발 6명이 협업하여 실제 기업 미션을 완수한 프로젝트입니다.",
        contribution: "메인 시스템 기획, 기믹 설계, 레벨 디자인",
        videoUrls: ["https://youtu.be/ewKqFxTd8Iw?si=9pP2691jEo5QriHx"], // Need real ID from user later
        gddUrl: "/gdd/coco.pdf",
        roleText: "메인 시스템 기획, 레벨 디자인, 로직 설계 등 전반적인 개발 과정에 참여하였습니다.",
        details: {
            overview: "기업의 실제 미션을 받아 진행한 기업 협약 프로젝트입니다. 메인 시스템 기획과 레벨 디자인을 담당하였습니다. 기믹의 로직 설계를 구조화하여 개발팀과의 협업에 기여하였습니다.",
            features: [
                "메인 기믹 시스템 로직 설계",
                "맵 에디터 설계 및 레벨 디자인"
            ]
        }
    },
    {
        id: 2,
        title: "쿠키런: 모험의 탑 신규 캐릭터",
        genre: "Character Design",
        thumbnail: "/images/cookie.png",
        tags: ["과제 합격", "캐릭터 기획"],
        description: "데브시스터즈 신입 공채 과제 전형을 통과한 캐릭터 기획서입니다.",
        contribution: "신규 캐릭터 2종 컨셉 및 스킬 메커니즘 기획",
        videoUrls: [], // No video mentioned in HTML
        gddUrl: "/gdd/cookie.pdf",
        roleText: "캐릭터 컨셉 도출부터 상세 기획서 작성까지 모든 기획 과정을 단독으로 수행하였습니다.",
        details: {
            overview: "데브시스터즈 신입 공채 과제 전형 제출물입니다. 기존 IP의 핵심 재미 요소인 '캐주얼함'과 '전략성'을 분석하여 신규 캐릭터 2종의 컨셉과 스킬 메커니즘을 제안했습니다.",
            features: [
                "기존 IP를 분석해 기존에 없는 새로운 캐릭터 컨셉 도출",
                "스킬 메커니즘 및 신규 아티펙트 상세 스펙 설계"
            ]
        }
    },
    {
        id: 3,
        title: "쓰리 포커 디펜스",
        genre: "Casual Defense",
        thumbnail: "/images/poker.png", // Assuming filename based on context
        tags: ["Unity 개발", "시스템 기획"],
        description: "유니티를 활용해 직접 개발한 캐주얼 디펜스 게임입니다.",
        contribution: "컨셉/시스템 기획, Unity 구현, 레벨 디자인, 출시 준비",
        videoUrls: [],
        gddUrl: "/gdd/poker.pdf",
        roleText: "1인 개발 프로젝트로서 기획, 프로그래밍, 아트 리소스 관리 등 개발의 모든 과정을 단독으로 수행하였습니다.",
        details: {
            overview: "액션 장르 외에 캐주얼 장르에 도전하기 위해 기획한 프로젝트입니다. 컨셉 기획서, 시스템 기획서 작성 후 유니티 엔진으로 직접 구현했습니다. 인게임 플로우 차트 설계부터 구글 스토어 출시 준비까지 전 과정을 경험했습니다.",
            features: [
                "Unity 엔진과 AI를 활용한 1인 개발",
                "인게임 플로우 및 시스템 기획",
                "구글 스토어 출시 프로세스 경험",
                "모바일 환경에 맞는 최적화 경험"
            ]
        }
    },
    {
        id: 4,
        title: "2D 액션 '투셰(Touché)'",
        genre: "2D Action",
        thumbnail: "/images/touche.png", // Assuming filename
        tags: ["GameMaker2", "액션"],
        description: "첫 프로젝트의 실패와 아쉬움을 보완하여 완성도를 높인 액션 게임입니다.",
        contribution: "기획 및 개발 (1인 개발)",
        videoUrls: [
            "https://www.youtube.com/watch?v=1HZCqtmvvCM", // Main Video
            "https://youtu.be/AoDhZgZGzQY?si=y2bR5ZJTXpzlE99L"// Add second video here
        ],
        gddUrl: "/gdd/touche.pdf",
        roleText: "1인 개발 프로젝트로서 기획, 프로그래밍, 아트 리소스 관리 등 개발의 모든 과정을 단독으로 수행하였습니다.",
        details: {
            overview: "GameMaker2 엔진을 사용하여 제작한 2D 액션 게임입니다. 이전 프로젝트의 실패 요인을 분석하여, 타격감과 조작감을 최우선으로 개선했습니다. 기획부터 개발까지 완료하며 '완성'의 경험을 쌓았습니다.",
            features: [
                "타격감과 조작감 개선에 집중",
                "완성도 있는 게임 플레이 구현",
                "GameMaker2 엔진 활용"
            ]
        }
    },
    {
        id: 5,
        title: "나비탭 (Navi-Tab)",
        genre: "2D Action",
        thumbnail: "/images/navi.png", // Assuming filename
        tags: ["Post-Mortem", "첫 프로젝트"],
        description: "기획 입문작. 실패 경험을 통한 성장 과정을 담았습니다.",
        contribution: "기획 및 프로토타이핑",
        videoUrls: ["https://youtu.be/UjscebZiq_U"],
        gddUrl: "/gdd/navi.pdf",
        roleText: "1인 개발 프로젝트로서 기획, 프로그래밍, 아트 리소스 관리 등 개발의 모든 과정을 단독으로 수행하였습니다.",
        details: {
            overview: "저의 첫 기획 입문 프로젝트입니다. 비록 완성도는 낮지만, 이 프로젝트를 통해 문서 작성법과 개발 프로세스를 처음 익혔습니다. 이때의 시행착오를 바탕으로 이후 프로젝트에서 큰 성장을 이룰 수 있었습니다.",
            features: [
                "개발 프로세스 및 문서 작성법 습득",
                "실패 분석을 통한 성장 포인트 도출"
            ]
        }
    }
];
