var previousValue = document.getElementsByClassName('previousValue');
var currentValue = document.getElementsByClassName('currentValue');
var buttons = document.querySelectorAll('.buttons button');



function displayNumber(value){
    var currentValue = document.getElementsByClassName('currentValue')[0];

    if(value >= 0){

        //Changing the size of the font after a certain length of the string and limiting the string size to 14 numbers.
        var numberLength = document.getElementsByClassName('currentValue')[0].innerText.length;

        if(numberLength > 14){
            return;
        }else if(numberLength > 10){
            currentValue.style.fontSize = '2.8rem';
        }else if(numberLength > 8){
            currentValue.style.fontSize = '4rem';
        }
        
        currentValue.innerText += value;

        //verifying if the string already has a point and if it does, blocking from adding another point
    }else if(value === '.'){
        if(!document.getElementsByClassName('currentValue')[0].innerText.includes('.')){
            currentValue.innerText += '.';
        }
        return;
    }else if(value.includes()){

    }
}

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText;
        displayNumber(value);
    });
});