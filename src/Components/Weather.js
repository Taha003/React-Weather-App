import React, { useEffect,useState } from 'react'
import '../App.css'
import MyImage from './download.png'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ThermostatIcon from '@mui/icons-material/Thermostat';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AirIcon from '@mui/icons-material/Air';
import Spinner from 'reac;t-bootstrap/Spinner'

// import { ScreenSearchDesktop } from '@mui/icons-material';
// import { Air } from '@mui/icons-material';
const Weather=()=> {
    document.body.style.backgroundColor = "grey"
    let date=new Date().toLocaleString()
    let timeHrs=new Date().getHours().toLocaleString()
    let timeMins=new Date().getMinutes().toLocaleString();
    let [initialWeath,finalWeath]=useState("");
  let [srch,setSrch]=useState("karachi");
  let [loader,setLoader]=useState(false);
    console.log(date)
    const weather=async()=>{
      try{
   let url=`https://api.openweathermap.org/data/2.5/weather?q=${srch}&appid=8a8ced9704c6c419494825307cb58fdb`;
   let res=await fetch(url);
   let res1=await res.json();

   let {temp,pressure,humidity}=res1.main
   let {speed,deg}=res1.wind;
   let {name,country}=res1.sys     
   let {description,main}=res1.weather[0];
   let cityName=res1.name
   let weatherInfo={
    temp,
    pressure,
    humidity,
    speed,
    deg,
    name,
     cityName,
    country,
    description,
    main
   }
  //  console.log(weatherInfo)
  //  console.log(weatherInfo.description)
  //  return weatherInfo
  finalWeath(weatherInfo)
  setLoader(true)
  }
  catch(error){
    console.log(error)

  }


    }
    useEffect(()=>{
      weather()
    },[])
    console.log(initialWeath)
   
  return (
   
    <>
   
    <h1 className='fw-bold'>Weather App</h1>
  <div className='row' style={{margin:'auto'}}>
  <input type="text" className="form-control my-5 w-25 mx-auto mb-0" id="exampleInputEmail1" value={srch} aria-describedby="emailHelp" placeholder="Enter city" size='15' onChange={(e)=>{setSrch(e.target.value)}}/>
  </div>
  <button type="" className='btn btn-primary' onClick={weather}>search</button>
  
    <div className='container-fluid w-50  bg-white my-1 border rounded d-flex flex-column flex-wrap'>
      <div className='row  my-2'>
        <img src={MyImage} alt="" style={{width:'80px',marginLeft:'80px'}}/>
      </div>
      <div className='container'>
      <div className='row' >
        <div className='col-md-8 col-sm-6  bg-black text-white' >
          <h2>{((initialWeath.temp)-273).toFixed(2)}<span> {initialWeath.description}</span></h2>
         <p className='mx-5'>{initialWeath.cityName},{initialWeath.country}</p>
        </div>
        <div className='col-md-4 col-sm-6 p-3 bg-primary'>
          <h4>{date}</h4>
        </div>
      </div>
      </div>
      
      <div className='row' style={{margin:'auto',display:'flex'}}>
        <div className='col-md-3 col-sm-6'>
         
          <h2><span className='text-primary'><WbSunnyIcon/></span><span>{timeHrs}:{timeMins}</span></h2>
          <p>Sunset</p>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2><span className='text-primary'><ThermostatIcon/></span></h2>
        <h4>{initialWeath.humidity}</h4>
          <p>Humidity</p>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2><span className='text-primary'><ThunderstormIcon/></span></h2>
          <h4>{initialWeath.pressure}nm</h4>
          <p>Pressure</p>
        </div>
        <div className='col-md-3 col-sm-6'>
        <h2><span className='text-primary'><AirIcon/></span></h2>
          <h4>{initialWeath.speed}</h4>
          <p>Wind</p>
        </div>
      </div>
    </div>
       
  
    {/* <div className="row col-12">
    <div className="col-md-8 col-sm-6" style={{backgroundColor:'black',color:'white',height:'70px'}}>
      <h3>25.87% CLOUD</h3>
      <span><p className='city'>Karachi,Pakistan</p></span>
    </div>
    <div className="col-md-4 col-sm-4 border" style={{backgroundColor:'lightgreen',color:'white',height:'70px'}}> 
      Column
    </div>
    </div> */}
    {/* <div className="row">
    <div className="col-8" style={{backgroundColor:'black'}}>
    <h3>25.87% CLOUD</h3>
      <span><p className='city' >Karachi,Pakistan</p></span>

    </div>
    <div className="col-4" style={{backgroundColor:'lightgreen'}}>{date}</div>
  </div>
     */}
    
     



    
    </>
  )
}

export {Weather}
