# 🎙️openSquare

## Front-end 소개

- 개인적인 고민과 개발을 주제로 `서로 소통하는 커뮤니티` 프로젝트입니다.
- `React` 라이브러리를 사용하여 구현했습니다.
- 개발은 초기 프로젝트 화면부터, 기능, 백엔드 연결까지 `직접 구현`했습니다.

### 개발 인원 및 기간

- 개발기간 :  2024-05-03 ~ 2024-05-29
- 개발 인원 : 프론트엔드/백엔드 1명 (본인)

### 사용 기술 및 tools
- React

### Back-end
- <a href="https://github.com/100-hours-a-week/5-erica-react-be">Back-end Github</a>

### 서비스 시연 영상
- <a href="https://drive.google.com/file/d/1r5nhfgSoqopi0j6_GYv-twRqwGcv5qbA/view?pli=1">구글 드라이브</a>

### 폴더 구조
<details>
  <summary>폴더 구조 보기/숨기기</summary>
  <div markdown="1">
    
      ├── README.md
      ├── .gitignore
      ├── package-lock.json
      ├── package.json
      ├── public
      │    ├── index.html
      │    ├── manifest.json
      │    └── robots.txt
      └── src
           ├── App.js
           ├── App.test.js
           ├── App.module.css
           ├── App.test.js
           ├── index.css
           ├── index.js
           ├── logo.svg
           ├── reportWebVitals.js
           ├── setupTests.js
           ├── static.js
           ├── components
           │     ├── button
           │     │     ├── LogOutButton.js
           │     │     └── PostButton.js
           │     ├── comments
           │     │     ├── AddComment.js
           │     │     ├── Comment.js
           │     │     └── Comments.js
           │     ├── input
           │     │     ├── EmailInput.js
           │     │     ├── NicknameInput.js
           │     │     └── PasswordInput.js
           │     ├── modals
           │     │     ├── DeleteCommentModal.js
           │     │     ├── DeletePostModal.js
           │     │     └── Modals.js
           │     ├── posts
           │     │     ├── AddPostContainer.js
           │     │     ├── MiniPost.js
           │     │     ├── PostAction.js
           │     │     ├── PostDetail.js
           │     │     ├── PostSkeleton.js
           │     │     ├── PostsSkeleton.js
           │     │     └── UpdatePostContainer.js
           │     ├── users
           │     │     ├── UpdatePasswordContainer.js
           │     │     ├── UpdateProfileContainer.js
           │     │     ├── UserProfile.js
           │     │     └── UserProfileImage.js
           │     ├── BackButton.js
           │     ├── Layout.jsx
           │     └── Navbar.js
           ├── hoc
           │     ├── withLoading.js
           │     └── withLogIn.js
           ├── pages
           │     ├── AddPostPage.jsx
           │     ├── Home.jsx
           │     ├── LogInPage.jsx
           │     ├── PostDetailPage.jsx
           │     ├── PostPage.jsx
           │     ├── SignUpPage.jsx
           │     ├── UpdatePasswordPage.jsx
           │     ├── UpdatePostPage.jsx
           │     └── UpdateProfilePage.jsx
           ├── imaegs
           │     ├── back.png
           │     ├── logo.png
           │     ├── side_banner.png
           │     ├── welcome.gif
           │     └── profile_img.webp
           ├── reducer
           │     ├── emailReducer.js
           │     ├── nicknameReducer.js
           │     ├── passwordCheckReducer.js
           │     └── passwordReducer.js
           ├── hooks
           │     ├── useFetch.js
           │     ├── UseFetchEvent.js
           │     ├── usePasswordValidation.js
           │     ├── usePosition.js
           │     ├── useShowProfile.js
           │     └── useSignUpValidation.js
           ├── utils
           │     ├── checkOwner.js
           │     ├── constant.js
           │     ├── errorMessage.js
           │     ├── fetchData.js
           │     ├── navigate.js
           │     ├── numberToK.js
           │     ├── scroll.js
           │     └── status.js
           └── styles
                 ├── button
                 ├── comment
                 ├── input
                 ├── post
                 ├── skeleton
                 ├── user
                 ├── Home.module.css
                 ├── Layot.module.css
                 ├── LogIn.module.css
                 ├── Navbar.module.css
                 ├── PostModal.module.css
                 └── SignUp.module.css
   
    
  </div>
