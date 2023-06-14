/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const arr1 = Array.from(str1).sort()
  const arr2 = Array.from(str2).sort()
  
  if(arr1.length != arr2.length)
    return false;

    for (var i = 0, l = arr1.length; i < l; i++) {
        if(arr2[i] != arr1[i])
          return false;
    }

    return true;
}
console.log(isAnagram("mohit", "tihom"))
