//to display the values
function display(value){
    document.getElementById("calc").value +=value
}
//to do the calculation
function calculate(){
    var i = document.getElementById('calc').value;
    var j = eval(i);
    document.getElementById("calc").value = j
}