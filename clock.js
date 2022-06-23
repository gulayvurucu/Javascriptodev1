let name1=prompt("İsminizi giriniz.","isim");
let name2=document.getElementById("myName");
name2.innerHTML=name1 ;

setInterval(function showTime(){

    var dat = new Date();
    var  h = dat.getHours();
    var m= dat.getMinutes();
    var s = dat.getSeconds();
    const weekday=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let day =weekday[dat.getDay()]
    var tim = h +":"+ m +":"+ s + " " +day;
    let timm = document.getElementById("myClock");
    timm.innerHTML= tim;



})