let inNumber = document.getElementById("inNumber");
function inputValue(value) {
     inNumber.value+= value;
}
function result() {
    let result = eval(inNumber.value);
    inNumber.value = result;
}
 function del() {
     inNumber.value ="";
 }
