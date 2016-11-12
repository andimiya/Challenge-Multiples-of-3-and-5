/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  var sumArray = [];
  // do your work here

  //3 * x (1) = sum
  //3 * x (2)  = sum
  //up until sum < n
  //add sum to array

  //var x = x-3 Then add the result to the array
  //n-5 add to array, until 0



    for (var x = 0; x <= 4; x++) {
      if (sum < n){
        var sum = 3 * x;
        sumArray.push(sum);

      }

    }

    for (var x = 0; x <=4; x++) {
      if (sum < n) {
        var sum = 5 * x;
        sumArray.push(sum2);
      }

    }
    console.log(sumArray);





  // var x = x-3;
  // sumArray.push(x);
  // var x = x-3;
  // sumArray.push(x);
  // console.log(sumArray);


  return sum;
};
