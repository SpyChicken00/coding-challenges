function lostSheep(friday,saturday,total){
  //attempt 1
//   //add up friday and saturday sheep, subtract from total 
//   let sheepCount = 0;
//   //add friday sheep to count
//   //map function, for every element in the array, perform the following function with input sheep
//   friday.map((sheep) => {sheepCount += sheep})
//   //add saturday sheep to count
//   saturday.map((sheep) => {sheepCount += sheep})
//   return total - sheepCount
  
  //attempt 2 - use array concat and reduce functions to simplify process
  //combine into 1 bigger array, run function on each item 
  //total starts at total number of sheep, each iteration subtracts from the total 
  return friday.concat(saturday).reduce((accumulatorTotal, currentValue) => accumulatorTotal - currentValue, total)
}