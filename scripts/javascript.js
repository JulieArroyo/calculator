//clear
function c(val){
  document.getElementByID("d").value=val;
}

//numbers and operators
function v(val){
  document.getElementById("d").value+=val;
}

//evaluating
function e(){
  try{
    c(eval(document.getElementById("d").value));
  }catch(e){
   c("Error");
  }
}
