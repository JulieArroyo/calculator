
var box= document.getElementById('display');

//text to show on screen
function addtoscreen(x){
  box.value +=x;

  if(x=='c'){
    box.value='';
  }

}


function answer(){
  x=box.value;
  x=eval(x);
  box.value=x;
}
