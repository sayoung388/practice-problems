function fibonacci_dynamic(inputs) {
    var fibonacci = [1, 1],
        output = [],
        sortedInputs = inputs.slice(0),
        largestInput = sortedInputs.sort(sortNum).pop(),
        i;


    for (i = 2; i < largestInput; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    for (i = 0; i < inputs.length; i++) {
        output[i] = fibonacci[inputs[i] - 1];
    }

    console.log(output);
}

function sortNum(x, y) {
    return x - y;
}

fibonacci_dynamic([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
fibonacci_dynamic([41, 8, 22]);
