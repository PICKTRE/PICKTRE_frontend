### 환경을 위한 행동, 모두가 참여하는 서비스 (PICKTRE, Pick Trash)

![react-version](https://img.shields.io/badge/react-18.2.0-61DAFB?logo=react)
![vite-version](https://img.shields.io/badge/vite-4.4.9-646CFF?logo=vite)
![google-maps-version](https://img.shields.io/badge/google-2.19.2-4285F4?logo=googlemaps)
![tensorflowjs-version](https://img.shields.io/badge/tfjs-4.10.0-FF6F00?logo=tensorflow)
![framer-motion-version](https://img.shields.io/badge/framer-10.16.1-0055FF?logo=framer)
[![license](https://img.shields.io/badge/License-MIT_License-brightgreen)](https://github.com/PICKTRE/PICKTRE_frontend/blob/main/LICENSE)
[![CodeFactor](https://www.codefactor.io/repository/github/picktre/picktre_frontend/badge)](https://www.codefactor.io/repository/github/picktre/picktre_frontend)

<div align="center">
  <img width="320px" src="./src/assets/picktre_demonstration.gif" />
</div>

---

### 개발 배경

현대 사회에서 쓰레기 문제는 점점 심각해지고 있으며, 쓰레기의 적절한 처리는 환경보호와 지속가능한 발전을 위해 중요한 문제로 인식되고 있습니다.

하지만, 여전히 공공장소에서 쓰레기를 적절하게 버리지 않는 경우가 많아 환경오염과 공공장소의 미관을 해치는문제가 발생하고 있습니다.

이러한 배경에서 PICKTRE는 쓰레기를 적절하게 처리하고, 시민들의 쓰레기 버리기 습관을 개선하여 환경보호와 재활용 문화를 확산 시키는데 목적을 두고 있습니다. 또한, 사용자들이 쓰레기를 버릴 때 보상을 제공하여 쓰레기 문제에 대한 인식과 참여 향상을 목표로 합니다.

---

### 서비스 아키텍처

<div align="center">
  <img src="./src/assets/service_architecture.png" />
</div>

---

### 프로젝트 시작 (로컬)

1. 프로젝트를 clone 합니다.

```jsx
git clone https://github.com/PICKTRE/PICKTRE_frontend.git
```

2. clone이 완료되었다면, 다음 명령어로 npm library들을 설치합니다.

```jsx
npm i
```

1. 프로젝트를 실행합니다.

```jsx
npm run dev
```

---

### 프로젝트 시작

1. PICKTRE에 접속합니다.

```
https://picktre.netlify.app
```

---

### 팀원

|                                    Frontend (팀장)                                    |                                       Frontend                                       |                                        Backend                                         |                                          AI                                           |
| :-----------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------: |
| <img width="160px" src="https://avatars.githubusercontent.com/u/48755156?s=96&v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/18231524?s=96&v=4"/> | <img width="160px" src="https://avatars.githubusercontent.com/u/101933437?s=96&v=4" /> | <img width="160px" src="https://avatars.githubusercontent.com/u/81071956?s=96&v=4" /> |
|                                        김규회                                         |                                        채준혁                                        |                                         황효성                                         |                                        백보성                                         |
|                      [@KimKyuHoi](https://github.com/KimKyuHoi)                       |                       [@junyeokk](https://github.com/junyeokk)                       |                           [@gytjd](https://github.com/gytjd)                           |                    [@Bosung-Baek](https://github.com/Bosung-Baek)                     |

---

### 기여 방법

PICKTRE-frontend repository에서는 다음과 같은 규칙을 지켜야 합니다.

- Issue 생성

  - 제목에 어떤 것을 수정할 것인지 기재
  - 체크 리스트를 만들어 수정할 내용들을 리스트로 명확히 표시
  - Assignees, Labels, Projects 지정
  - 브랜치를 만드는 경우, branch name convention을 따를 것
    - branch name convention: Label/issue-issuenumber
      ```
      feat/issue-19
      ```

- Commit

  - 커밋 시 commit message convention을 따를 것
    - `[type]: comment`
    - type - 각 commit의 성격을 나타내며, 아래 중 하나여야 함. 대문자로 시작
      ```
      Feat: 새로운 기능에 대한 커밋
      Fix: build 빌드 관련 파일 수정에 대한 커밋
      Build: 빌드 관련 파일 수정에 대한 커밋
      Chore: 그 외 자잘한 수정에 대한 커밋 (기타 변경)
      Ci: CI 관련 설정 수정에 대한 커밋
      Docs: 문서 수정에 대한 커밋
      Style: 코드 스타일 혹은 포맷 등에 관한 커밋
      Refactor: 코드 리팩토링에 대한 커밋
      Test: 테스트 코드 수정에 대한 커밋
      ```

- Pull request
  - 제목은 branch name convention을 따를 것
    ```
    feat/issue-19
    ```
  - Reviewers, Assignees, Labels, Projects 지정
  - 맨 첫째 줄에 close 명령어와 issue 번호 남기기
  - 두 번째 줄부터 변경 사항 개조식으로 작성
    ```
    close #19
     - 헤더, 푸터
     - 프로필 영역
     - 레벨 영역
     - 리워드 / 리포트 버튼 영역
     - 매거진 영역
    ```
  - merge 하기 전 deploy 단계에서 오류가 나지 않는지 반드시 확인
  - 정상적으로 merge가 완료되었다면, Issue에 대응하기 위해 사용했던 branch 삭제

---

### 라이센스

- Frontend - [MIT License](https://github.com/PICKTRE/PICKTRE_frontend/blob/main/LICENSE)

```
MIT License

Copyright (c) 2023 BAESOOJIN

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

- Backend Server - [Apache-2.0 License](https://github.com/PICKTRE/PICKTRE_backend/blob/main/LICENSE)
- AI - [Apache-2.0 License](https://github.com/PICKTRE/PICKTRE_ai/blob/main/LICENSE)
