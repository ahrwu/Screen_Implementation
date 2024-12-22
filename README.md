<h1>HTML</h1>

<h2>1. 텍스트(Text)</h2>

시맨틱(semantic) 태그<br>
- 이름만으로도 어떤 역할을 하는지 쉽게 파악 가능한 태그<br>
- HTML의 소스 코드만 보고도 어느 부분이 제목이고 메뉴인지 쉽게 파악 가능<br>
- 문서 구조가 정확히 나눠짐 -> PC나 모바일의 웹 브라우저와 여러 스마트 기기의 다양한 화면에서 웹 문서를 표현하기 쉬움<br><br>

`<nav>`
- 내비게이션 영역으로 같은 웹 문서 안 다른 위치로 연결하거나 다른 웹 문서로 연결하는 링크를 만듦
- 웹 문서 위치에 영향X (헤더, 푸터, 사이드 바 안에 포함 가능, 독립 사용 가능)
- 문서 안에 여러 개 만들기O (id로 구분)<br>

`<section>`
- 콘텐츠 영역, 몇 개의 콘텐츠를 묶는 용도로 사용
- css 적용을 위해 묶는 용도X(css는 div쓰기)<br>

`<article>`
- 독립된 웹 콘텐츠 항목(따로 떼어도 콘텐츠가 되는 내용)
- article 여러 개 사용 가능, section 태그를 포함할 수 있음<br>

`<aside>`
- 본문 내용 외 왼쪽이나 오른쪽, 혹은 아래쪽에 사이드 바 표시
- 필수 요소X 필요할 경우에만 사용<br>

`<footer>`
- 웹 문서에서 맨 아래쪽 영역
- 사이트 제작 정보나 저작권 정보, 연락처 등 작성
- 다른 시맨틱 태그를 사용해 다양한 정보 포함<br>

`<meta>`의 속성
- width : 초기 뷰포트 너비 설정(device-with 또는 양수)
- initial-scale : 브라우저가 처음 페이지 로드할 때 비율 설정(0 ~ 10 / 주로 1사용)
- user-scalable : 웹페이지 확대 허용 여부 설정(yes 또는 no)
- maximum-scale : 최대 확대 비율 설정(0 ~ 10 / 주로 1사용)
- minimum-scale : 최소 축소 비율 설정(0 ~ 10 / 주로 1사용)
- http-equiv : 호환성 관련 속성, 버전에 맞게 렌더링(html문서->웹 브라우저 화면)<br>

`<div>`태그는 한 줄 다 차지<br>
따라서 특정부분만 강조하되 콘텐츠를 한 줄에 같이 쓰고 싶으면 span을 씀

href에 아이디를 적으면 같은 웹 문서 안에서 그 아이디를 가진 태그 중 첫번째 태그로 이동<br>

`<strong>`와 `<b>` 차이점(화면 낭독기)
- `<strong>`는 화면 낭독기가 강조하여 읽음(<strong>안녕하세요</strong>)
- `<b>`는 화면 낭독기가 그냥 읽음(<b>안녕하세요</b>)<br>

`<em>`와 `<i>` 차이점
- `<em>`는 외관뿐 아니라 실질적으로 강조를 써야하는 경우 사용(의미론적<em>안녕하세요</em>)
- `<i>`는 외관상으로 기울기 표현만 함(<i>안녕하세요</i>)<br><br>

<h2>2. 목록(List)</h2>

`<ol>`의 type, start 속성
- type = “1” : 숫자(기본값)
- type = “a” : 영문 소문자
- type = “A” : 영문 대문자
- type = “ⅰ” : 로마 숫자 소문자
- type = “Ⅰ” : 로마 숫자 대문자<br>

`<dl>`&`<dt>`&`<dd>`
- `<dl>` : 설명 목록(description list)
- `<dt>` : 설명 목록에서 이름을 지정하는 태그
- `<dd>` : 설명 목록에서 값(설명)을 지정하는 태그<br>
ex)
<dl>
  <dt>소프트웨어개발과</dt>
  <dd>1학년 : 39명</dd>
  <dd>2학년 : 35명</dd>
  <dd>3학년 : 35명</dd>
