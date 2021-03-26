function reverseWord(str){
var newWord = "" ;
for (var i = str.length-1 ; i >= 0 ; i--){
    newWord += str[i];
}
return newWord;
}
var title = "blues";
const reverse = reverseWord(title);
console.log(reverse)
