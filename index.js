function countLetters(char, k) {
  const countOfChar = {};
  for (let i = 0; i < char.length; i++) {
    const chars = char[i];
    countOfChar[chars] = (countOfChar[chars] || 0) + 1;
  }
  const kthOfChar = Object.entries(countOfChar).sort((a, b)=> b[1] - a[1]);
  return kthOfChar[k - 1][0];
}
console.log(countLetters("hello world", 2));

//the above code is a function to return ,first 
//the count of each letter in a string
//then return the second most repeating letter