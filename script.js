function plus() {
var num1, num2, result;
    num1 = documentgetElementById('n1').value;
    num1 = parseInt(num1);
    num2 = documentgetElementById('n2').value;
    num2 = parseInt(num2);  
    result = num1 + num2;
    document.getElementById('out').innerHTML = result
}

function minus() {
    var num1, num2, result;
    num1 = documentgetElementById('n1').value;
    num1 = parseInt(num1);
    num2 = documentgetElementById('n2').value;
    num2 = parseInt(num2); 
    result = num1 - num2;
    document.getElementById('n2').value;
}

function multiplay() {
    var num1, num2, result;
    num1 = documentgetElementById('n1').value;
    num1 = parseInt(num1);
    num2 = documentgetElementById('n2').value;
    num2 = parseInt(num2); 
    result = num1 * num2;
    document.getElementById('out').innerHTML = result
}