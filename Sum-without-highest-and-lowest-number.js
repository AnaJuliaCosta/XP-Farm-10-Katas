function sumArray(array) {
    // Check for empty or invalid input
    if (!array || array.length <= 2) {
        return 0;
    }

    // Remove the highest and lowest elements
    const sortedArray = array.slice().sort((a, b) => a - b);
    const sum = sortedArray.slice(1, -1).reduce((acc, curr) => acc + curr, 0);

    return sum;
}