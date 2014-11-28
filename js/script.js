

//starting values for the array
var numbers = [80, 90, 30, 10, 20, 40, 60, 100, 50, 70];
var x = 0;
var iMin = x; //index of j stored to a variable iMin

//Display the beginning values from the array
$(document).ready(function () {
    $('#cell0').css('width', numbers[0] + 'px');
    $('#cell1').css('width', numbers[1] + 'px');
    $('#cell2').css('width', numbers[2] + 'px');
    $('#cell3').css('width', numbers[3] + 'px');
    $('#cell4').css('width', numbers[4] + 'px');
    $('#cell5').css('width', numbers[5] + 'px');
    $('#cell6').css('width', numbers[6] + 'px');
    $('#cell7').css('width', numbers[7] + 'px');
    $('#cell8').css('width', numbers[8] + 'px');
    $('#cell9').css('width', numbers[9] + 'px');
});

//function to call when you want to display new positions of sizes
function updateDisplay() {
    $('#cell0').css('width', numbers[0] + 'px');
    $('#cell1').css('width', numbers[1] + 'px');
    $('#cell2').css('width', numbers[2] + 'px');
    $('#cell3').css('width', numbers[3] + 'px');
    $('#cell4').css('width', numbers[4] + 'px');
    $('#cell5').css('width', numbers[5] + 'px');
    $('#cell6').css('width', numbers[6] + 'px');
    $('#cell7').css('width', numbers[7] + 'px');
    $('#cell8').css('width', numbers[8] + 'px');
    $('#cell9').css('width', numbers[9] + 'px');
}

//console.log("top level numbers: " + numbers);

function sleep(milliseconds) { //accepts one parameter time in milliseconds
    var start = new Date().getTime(); //variable start set to current time
    for (var i = 0; i < 1e7; i++) { //loop if I is less than (something) loop
        if ((new Date().getTime() - start) > milliseconds) {
            break; //break the loop
        }
    }
}

function increment() {
//    console.log("x before increment" + x);
    if (x < numbers.length) {
        sortIt();
    }
    x++;
}

function sortIt() {
    var i = x;
    iMin = x; //value to store the highest number location
    //i equals zero, when i is smaller than length of the numbers array, increment i
    for (i = x + 1; i < numbers.length; i++) {
//        console.log("(NEXT i= x+1): " + i);
//        console.log("x: " + x + ", iMin: " + iMin + ", i: " + i);
//        console.log("if(numbers[i]<numbers[iMin]Store I as iMin: value of numbers[i] (NEXT): " + numbers[i] + " vs numbers[iMin] (FIRST) " + numbers[iMin] + " before if check");
        //numbers[i] next number less than stored minimum
        if (numbers[i] < numbers[iMin]) {
            /* found new minimum; remember its index */
            iMin = i; //number of iMin changed to
//                console.log("value of iMin after second loop and in if statement: " + iMin);
        }
    }

    //if iMin(after the first for loop) is not equal to j
    if (iMin != x) {
        //numbers index at j, is sliced into the array (index,how many,itemToReplace) with this element in the array [0]
//        console.log("value of numbers array before splice: " + numbers);
//        console.log("before splice, numbers[x]: " + numbers[x] + " index to be replaced by: " + numbers[iMin]);
        numbers[x] = numbers.splice(iMin, 1, numbers[x])[0];
//        console.log('after splice, numbers[x]: ' + numbers);
//        console.log("x: " + x + ", iMin: " + iMin + ", i: " + i);
        i = x;
        updateDisplay();
    }
}