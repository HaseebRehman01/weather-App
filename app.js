const Btn = document.querySelector("#btn");
let cityName = document.querySelector("#input")
let temp = document.querySelector(".t-1")
let city_Name = document.querySelector(".t-2")

async function weather(city) {
    let apikey = "1c7447c03b9d16532955e90a6acd22c6";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
    let data;

    try {
        let response = await fetch(url);
         data = await response.json();
         console.log(data)
         
    } catch (error) {
        console.error(" Catch Error:", error);
    }

if (data.cod === "404" ){
    alert("city not found")
    return // yeh aga nahi barega 
}
else if (data.cod === "400" ){
    alert("write city name ")
    return // yeh aga nahi barega 
}
else{
let temperature = Math.round(data.main.temp - 273.15)  + "<sup>°</sup>"+ "c";
temp.innerHTML = temperature
city_Name.innerHTML = data.name
}

}


Btn.addEventListener("click", () => {
    weather(cityName.value);
    cityName.value = ""
});


// const feelsLikeKelvin = 287.39;
// const feelsLikeCelsius = Math.round(feelsLikeKelvin - 273.15);

// console.log(feelsLikeCelsius);
