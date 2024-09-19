시맨틱(semantic) 태그?
- 이름만으로도 어떤 역할을 하는지 쉽게 파악 가능한 태그
- HTML의 소스 코드만 보고도 어느 부분이 제목이고 메뉴인지 쉽게 파악 가능
- 문서 구조가 정확히 나눠짐 -> PC나 모바일의 웹 브라우저와 여러 스마트 기기의 다양한 화면에서 웹 문서를 표현하기 쉬움

nav 태그
    - 내비게이션 영역으로 같은 웹 문서 안 다른 위치로 연결하거나 다른 웹 문서로 연결하는 링크를 만듦
    - 웹 문서 위치에 영향X (헤더, 푸터, 사이드 바 안에 포함 가능, 독립 사용 가능)
    - 문서 안에 여러 개 만들기O (id로 구분)

section 태그
    - 콘텐츠 영역, 몇 개의 콘텐츠를 묶는 용도로 사용
    - css 적용을 위해 묶는 용도X(css는 div쓰기)

article 태그
    - 독립된 웹 콘텐츠 항목(따로 떼어도 콘텐츠가 되는 내용)
    - article 여러 개 사용 가능, section 태그를 포함할 수 있음

aside 태그
    - 본문 내용 외 왼쪽이나 오른쪽, 혹은 아래쪽에 사이드 바 표시
    - 필수 요소X 필요할 경우에만 사용

footer 태그
    - 웹 문서에서 맨 아래쪽 영역
    - 사이트 제작 정보나 저작권 정보, 연락처 등 작성
    - 다른 시맨틱 태그를 사용해 다양한 정보 포함

meta 태그의 속성
    - width : 초기 뷰포트 너비 설정(device-with 또는 양수)
    - initial-scale : 브라우저가 처음 페이지 로드할 때 비율 설정(0 ~ 10 / 주로 1사용)
    - user-scalable : 웹페이지 확대 허용 여부 설정(yes 또는 no)
    - maximum-scale : 최대 확대 비율 설정(0 ~ 10 / 주로 1사용)
    - minimum-scale : 최소 축소 비율 설정(0 ~ 10 / 주로 1사용)
    - http-equiv : 호환성 관련 속성, 버전에 맞게 렌더링(html문서->웹 브라우저 화면)