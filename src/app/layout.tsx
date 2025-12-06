import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

export const metadata: Metadata = {
  title: "SanpDay",
  description: "SnapDay - 매일 스냅샷 기록 챌린지",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-gray-50 text-gray-900 flex">
        {/* Sidebar */}
        <aside
          className="
            flex flex-col justify-between
            w-16           /* 모바일 폭 (아이콘만) */
            md:w-48        /* 태블릿 폭 */
            min-h-screen 
            bg-white 
            border-r 
            px-2 md:px-4
            py-6
          "
        >
          <Sidebar />
        </aside>
        {/* main */}
        <main className="flex-1 px-4 md:px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
