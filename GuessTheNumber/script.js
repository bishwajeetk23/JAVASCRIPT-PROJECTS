const form =document.querySelector('form');
let arr =[];
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const numberSelected =parseInt(document.querySelector('#guessField').value);
    if(numberSelected===''||isNaN(numberSelected)){
        console.log("Please select the valid number");
        return ;
    }
    arr.push(numberSelected);
    if(arr.length>10){
        console.log("Your chance Exhausted!!!");
        return;
    }
    console.log(`chance left ${10-arr.length}`);
    // if(arr.length>10){
    //     return ;
    // }
    // console.log(numberSelected);

});