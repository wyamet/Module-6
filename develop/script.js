let weather = {
    apikey: "1cf0d4dd74d66ec9213b19523fa48a65",
    fetchWeather: function () {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=Eugene&units=imperial&appid=1cf0d4dd74d66ec9213b19523fa48a65"
        ).then((response) => response.json())
        .then((data) => console.log(data));
},
};