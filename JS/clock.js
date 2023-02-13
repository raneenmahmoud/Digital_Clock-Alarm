function DisplayDate(){
    var d = new Date();
    var time = document.getElementById("time").innerHTML = d.toLocaleTimeString();
    var date = document.getElementById("date").innerHTML = d.toDateString();
    setTimeout(DisplayDate,1000)
}    
var d = new Date(); 
//values of all days 
var day1 = document.getElementById("d1")
var day2 = document.getElementById("d2")
var day3 = document.getElementById("d3")
var day4 = document.getElementById("d4")
var day5 = document.getElementById("d5")
var day6 = document.getElementById("d6")
var day7 = document.getElementById("d7")
//for current day
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
let currentday = weekday[d.getDay()];
if(day1.innerHTML ===  currentday){
    day1.style.color = "black"
    day1.style.fontWeight = "bold"}
else{
    if(day2.innerHTML ===  currentday){
        day2.style.color = "black"
        day2.style.fontWeight = "bold"}
    else{
        if(day3.innerHTML ===  currentday){
            day3.style.color = "black"
            day3.style.fontWeight = "bold"}
        else{
            if(day4.innerHTML ===  currentday){
                day4.style.color = "black"
                day4.style.fontWeight = "bold"}
            else{
                if(day5.innerHTML ===  currentday){
                    day5.style.color = "black"
                    day5.style.fontWeight = "bold"}
                else{
                    if(day6.innerHTML ===  currentday){
                        day6.style.color = "black"
                        day6.style.fontWeight = "bold"}
                    else{day7.style.color = "black"
                        day7.style.fontWeight = "bold"}
                }
            }
        }
    }
}
        
// function DisplayDate(){
// var d = new Date();
// var h = document.getElementById("hours").innerHTML = d.getHours();
// var m = document.getElementById("minutes").innerHTML = d.getMinutes();
// var s = document.getElementById("seconds").innerHTML = d.getSeconds();
// if(h < 24 || h ==24){var pm = document.getElementById("time").innerHTML="pm"}
// else {var l = document.getElementById("time").innerHTML="am"}
// setTimeout(DisplayDate,1000) //for changing time for each seconds
// }
// DisplayDate()