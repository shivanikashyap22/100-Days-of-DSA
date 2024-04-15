/*
 A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. 

 Given a string s, return true if it is a palindrome, or false otherwise. 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

Link: https://leetcode.com/problems/valid-palindrome/


*/


function palin(value) {
    const string = value.replace(/[^A-Z0-9]/ig, " ").toLowerCase();
    let abc = ""
    for (let i = value.length - 1; i >= 0; i--) {
        abc = abc + value[i]
    }
    return abc.replace(/[^A-Z0-9]/ig, "").toLowerCase() === string
}
console.log(palin("A man, a plan, a canal: Panama"))
