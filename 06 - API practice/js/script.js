const apiKey = "56ef42523d8ac74ceb13ce7f908fa8e6";
var city = "Houston";

var apiFiveDayOriginal = "https://api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}";
var apiFiveDay = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey;

var containerDiv = document.querySelector('.container');

// document.body.onload = operations;


// var search = ;
var cityLat = fetch(apiFiveDay)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        // console.log(data.city.coord.lon)
        // console.log(data.city.coord.lat)
        // return data.city.coord.lat
        
    });

// console.log(cityLat);


// var newDivEl = document.createElement("div");
// newDivEl.innerText = "This is random text";
// document.body.append(newDivEl);
