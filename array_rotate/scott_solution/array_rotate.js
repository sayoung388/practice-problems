function arrayShift(array, amount) {
    var tempArray = [];
    // store the size in a variable so it doesn't have to call the .length method over and over again

    var size = array.length;
    for(var i = 0; i < size; i++) {
        // using the mod of the length we can determine which position
        // the value should be shift to in the new array to be returned
        tempArray[(i + amount % size) % size] = array[i];
    }
    console.log(tempArray);
    return tempArray;
}

arrayShift([1,2,3,4,5,6], 1);
arrayShift([1,2,3,4,5,6], 2);
arrayShift([1,2,3,4,5,6], 3);