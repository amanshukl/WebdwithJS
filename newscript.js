// var pi = 3.14;
// var person = "are you god";
// var answer = "yes i am!";
// document.write(pi + "<br>");
// document.write(person + "<br>");
// document.write(answer + "<br>");

// function myFunction() {
//     var carname = "welcome";
//     document.getElementsById("aman").innerHTML = carname;
// }

// var num = 10;
// console.log(num);
// console.log(typeof(num));
// var num = false;
// console.log(num);
// console.log(typeof(num));
// var num = "Aman Shukla";
// console.log(num);
// console.log(typeof(num));
// var num = null;
// console.log(num);
// console.log(typeof(num));
// var num = undefined;
// console.log(num);
// console.log(typeof(num));


// var person = {
//     firstName : "john",
//     lastName : "Doe",
//     id :5566,
//     getinfo : function(){
//         return this.firstName + ""+this.lastName;
//     }
// };
// //display data from the object:
// document.getElementById("demo").innerHTML = person.getinfo();

// var person2 = new Object();
// person2.name ='krishnakant'
// person2.age = 32;
// person2.address={}
// person2.address.street="nagar road"
// person2.address.flanto=32
// console.log(person2)


// //onject with bracket
// console.log(person2.Aman)
// document.write(person2.aman)
// var a = 10;

// function functionA() {
//     console.log("Start function A");
//     function functionB() {
//         console.log("In function B");
//     }
//     functionB(); // Correctly invoking functionB
// }

// function myFunction() {
//     var x = "Hello World!";
//     document.getElementById("demo").innerHTML = x;
// }

// // For testing purpose, invoke functionA
// functionA();
// console.log("GlobalContext");



// var name='john';
// function first(){
//     var a = 'Hello!';
//     secound();
//     var x = a+ name1;

// }
// function secound(){
//     var a = 'Hi!';
//     third();
//     var z = b+ name1;

// }

// function third(){
//     var c = 'Hey!';
//     var z = c+ name1;

// }
// var grade = 'M';
//                 document.write("Entering switch block<br/>");
//                 switch(grade){
//                     case'A':document.write("good job<br/>");
//                     break;
//                     case'B':document.write(" pretty good<br/>");
//                     break;
//                     case'C':document.write("passed<br/>");
//                     break;
//                     case'D':document.write(" Not so good<br/>");
//                     break;
//                     case'F':document.write("Failed<br/>");
//                     break;

//                     default: document.write("unknown grade<br/>")
//                 }
//                 document.write("Exiting switch block");


                // 
                
                // var count;
                // document.write("Starting loop" + "<br/>");
                // for(count = 0; count<10; count++){
                //     document.write("Current Count:" + count);
                //     document.write("<br/>");
                // }
                // document.write("Loop stopped!");

               
                


//   var myArray = ["A","B","C"];
//   for(var i =0;i<myArray.length;i++)
//     {
//         console.log("The member of myArray in index" +i+"is"+ myArray[i]);
//     }              

// -->>while loop..................

// var count = 0;
// document.write("Starting Loop");

// while(count<10){
//     document.write("Current Count:"+count+"<br/>");
//     count ++;
// }
// document.write("Loop stopped!");

//-->javascript function...........................
// function myFunction(){
//     alert("Hello World!");
// }

//withoutparameter................................................
function sayHello(name,age){
    document.write(name + "is" +age +"years old.");
}