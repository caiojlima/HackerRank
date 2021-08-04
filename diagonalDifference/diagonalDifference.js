function diagonalDifference(arr) {
    let diagRight = 0;
    let diagLeft = 0;
    for (let i = 0; i < arr.length; i += 1) {
        let array = arr[i]
        diagRight += array[i]; 
    }
    for (let id = arr.length -1; id >= 0; id -= 1 ) {
        let diferenca = Math.abs(id-(arr.length-1))
        let array2 = arr[id];
        diagLeft += array2[diferenca];
        
    }
    return Math.abs(diagRight - diagLeft);
}
console.log (diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));