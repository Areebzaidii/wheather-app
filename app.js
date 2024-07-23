let apikey = "49e3b820f7a47375d5b1eaaaa0cba1b0";
let backImage = document.getElementById("image");
let cityNAme=document.getElementById("city");
let temperature=document.getElementById("temp");
let feelLike=document.getElementById("feel");
let humidity=document.getElementById("humidity");
let airpressure=document.getElementById("airpressure");
let mosam=document.getElementById("mosam");
let conditionOfWeather=document.getElementById("cbwimg");
navigator.geolocation.getCurrentPosition((location) => {
    var latitude = location.coords.latitude;
    var longitude = location.coords.longitude;

    let getDat = (cb) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`)
            .then((res) => res.json())
            .then((res) => cb(res));
    };

    getDat((defultdta) => {
        console.log(defultdta);

        let weatherCheack = defultdta.weather[0].main;

        if (weatherCheack === "Haze") {
            backImage.style.backgroundImage = "url(Haze.jpg)";
        } else if (weatherCheack === "Clouds") {
            backImage.style.backgroundImage = "url(cloud.webp)";
        } else if (weatherCheack === "Rain") {
            backImage.style.backgroundImage = "url(rain.avif)";
        } else if (weatherCheack === "Clear") {
            backImage.style.backgroundImage = "url(sun.jpg)";
        } else if (weatherCheack === "Smoke") {
            backImage.style.backgroundImage = "url(smoke.avif)";
        }else if (weatherCheack === "Drizzle") {
            backImage.style.backgroundImage = "url(rain.avif)";
        }
    });

    getDat((defultdta) => {
    (cityNAme.innerHTML=defultdta.name);
    });

    getDat((defultdta) => {
        (temp.innerHTML=Math.round(defultdta.main.temp)+" °C");
    });

    getDat((defultdta) => {
        feelLike.innerHTML=Math.round(defultdta.main.feels_like)+" °C";
    });

    getDat((defultdta) => {
       humidity.innerHTML=defultdta.main.humidity+"%";
    });
    getDat((defultdta) => {
        airpressure.innerHTML=Math.round(defultdta.wind.speed*3.6)+"km/h"
    });
    getDat((defultdta) => {
        mosam.innerHTML=defultdta.weather[0].main;
        if(mosam.innerHTML==="Smoke"){
            conditionOfWeather.src="smoke.png"
        }
        else if(mosam.innerHTML==="Clear"){
            conditionOfWeather.src="contrast.png"
        }
        else if(mosam.innerHTML==="Rain"){
            conditionOfWeather.src="rainy.png"
        }
        else if(mosam.innerHTML==="Clouds"){
            conditionOfWeather.src="cloud-computing.png"
        }
        else if(mosam.innerHTML==="Drizzle"){
            conditionOfWeather.src="rainy-day.png"
        }
        else if(mosam.innerHTML==="Haze"){
            conditionOfWeather.src="haze.png"
        }



    });
    getDat((defultdta) => {
        console.log(defultdta);
    });



});

        
        
        
        // for searching    
function searching(){
var searchbar=document.getElementById("input").value;

let getData =(cb)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchbar}&appid=${apikey}&units=metric`)
    .then((res)=>res.json())
    .then((res)=>cb(res));
};
getData((data)=>{
    console.log(data);

    let weatherCheack = data.weather[0].main;

    if (weatherCheack === "Haze") {
        backImage.style.backgroundImage = "url(Haze.jpg)";
    } else if (weatherCheack === "Clouds") {
        backImage.style.backgroundImage = "url(cloud.webp)";
    } else if (weatherCheack === "Rain") {
        backImage.style.backgroundImage = "url(rain.avif)";
    } else if (weatherCheack === "Clear") {
        backImage.style.backgroundImage = "url(sun.jpg)";
    }else if (weatherCheack === "Smoke") {
        backImage.style.backgroundImage = "url(smoke.avif)";
    }
    else if (weatherCheack === "Drizzle") {
        backImage.style.backgroundImage = "url(rain.avif)";
    }

});

getData((data)=>{
    (cityNAme.innerHTML=data.name);
})


getData((data)=>{
    (temp.innerHTML=Math.round(data.main.temp)+" °C");
})

getData((data)=>{
    humidity.innerHTML=data.main.humidity+"%";

})

getData((data)=>{
    airpressure.innerHTML=Math.round(data.wind.speed*3.6)+"km/h"

})

getData((data)=>{
    mosam.innerHTML=data.weather[0].main;
    if(mosam.innerHTML==="Smoke"){
        conditionOfWeather.src="smoke.png"
    }
    else if(mosam.innerHTML==="Clear"){
        conditionOfWeather.src="contrast.png"
    }
    else if(mosam.innerHTML==="Rain"){
        conditionOfWeather.src="rainy.png"
    }
    else if(mosam.innerHTML==="Clouds"){
        conditionOfWeather.src="cloud-computing.png"
    }
    else if(mosam.innerHTML==="Drizzle"){
        conditionOfWeather.src="rainy-day.png"
    }
    else if(mosam.innerHTML==="Haze"){
        conditionOfWeather.src="haze.png"
    }
})
 




}

document.getElementById('input').addEventListener('keypress', function(event) {
    if(event.key==="Enter"){
        searching();
        this.blur()        
    }
});