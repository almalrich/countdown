var heures=0;
var minutes=5;
var sec=5;

document.getElementById("secon").innerHTML=sec;
function ana (){
    sec--;
    document.getElementById("secon").innerHTML=sec;
        if(sec<1){
            sec=60, minutes-1;
        }







    setTimeout(ana,1000);
}
setTimeout(ana,1000);

document.getElementById("minut").innerText=minutes;
function an (){

minutes--;
if(minutes<1){
    minutes=60;

    setTimeout(an,1000);
}};
setTimeout(an,1000);