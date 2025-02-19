//valid anagram
//https://leetcode.com/problems/valid-anagram/
//given two strings s and t, return true if t is an anagram of s, and false otherwise
//an anagram is a word formed by rearranging the letters of another, such as cinema, formed from iceman

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
s= "anagram";
t= "nagaram";
const isAnagram = function(s, t) {
    for (let i = 0; i < s.length; i++) {
        t = t.replace(s[i], '');
    }
    return t.length === 0;
};

console.log(isAnagram(s, t)); //true    anagram and nagaram are anagrams of each other