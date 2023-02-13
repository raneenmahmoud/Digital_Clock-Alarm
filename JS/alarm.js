//Get Elements
var count = 0;
var hour_input = document.getElementById("hours");
var minute_input = document.getElementById("minutes");
var ampm_input = document.getElementById("ampm");
var alarm = document.getElementById("resttime");
var settime = document.getElementById("setalarm")

function Setplaceholder(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var AMPM = hour>=12 ? 'PM' : 'AM';
    hour = hour%12;
    document.getElementById("ampm").value = AMPM;
}
function Setalarm(){
    var d = new Date();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var AMPM = hour>=12 ? 'PM' : 'AM';
    hour = hour%12;
    //Same Period of time am or pm
    if(ampm_input.value === AMPM){

        if(Number(hour_input.value) === 12){
            if(Number(minute_input.value)<minute){
                sethours = (12 - hour) + Number(hour_input.value)
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes); 
        }
        else{
                sethours = 0
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes); 
        }
    }
    //////////
        else if(Number(hour_input.value) < hour ){
            if(Number(minute_input.value)<minute || Number(minute_input.value)==minute){
                sethours = 24 - (hour - Number(hour_input.value))
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes);     
            }
            else{
                sethours = 24 - (hour - Number(hour_input.value))
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes); }
    }
    
    else if(Number(hour_input.value) === hour){
        if(Number(minute_input.value)>minute){
            sethours = Number(hour_input.value) - hour;
            setminutes = Number(minute_input.value) - minute;
            ExtractHouraandMinutes(sethours, setminutes);  }
        else{
            sethours = 24 - (hour - Number(hour_input.value))
            setminutes = Number(minute_input.value) - minute;
            ExtractHouraandMinutes(sethours, setminutes); }
    }
    ///////////////////////
    else{
        sethours = Number(hour_input.value) - hour;
        setminutes = Number(minute_input.value) - minute;
        ExtractHouraandMinutes(sethours, setminutes); }
    }
    //Different period of time pm or am
    else{
            if(Number(hour_input.value) == 12){
                sethours = 12 - hour
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes); }
            else{
                sethours = (12 - hour) + Number(hour_input.value)
                setminutes = Number(minute_input.value) - minute;
                ExtractHouraandMinutes(sethours, setminutes); }
            }
        }

function ExtractHouraandMinutes(sethours, setminutes){
    // Convert all values into minutes
    var hours_to_minutes = sethours * 60;
    var allminutes =  hours_to_minutes + setminutes;
    //no of non completed minute
    var corected_setminutes = allminutes % 60; 
    //Extract completed minutes
    var corected_hours_in_minutes = allminutes - corected_setminutes;
    //Convert completed minutes into hours
    var corected_sethours = corected_hours_in_minutes / 60;
    alert(`Set in ${corected_sethours} hours and ${corected_setminutes} minutes`)
    settime.innerHTML = `${hour_input.value}:${minute_input.value} ${ampm_input.value}` 
    alarm.innerHTML = `Ring after ${corected_sethours} hours and ${corected_setminutes} minutes  `
}

var ring = setInterval(Ring, 60000)
function Ring(){
var d = new Date();
var hour = d.getHours();
var minute = d.getMinutes();
var AMPM = hour>=12 ? 'PM' : 'AM';
hour = hour%12;
if(Number(hour_input.value) == hour && Number(minute_input.value) == minute){
    alert("This is time")
    const audioalarm = new Audio("./assests/soundalarm.wav");
    audioalarm.play();
    let button = document.createElement("button")
    button.className = "Stop btn bg-secondary text-white"
    button.appendChild(document.createTextNode("Stop"))
    alarm.appendChild(button)
    alarm.addEventListener("click", (e) =>{
if(e.target.classList.contains("Stop")){
    audioalarm.pause()
}
}); 
}
}