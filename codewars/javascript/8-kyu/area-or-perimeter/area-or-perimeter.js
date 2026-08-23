const areaOrPerimeter = function(l , w) {
  //if square -> all sides same length 
  return (l === w) ? l * w : l * 2 + w * 2;
};