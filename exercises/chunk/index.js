// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]'

// const letters = ['a', 'b', 'c', 'd', 'e'];
// letters.slice(0, 3) < beginning at el 0 to el 3, get a copy of every one expet the last one. so this would return [a, b, c], so the first 3 elements.

function chunk(array, size) {
    const emptyChunk = [];
    let index = 0;
    while (index < array.length) {
        emptyChunk.push(array.slice(index, index + size));
        index += size;
    }
    return emptyChunk;
}

// function chunk(array, size) {
//     const newNumChunk = []
//     for (let element of array) {
//         let lastElement = newNumChunk[newNumChunk.length - 1];
//         if (!lastElement || lastElement.length === size) {
//             newNumChunk.push([element]);
//         } else {
//             lastElement.push(element);
//         }
//     }
//     return newNumChunk;
// }
module.exports = chunk;
