let alphabet = ["b", "c", "e", "f", "g"];

console.log(alphabet[0]);
console.log(alphabet[4]);
console.log(alphabet[2]);

let [firstVar, ,middleVar, ,lastVar] = alphabet;

console.log(firstVar, middleVar, lastVar);

console.log(alphabet.length);


alphabet.pop();
console.log(alphabet);

alphabet.push("g");
console.log(alphabet);

alphabet.unshift("a");
console.log(alphabet);

alphabet.splice(3, 0, "d");
console.log(alphabet);

alphabet.splice((alphabet.length), 1, "h");
console.log(alphabet);


for (let i = 0; i < alphabet.length; i++){
    console.log(alphabet[i]);
    
}

alphabet.forEach((value, index) =>{
    console.log(`${index}: ${value}`);
});

let [firstElement, secondElement, ...rest] = alphabet;
console.log(firstElement, secondElement, rest);
