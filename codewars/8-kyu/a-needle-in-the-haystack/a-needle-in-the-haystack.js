function findNeedle(haystack) {
  //loop through the haystack array
    //check if item is a string called needle
      //if needle found return the message #found the needle at position #
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      return `found the needle at position ${i}`;
    }
  }
  
  return "needle not found"
}