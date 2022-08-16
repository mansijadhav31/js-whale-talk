let input = "publishing and graphic design, Lorem ipsum is a";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray =[];
for (let i=0; i<input.length; i++){
  if(input[i]=='e' || input[i]=='u'){
    resultArray.push(input[i]);
  }
  for (let j=0; j<vowels.length; j++){
    if(input[i]==vowels[j]){
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
let fullSent = resultArray.join('').toUpperCase();
console.log(fullSent)

