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


var person = {
    firstName : "john",
    lastName : "Doe",
    id :5566,
    getinfo : function(){
        return this.firstName + ""+this.lastName;
    }
};
//display data from the object:
document.getElementById("demo").innerHTML = person.getinfo();
