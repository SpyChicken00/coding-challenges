function toAcronym(inp){
  //split string to words by space char
  //take every first letter from given string
  //uppercase it
  //join them together 
  
  let acronym = "";
  const words = inp.split(" ");
  for (let i = 0; i < words.length; i++) {
    acronym += words[i].charAt(0)
  }
  return acronym.toUpperCase();
}