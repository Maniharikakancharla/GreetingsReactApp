import React from 'react';
import ReactDOM from 'react-dom';
import "./project.css";
let curDate = new Date();
curDate = curDate.getHours();
let greeting ='';
const cssStyle = { };
if(curDate>=1 && curDate<12){
  greeting = "GoodMorning";
  cssStyle.color="green";
}else if(curDate>=12 && curDate<19){
  greeting="Good Afternoon";
  cssStyle.color="orange";
  
}else{
  greeting="Good Night";
  cssStyle.color="yellow";
}
 
ReactDOM.render(
  
  <h1><center>Hello Sir, <span style={cssStyle}> { greeting }</span></center></h1>,
  
  document.getElementById("root")
  
);