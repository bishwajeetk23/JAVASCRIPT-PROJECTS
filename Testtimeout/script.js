let startinterval;
const timeoutsetter=function(){
    const date =new Date();
    document.querySelector('h1').innerHTML =`Love JavaScript ${date.toLocaleTimeString('en-US')}`;
};

document.querySelector("#stop").addEventListener('click',()=>{
    clearInterval(startinterval);
    startinterval=null;

});

document.querySelector("#start").addEventListener('click',()=>{
    if(startinterval==null)
    startinterval=setInterval(timeoutsetter,1000);
});

