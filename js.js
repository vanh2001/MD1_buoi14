function square(number) {
    let result = number * number;
    return result;
}
// var squareOf2 = square(2);
// document.writeln("Square of 2 is: " + squareOf2);
//
// document.writeln("<br>")
//
// var squareOf5 = square(5);
// document.writeln("Square of 5 is: " + squareOf5);

function calculate() {
    let input = document.getElementById('input').value;
    let result = square(input);
    document.getElementById('result').innerHTML = result;
}