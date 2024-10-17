function countLetters(char, k) {
  char = char.toLowerCase().replace(/[^a-z]/g, "");
  const countOfChar = {};
  for (let i = 0; i < char.length; i++) {
    const chars = char[i];
    countOfChar[chars] = (countOfChar[chars] || 0) + 1;
  }
  return countOfChar;
  const kthOfChar = Object.entries(countOfChar).sort((a, b)=> b[1] - a[1]);
  return kthOfChar[k - 1][0];
}
console.log(countLetters("hello world!", 2));

//the above code is a function to return ,first 
//the count of each letter in a string
//then return the second most repeating letter

// another way: 
function countChars(str){
    const frequent = {};
    const cleanStr = str.toLowerCase().replace(/[^a-z]/g, "");
    for(let char of cleanStr){
        if(frequent[char]){
            frequent[char]++
        }else{
            frequent[char] = 1;
        }
    }
    return frequent;
}
//console.log(countChars("hello, world!"));