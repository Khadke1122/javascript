  //1) WAY TO PRINT IN JAVASCRIPT ===
//      console.log("javascript");
//      alert("connect");
     document.write("ohoo javascript")


// 2. javascript console API....
// console.log("HELLO JAVASCRIPT, 557444,DKVDJ", 4 * 5);
// console.warn("this is warning");
// console.error("this is error");

//3.) variable                                  VAR...LET...CONNST
var kl = 55;
 var klj = 25;
// console.log(kl + klj);

//5.) dataa type in javascript
var str1 = "this is a string";
var str2 = "this is also string";

//objects
var marks = {
    ravi: 66,
    pandu : 88.55,
    rama : 99
}
// console.log(marks)

// booleans
//var a = true;
//var b = false;

//var und = undefined;    (if you can not put anything)
var bhbj;
// console.log(bhbj);
                   var n = null;
                  //  console.log(n)

   /*  At a very high levelthere r two types of java Script. 
     1)) primitive data type = undefine,null,number,string,boolean,Symbol
     2)) referance data type = arrays and objects.             */

// 6> Array    (start from 0  1  2  3  4  5  6)
var arr = [1,2,3,4,5,6,"baba"]     
//console.log(arr[1])

//Operators in javascript:     **importants**
// Arithgematic operators:
//var a = 50;
var b = 30;
// console.log("value of a + b is =",  a+b)
// console.log("value of a - b is =",  a-b);
// console.log("value of a * b is =",  a*b);
// console.log("value of a / b is =",  a/b);

// 7>Assignment operator..
//var c = 50;
//   c += 2 ;
// c -= 5;
//  c *= 1;
 //c /= 2;
// console.log(c)
//  console.log(a)

// 8> comparision operator
var x = 10;
var y = 20;              //   Q.) OPERATOR IS (+).....OPERANTS IS (10....&...20)
 //console.log(x += y);
//console.log(x >= y);            
// console.log(x <= y);           )
//console.log(x >= y);
// console.log(x < y);

//9). logical operator  (IF WE USE SINGLE OPERATOR IT WILL GIVE ASWER IN BIT WISE OR BINARY)
      // LOGICAL AND
// console.log(true && true);     true
// console.log(true && false);     false
// console.log(false && true);    false
// console.log(false && false);     false

       // LOGICAL OR OPERATORS
//console.log(true || true);        TRUE
//console.log(true || false);       TRUE
// console.log(false || true);    TRUE
// console.log(false || false)    FALSE

//  LOGICAL NOT
  // console.log(!false)
  // console.log(!true)
                           // ********
  // function avg(a, b){
  //   return (a + b) * 2 ;
  // }
  // c1 = avg(10, 20 );
  // c2 =avg (15, 20)
  // console.log(c1,c2)

  // function avg(c , d){
  //   h = (c + d) * 2  ;
  //     return h;
    
  // }
  // h1 = avg(10, 20 );
  // h2 =avg (15, 20)
  // console.log(h1,h2)

  // var age = 11;
  // if (age < 8){
  //   console.log("u r children");
  // }
  // else {
  //   console.log(" u r student")
  // }
//   age = 3;
// if(age < 4){
//   console.log("u r baby ")
// }
// else if(age < 8){
// console.log("u r a big baby")
// }
// else if (age < 10){
//   console.log("u r in school")
// }
// else if(age < 16){
//   console.log("u r in high school")
// }
// console.log("end of ladder")

//    ###  LOOPS   ### 
// var arr = [1,2,3,4,5,6,7];
// console.log(arr)
// for(var i = 0; i < arr.length; i++){
//   console.log(arr[i])
// }
                                      //compair
         //FOR LOOP                           
//var arr = [1,2,3,4,5,6,7];
// arr.forEach(function(num){
//   console.log(num)
// })
         // WHEILE LOOP
let j = 0;
// while(j<arr.length){
//    console.log(arr[j]);
//    j++;
// }
                      // if you want to run condition once use ("do while loop")
// do{
//   console.log(arr[j]);
//   j++;
// } while (j < arr.length);
                        
//   var arr = [1,2,3,4,5,6,7];
// console.log(arr)
// for(var i = 0; i < arr.length; i++){
//   if(i == 4){
//                                     // break;                                 
//                            // continue
//   }
//   console.log(arr[i])
// }

                                           //ARRY METHODS
let myArr = ["fan","lift",100,null,"light"]

//console.log(myArr.length);
                                           //  (by pop == last element cut.);
// myArr.pop()
// console.log(myArr)
                                 // (by push == we can add another element at last.);        
// myArr.push("kunal")
// console.log(myArr)
                                    //(by shift == 1st element remove);
//myArr.shift()
//console.log(myArr)
                                  //(by unshift == add element 1st);
// myArr.unshift("kunal")
// console.log(myArr)
                              // if u want to make new arr & add element use this below method
//const newLen=myArr.unshift("kunal")
//console.log(myArr);                             
                                       // sort == set element in proper manner; used in distionary
//console.log(d.sort());

             
// let myDate = new Date();                    //time
// console.log(myDate)
// console.log(myDate.getFullYear())
//console.log(myDate)

//console.log(myArr.toString())       // tostring is used to show o/p in string.
// console.log(myArr.sort())                //sort

                            // strinfg method in javascript//  Lovely
//  let myLovelyString = "my name kunal";
//  console.log(myLovelyString.length)          
//  console.log(myLovelyString.indexOf("name"))   
//  console.log(myLovelyString.lastIndexOf("name"))               

// console.log(myLovelyString.slice(0, 7))         //start==end...slice
//  newArr = myLovelyString.replace("my", "why")
//  console.log(newArr, myLovelyString)

//                                          // DOM manipulation
// let elem = document.getElementById('demo');                      // Element==only for id
// console.log(elem)
                                                                 
// let elemClass = document.getElementsByClassName('container');    // Elements==for classes       
// console.log(elemClass)  
// elemClass[0].style.background ="yellow"
// elemClass[0].classList.add("bg-primary")             // we use [0] [1]..as per class in HTMl (cxontainer)  change text colour & background by javascript    
// elemClass[1].classList.add("text-danger")           
// elemClass[0].classList.remove("text-danger")       //  we add & remove also...in console also
// console.log(elemClass[1].innerHTML);               //it will shows the html part in console//
// console.log(elemClass[1].innerText);   

// 
