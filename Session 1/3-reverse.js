function reverse(word) {
    let revWord = []
    for (let i = word.length - 1; i >= 0; i--) {
        revWord.push(word[i])
    }

    return revWord.join('')
}
   
   const word = 'hello'
   const reversedWord = reverse(word)
   console.log(reversedWord)// 'olleh'
   console.log(reverse('racecar')) 
   console.log(reverse('potato'))