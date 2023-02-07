let screen= document.getElementById('screen');
buttons =document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener ("click" , (e) =>{
        buttonText = e.target.innerText;
        console.log("Button" , buttonText );
        if (buttonText=='X'){
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText=='c') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '='){
            screen.value =eval (screenValue);

        }
        else if (buttonText=="clear"){
            var a = screenValue.length-1;
            screenValue = screenValue.slice(0,a);
            screen.value = screenValue;   
        
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue;
        }
        
    })
}