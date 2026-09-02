function removeSmallest(numbers) {
  //loop through array and add each element to a copy array
  //keep track of lowest values index (numbers[i] < min) update min
  //after loop splice (min index, delete 1) -> does splce return a new array?
  //if multiple lowest, remove the first one you see and break
  if (numbers.length === 0) return [];
  let minValue = Infinity
  let minIndex = Infinity;
  let exhibits = []
  for (let i = 0; i < numbers.length; i++) {
    exhibits.push(numbers[i]);
    if (numbers[i] < minValue) {
      minIndex = i;
      minValue = numbers[i]
    }
  }
  exhibits.splice(minIndex, 1) //returns an array with removed value
  return exhibits;
  //toSpliced isnt available until Node v20 womp womp 
  //return numbers.toSpliced(minIndex, 1);
}