# 원티드 프리온보딩 챌린지

![스크린샷 2023-01-13 오후 12 18 11](https://user-images.githubusercontent.com/85052351/212458836-3702ad4e-0394-4d58-b3a3-7be9488dae9b.png)<br/><br/>

[챌린지 과제](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api) | [과제 관련 게시글](https://nicehyun12.tistory.com/category/Project/%ED%94%84%EB%A6%AC%EC%98%A8%EB%B3%B4%EB%94%A9) | [데모](https://wanted-pre-onboarding-challenge-fe-1-nine.vercel.app/)<br/><br/>

## 실행 환경

```bash
> npm i 
> npm start
```
<br/><br/>

## 사용 라이브러리

```plaintext
axios
redux
redux-tookit
@emotion-react
@emotion-styled
jsonwebtoken
```

# 클라이언트 구현 과제

## Assignment 1 - Login / SignUp

- /auth 경로에 로그인 / 회원가입 기능을 개발합니다
  - 로그인, 회원가입을 별도의 경로로 분리해도 무방합니다
  - [x] 최소한 이메일, 비밀번호 input, 제출 button을 갖도록 구성해주세요
- 이메일과 비밀번호의 유효성을 확인합니다
  - [x] 이메일 조건 : 최소 `@`, `.` 포함
  - [x] 비밀번호 조건 : 8자 이상 입력
  - [x] 이메일과 비밀번호가 모두 입력되어 있고, 조건을 만족해야 제출 버튼이 활성화 되도록 해주세요
- 로그인 API를 호출하고, 올바른 응답을 받았을 때 루트 경로로 이동시켜주세요
  - [x] 응답으로 받은 토큰은 로컬 스토리지에 저장해주세요
  - [x] 다음 번에 로그인 시 토큰이 존재한다면 루트 경로로 리다이렉트 시켜주세요
  - [x] 어떤 경우든 토큰이 유효하지 않다면 사용자에게 알리고 로그인 페이지로 리다이렉트 시켜주세요 ➡️ 토큰 유효 기간 만료 시 로컬 스토리지에서 

## Assignment 2 - Todo List

- Todo List API를 호출하여 Todo List CRUD 기능을 구현해주세요
  - [x] 목록 / 상세 영역으로 나누어 구현해주세요 ➡️ 별도의 페이지로 구분
  - [x] Todo 목록을 볼 수 있습니다.
  - [x] Todo 추가 버튼을 클릭하면 할 일이 추가 됩니다.
  - [x] Todo 수정 버튼을 클릭하면 수정 모드를 활성화하고, 수정 내용을 제출하거나 취소할 수 있습니다.
  - [x] Todo 삭제 버튼을 클릭하면 해당 Todo를 삭제할 수 있습니다.
- 한 페이지 내에서 새로고침 없이 데이터가 정합성을 갖추도록 구현해주세요
  - [x] 수정되는 Todo의 내용이 목록에서도 실시간으로 반영되어야 합니다

## API 스펙

## [ToDos](#todos)

- [getToDo](#getTodos)
- [createToDo](#createTodo)
- [updateToDo](#updateTodo)
- [deleteToDo](#deleteTodo)

## [SignUp](#SignUp)

- [signUp](#signUp)

## [Login](#Login)

- [login](#login)

