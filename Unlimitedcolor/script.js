let changeColorInterval;
const randomColor=function(){
    const hex="0123456789ABCDEF";
    let color="#";
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
function startChangeColor(){
    if(changeColorInterval==null)
    changeColorInterval=setInterval(changeColor,1000);
    function changeColor(){
        document.querySelector('body').style.backgroundColor=randomColor();
    }
}
function stopChangeColor(){
    clearInterval(changeColorInterval);
    changeColorInterval=null;
}

document.querySelector("#start").addEventListener('click',startChangeColor);
document.querySelector("#stop").addEventListener('click',stopChangeColor);