</dl><br>

<h2>3. 표(Table)</h2>

`<table>`
- 표 구현을 위한 태그
- CSS를 사용해 표의 제목, 본문, 요약에 각각 다른 스타일 적용할 수 있음
- `<thead>`, `<tbody>`, `<tfoot>` 태그를 통해 시각 장애인도 화면 낭독기를 통해 쉽게 표를 이해할 수 있음
- `<tr>`
    - 행을 지정하는 태그(한 행)

- `<th>`
    - 제목 행 내용(진하게, 가운데 정렬)
  
- `<td>`
    - 행 안에 들어가는 내용<br><br>

- colspan,  rowspan 속성
    - td 태그에서 사용하는 행, 열 병합 속성

`<col>`
- 열을 1개만 지정하는 태그

`<colgroup>`
- <col> 태그 2개 이상 묶어서 여러 열을 지정하는 태그<br><br>

<h2>4. 멀티미디어(Multimedia)</h2>

`<object>`
- data 속성에 오디오, 비디오, PDF, 자바 애플릿 등 다양한 문서와 멀티미디어 파일을 지정하여 삽입하는 태그

`<embed>`
- src 속성에 멀티미디어 파일을 지정하여 삽입하는 태그, 닫는 태그 없음

`<audio>`, `<video>`
- HTML4까지는 플러그인 프로그램 필요했으나 HTML5 부터는 웹 브라우저 안에서 바로 멀티미디어 재생 가능
-  `<audio>`와 `<video>` 태그의 속성
    - controls : 플레이어 화면에 컨트롤 바를 표시
    - autoplay : 자동 실행
    - loop : 반복 재생
    - muted : 소리 제거
    - preload : 페이지를 불러올 때 파일을 어떻게 로딩할 것인지 지정(auto, metadata, none)
    - width, height : 비디오 플레이어 너비, 높이 지정. 하나만 지정할 경우 나머지 자동 계산
    - poster=”파일명” : 비디오가 재생되기 전까지 화면에 표시될 포스터 이미지 지정<br><br>

<h2>5. 하이퍼링크(Hyperlink)</h2>

`<a>`
- 하이퍼링크 설정 태그 (anchor)
- href
    - 설명 : 하이퍼링크 URL
    - 주요 값 :
        - URL
        - tel : 010-1234-5678
        - mailto : 1234@gmail.com
- target
    - 설명 : 설명URL 이동 방법 지정
    - 주요 값 :
        - _self : 현재 브라우저에 띄움
        - _blank : 새로운 탭에 띄움(또는 브라우저 설정에 따라 새 창)<br><br>

<h2>6. 폼(Form)</h2>

`<form>`
- 사용자 입력을 받거나 서버로 데이터를 보낼 때 사용, input 태그와 함께 사용
    1. 폼에 내용을 입력(자동완성 기능은 해제)
        - 각각 id, pw 변수에 입력을 받음
    2. 입력한 내용은 login.jsp의 위치로 GET 방식을 통해 전
    3. 서버에 있는 register.jsp를 새 탭에 실행<br><br>

`<fieldset>`
- 하나의 폼 안에서 여러 구역을 나누어 표시할 때 사용

`<legend>`
- `<fieldset>`로 묶은 그룹에 제목 붙이는 태그

`<label>`
- 폼 요소에 이름(lebel)을 붙일 때 사용
- for 속성을 사용하면 `<label>`를 사용한 레이블과 사용자 정보를 입력 받는 `<input>`가 떨어져 있어도 둘 사이를 쉽게 연결할 수 있음<br><br>

<h1>CSS</h1><br>

<h2>1. 기본(basic)</h2>

선택자
- class와 id의 공통점
    - 특정 부분만 선택해서 스타일 적용
- class와 id의 차이점
    - class
        - 문서에 여러 번 적용 가능
        - 같은 태그라도 다른 스타일 적용하고 싶을 때 주로 사용
    - id
        - 문서에 한 번 적용 가능
        - 문서의 레이아웃과 관련된 스타일을 지정하거나 웹 요소에 자바스크립트 프로그램을 사용하면서 요소 구별할 때 사용<br><br>

