
/*
 An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once .

 Given two strings s and t, return true if t is an anagram of s, and false otherwise. 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false

Leetcode: https://leetcode.com/problems/valid-anagram/
*/


function anagram(value, value2){
    let name={}
    for(let i=0;i<value.length; i++){
      if(name[value[i]]){
        name[value[i]]=name[value[i]]+1
      }
      else{
        name[value[i]]=1
      }
    }
    for(let i=0;i<value2.length; i++){
      if(name[value2[i]]){
        name[value2[i]]=name[value2[i]] - 1
      }
      else{
        return false
      }
    }
    return true
  }
  console.log(anagram("shivani", "shivain"))