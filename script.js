const yourTab = document.querySelector("[yourWeather]");
const serchTab = document.querySelector("[searchWeather]");
const searching = document.querySelector("[searchBar]");
const windSpeed = document.querySelector("[windSpeed]");
const temprature = document.querySelector("[temprature]");
const humidity = document.querySelector("[humidity]");
const cloud = document.querySelector("[clouds]"); 
const city = document.querySelector("[city]");
const weatherMain = document.querySelector("[weather-main]");
const cityinput = document.querySelector("[cityinput]");
const searchBar = document.querySelector("[searchBar]");
const searchForm = document.querySelector("[data-searchForm ]");
const section1 = document.querySelector("[section-1 ]");
const section3 = document.querySelector("[section-3 ]");
const section5 = document.querySelector("[section-5 ]");
const countryIcon = document.querySelector('[data-countryIcon]');
const weatherIcon = document.querySelector('[data-weatherIcon]');
const grantlocation = document.querySelector('[grantaccess]');
const locationBtn = document.querySelector('[data-grantAccess]');
let userTab;
var currentTab = userTab;
function loadingfundeactivate() {
  var xyz = document.getElementById('xyz');
  if (xyz) {
      xyz.style.display = 'none';
  }
}



  function showSearchBar(){
    console.log('searchbarrrrrr');
      searchBar.style.display='block';
      grantlocation.style.display = 'none';
      section1.style.display='none';
      section3.style.display='none';
      section5.style.display='none';
      weatherMain.style.display = 'none';
      temprature.style.display = 'none';
  }
  function showlocationBar(){
    console.log('locationBarr');
    searchBar.style.display = 'none';
    grantlocation.style.display = 'flex';
    section1.style.display='none';
    section3.style.display='none';
    section5.style.display='none';
    weatherMain.style.display = 'none';
    temprature.style.display = 'none';
  }
  function access(){
    console.log('acesssable');
    grantlocation.style.display = 'none';
   
    getLocation();
    
    //loading.style.display ='none';
   }
 

  locationBtn.addEventListener('click',access());
  

const searchInput = document.querySelector('[data-searchInput]');
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
  
   // loading.style.display = 'block';
    let cityName = searchInput.value;

    if(cityName === '')
    {
        return;
    }

  else{
    
      showWeather(cityName);
    
  }

});


//searching.addEventListener('click',search());

const API_KEY = "9c51ce74c7d6da81cbacaf0d04b6c601";

function renderWeatherInfo(data){
 // loadingfundeactivate();
    console.log(data);
    //temprature
    let info =`${data?.main?.temp.toFixed(2)} °C`;
    let orginfo = parseInt(info);
    if(orginfo >= 100){
       
        let originalinfo = orginfo-272.15;
        let t = originalinfo.toFixed(2);
        temprature.textContent = t;
    }
    else{
        temprature.textContent = info;
    }
    //city
    let cityname = data?.name;
    console.log(cityname);
    city.textContent = cityname;

    //windSpeed
    let wind = data?.wind?.speed;
    windSpeed.textContent = wind;

    //humidity
    let cityhumidity = `${data?.main?.humidity} %`;
    humidity.textContent = cityhumidity;
    console.log(cityhumidity);
    //weather-main
    let mainWeather = data.weather[0].main;
    
    weatherMain.textContent = mainWeather;

    //clouds
    
    let clouds = data?.clouds?.all;
     console.log(clouds);
     cloud.textContent = clouds;

    //country icon 
    countryIcon.src = `https://flagcdn.com/144x108/${data?.sys?.country.toLowerCase()}.png`;

    //weather icon
    weatherIcon.src = `http://openweathermap.org/img/w/${data?.weather?.[0]?.icon}.png`;

    //let cityinfo =`${data?.main?.city}`;
        //return data;
    
        
}
async function showWeather(city){
    
  //loadingfunactivate(); 

    section1.style.display='flex';
    section3.style.display='block';
    section5.style.display='flex';
    weatherMain.style.display = 'block';
    temprature.style.display = 'block';
   
   
  

    try{
        console.log(city);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9c51ce74c7d6da81cbacaf0d04b6c601&units=metric`);
    
        const data = await response.json();

        renderWeatherInfo(data);
    }
    catch(e){
        alert('please enter valid city name');
        console.log('error aaya hai bhai');
    }
}


   
   // console.log("WEather data:->" + data);
   // let newPara = document.createElement('p');
   // newPara.textContent = `${data?.main?.temp.toFixed(2)} °C`;

   // document.body.appendChild(newPara);

   

  function getLocation(){ 

    
    weatherMain.style.display = 'block';
    temprature.style.display = 'block';
    section1.style.display='flex';
    section3.style.display='block';
    section5.style.display='flex';
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(ShowPosition);
    }
    else{
        console.log("No geoLocation Support");
    }
  }
 async function ShowPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude ,longitude );
   // getyourWeather(lat,longi)
        
        const yourresponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=9c51ce74c7d6da81cbacaf0d04b6c601`);
        const yourdata = await yourresponse.json();
        
        renderWeatherInfo(yourdata);
  }
  //   https://api.openweathermap.org/data/2.5/weather?lat=22.686954&lon=75.861602&appid=9c51ce74c7d6da81cbacaf0d04b6c601