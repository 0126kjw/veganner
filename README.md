# Veganner

“지구를 위한 채식 실천, 비거너에서 함께해요!”<br />
비건 식당과 레시피를 공유하고, 지도에서 비건 식당 정보를 찾아볼 수 있는 웹사이트

## 1. 프로젝트 소개

### 사용한 데이터 셋

**[메인, 소개페이지에서 사용할 육류, 자동차, 온실가스 관련 데이터 세트]**

- FoodEmissions
    - [https://www.kaggle.com/datasets/amandaroseknudsen/foodproductemissions](https://www.kaggle.com/datasets/amandaroseknudsen/foodproductemissions)
    - 음식 종류별 온실가스 배출량
    - 육류별 자동차 주행거리
- GLEAM livestock emissions
    - [https://www.kaggle.com/datasets/amandaroseknudsen/gleamlivestockemissions](https://www.kaggle.com/datasets/amandaroseknudsen/gleamlivestockemissions)
    - 축산업에서 온실가스 종류별 배출량
- 현대자동차 그랜저 CO2 배출량
    - [https://bpms.kemco.or.kr:444/transport_2012/car/car_choice.aspx?serorigin=1&serecode=100&serfuel=&sergear=&sercartype=&sergrade=&sertypegb=&sertab=&otype=&ptype=&f=system&sermileage1=&sermileage2=&serco21=&serco22=&seramt1=&seramt2=&sermname=&serstyear=#search_top](https://bpms.kemco.or.kr:444/transport_2012/car/car_choice.aspx?serorigin=1&serecode=100&serfuel=&sergear=&sercartype=&sergrade=&sertypegb=&sertab=&otype=&ptype=&f=system&sermileage1=&sermileage2=&serco21=&serco22=&seramt1=&seramt2=&sermname=&serstyear=#search_top)
- 한국 연도별 육류 소비량
    - [http://www.kmta.or.kr/kr/data/stats_spend.php](http://www.kmta.or.kr/kr/data/stats_spend.php)
    - 연도별 / 종류별 전체소비량
    - 연도별 / 종류별 1인당소비량

**[비건 식당 지도 데이터세트]**

- 서울시 채식전문/가능 식당
    - [https://www.data.go.kr/data/15054128/fileData.do](https://www.data.go.kr/data/15054128/fileData.do)
    - 식당이름, 장소, 채식가능/채식전문, 업종(한식, 중식, 양식… etc)

### 기술스택

**데이터분석**

- jupyter notebook에서 python, numpy, matplotlib 등 사용해 데이터 분석

**프론트엔드**

- React, TypeScript, Recoil, styled-components
- Chart.js(react-chartjs-2) 라이브러리 사용해 데이터 시각화
- 카카오맵 API 사용하여 지도 구현

**백엔드**

- Django, Django REST Framework, dj_rest_auth
- MySQL(ERD Cloud 사용하여 설계,Oracle Cloud 사용하여 구축)

## 2. 프로젝트 목표

### 인사이트

데이터 분석 결과 온실가스 배출량은 계속해서 증가하는 추세였습니다.<br />
그중에서도 식품 생산 과정 중 온실가스 배출량 1위 품목이 “육류"인 것에 주목했습니다.

심지어, 상대적으로 연비가 좋아 친환경 모델로 평가받는 현대 그랜저 하이브리드 모델과 육류의 온실가스 배출량을 비교해봐도,<br />
소고기 1kg를 생산할 때 배출되는 온실가스 량과 해당 자동차가 약 1000km 주행했을때 배출되는 온실가스 배출량과 같았습니다.

더불어 가축 생산시에도 메탄과 이산화탄소 등 온실효과를 유발하는 유해물질이 많이 배출되고 있음을 확인했습니다.<br />
이처럼 육류 생산으로 인해 환경이 파괴되고 있지만, 세계/국내 육류 소비량은 계속해서 증가하는 양상을 보였습니다.

**"Giving up meat just one day a week can help save the Earth"**<br />
**일주일에 하루만 고기를 안먹어도 지구를 살릴 수 있다.**

비거너의 개발 동기가 되었던 문장입니다. <br />
육류 소비를 줄인다면, 온실가스 배출을 줄여 환경을 보호할 수 있지 않을까요?

이런 인사이트와 결론을 마음에 새기며, <br />
함께하는 비건라이프를 주제로 비건 식당과 레시피를 공유하고, 지도에서 비건 식당을 찾아볼 수 있는 웹사이트를 개발하게 되었습니다.

Veganner는 일상에서 육류 식단 대신 채식을 실천하면, 환경보호에 동참할 수 있다는 가치를 전달하고자 합니다.

## 3. 프로젝트 기능 설명

### 주요기능

- 커뮤니티를 통한 비건 식당/레시피 게시물 작성 및 공유
- 지도를 통해 서울시 비건 식당 목록 조회, 필터 기반 검색 구현(지역,종류,상황별)
- 데이터 시각화를 통해 육류 생산과 소비가 환경에 악영향을 준다는 메시지 제공

### 서브기능

- 회원가입(+카카오 로그인), 로그인
- 게시글 수정, 삭제 가능
- 게시글 댓글 작성, 수정, 삭제 가능
- 게시글 좋아요 누르기

### 프로젝트만의 차별점, 기대 효과
다른 비건 관련 웹사이트와는 다르게 데이터분석을 시각화하여, 육류 소비가 환경에 악영향을 끼친다는 메시지를 유저에게 보다 효과적으로 전달합니다.<br />
객관적인 데이터 지표를 확인하며, 유저는 비건 식단의 실천으로 환경보호에 동참하고 있음을 느낄 수 있습니다.

## 4. 프로젝트 구성도

- 와이어프레임(Figma): [https://www.figma.com/file/05xxQrYEBIVL5WNOFSqnKu/데이터분석-프로젝트-(Copy)?node-id=1%3A2](https://www.figma.com/file/05xxQrYEBIVL5WNOFSqnKu/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%B6%84%EC%84%9D-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-(Copy)?node-id=1%3A2)

## 5. 프로젝트 팀원 역할 분담

| 이름 | 담당 업무 |
| --- | --- |
| 지수빈 | 팀장/프론트엔드/디자인/기획/데이터시각화 |
| 김진우 | 백엔드/기획 |
| 김예린 | 프론트엔드/데이터 분석/ 기획 |
| 김현정 | 프론트엔드/데이터 분석/디자인/기획 |
| 문동규 | 백엔드/기획 |
| 이재경 | 프론트엔드/디자인/기획 |

**멤버별 responsibility**

1. 팀장 

- 기획 단계: 구체적인 설계와 지표에 따른 프로젝트 제안서 작성
- 개발 단계: 팀원간의 일정 등 조율 + 프론트 or 백엔드 개발
- 수정 단계: 기획, 스크럼 진행, 코치님 피드백 반영해서 수정, 발표 준비

2. 프론트엔드 

- 기획 단계: 큰 주제에서 문제 해결 아이디어 도출, 데이터 수집, 와이어프레임 작성
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성
- 수정 단계: 피드백 반영해서 프론트 디자인 수정

 3. 백엔드 & 데이터 담당

- 기획 단계: 기획 데이터 분석을 통해 해결하고자 하는 문제를 정의
- 개발 단계: 웹 서버 사용자가 직접 백엔드에 저장할수 있는 기능 구현, 데이터 베이스 구축 및 API 활용, 데이터 분석 개념 총동원하기
- 수정 단계: 코치님 피드백 반영해서 분석/ 시각화 방식 수정

## 6. 버전
  - 프로젝트의 버전 기입

## 7. FAQ
  - 자주 받는 질문 정리
