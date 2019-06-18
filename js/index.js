$(document).ready(function(){
  var c="";
  var temp;
 $.getJSON('http://ip-api.com/json', function(data){
 c+=data.city;
 var ap="http://api.openweathermap.org/data/2.5/weather?q="+c+"&APPID=8b33c9ed5addf868b75f10238823abbd"
 $.getJSON(ap,function(d){
   var des=d.weather[0].description;
   var ico=d.weather[0].icon;
   ico="http://openweathermap.org/img/w/"+ico+".png";
   ico="<img src="+ico+">";
   $(".des").html(des);
   $(".city").html(""+d.name);
   temp=Math.ceil(d.main.temp-273.15);
   $(".t").html(temp);
   $(".cf").html("°C");
   $(".icon").html(ico);
   $(".des").html(""+d.weather[0].description);   
 });
 });
  $(".cf").click(function(){
    var chk=$(".cf").html();
    if(chk=="°F"){
   $(".t").html(temp);
   $(".cf").html("°C");
    }
   else{
   var a=(parseInt(temp)*1.8) + 32;
   $(".t").html(a.toFixed(1));
   $(".cf").html("°F");
     }
});
})