const menus = document.querySelectorAll(".menu");
const nav = document.querySelector(".menu-data");

nav.classList.add("hidden");

menus.forEach(function (menu, index) {
    menu.addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active-" + (index + 7));
        if (nav.classList.contains("hidden")) {
            nav.classList.remove("hidden");
            nav.classList.add("visible");
        } else {
            nav.classList.remove("visible");
            nav.classList.add("hidden");
        }
    });
});

// -------------------------------------------------------주간 날씨--------------------------------------------------------------

async function fetchWeeklyData() {
    const api =
        "5GLixrv7sR01VXq8CN%2BmNedrEHgahELTpqaprdn0%2B3juy4x6BQKLQDqD18NnChL%2FTy0ccY8002GpP7UAudPXaA%3D%3D"; // 기상청 API
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const date = `${year}${month}${day}`;
    // const date = "20241210";
    const time = "0500"; // 기준 시간
    const nx = "88"; // 위치
    const ny = "100";

    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${api}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}&dataType=JSON&numOfRows=1000`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.response.body.items.item; // 시간별 데이터 반환
    } catch (error) {
        console.error("API 호출 오류:", error);
        return [];
    }
}
document.querySelector(".weekly").innerHTML = `
        <div class="graph">
            <h3>강수량(%)</h3>
            <svg class="graph-svg" viewBox="0 0 100 50" preserveAspectRatio="none">
                <polyline 
                    points="0,40 14.2,38 28.4,50 42.6,38 56.8,50 71,50 85.2,50 100,50"
                    fill="none" 
                    stroke="#87ceeb" 
                    stroke-width="1.5" 
                />
            </svg>
            <div id="point">
                <div style="left: 1%; bottom: 20%;" class="point">목\n10</div>
                <div style="left: 15.2%; bottom: 23%;" class="point">금\n10</div>
                <div style="left: 29.1%; bottom: 6%;" class="point">토\n0</div>
                <div style="left: 43%; bottom: 23%;" class="point">일\n10</div>
                <div style="left: 55.8%; bottom: 6%;" class="point">월\n0</div>
                <div style="left: 70%; bottom: 6%;" class="point">화\n0</div>
                <div style="left: 84.2%; bottom: 6%;" class="point">수\n0</div>
                <div style="left: 98%; bottom: 6%;" class="point">목\n0</div>
            </div>
        </div>
        <div class="weather">
            <div class="card">
                목요일
                <i class="fa-solid fa-cloud-sun fa-3x"></i>
                8°C
            </div>
            <div class="card">
                금요일
                <i class="fa-solid fa-cloud-sun fa-3x"></i>
                7°C
            </div>
            <div class="card">
                토요일
                <i class="fa-solid fa-sun fa-3x"></i>
                4°C
            </div>
            <div class="card">
                일요일
                <i class="fa-solid fa-cloud-sun fa-3x"></i>
                7°C
            </div>
            <div class="card">
                월요일
                <i class="fa-solid fa-sun fa-3x"></i>
                6°C
            </div>
            <div class="card">
                화요일
                <i class="fa-solid fa-cloud-sun fa-3x"></i>
                6°C
            </div>
            <div class="card">
                수요일
                <i class="fa-solid fa-sun fa-3x"></i>
                5°C
            </div>
            <div class="card">
                목요일
                <i class="fa-solid fa-cloud-sun fa-3x"></i>
                7°C
            </div>
        </div>
    `;
