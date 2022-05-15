let text =
  "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(textString) {
  let textArray = [];
  let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  let noPunc = text.replace(punctuation, "").toLowerCase();
  textArray = noPunc.split(" ");

  return textArray;
}

function generateWordPairs(text) {
  let markovChain = {};
  let textArray = parseText(text);

  for (let i = 0; i < textArray.length; i++) {
    if (textArray[i + 1] === undefined) {
      return markovChain;
    }
    if (textArray[i] in markovChain) {
      let duplicate = textArray[i + 1];
      let index = markovChain[textArray[i]];
      index.push(duplicate);
    } else {
      markovChain[textArray[i]] = [textArray[i + 1]];
    }
  }
}

function writeLine(markovChain, wordCount) {
  // console.log(markovChain);
  let keys = Object.keys(markovChain);
  console.log(keys); 
  let startingWord = randomWord(keys);
  console.log(startingWord)
  let line = [];

  for(let i = 1; i < wordCount; i++){
    let nextPos = markovChain[startingWord];
    console.log(nextPos);
    let newWord = randomWord(keys);
    console.log(newWord)
    startingWord = markovChain[nextPos];
    line.push(nextPos);
    if (line.length > wordCount){
      continue;
    }
    line.push( randomWord(startingWord));
    console.log(randomWord(startingWord))


    
  }
  // console.log(line);
  return line.join(" ");
}

function randomWord(word) {
  let max = Math.floor(word.length);
  let randomNum = Math.floor(Math.random() * max);
  return word[randomNum];
}

function generatePoem(corpus, numLines) {
  let poem = "";
  corpus = parseText(corpus);
  let wordPairs = generateWordPairs(corpus);
  for (let i = 0; i < numLines; i++) {
    poem += writeLine(wordPairs, 3) + "\n";
  }
  return poem;
}

console.log(generatePoem(text, 1));




// let newLine = "";
// let tempLine = ""
// // startingWord = tempLine;
// let keys = Object.keys(markovChain);
// let startingWord = markovChain[keys[(keys.length * Math.random()) << 0]];
// // console.log(startingWord)
// newLine += startingWord[0];
// let nextWord = randomWord(startingWord);
// for (let i = 0; i < wordCount; i++) {
//   // console.log(nextWord)
//   if (!nextWord){
//     nextWord = randomWord(startingWord);
//   }else {
  
//   newLine += nextWord + " ";
//   }
//   // tempLine = startingWord;
//   // newLine += randomWord(tempLine)
//   // startingWord = tempLine;

//   // if (newLine === undefined) {
//   //   newLine += randomWord(startingWord) + " ";
//   // }
// }
// return newLine;