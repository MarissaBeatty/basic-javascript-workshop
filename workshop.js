function firstLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    } 
    else {
        return inputString[0];
     }
}
    
/*var answer = firstLetter("decodeMTL"); 
    console.log(answer);*/


function lastLetter(inputString) {
    if (inputString === undefined) {
        return undefined;
    } else {
        return inputString[inputString.length - 1];
    }

}

function letterAtPosition(inputString, position) {
    if (inputString === undefined || position < 0) {
        return undefined;
    } else {
        return inputString.charAt(position);
    }
}

function addTwoNumbers(num1, num2) {
    if(num1 === undefined) {
        return undefined;
    } else if(num2 === undefined) {
        return undefined;
    } else if(isNaN(num1)) {
        return undefined;
    } else if(isNaN(num2)) {
        return undefined;
    }
    else {
        return num1 + num2;
    }
}

function multiplyTwoNumbers(num1, num2) {
    if(isNaN(num1, num2)) {
        return undefined;
    } else if(num1 === undefined || num2 === undefined) {
        return undefined;
    } else {
        return num1*num2;
    }
}

function calculator(operation, num1, num2) {
    if(operation === "add") {
        return num1 + num2;
    } else if(operation === "sub") {
        return num1 - num2;
    } else if(operation === "mult") {
        return num1 * num2;
    } else if(operation === "div") {
        return num1 / num2;
    } else {
        return undefined;
    }
}

function repeatString(inputString, numRepetitions) {
    if(numRepetitions <=0) {
        return "";
    } else if(inputString === undefined || numRepetitions === undefined) {
        return undefined;
    } else {
    return inputString.repeat(numRepetitions);
    }
}

function reverseString(inputString) {
    return inputString.split("").reverse().join("");
}

function longestWord(inputString) {
    var splitInputString = inputString.split(' ');
    if(splitInputString.length === 0) {
        return "";
        } else if(splitInputString.length === 1) {
        return inputString;
        } else  {
            var longWord = splitInputString[0];
            for(var i = 0; i < splitInputString.length; i++) {
                    
                if (longWord.length <= splitInputString[i].length) {    
                longWord = splitInputString[i];
            }
            } return longWord;
        } 
}

function capitalize(inputString) {
return inputString.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}

function sumOfNumbers(arrayOfNumbers) {
    var sum = 0
    for (var i = 0; i <arrayOfNumbers.length; i++) {
        if (arrayOfNumbers.length === 1) {
            return arrayOfNumbers[0];
        } else if (arrayOfNumbers.length === 0) {
            return 0;
        } else if(isNaN(arrayOfNumbers[i])){
            return undefined;
        } else {
                sum += arrayOfNumbers[i];
             } 
    } return sum;
}



function uniqueElements(array1, array2) {
    if(array1.length < 0 && array2.length <0) {
        return undefined;
    } else {
        var newArray = [];
        for(var i = 0; i < array1.length; i++) {
            for(var x = 0; x < array2.length; x++) {
                if (array1[i] != array2[x]) {
                    newArray.push(array1[i], array2[x]);
                } else if (array1[i] === array2[x]) {
                    return [];
                }
                }
            }
        }  return newArray;
            
        
    }



function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};
