const searchBtn = document.getElementById("searchBtn");
const cityName = document.getElementById("cityName");
const city_name = document.getElementById("city_name");
const temp_value = document.getElementById("temp_value");
const temp_status = document.getElementById("temp_status");

const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    console.log(cityVal);
    if (cityVal === "") {
        city_name.innerText = "Invalid City Name";
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=19fd85b1baedf249199add92489d42f0`;
            const response = await fetch(url);
            const data = await response.json();
            datahide.classList.remove('data_hide');
            const arrData = [data];
            city_name.innerText = arrData[0].name + ", " + arrData[0].sys.country;
            temp_value.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;

            if (tempMood == "Clear") {
                temp_status.innerHTML = 
                "<i class='fa-solid fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = 
                "<i class='fa-solid fa-cloud' style='color: #9BB6DC;'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = 
                "<i class='fa-solid fa-cloud-rain' style='color: #4880CE;'></i>";
            } else {
                temp_status.innerHTML = 
                "<i class='fa-solid fa-cloud' style='color: #9BB6DC;'></i>";
            }
        } catch {

            cityName.innerText = `Enter City Name Properly`;
            datahide.classList.add('data_hide');
        }
    }
}

searchBtn.addEventListener("click", getInfo);