function countLetters(word, letter) {
    let amt = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.toLowerCase().charAt(i) == letter) {
            amt += 1;
        }
    }
    return amt;
}
countLetters(countLetters(AfricanOsher, r));

console.log(countLetters);


