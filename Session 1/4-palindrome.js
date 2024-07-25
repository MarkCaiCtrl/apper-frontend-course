function isPalindrome(word) {
  
    for(let i=0; i<word.length/2; i++){
        if(word[i] !== word[word.length-i-1]){
            return false
        }
    }
    return true
}

const word = 'racecar'
const word2 = 'arora'
const word3 = 'aurora'
if (isPalindrome(word)) {
  console.log('It is a palindrome!')
} else {
  console.log('It is not a palindrome!')
}