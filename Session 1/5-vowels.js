function convertToVowels(word) {
    let vowelWord = []

    vowelWord = word.split('').filter((letter) => (onlyVowels(letter)))

    return vowelWord.join('')
}

function onlyVowels(char){
    return 'aeiou'.includes(char) ? char : '' //returns the char if its a vowel
}
  
const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo
console.log(convertToVowels("Peter pier had a farm, wait wrong rhyme")) //eeieaaaaioe