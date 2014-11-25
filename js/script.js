//1. start with a list of numbers in increments of 10 out of order.
//2. have those numbers represent a length of a bar in the dom
//3. pull the values out of the array and compare them
//4. update the DOM via jQuery with a style width in pixels based on the new array
//5. Check the next two values in the array
//6. update the DOM via jQuery with a style width in pixels based on the new array
//7. loop through all numbers in array

//starting values for the array
var numbers = [80,90,30,10,20,40,60,100,50,70];

//checking my display function should work
var numbers02 = [10,20,30,40,50,60,70,100,90,80];
function checkDisplayPrint() {
    numbers = numbers02;
    updateDisplay();
}

//Display the beginning values from the array
$(document).ready(function() {
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

console.log("top level numbers: " + numbers);

function sleep(milliseconds) { //accepts one parameter time in milliseconds
    var start = new Date().getTime(); //variable start set to current time
    for (var i = 0; i < 1e7; i++) { //loop if I is less than (something) loop
        if ((new Date().getTime() - start) > milliseconds){
            break; //break the loop
        }
    }
}


function sortIt() {
// sort numbers using bubble sort, selection sort,
// insertion sort or quicksort
    var i, j; //creating variables for i and j
    var iMin; //creating variable for iMin
    /* advance the position through the entire array */
    for (j = 0; j < numbers.length - 1; j++) { //j equals zero, when j is smaller than length of the numbers array, increment j
        var iMin = j; //index of j stored to a variable iMin
        console.log("value of iMin in first for loop: " + iMin);
        updateDisplay();

        //i equals zero, when i is smaller than length of the numbers array, increment i
        for ( i = j+1; i < numbers.length; i++) {
            //If the number at index i is less then
            if (numbers[i] < numbers[iMin]) {
                /* found new minimum; remember its index */
                iMin = i; //number of iMin changed to
                console.log("value of iMin after second loop and in if statment: " + iMin);
                updateDisplay();
            }
        }

        //if iMin(after the first for loop) is not equal to j
        if(iMin != j) {
            //numbers index at j, is sliced into the array (index,howmany,itemToReplace) with this element in the array??? [0]
            console.log("in the second if, before splice numbers value: " + numbers);
            numbers[j] = numbers.splice(iMin, 1, numbers[j])[0];
            console.log("in the second if, after splice numbers value: " + numbers);
            updateDisplay();
            sleep(1000);

        }
    }
}