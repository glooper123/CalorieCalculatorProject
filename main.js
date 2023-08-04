//Defining/Initializing all the variables that are being used
var userweight = 0;
var userheight = 0;
var userage = 0;
var usergender = '';
var userlevel = '';
var BMI = 0;
var kiloweight = 0;
var cmheight = 0;
var Calories = 0;

//Stores user value of physical activity level into a variable
var selector = document.getElementById('level');
selector.addEventListener('change', function() {
    userlevel = selector.options[selector.selectedIndex].text;
});

//Traverses through everything after button(Calculate) and calculates everything via function
document.getElementById('mybutton').onclick = function(){
    //Getting user input and storing them into variables for calculations
    var userweight = document.getElementById('weights').value;
    var userheight = document.getElementById('height').value;
    var userage = document.getElementById('age').value;
    var usergender = document.querySelector('input[type = "radio"]:checked').value;
    var kiloweight = Math.floor(userweight/2.205);
    var cmheight = Math.floor(userheight * 2.54);

    //Calculates BMR for TDEE calculation
    if(usergender == 'male'){
        var BMI = Math.floor(66.5 + (13.75 * kiloweight) + (5.003 * cmheight) - (6.75 * userage));
    } else if(usergender == 'female'){
        var BMI = Math.floor(655.1 + (9.563 * kiloweight) + (1.850 * cmheight) - (4.676 * userage));
    }  

    //Calculates Calories/per day via activity level
    if(userlevel == 'Sedentary'){
        var Calories = Math.floor(BMI * 1.2);
    } else if(userlevel == 'Lightly Active'){
        var Calories = Math.floor(BMI * 1.375);
    } else if(userlevel == 'Moderately Active'){
        var Calories = Math.floor(BMI * 1.55);
    } else if(userlevel == 'Very Active'){
        var Calories = Math.floor(BMI * 1.725);
    } else if(userlevel == 'Extra Active'){
        var Calories = Math.floor(BMI * 1.9);
    }
    //Returns the result
    var resultDiv = document.getElementById('result');
    resultDiv.textContent = 'TDEE: ' + Calories + " kcals per day";

    // Just a test!:  console.log(userweight, userheight, userage, usergender, userlevel, BMI, Calories)
}



