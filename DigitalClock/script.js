const clock=document.getElementById('clock');

setInterval(()=>{
    const date=new Date();
    clock.innerHTML=date.toLocaleTimeString('en-US');
},1000);

