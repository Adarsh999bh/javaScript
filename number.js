const num = parseInt(process.argv[2]);
const placeValue = (num, res = [], factor = 1) => {
   if(num){
      const val = (num % 10) * factor;
      res.unshift(val);
      return placeValue(Math.floor(num / 10), res, factor * 10);
   };
   return res;
};
console.log(placeValue(num));