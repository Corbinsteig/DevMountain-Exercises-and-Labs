// function floor(diameter) {

//     var radius = diameter/2;
//     var floorArea = Math.PI * (radius * radius);
//     return floorArea;
// }


// function walls(diameter, height ) {
//     var radius = diameter/2;
//     var circumference = 2 * Math.PI * radius;
//     var wallArea = circumference * height;
//     return wallArea;
// }

// function materialsNeeded() {


//     var d = document.getElementById("across").value;
//     var h = document.getElementById("height").value;

//     var carpetNeeded = Math.ceil(floor(d));
//     var paintNeeded = Math.ceil(walls(d, h));

//     console.log("Carpet Needed is "+carpetNeeded+" sqft");
//     console.log("Paint needed is "+paintNeeded+" sqft");

// }

// var i = 1;
// while (i<=100) {
//     console.log(i);
//     i=i+1
// }

// for (i = 1; i <= 100; i++){
//     console.log(i)
// }

// var elementID = document.getElementById('home');
//     console.log(elementID)
//     console.log(elementID.length)

// for (i=0; i<elementID.length; i++){

//     console.log(elementID[i].text)
//     console.log(elementID[i].value)

// }

// function showStuff(el) {
// var elementID = document.getElementById(el)
//     for (i=0; i<elementID.length; i++){
//         if (elementID[i].selected=== true) {
//             var x = elementID[i].text
//         }
//     }
//     return x;
// }

// function showMore() {
// var elementID = document.getElementsByName('bulb');
// console.log(elementID.length)
// var mycheck = "";
// for (i=0; i<elementID.length; i++) {
//     // console.log(elementID[i].checked)
//     // console.log(elementID[i].value)
//     if (elementID[i].checked === true) {
//         mycheck = mycheck + elementID[i].value + '<br>';
//     }
// }
// return mycheck
// console.log(elementID[0].checked);
// }

// function evaluatePage() {
//     var feedbackState = showStuff("state");
//     var feedbackHome = showStuff("home");
//     var feedbackLight = showMore()
//     document.getElementById("output").innerHTML = feedbackState + "<br>" +  feedbackHome + '<br>' + feedbackLight ;
// }

// function myFunction(){
//     var elem = document.getElementById("chooseMe")
//     var dateShort = elem.options[elem.selectedIndex].text
//     var dayName;
//     console.log(dateShort)

// switch (dateShort) {
//     case "U":
//         dayName = "Sunday";
//         break;
//     case "M":
//         dayName = "Monday";
//         break;
//     case "T":
//         dayName = "Tuesday";
//         break;
//     case "W":
//         dayName = "Wednesday";
//         break;
//     case "R":
//         dayName = "Thursday";
//         break;
//     case "F":
//         dayName = "Friday";
//         break;
//     case "S":
//         dayName = "Saturday";
//         break;
// }
//     document.getElementById('feedback').innerHTML = dayName;

// }