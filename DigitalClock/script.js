const clock=document.getElementById('clock');
const curtime=()=>{
    const date=new Date();
    clock.innerHTML=date.toLocaleTimeString('en-US');
}
setInterval(curtime,1000);