<h2>2. 텍스트(Text)</h2>

text-align : 텍스트 정렬
- <b>text-align : start | end | left | right | center | justify | match-parent ;</b>
    - left : 왼쪽에 맞추어 문단 정렬
    - right : 오른쪽에 맞추어 문단 정렬
    - center : 가운데에 맞추어 문단 정렬
    - justify : 양쪽에 맞추어 문단 정렬
    - start : 현재 텍스트 줄의 시작 위치에 맞추어 문단을 정렬
    - end : 현재 텍스트 줄의 끝 위치에 맞추어 문단을 정렬
    - match-parent : 부모 요소에 따라 문단 정렬

line-height : 줄 간격 조절
- <b>line-height: <숫자>  |  <백분율></b>;

text-shadow : 텍스트 그림자
- <b>text-shadow: none  |  <가로 거리> <세로 거리> <번짐 정도> <색상></b>;

text-transform : 영문 텍스트의 대소문자 변환
- <b>text-transform : none  |  capitalize  |  uppercase  |  lowercase  |  full-width;</b>

text-decoration : 텍스트 밑줄, 취소선
- <b>text-decoration : none  |  underline  |  overline  | line-through;</b>

letter-spacing, word-spacing : 자간 조절
- <b>letter-spacing : normal  |  <크기>;</b> (글자 간 간격 조절)
- <b>word-spacing : normal  |  <크기>;</b> (단어 간 간격 조절)

<h2>3. 목록(List)</h2>

list-style-type : 불릿 모양과 번호 스타일 지정
- disc : 채운 원 모양 ( ● )
- circle : 빈 원 모양 ( ○ )
- square : 채운 사각형 모양 ( ■ )
- decimal : 1부터 시작하는 10진수 ( 1, 2, 3... )
- decimal-leading-zero : 앞에 0이 붙는 10진수 ( 01, 02, 03... )
- lower-roman : 로마 숫자 소문자 (ⅰ, ⅱ, ⅲ... )
- upper-roman : 로마 숫자 대문자 (Ⅰ, Ⅱ, Ⅲ... )
- lower-alpha 또는 lower-latin : 알파벳 소문자 ( a, b, c... )
- upper-alpha 또는 upper-latin : 알파벳 대문자 ( A, B, C... )
- none : 불릿이나 숫자 없음

list-style-image : 불릿 대신 이미지 사용
- <b>list-style-image : <url(이미지 파일 경로)>;</b>

list-style-position : 목록 들여쓰기
- <b>list-style-position : inside  |  outside(기본값);</b>

list-style : 목록 속성 한 번에 표시
- <b>ex) list-style : decimal inside;</b>

<h2>4. 표(Table)</h2>

caption-side : 캡션 위치 조절
- <b>caption-side : top(기본값)  |  bottom ;</b>
- bottom을 활용하면 아래쪽에 표시 가능

border-collapse : 표 테두리와 셀 테두리 분리 설정
- <b>border-collapse : collapse  |  seperate(기본값) ;</b>
- collapse을 사용하면 셀 테두리와 표 테두리를 합쳐 하나도 표시

border-spacing : 셀 사이 여백 조절
- <b>border-spacing : <수평거리> <수직거리> ;</b>

<h2>5. 요소배치(Element Placement)</h2>

display : 블록 레벨 요소, 인라인 레벨 요소를 바꿀 때 사용
- <b>display : block  |  inline  |  inline-block  |  none ;</b>
    - block : 인라인 요소를 블록 요소로 바꿈
    - inline : 블록 요소를 인라인 요소로 바꿈
    - inline-block : 인라인, 블록 요소의 속성을 모두 가지고 있으며 마진, 패딩 지정 가능
    - none : 해당 요소를 화면에 표시하지 않음

float : 요소를 왼쪽이나 오른쪽에 띄움(수평정렬)
- <b>float : left  |  right  |  none ;</b>
- 다른 요소에 영향을 주지 않으면서 자연스럽게 배치

clear : float 속성 무효화
- <b>clear : left  |  right  |  both ;</b>
- float의 흐름을 무효화하고 다음 라인으로 이동하여 배치

