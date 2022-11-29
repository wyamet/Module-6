let weather = {
    apiKey: "1cf0d4dd74d66ec9213b19523fa48a65",
    fetchWeather: function (city) {
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" 
          + city 
          + "&units=imperial&appid=" 
          + this.apiKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
},
displayWeather: function(data) {
    const { name } = data;
    const { icon, description} = data.weather[0];
    const {temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidity,speed);
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°F";
    document.querySelector(".humidity").innerText = "Humidity: " +  humidity + "%";
    document.querySelector(".wind").innerText = "Wind Speed: " + speed + "mp/h";

}


};

// let  apikey = "1cf0d4dd74d66ec9213b19523fa48a65";
// function fetchWeather () {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=Eugene&units=imperial&appid=1cf0d4dd74d66ec9213b19523fa48a65"
//     ).then((response) => response.json())
//     .then((data) => console.log(data));
// }

    