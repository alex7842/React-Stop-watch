import {useEffect,useState,useRef} from "react";
import clock from './assets/clock.jpg'


function App(){

  
  const[isrun,setisrun]=useState(false);
  const [elapsedtime,setelapesd]=useState(0);
  const intervalref=useRef(null);
  const starttime=useRef(0);
  useEffect(()=>{
    if(isrun){
     intervalref.current= setInterval(()=>{
        setelapesd(Date.now()-starttime.current)
      },10)
      console.log(elapsedtime);
    }

    return()=>{
      clearInterval(intervalref.current);
    }
  },[isrun])
  
 function start(){
  setisrun(true)
  starttime.current=Date.now()-elapsedtime;
  console.log(starttime.current)
 }
 function stop(){
  setisrun(false);
  
 }
 function reset(){
  setelapesd(0);
  setisrun(false)
 }
  function format(a){
    let v= Number(a);
    return v<10 ? `0${v}`:v;

  }
 function formattime(){
  let minutes=Math.floor(elapsedtime/(1000*60)%60);
  let sec=Math.floor(elapsedtime/(1000)%60);
  let millisec=Math.floor((elapsedtime%1000)/10);
  return `${format(minutes)}:${format(sec)}:${format(millisec)}`;
 }


  return (
    <>
  <div className="app-container">
      <h1 className="title">Stopwatch</h1>
      <div className="stopwatch-container">
       
        <p className="time">{formattime()}</p>
        <br></br>
        <div className="buttons-container">
          <button className="button start" onClick={start}>Start</button>
          <button className="button stop" onClick={stop}>Stop</button>
          <button className="button reset" onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
    </>
  );

}
export default App;