position : 웹 문서 내 요소 배치(x,y축)
- <b>position : static(기본값)  |  relative  | absolute  |  fixed ;</b>
    - <b>정적</b> 위치 지정 방식(static)
        - 다른 태그와의 관계에 의해 자동으로 배치, 임의로 위치 지정 불가
    - <b>상대</b> 위치 지정 방식(relative)
        - 이전 요소에 자연스럽게 연결해 배치하되 위치 지정 가능
    - <b>절대</b> 위치 지정 방식(absolute)
        - 가장 가까운 relative 부모 요소를 기준으로 상하좌우 값으로 요소 배치
        - 가까운 relative 속성을 가진 부모가 없으면 body를 기준으로 배치
    - <b>고정</b> 위치 지정 방식(fixed)
        - 다른 요소 상관없이 뷰포트 기준으로 특정 위치에 고정 배치
        - 스크롤해도 움직이지 않음

z-index : 우선순위에 따라 화면 전면 배치(z축)
- <b>z-index : <숫자>  |  auto(기본값) ;</b>
    - 숫자가 클 수록 전면으로 배치
    - position이 static인 요소에는 적용 불가

overflow : 자식 요소가 부모 요소를 벗어났을 때 처리 방법
- <b>overflow : visible(기본값)  |  hidden  |  scroll  |  auto ;</b>
    - visible : 부모 영역 벗어난 부분 표시
    - hidden : 부모 영역 벗어난 부분 잘라냄
    - scroll : 부모 영역 벗어난 부분 상관없이 스크롤 표시
    - auto : 부모 영역 벗어난 부분 있을 때만 스크롤 표시

<h2>6. 미디어 쿼리(Midea Query)</h2>

- 서로 다른 미디어 타입에 따라 각기 다른 스타일을 적용할 수 있는 기능
- 반응형 웹의 핵심 기능은 @media 를 사용하는 것 ! (<style>~</style> 사이 위치)
- @media [ only  |  not ] 미디어 유형 [ and 미디어 조건 ] … { CSS 요소 }
    - 미디어 유형 : all, screen(브라우저 화면), print(프린트 화면), speech(음성), tv, handheld, projection 등
        - 미디어 조건
            - width, height : 웹페이지의 가로 너비, 세로 높이
            - min-width, min-height : 웹페이지의 최소 너비, 최소 높이
            - max-width, max-height : 웹페이지의 최대 너비, 최대 높이
            - device-width, device-height : 디바이스의 물리적 너비, 높이 (단위 : px)
            - orientation : 디바이스 방향 (가로 방향 - landscape / 세로 방향 - portrait)

<h2>7. 플렉스박스(Flex Box)</h2>

플렉스 박스 레이아웃
- 기본적으로 웹 요소를 가로로 배치하다가 화면에 가득 차면 아래로 내려서 다시 옆으로 배치하는 방식
- 여유 공간에 따라 너비나 높이, 위치를 자유롭게 변형할 수 있음
- 플렉스 컨테이너(부모 박스)
    - 플렉스 박스 레이아웃을 적용할 대상을 묶는 요소
- 플렉스 항목(자식 박스)
    - 플렉스 박스 레이아웃을 적용할 대상으로, 1~6까지 작은 박스들이 모두 해당
- 주축(main axis)
    - 플렉스 컨테이너 안에서 플렉스 항목을 배치하는 기본 방향
    - 왼쪽에서 오른쪽으로 수평 방향으로 배치
- 교차축(cross axis)
    - 주축으로 배치하다가 끝점까지 닿았을 때 어떻게 배치할 지 결정하는 속성
    - 위에서 아래로 배치

flex-direction : 주축과 방향을 지정하는 속성
- row : 주축을 가로로 지정, 왼 → 오 정렬 (기본값)
- row-reverse : 주축을 가로로 지정, 오 → 왼 정렬
- column : 주축을 세로로 지정, 위 → 아래 정렬
- column-reverse : 주축을 세로로 지정, 아래 → 위 정렬

flex-wrap : 플렉스 컨테이너 너비보다 플렉스 항목이 많은 경우 줄바꿈 여부
- nowrap : 플렉스 항목을 한 줄로 표시함 (기본값)
- wrap : 플렉스 항목을 여러 줄로 표시
- wrap-reverse : 플렉스 항목을 여러 줄로 표시하되, 교차축의 시작점과 끝점이 바뀜

