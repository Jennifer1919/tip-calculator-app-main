
var billValue; //the bill's value
var tipValue; //the tip percentage 
var peopleNumberValue = 0 ; // the number of people paying


const billInput = document.querySelector('#bill-section input'); //the input area for the bill value
var tipButton = document.querySelectorAll('#select-tip div button');// buttons for the tip value
const tipInput = document.querySelector('#select-tip div input');//custom input area for the tip value
const peopleNumberInput = document.querySelector('#people-section input'); //input area for the number of people value
var tipAmountText = document.querySelector('#result-section #tip-amount span');//text which display the tip amount
var totalText = document.querySelector('#result-section #total span'); //text which display the total amount
const resetButton = document.querySelector('#result-section button');//reset button

//when the the input change the bill value is update and the tip is calculated
billInput.addEventListener('change',function(){
    billValue = Number(billInput.value); //convert the string into a number
    console.log('BillValue:'+ billValue);

    tipAmount(billValue, tipValue,peopleNumberValue);
});

//whenever on of the button is clicked on, the tip percentage is update and the tip calculated. The style changes too.
for(var i = 0; i < tipButton.length; i++){

    tipButton[i].addEventListener("click",function(){

        //the loop remove the class list selected of all the button then we only add it to the selected button
        for(var i = 0; i < tipButton.length; i++){ tipButton[i].classList.remove('selected');}
        this.classList.add('selected');

        //remove the custom input
        tipInput.value="";

        console.log(this);
        tipValue = Number(this.value);
        console.log('TipValue:'+tipValue);

        tipAmount(billValue, tipValue,peopleNumberValue);
        
        
    })
}

//whenever the custom tip percentage is changed the tip is calculated and the button disable
tipInput.addEventListener('change', function(){
    for(var i = 0; i < tipButton.length; i++){ tipButton[i].classList.remove('selected');}
    tipValue = Number(this.value);
    console.log('TipValue:'+tipValue);
    tipAmount(billValue, tipValue,peopleNumberValue);
    
})

//if the number of people is changed the tip is calculated
peopleNumberInput.addEventListener('change',function(){
    peopleNumberValue= Number(peopleNumberInput.value);
    console.log('People Number Value:'+ peopleNumberValue);
    tipAmount(billValue, tipValue,peopleNumberValue);
})

//reset
resetButton.addEventListener('click',function(){
    tipAmountText.innerHTML = "0.00";
    totalText.innerHTML = "0.00";
})


function tipAmount(billValue, tipValue,peopleNumberValue){
    var TA = billValue*tipValue/100;
    console.log("TA"+TA);
    if(isNaN(TA) == true || peopleNumberValue === 0){
    tipAmountText.innerHTML = "0.00";} else{
        tipAmountText.innerHTML = TA;
    }

    var T = (TA * peopleNumberValue).toFixed(2);
    if(isNaN(T) == true){
        totalText.innerHTML = "0.00";} else{
            totalText.innerHTML = T;
        }

}