</details> 
<br/>

## 서비스 화면

`홈`
| 인트로 | 로그인 모달 | 회원가입 모달 |
|---|---|---|
|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/2b46a22b-a03c-41ea-b428-6caf55a311c1)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/fc7e9b7f-66f8-4b2e-9b7b-c414a1777cfb)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/a58b717a-2e42-48f4-b8ec-0b0c1dd2c753)|


`게시글 목록`

|전체 게시물|개발 게시물|고민 게시글|내 게시글|
|---|---|---|---|
|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/62786755-0dbe-4734-8180-57538681f81d)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/7b5fdee5-1bf9-495a-a2df-1fd21cae0d93)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/85d6783c-adc8-4c31-8186-d9781140a2a0)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/5d082716-2766-4cb5-87c6-0e36fe3bb49a)|



  
`게시물 작성 / 상세 / 수정 / 삭제`

|게시물 작성|게시물 상세|게시글 수정|게시글 삭제|
|---|---|---|---|
|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/6019de80-cb00-4265-bc2d-59ca93021eb4)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/b393484f-ec91-4565-9d3e-f943bb4a54e3)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/acb0b2bd-a206-4baf-b061-9e27b71b2360)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/3c9f7d68-71f0-4f6a-b899-0a5e2fd9e97a)|
  

`댓글 목록 / 등록 / 수정 /삭제`

|댓글 목록|댓글 등록|댓글 수정|댓글 삭제|
|---|---|---|---|
|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/f78f9b65-f8f9-4754-aaa1-43c8785144d2)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/37c6727a-b344-4b89-a52d-1c86c6b5be10)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/55c7615d-946e-4301-a8b2-386ecbbc1007)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/8fb518b7-8e58-4ee3-9088-f84240549ad5)|


`프로필 수정 / 비밀번호 수정 / 회원 탈퇴 / 로그아웃`

|프로필 수정|비밀번호 수정|회원 탈퇴|로그아웃|
|---|---|---|---|
|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/f50fc63a-0ff8-411e-80e0-6a1bce248282)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/8614dc82-8656-4038-8994-0f8b9db92629)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/ecbb94f8-288a-4036-b6da-28ee318c0d9e)|![image](https://github.com/100-hours-a-week/5-erica-react-fe2/assets/81230764/ed5e36f4-e8b7-4364-8872-199972dd0061)

<br />

## 트러블 슈팅

📎[스크롤 안되는 이슈 및 해결](https://github.com/100-hours-a-week/5-erica-react-fe/issues/2)    
📎[helper text 상태값 관리 이슈 및 해결](https://github.com/100-hours-a-week/5-erica-react-fe/issues/3)  

<br/>

## 프로젝트 후기
온전히 제 힘으로 구현하는 프로젝트는 처음이었기에, 두려움이 있었습니다. 경험해보지 못했던 에러나 어떻게 구현해야 할 지 감이 안오던 코드들을 마주했을 때 머리가 하얘지기도 했었습니다. 이를 해결하기 위해 책도 찾아보고 구글링도 하면서 여러 구현 방법들을 알게 되면서 점차 코딩하는게 재밌어졌습니다 :) 여러모로 많은 것들을 배웠던 것 같습니다. 아쉬운 점은 맞닥뜨렸던 에러를 해결한 것에 대해 기록을 제대로 하지 못한 점입니다.. 다음 프로젝트부터는 꼬박꼬박 기록하여 같은 실수를 반복하지 않도록 하겠습니다 !!

<br/>
<br/>
<br/>

<p align="center">
  <img src="https://github.com/100-hours-a-week/5-erica-react-fe/assets/81230764/d611b233-b596-4d1d-bbb9-dc2e4e41eb47" style="width:200px; margin: 0 auto"/>
</p>