flex-flow : flex-direction + flex-flow 속성 한꺼번에 지정 (기본값 : row wrap /* 왼쪽에서 오른쪽, 여러 줄 */)

justify-content : 주축에서 플렉스 항목 간의 정렬 방법 지정
- flex-start : 주축의 시작점에 맞춰 정렬(기본값)
- flex-end : 주축의 끝점에 맞춰 정렬
- center : 주축의 중앙에 맞춰 정렬
- space-around : 항목을 고르게 정렬, 각 항목은 양쪽 여백의 절반만큼 자리 차지
- space-between : 첫 번째 항목은 주축 시작점에, 마지막 항목은 주축 끝점에 배치한 후 나머지 항목은 같은 간격으로 정렬
- space-evenly : 항목을 고르게 정렬, 각 항목의 여백은 모두 동일

align-items : 교차축의 정렬 방법 지정
- flex-start : 교차축의 시작점에 맞춰 정렬
- flex-end : 교차축의 끝점에 맞춰 정렬
- center : 교차축의 중앙에 맞춰 정렬
- baseline : 교차축의 문자 기준선에 맞춰 정렬
- stretch : 플렉스 항목을 늘려 교차축에 가득 차게 정렬(기본값)

align-content : 여러 줄일 때 교차축 정렬 방법 지정
- flex-start : 교차축의 시작점에 맞춰 정렬
- flex-end : 교차축의 끝점에 맞춰 정렬
- center : 교차축의 중앙에 맞춰 정렬
- space-between : 첫 번째 항목과 끝 항목을 교차축의 시작점과 끝점에 맞추고, 나머지 항목은 그 사이 같은 간격으로 정렬
- space-around : 모든 항목을 교차축에 같은 간격으로 정렬
- stretch : 플렉스 항목을 늘려 교차축에 가득 차게 정렬(기본값)

<h2>8. 그리드 레이아웃(Grid Layout)</h2>

그리드 레이아웃
- 플렉스 박스 레이아웃은 주축/교차축 개념이 있지만 CSS 그리드 레이아웃은 양쪽 방향 모두 사용<br>
    → 플렉스 그리드 레이아웃은 1차원, CSS 그리드 레이아웃은 2차원
- 행(row)과 열(column)로 화면을 구성하고, 필요할 경우 그리드 항목 사이에 간격을 둘 수 있음

grid-template-columns, grid-template-rows : 열과 행의 크기와 개수 지정

grid-auto-rows : 동적으로 만들어진 행의 높이 지정

repeat() : 값이 반복될 때 줄여서 표현할 수 있는 함수

minmax() : 최솟값과 최댓값을 지정하는 함수

auto-fit, auto-fill : 빈 공간을 자동으로 채움
- 열의 개수를 지정하는 대신 auto-fit이나 auto-fill을 지정하면 화면 너비에 따라 행을 채움.
    - auto-fit : 남는 공간 없이 꽉 채우기(컨테이너 너비 가득 채움)
    - auto-fill : 열 최소 너비까지만 표시하고 남는 공간은 그대로 둠

gap : 그리드 항목의 간격 조절

그리드 라인
- grid-column-start : 열의 시작 번호를 지정 (<b>grid-column-start: 1;</b>)
- grid-column-end : 열의 끝 번호를 지정 (<b>grid-column-end: 4;</b>)
- grid-column : 열의 시작과 끝 번호를 함께 지정, /로 구분 (<b>grid-column: 1 / 4;</b>)
- grid-row-start : 행의 시작 번호를 지정 (<b>grid-row-start: 2;</b>)
- grid-row-end : 행의 끝 번호를 지정 (<b>grid-row-end: 4;</b>)
- grid-row : 행의 시작과 끝 번호를 함께 지정, /로 구분 (<b>grid-row: 2 / 4;</b>)

탬플릿 영역
ex)
grid-template-areas:
    "gird1 grid2 grid2"
    "grid1 grid2 grid3"
    "grid4 grid5 grid6";
