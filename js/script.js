function plus () {
    var num01, num02, result;
    num1 = document.getElementById ('num-01'). value;
    num1 = parseInt (num1);

    num2 = document.getElementById ('num-02'). value;
    num2 = parseInt (num2);

    result = num1+num2;
    document.getElementById ('out').innerHTML = result;
}

function minus () {
    var num01, num02, result;
    num1 = document.getElementById ('num-01'). value;
    num1 = parseInt (num1);

    num2 = document.getElementById ('num-02'). value;
    num2 = parseInt (num2);

    result = num1-num2;
    document.getElementById ('out').innerHTML = result;
}

function x () {
    var num01, num02, result;
    num1 = document.getElementById ('num-01'). value;
    num1 = parseInt (num1);

    num2 = document.getElementById ('num-02'). value;
    num2 = parseInt (num2);

    result = num1*num2;
    document.getElementById ('out').innerHTML = result;
}

function y () {
    var num01, num02, result;
    num1 = document.getElementById ('num-01'). value;
    num1 = parseInt (num1);

    num2 = document.getElementById ('num-02'). value;
    num2 = parseInt (num2);

    result = num1/num2;
    document.getElementById ('out').innerHTML = result;
}