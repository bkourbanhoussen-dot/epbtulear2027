const eventDate = new Date("March 26, 2027 00:00:00").getTime();
setInterval(()=>{
 let now=new Date().getTime();
 let distance=eventDate-now;
 let d=Math.floor(distance/(1000*60*60*24));
 let h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
 let m=Math.floor((distance%(1000*60*60))/(1000*60));
 document.getElementById("countdown").innerHTML =
 "Début dans : "+d+" jours "+h+"h "+m+"min";
},1000);
