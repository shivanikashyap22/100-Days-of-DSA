/* 
 Write a function that reverses a string. The input string is given as an array of characters s. 

 You must do this by modifying the input array in-place with O(1) extra memory. 

 
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.

Leetcode: https://leetcode.com/problems/reverse-string/
*/

function rev(arr){
  let newArr=[]
  for(let i=0;i<=arr.length-1; i++){
    newArr.unshift(arr[i])
  }
  return newArr
}
console.log(rev(["h","e","l","l","o"]))


function revOtherMethod(arr){
  let newArr=arr.reverse()
  console.log(newArr)
}revOtherMethod(["h","e","l","l","o"])


function revOtherMethod1(arr){
  let newArr=[]
  for(i=arr.length-1; i>=0;i--){
    newArr.push(arr[i])
  }
  return newArr;
}
console.log(revOtherMethod1(["h","e","l","l","o"]))