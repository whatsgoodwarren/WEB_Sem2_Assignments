function takeSquareRoot() {
    let number = +document.getElementById("input1").value;
    

    let squareRoot = Math.sqrt(number);
    document.getElementById("result").innerHTML = squareRoot;

}   

function takeAbsoulteValue() {
    let number = +document.getElementById("input2").value;
    

    let absoluteValue = Math.abs(number);
    document.getElementById("result2").innerHTML = absoluteValue;

}

