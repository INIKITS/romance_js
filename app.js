let text = "Ever since I left the city, you, you, you You and me we just don't get along";

function parseText(textString){
    let textArray = [];
    let punctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    let whiteSpace = /\s/g;
    let noPunc = text.replace(punctuation, '').toLowerCase();
    console.log(noPunc);
    
    textArray = noPunc.split(" ")
    console.log(textArray)

    return textArray;
}

parseText(text);