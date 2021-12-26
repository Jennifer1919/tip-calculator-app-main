
var billValue;
var tipValue;
var peopleNumberValue;


const billInput = document.querySelector('#bill-section input');
var tipButton = document.querySelectorAll('#select-tip div button');
const tipInput = document.querySelector('#select-tip div input');
const peopleNumberInput = document.querySelector('#people-section input');
var tipAmountText = document.querySelector('#result-section #tip-amount span');
var totalText = document.querySelector('#result-section #total span');
const resetButton = document.querySelector('#result-section button');


billInput.addEventListener('change',function(){
    billValue = Number(billInput.value);
    console.log('BillValue:'+ billValue);

    tipAmount(billValue, tipValue,peopleNumberValue);
});

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

tipInput.addEventListener('change', function(){
    for(var i = 0; i < tipButton.length; i++){ tipButton[i].classList.remove('selected');}
    tipValue = Number(this.value);
    console.log('TipValue:'+tipValue);
    tipAmount(billValue, tipValue,peopleNumberValue);
    
})

peopleNumberInput.addEventListener('change',function(){
    peopleNumberValue= Number(peopleNumberInput.value);
    console.log('People Number Value:'+ peopleNumberValue);
    tipAmount(billValue, tipValue,peopleNumberValue);
})

resetButton.addEventListener('click',function(){
    tipAmountText.innerHTML = "0.00";
    totalText.innerHTML = "0.00";
})


function tipAmount(billValue, tipValue,peopleNumberValue){
    var TA = billValue*tipValue/100;
    console.log("TA"+TA);
    if(isNaN(TA) == true){
    tipAmountText.innerHTML = "0.00";} else{
        tipAmountText.innerHTML = TA;
    }

    var T = (TA * peopleNumberValue).toFixed(2);
    if(isNaN(T) == true){
        totalText.innerHTML = "0.00";} else{
            totalText.innerHTML = T;
        }

}


