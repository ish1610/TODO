# 🔥 원티드 프리온보딩 챌린지

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

# 💁🏻‍♂️ 클라이언트 구현 과제

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

# 🗒️ 프로젝트 개요
- [원티드 프리온보딩 FE 챌린지](https://github.com/starkoora/wanted-pre-onboarding-challenge-fe-1-api)의 과제 수행
- 타입스크립트 첫 프로젝트 적용한 todoList
<br/><br/>

# 🖥️ ToDoList 기능
<br/>

## 🗝️ Auth

FireBase의 Authentication을 사용하여 회원가입 / 로그인 기능을 구현했습니다.<br/
>

- 각각의 입력 유효성 양식을 통과하지 못 할 경우 API 호출을 하지 못 하도록 button의 disable 처리와 그에 맞는 CSS를 적용해주었습니다.
<br/>

### 회원가입

![화면 기록 2023-02-01 오후 2 16 42 mov](https://user-images.githubusercontent.com/85052351/215959536-6b1fe294-e83e-4817-955b-5e03f7a6038c.gif) <br/>

- email의 경우 @과 .이 포함된 8 자리 이상의 입력, password의 경우 영문, 숫자, 특수문자가 포함 된 8 자리에서 20 자리 입력 시 회원가입이 가능합니다.
- 회원가입 시 FireBase에 존재하는 이메일로 회원가입이 불가능하며, 입력 시 피드백을 전달합니다. 
<br/><br/>

### 로그인 

![화면 기록 2023-02-01 오후 2 16 42 mov](https://user-images.githubusercontent.com/85052351/215960824-74cdbeb1-94d6-40b1-9ad0-040da7a633d4.gif)<br/>

- 로그인 시 FireBase에 저장된 이메일 / 비밀번호 조합이 아닌 입력으로 API 호출 시 피드백을 전달합니다.
- 로그인으로 얻은 토큰, 토큰 유효 시간, localId(uId)가 로컬 스토리지에 저장됩니다. 저장된 토큰, 토큰 유효 시간의 경우 로그아웃을 하지 않고 애플리케이션에 접속 시 유효 시간이 남아있다면 별도의 로그인 없이 애플리케이션 사용이 가능하며, 유효 시간 만료 시 자동 로그아웃이 됩니다.
- 저장된 localId(uId)의 FireBase에 저장된 todoList 중 사용자 uId와 일치하는 데이터를 가져오는데 사욥됩니다.
<br/><br/>

### 로그아웃

![화면 기록 2023-02-01 오후 3 19 40 mov](https://user-images.githubusercontent.com/85052351/215966854-8b6cfd0d-c757-498a-bf7b-1679e6c13c15.gif)<br/>

- 로그아웃 시 로컬스토리지에 저장된 토큰, 토큰 유효시간, uId를 삭제합니다.

<br/><br/>
## 📝 CRUD
<br/>

### todo 작성

![화면 기록 2023-02-01 오후 2 29 15 mov](https://user-images.githubusercontent.com/85052351/215962842-ccf7e3bd-cb1b-4db8-8612-57251b3f0c64.gif)<br/>

- todo 작성 시 제목과 내용 최소 5글자 입력 시 저장이 가능합니다.
- 저장한 todo 데이터는 createToDo API를 호출하여 FireBase에 아래의 양식으로 저장합니다. 
```planinText
jeqDmZ8GP59wyJ62vVgq
ㄴcontent : "투두리스트 투두리스트!!!!"
ㄴcreatedAt : "2월 1일 수요일 14 : 49"
ㄴid : "jeqDmZ8GP59wyJ62vVgq"
ㄴtitle : "재미있는 투두리스트 작성"
ㄴuId : "Yuq9U9uqyiREUe4tCjvAHXpoAf73"
ㄴupdatedAt : "2월 1일 수요일 14 : 49"
```
<br/><br/>

### todo 상세보기 / 수정하기

![화면 기록 2023-02-01 오후 3 03 21 mov](https://user-images.githubusercontent.com/85052351/215964494-6cbc2c72-62bd-44ea-962a-cfc27dbf7ed5.gif) <br/>

- todo 상세 보기의 경우 별도의 API 호출 없이 Store에 저장된 데이터를 사용합니다.
- todo 수정 시 updateToDo API를 호출하여 FireBase의 데이터를 수정합니다.
- 수정 유효성의 경우 작성 유효성과 동일합니다.
<br/><br/>

### todo 삭제하기

![화면 기록 2023-02-01 오후 3 10 12 mov](https://user-images.githubusercontent.com/85052351/215965375-538ee759-7489-4d09-812c-47b51cff6844.gif)

- todo 삭제 시 deleteToDo API를 호출합니다.
- 삭제 후 todoList 페이지로 이동 후 getToDo API를 호출하여 최신의 todo 데이터를 유지합니다.
<br/><br/>

