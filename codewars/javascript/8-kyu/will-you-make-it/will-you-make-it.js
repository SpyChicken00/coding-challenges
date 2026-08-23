const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return (distanceToPump <= (fuelLeft * mpg)) ? true : false;    
  //return condition ? true : false;
  
  //   if (distanceToPump <= (fuelLeft * mpg)){
//     return true;
//   } else {
//     return false;
//   }
};