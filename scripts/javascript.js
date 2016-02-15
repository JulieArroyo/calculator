
var box= document.getElementById('display');

//buttons to show in text box
function addtoscreen(x){
  box.value +=x;

  if(x=='c'){
    box.value='';
  }

}

//equals button
function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}

//return button
function backspace(){
  var number=box.value;
  var len=number.length-1;
  var newNumber=number.substring(0,len);
  box.value=newNumber;
}

// power ^3 button
function power(y){
  x=box.value;
  x=Math.pow(x,y);
  box.value=x;
}
