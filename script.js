let apiKey="a203c6b0a58bf71f5ab6bc0278913836"
let apiId="https://api.openweathermap.org/data/2.5/weather?appid=a203c6b0a58bf71f5ab6bc0278913836&units=metric&q="

const inputSearch=document.querySelector(".input-search")
const button=document.querySelector(".button")
const imgSrc=document.querySelector(".img-src")
const temp=document.querySelector(".temp")
const weatherSituation=document.querySelector(".Weather-situation")
const palace=document.querySelector(".city")
const humidity=document.querySelector(".humidity")
const wind=document.querySelector(".wind") 
const WeatherContent=document.querySelector(".Weather-content")
const error=document.querySelector(".error")

async function checkWeather(city) {
  const responce=await fetch(apiId+city+`&appid=${apiKey}`)
  if(responce.status==404){
    error.style.visibility="visible"
    WeatherContent.style.visibility="hidden"
  }
  else{
    let data=await responce.json()
    console.log(data); 
    temp.innerHTML=Math.round(data.main.temp)+"°C";
    palace.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+" km/h";
    weatherSituation.innerHTML=data.weather[0].description;
  
  
    if(data.weather[0].main=="Clouds"){
      imgSrc.src="./img/clouds.png"
    }
    else if(data.weather[0].main=="Haze"){
      imgSrc.src="./img/sun.png"
    }
    else if(data.weather[0].main=="Clear"){
      imgSrc.src="./img/clear-sky.png"
    }
    else if(data.weather[0].main=="Drizzle"){
      imgSrc.src="./img/partly-cloud.png"
    }
    else if(data.weather[0].main=="Mist"){
      imgSrc.src="./img/partly-cloud.png"
    }
    else if(data.weather[0].main=="Dust"){
      imgSrc.src="./img/wind.png"
    }
    
    WeatherContent.style.visibility="visible"
    error.style.visibility="hidden"

    
    
  }

  }
  button.addEventListener("click",()=>{
    checkWeather(inputSearch.value);
  
  })
  
 