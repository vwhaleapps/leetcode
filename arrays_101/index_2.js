/**
 * Find Numbers with Even Number of Digits
 * Given an array nums of integers, return how many of them contain an even number of digits.
 *  
 * 
 * Example 1:
 * 
 * Input: nums = [12,345,2,6,7896]
 * Output: 2
 * Explanation: 
 * 12 contains 2 digits (even number of digits). 
 * 345 contains 3 digits (odd number of digits). 
 * 2 contains 1 digit (odd number of digits). 
 * 6 contains 1 digit (odd number of digits). 
 * 7896 contains 4 digits (even number of digits). 
 * Therefore only 12 and 7896 contain an even number of digits.
 * Example 2:
 * 
 * Input: nums = [555,901,482,1771]
 * Output: 1 
 * Explanation: 
 * Only 1771 contains an even number of digits.
 *  
 * 
 * Constraints:
 * 
 * 1 <= nums.length <= 500
 * 1 <= nums[i] <= 10^5
 * 
 * Hide Hint #1  
 * How to compute the number of digits of a number ?
 * Hide Hint #2  
 * Divide the number by 10 again and again to get the number of digits.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    const isEven = (n) => n % 2 == 0;  
    let evenNumbers = [];
    for (number of nums) {
        let numberLength = number.toString().length;
        let consoleString = `${number} contains ${numberLength} ${numberLength == 1 ? "digit" : "digits"}`;
        if (isEven(number.toString().length)) {
            evenNumbers.push(number);
        }
        
        let otherString = !isEven(number.toString().length) 
            ? " (odd number of digits)." 
            : " (even number of digits).";
        
        console.log(`${consoleString}${otherString}`)
    }
    
    if (evenNumbers.length > 1) {
        console.log(`Therefore only ${evenNumbers.join(" and ")} contain an even number of digits.`);
    } else {
        console.log(`Only ${evenNumbers[0]} contains an even number of digits.`)    
    }

    return evenNumbers.length;
};

findNumbers([437,315,322,431,686,264,442])
