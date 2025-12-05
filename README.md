## 🌿 Git 브랜치 전략

### 브랜치 생성 규칙

본 프로젝트는 다음과 같은 브랜치 전략을 사용합니다.

- `main` : 최종 배포본을 관리하는 주 브랜치
- `develop` : 개발이 진행되는 중인 브랜치
- `feature/*` : 특정 기능을 개발하는 별도의 브랜치
- `release/*` : 배포 전 테스트 및 마무리 작업을 위한 브랜치
- `hotfix/*` : 긴급한 오류나 버그 수정을 위한 브랜치

### 커밋 메시지 규칙

커밋 메시지는 아래 Prefix를 사용합니다.

- `feat` : 새로운 기능 추가
- `fix` : 버그 수정
- `refactor` : 리팩토링 (기능 변화 없음)
- `style` : 코드 형식, 공백, 세미콜론 등 (기능 변화 없음)
- `chore` : 빌드, 설정, 패키지, CI 등
- `docs` : 문서 변경
- `test` : 테스트 코드 추가/수정

### Issue 규칙

이슈는 다음 템플릿 중 하나를 사용하여 생성합니다.

- `Task` : 일반 작업 / 리팩토링 / 설정 변경 등

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
