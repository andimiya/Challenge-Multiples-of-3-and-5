/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;

  var sumArray = [];
  // do your work here

  //3 * x (1) = sum (3)
  //3 * x (2)  = sum (6)
  //up until sum < n (9)
  //add sum to array

  //var x = x-3 Then add the result to the array
  //n-5 add to array, until 0

    for (var x = 0; x < n; x++) {
      if (x % 3 === 0) {
        sum += x;
        sumArray.push(x);
        //console.log(sumArray);
      }

      if (x % 5 === 0) {
        sum += x;
        sumArray.push(x);
      }

    }
    console.log(sumArray);


    for (var i = 0; i < sumArray.length-1; i++) {
      sum += sumArray[i];
    };
    console.log(sum);


  return sum;
};
