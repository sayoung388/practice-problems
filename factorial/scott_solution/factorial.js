function factorial(n) {
    var sum = 1;
    for(var i = 0; i < n; i++) {
        sum *= (n - i);
    }
    console.log(sum);
    return sum;
}

factorial(3);
factorial(4);
factorial(7);