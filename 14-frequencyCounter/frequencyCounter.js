function frequencyCounter(word) {
  // Insert code here;
   let answer =  {}
  for (let i = 0; i < word.length; i++) {
    answer[word[i]] = answer[word[i]] ? answer[word[i]] + 1: 1
  }
  return answer
}

// Do not edit this line;
module.exports = frequencyCounter;
