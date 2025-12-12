import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-noto-sans-kr",
});

export const metadata: Metadata = {
  title: "게임 기획자 포트폴리오",
  description: "재미의 본질을 설계하는 게임 레벨 디자이너의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKr.variable} font-sans antialiased bg-slate-950 text-white selection:bg-indigo-500 selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
