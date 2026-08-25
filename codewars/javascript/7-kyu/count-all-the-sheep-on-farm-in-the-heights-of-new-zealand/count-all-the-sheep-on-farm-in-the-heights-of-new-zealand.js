function lostSheep(friday,saturday,total){
  //add up friday and saturday sheep, subtract from total 
  let sheepCount = 0;
  //add friday sheep to count
  //map function, for every element in the array, perform the following function with input sheep
  friday.map((sheep) => {sheepCount += sheep})
  //add saturday sheep to count
  saturday.map((sheep) => {sheepCount += sheep})
  return total - sheepCount
​
}