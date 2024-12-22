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

// -------------------------------------------------------현재 날씨--------------------------------------------------------------

async function fetchPresentData() {
    const api =
        "5GLixrv7sR01VXq8CN%2BmNedrEHgahELTpqaprdn0%2B3juy4x6BQKLQDqD18NnChL%2FTy0ccY8002GpP7UAudPXaA%3D%3D"; // 기상청 API
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const date = `${year}${month}${day}`;
    // const date = "20241210";
    const time = "0500"; // 시간
    const nx = "88"; // 위치
    const ny = "100";

    const url = `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${api}&base_date=${date}&base_time=${time}&nx=${nx}&ny=${ny}&dataType=JSON&numOfRows=1000`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        return data.response.body.items.item;
    } catch (error) {
        console.error("API 호출 오류:", error);
        return [];
    }
}

// 날씨 데이터를 파싱
function parsePresentData(items) {
    const weatherData = {
        temperature: "정보 없음",
        windSpeed: "정보 없음",
        humidity: "정보 없음",
        sky: "정보 없음",
        pty: "정보 없음",
    };

    items.forEach((item) => {
        switch (item.category) {
            case "TMP": // 기온
                weatherData.temperature = item.fcstValue;
                break;
            case "WSD": // 풍속
                weatherData.windSpeed = item.fcstValue;
                break;
            case "SKY": // 하늘 상태
                weatherData.sky = item.fcstValue;
                break;
            case "PTY": // 강수 형태
                weatherData.pty = item.fcstValue;
                break;
            case "POP":
                weatherData.pop = item.fcstValue;
                break;
        }
    });

    return weatherData;
}

function getWeatherDescription(skyValue, ptyValue) {
    // 강수가 있을 경우
    switch (ptyValue) {
        case "1":
            return "비";
        case "3":
            return "눈";
        default:
            break; // 강수가 없으면 SKY 값으로 처리
    }

    // 강수가 없을 경우
    switch (skyValue) {
        case "1":
            return "맑음";
        case "3":
            return "약간 흐림";
        case "4":
            return "흐림";
    }
}

function getWeatherIcon(skyValue, ptyValue) {
    // 강수가 있을 경우 icon
    if (ptyValue !== "0") {
        switch (ptyValue) {
            case "1": // 비
                return '<i class="fa-solid fa-cloud-rain fa-5x"></i>';
            case "3": // 눈
                return '<i class="fa-regular fa-snowflake fa-5x"></i>';
            case "4": // 소나기
                return '<i class="fa-solid fa-cloud-showers-heavy fa-5x"></i>';
        }
    }

    // 강수가 없을 경우 icon
    switch (skyValue) {
        case "1": // 맑음
            return '<i class="fa-solid fa-sun fa-5x fa-5x"></i>';
        case "3": // 약간 흐림
            return '<i class="fa-solid fa-cloud-sun fa-5x"></i>';
        case "4": // 흐림
            return '<i class="fa-solid fa-smog fa-5x"></i>';
    }
}

// UI 업데이트 함수
async function updatePresentUI() {
    const items = await fetchPresentData(); // 날씨 데이터를 가져옴
    const weatherData = parsePresentData(items); // 데이터를 파싱

    // 하늘 상태와 강수 형태를 하나로 변환
    const weatherDescription = getWeatherDescription(
        weatherData.sky,
        weatherData.pty
    );
    const weatherIcon = getWeatherIcon(weatherData.sky, weatherData.pty);

    // UI 업데이트
    document.querySelector(".present").innerHTML = `
        <div id="now">
            <p class="now">NOW</p>
        </div>
        <div class="weather-icon">${weatherIcon}</div>
        <div id="details">
            <div class="details wind">
                <i class="fa-solid fa-wind fa-2x"></i>
                <span>${weatherData.windSpeed} m/s</span>
            </div>
            <div class="details pop">
                <i class="fa-solid fa-tint fa-2x"></i>
                <span>${weatherData.pop}%</span>
            </div>
        </div>
        <div>
            <h1>${weatherData.temperature}°C</h1>
            <p>${weatherDescription}</p>
        </div>
    `;
}

// 함수 실행
updatePresentUI();

// -------------------------------------------------------3시간별 날씨--------------------------------------------------------------

function parseHourlyData(items) {
    const targetTimes = ["0600", "0900", "1200", "1500", "1800", "2100"]; // 필요한 시간
    const hourlyData = [];
    targetTimes.forEach((targetTime) => {
        // 각 타임에 해당하는 데이터를 모음
        const dataForTime = {
            time: targetTime,
            temperature: "정보 없음",
            sky: "정보 없음",
            pty: "정보 없음",
        };

        items.forEach((item) => {
            if (item.fcstTime === targetTime) {
                switch (item.category) {
                    case "TMP": // 기온
                        dataForTime.temperature = item.fcstValue;
                        break;
                    case "SKY": // 하늘 상태
                        dataForTime.sky = item.fcstValue;
                        break;
                    case "PTY": // 강수 형태
                        dataForTime.pty = item.fcstValue;
                        break;
                }
            }
        });
        hourlyData.push(dataForTime); // 데이터를 추가
    });

    return hourlyData;
}

async function updateHourlyUI() {
    const items = await fetchPresentData(); // 시간별 날씨 데이터를 가져옴
    const hourlyData = parseHourlyData(items); // 데이터를 파싱

    // UI 업데이트
    const container = document.querySelector(".threehour");
    container.innerHTML = ""; // 기존 내용을 초기화

    hourlyData.forEach((data) => {
        const weatherDescription = getWeatherDescription(data.sky, data.pty);
        const weatherIcon = getWeatherIcon(data.sky, data.pty);

        const hourlyCard = document.createElement("div");
        hourlyCard.className = "card";
        hourlyCard.innerHTML = `
            <p class="time">${data.time.slice(0, 2)}:00</p>
            <div class="icon">${weatherIcon}</div>
            <p class="temperature">${data.temperature}°C</p>
            <p class="description">${weatherDescription}</p>
        `;
        container.appendChild(hourlyCard);
    });
}

// 실행
updateHourlyUI();
