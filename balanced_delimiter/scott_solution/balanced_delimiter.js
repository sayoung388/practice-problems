
function balancedDelimiter(input) {
    var array = [];

    for(var i = 0; i < input.length; i++) {
        // loop over each char

        var char = input[i];

        if(array.length === 0) {
            // if the length is 0 just push the next char
            array.push(char);
        } else {
            // check to see if the values are one of the closing delimiters ),},]. or just push the next value
            // using last in first out we can determine if the values are following the correct order
            if(char === ")") {
                var lastChar = array.pop();
                if(lastChar !== "(") {
                    console.log("false");
                    return false;
                }
            } else if(char === ']') {
                var lastChar = array.pop();
                if(lastChar !== "[") {
                    console.log("false");
                    return false;
                }
            } else if(char === '}') {
                var lastChar = array.pop();
                if(lastChar !== "{") {
                    console.log("false");
                    return false;
                }
            } else {
                array.push(char);
            }
        }
    }

    // if the array is empty then we know that we are balanced
    console.log(array.length === 0);
    return array.length === 0;
}

// true
balancedDelimiter("()[]{}");
// false
balancedDelimiter("([)]");
// true
balancedDelimiter("([{}])");