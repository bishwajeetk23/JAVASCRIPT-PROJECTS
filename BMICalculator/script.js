const form=document.querySelector('form');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    //  The event. preventDefault() method stops the default action of an element from happening. 
    //For example: Prevent a submit button from submitting a form.
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');// Select element using CSS selector(s)

    if(height===''||height<0||isNaN(height)){
        result.innerHTML='Please Enter Valid Height';
    }else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML='Please Enter Valid weight';
    }else{
        const cal=(weight/((height*height)/10000)).toFixed(2);
        
        const comment=document.createElement('span');// creating new element 
        let text; 
        if(cal<18.6){
            text="Under Weight";
        }else if(cal>=18.6&&cal<=24.9){
            text="Normal range";
        }else{
            text="Overweight";
        }
        result.innerHTML=`<span>Your BMI is ${cal}.</span>`;
        comment.appendChild(document.createTextNode(text)); //creating new text and appending it to created element. 
        result.appendChild(comment); // appending the created element to result.
    }

});