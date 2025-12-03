import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";

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
          {/* 로고 영역 */}
          <div className="flex items-center justify-center md:justify-start mb-6">
            <Image
              src="/log.svg"
              width={48}
              height={48}
              alt="로고"
              className="flex items-center justify-center"
            />

            <Image
              src="/text-log.svg"
              width={96}
              height={96}
              alt="텍스트 로고"
              className="ml-1 hidden md:inline"
            />
          </div>

          {/* 메뉴 */}
          <nav className="flex flex-col gap-2">
            <a
              className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              href="/"
            >
              {/* 아이콘 자리 */}
              <Image
                src="/home.svg"
                width={24}
                height={24}
                alt="search"
                className="w-6 h-6 rounded-md"
              />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">홈</span>
            </a>

            <a className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {/* 아이콘 자리 */}
              <Image
                src="/heart.svg"
                width={24}
                height={24}
                alt="search"
                className="w-6 h-6 rounded-md"
              />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">알림</span>
            </a>

            <a className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {/* 아이콘 자리 */}
              <Image
                src="/insert.svg"
                width={24}
                height={24}
                alt="search"
                className="w-6 h-6 rounded-md"
              />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">올리기</span>
            </a>

            <a className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
              {/* 아이콘 자리 */}
              <Image
                src="/search.svg"
                width={24}
                height={24}
                alt="search"
                className="w-6 h-6 rounded-md"
              />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">룸 이동</span>
            </a>
            <a
              className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              href="/123"
            >
              {/* 유저 프로필 이미지 위치 */}
              <span className="w-6 h-6 rounded-md bg-gray-300" />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">
                나의 챌린지
              </span>
            </a>
          </nav>
          <div>
            <a className="flex items-center justify-center md:justify-start h-11 rounded-lg px-2 text-gray-700 hover:bg-gray-100 mt-4 cursor-pointer">
              <Image
                src="/menu.svg"
                width={24}
                height={24}
                alt="search"
                className="w-6 h-6 rounded-md"
              />
              <span className="ml-0 md:ml-3 text-[10px] md:text-sm hidden md:inline">설정</span>
            </a>
          </div>
        </aside>

        {/* main */}
        <main className="flex-1 px-4 md:px-6 py-6">{children}</main>
      </body>
    </html>
  );
}
