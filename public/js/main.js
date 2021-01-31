const input_city_name = document.getElementById('input_city_name');
const output_city_name = document.getElementById('output_city_name');
const searchBtn = document.getElementById('searchBtn');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle.layer')

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = input_city_name.value;
    if(cityVal === ""){
        output_city_name.innerText =   `Please Enter City Before Search`;
    }
    else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=d632c4387652f2703a4a3036adf880c1`;
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        const arrData = [data];
        
        output_city_name.innerText = `${arrData[0].name},${arrData[0].sys.country}`
        temp.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        
        const tempMood = arrData[0].weather[0].main;
        
        //conditions to check temprature status
        if(tempMood=="Clear"){
            temp_status.innerHTML = "<i class='fa fa-sun' style='color:#eccc68;'></i>";
        }
        else if(tempMood=="Clouds"){
            temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
        }
        else if(tempMood=="Rain"){
            temp_status.innerHTML = "<i class='fa fa-cloud-rain' style='color:#a4b0be;'></i>";
        }
        else{
            temp_status.innerHTML = "<i class='fa fa-cloud' style='color:#f1f2f6;'></i>";
        }

        }
        catch{
            output_city_name.innerText =   `Please Enter City Name Properly`;
        }        
    }
}

searchBtn.addEventListener('click',getInfo);
