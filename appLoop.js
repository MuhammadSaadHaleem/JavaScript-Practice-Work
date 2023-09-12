//---------  For loops Questions -------------

// 3. Write a program to print multiplication table of any number
// using for loop. Table number & length should be taken as an
// input from user.

// const num = +prompt("Enter a number")
// const len= +prompt("Enter lenth of talbe")

// for(var i=1; i<=len;i++){

//     document.write(num +" "+ "X"+ i +" "+ "="+ num*i +"<br>" )
// }

// ----------------------------------------------------

// 5. Write a program to print items of the following array using for
// loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

//  for(var i=0; i < fruits.length; i++){
//      document.write(fruits[i]+"<br>")


//  }

//  for (let index in fruits){
//     document.write( index+ "<br>")
//  }

// -----------------------------------------

// 8. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is
// found in the list or not.


// var A = ["cake", "apple pie", "cookie", "chips", "patties"]

// var search = prompt("")

// for (var i = 0; i <= A.length; i++) {
//     if (A[i] === search) {

//         for (let index in A) {
//             document.write(A[i] + " is available at index " + index + " in our bakery")
//             break;
//         }

//     }
//     else{
//         document.write(search+" is not available in our bakery")
//         break;
//     }

// }

// ------------------------------------------------------------

// 13. You have given the following arrays:
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// Write a program to generate the following HTML table in your
// browser using JS.

// var students = ["Ali","Sami","Taha","Inam"];
// var scores = [58,73,89,90];

// for(var i = 0; i< students.length; i++){

//     document.write( students[i]+" " + scores[i]+"<br>")
// }

// ---------------------------------------------------------------

// 15

// let A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// for (var i = 0; i < A.length; i++) {

    
//     for (var j = 0; j <= i; j++) {
//         document.write(A[j])
//     }
//     document.write("<br>")

// }