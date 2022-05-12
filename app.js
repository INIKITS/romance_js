let text = "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(textString){
    let textArray = [];
    let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    // let whiteSpace = /\s/g;
    let noPunc = text.replace(punctuation, '').toLowerCase();
    console.log(noPunc);
    
    textArray = noPunc.split(" ")
    console.log(textArray)

    return textArray;
}


function generateWordPairs(text){
    let markovChain = {};
    let tempText = "";
    let textArray = parseText(text);
 
    for (let i = 0; i < textArray.length; i++){
        if (textArray[i+1] === undefined){
            return markovChain;
        }
        
        markovChain[textArray[i]] = textArray[i+1];


    }
    console.log(markovChain);
    
}

let wordPairs = generateWordPairs(text);
console.log(wordPairs);
