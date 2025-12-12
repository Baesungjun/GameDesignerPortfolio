import HeroSection from "@/components/HeroSection";
import ProjectGallery from "@/components/ProjectGallery";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectGallery />

      <footer className="py-10 text-center text-slate-500 text-sm border-t border-slate-900">
        <p>© 2025 Game Designer 배성준 Portfolio. All rights reserved.</p>
        <p className="mt-2 text-slate-600">E-mail: esbae02@naver.com | Phone: 010-4165-2634</p>
      </footer>
    </main>
  );
}
