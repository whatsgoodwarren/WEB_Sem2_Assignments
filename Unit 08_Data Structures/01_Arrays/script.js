const numbers = []
numbers.sort();

for(let i = 0; i < 10; i++){
    let num = Math.floor(Math.random() * 10) + 1;
    numbers.push(num);
}

document.getElementById("unsorted").innerHTML = numbers;
document.getElementById("sorted").innerHTML = numbers;



//YOUDO:  finish the sort and print to the sorted id

