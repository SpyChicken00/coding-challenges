/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = []
    let row = [1]
    let prevRow = []
    for (let i = 0; i < numRows; i++){
        //look through previous row pairs with 2 length window
        // if (i === 0) {
        //     row = [1] //not necessary maybe
        // }  
        //check if left or right goes outside of bounds, if so make it a one
        //build row based on previous row, do this for every row
        for (let j = 0; j < prevRow.length; j++) {
            let left = prevRow[j]
            let right = prevRow[j+1]
            if (j+1 === prevRow.length) {
                row.push(1)
            } else {
                row.push(left + right)
            }
        } 
        triangle.push(row)
        prevRow = row
        row = [1]
        console.log(triangle)
    }
    return triangle;
};