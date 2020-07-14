//Chapter1

//1

alert("Welcome");


//2


alert("Error!"+" "+"Please enter a valid password");

//3
alert("Welcome to JS Land.."+"<br>"+"Happy Coding!");
//4
alert("Welcome to JS Land...");
alert("Happy Coding!");
//5
alert("Hello..."+""+"I can run JS through my web browser's console);


//Chapvarter2




var userName="Ali";
var myName="Faizan Ahmed";
alert(userName);
alert(myName);


//3


var a="message";
alert(a);



var b="Hello World";

alert(b);



//4

var name="Ali";
var age="18";
var profession="Certified Mobile Development";

alert(name);
alert(age);
alert(profession);



//5
var i,j;
for(j=5;i>=1;i--){
	for(j=1;j<=i;i++){
		document.write("PIZZA");
	}
	document.write("<br>");
}


//6

var email="example@example.com";
alert("My email address is"+" "+email);

//7

var book="A smarter way to learn javascript";
alert("I am trying to learn"+book);


//8

document.write("Yah!"+" "+"I can write HTML content through javascript");




//9

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//chapter 3


var age=20;
alert(age);


var n=prompt("Enter Here");
alert("You have visited"+n +"times");



var birthyear=1999;
document.write("My birth year is "+" "+birthyear);


var name="John Doe";
var product=" shirts";
var quantity=5;
document.write(+name +"ordered" +quantity +"" +product +"on XYZ Clothing store");


//chapter4

document.write("Variable names only contain,numbers,$ and_.For example : $my_1stVariable");
document.write("Varaible must begin with a letter, $ or_. For example:$name,_name or name");
document.write("Variable names are case sensitive");
document.write("Variable names should not be JS Keywords");








//5
var i,j;
for(j=5;i>=1;i--){
	for(j=1;j<=i;i++){
		document.write("PIZZA");
	}
	document.write("<br>");
}


//6

var email="example@example.com";
alert("My email address is"+" "+email);

//7

var book="A smarter way to learn javascript";
alert("I am trying to learn"+book);


//8

document.write("Yah!"+" "+"I can write HTML content through javascript");




//9

alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");

//chapter 3


var age=20;
alert(age);


var n=prompt("Enter Here");
alert("You have visited"+n +"times");



var birthyear=1999;
document.write("My birth year is "+" "+birthyear);


var name="John Doe";
var product=" shirts";
var quantity=5;
document.write(+name +"ordered" +quantity +"" +product +"on XYZ Clothing store");


//chapter4

document.write("Variable names only contain,numbers,$ and_.For example : $my_1stVariable");
document.write("Varaible must begin with a letter, $ or_. For example:$name,_name or name");
document.write("Variable names are case sensitive");
document.write("Variable names should not be JS Keywords");



function task1(){

 var age = +27;
 alert("i am " + age + " years old" ); 

}

function task2(){

    var track = +14;
    alert("You have visited the site " + track + " times" ); 
   
   }


function task3(){

    var birthYear = +1998;
    document.write("My Birth year is " + birthYear + " <br/> Data type of my Declared Variable is : " +typeof(birthYear)); 
    
   
   }

   function task4(){


    var visitorName = "Mark";
    var productTitle = "T-shirt(s)";
    var quantity = +5;
 
  document.write( "<b>"+visitorName+"</b> ordered <b>"+quantity+"</b>&nbsp;<b>"+ productTitle+"</b> on XYZ Clothing store"); 
  
 
 }





function task1_2(){
// #1 Declare three variables in one statement
var one,two,three;

var name , myId, _dob ,$currency, class_section;


}
function task3(){

// #3 display this in your browser
  
document.write("<h1>Rules for Naming JS Variables </h1>"); 
document.write("Variable names can only contain $, numbers and __. For Example: $1st_Book_Title <br>" );
document.write("Variables must begin with a $, __ or letter . For example $id, _id or id <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not be a JS keywords");


}






function task1_2(){
// #1 Declare three variables in one statement
var one,two,three;

// #2 Declare 5 illegal & illegal Variables

// #2 Legal variable Declaration
var name , myId, _dob ,$currency, class_section;

// #2 illegal variable Declaration
// var 3color, &name, ^roll_no, #booktitle , @area; 

}
function task3(){

// #3 display this in your browser
  
document.write("<h1>Rules for Naming JS Variables </h1>"); 
document.write("Variable names can only contain $, numbers and __. For Example: $1st_Book_Title <br>" );
document.write("Variables must begin with a $, __ or letter . For example $id, _id or id <br>");
document.write("Variable names are case sensitive <br>");
document.write("Variable names should not be a JS keywords");


}







// chapter 5 task1 
function Addition(num1,num2){
  return document.write("<h1>Chp5 Task 1 </h1>"+"Sum of " +num1+ " and " +num2+ " is " +(num1+num2) + '<br>'); 
}

// chapter-5 task2
function Subtraction(num1, num2) {
    return document.write("<h1>Chp5 Task 2</h1>"+"Subtraction of " + num1 + " and " + num2 + " is " + (num1 - num2) + '<br>');
}
  
function Multiplication(num1, num2) {
    return document.write("Multiplication of " + num1 + " and " + num2 + " is " + (num1 * num2) + '<br>');
}

function Division(num1, num2) {
    return document.write("Division of " + num1 + " and " + num2 + " is " + (num1 / num2) + '<br>');
}

function modulus(num1,num2){
    return document.write("Modulus of " +num1+ " and " +num2+ " is " + (num1 % num2) + '<br>');  
}

// chapter-5 task3
function task3(){
document.write("<h1>Chp5 Task 3</h1>")
var num;
document.write("Value after variable declaration is: " +num);
num = 5;
document.write("<br> Initial value: " +num);
num++;
document.write("<br> Value after increment is: " +num);
num += 7;
document.write("<br> Value after addition is: " +num);
num--;
document.write("<br> Value after decrement is: " +num);
num /= 3;
num %= num;
document.write("<br> The remainder is: " +num);
}

// chapter-5 task4
function task4(){
  var price = 600;
  var cost = 600 * 5;
    document.write("<br> Total Cost to buy 5 tickets to a movie is : " +cost);
    }

// chapter-5 task5
function task5(){
var num = 4;
    for(var i= 1; i <= 10;i++){
      document.write("<br>"+ num + " X " +i + " = " + num*i + '<br>');

    }
      }

// chapter-5 task6
function task6(){
    var  Celsius = 25;
    var faren = 70;
    var cfaren = (Celsius * 9/5)+32;
    var ccelsius = (faren - 32) * 5/9;
    document.write("<br>");
    document.write(Celsius+"C is "+cfaren+"F");
    document.write("<br>");
    document.write(faren+"F is "+ccelsius+"C <br><br>");         
}

// chapter-5 task7
function task7(){
            var  pitem1 = 650;
            var pitem2 = 100;
            var  qitem1 = 3;
            var qitem2 = 7;
          var cost1 = pitem1 * qitem1;
          var cost2 = pitem2 * qitem2;

            document.write("<br>");
            document.write("Price of item 1 is " + pitem1);
            document.write("<br>");
            document.write("Quantity of item 1 is " + qitem1);
            document.write("<br>");
            document.write("Price of item 2 is " + pitem2);
            document.write("<br>");
            document.write("Quantity of item 2 is " + qitem2);
            document.write("<br>");  
            document.write("Total cost of your order is " + (cost1 + cost2)+'<br><br>');

        }

// chapter-5 task8
function task8(){
  var total = 980;
  var obtained = 804;
  var per =  (obtained / total) * 100;
  document.write("Total Marks: " + total);
  document.write("<br>");
  document.write("Obtained Marks: " + obtained);
  document.write("<br>");
  document.write("Percentage : " + per+"%");
}

// chapter-5 task9
function task9(){
  var dollar = 10;
  var riyal = 25;
  var currencytopk = 10 * 104.80 + 25 * 28;
   document.write("<br>");
  document.write("Total Currency in Pkr : " + +(currencytopk));
}

// chapter-5 task10
function task10(){
  var  num = +((5 + 5) * 10) / 2;
   document.write("<br>");
  document.write("Calculation : " + num);
}

// chapter-5 task11
function task11(){
  var  curryear = 2016;
  var  birthyear = 1992;
  var age = curryear - birthyear;

  document.write("Current year: " + curryear);
  document.write("<br>");
  document.write("Birth year : " + birthyear);
  document.write("<br>");
  document.write("Age : " + age);
}

// chapter-5 task12
function task12(){
  var  Radius = 20;
  var circumference =  2 * 3.142 * Radius;
  var area = 3.142 * Radius * Radius;
  document.write("Radius of a circle : " + Radius);
  document.write("<br>");
  document.write(" Circumference : " + circumference);
  document.write("<br>");
  document.write("Area : " + area);
}

// chapter-5 task13
function task13(){

  var favSnack = "chocolate chip";
  var currAge = 15;
  var maxAge = 65;
  var amtSnacks = 3;
  var rem_year = maxAge - currAge;
  var totalsnacks = amtSnacks * rem_year;
  document.write("Favourite Snack: " + favSnack);
  document.write("<br>");
  document.write("current Age: " + currAge);
  document.write("<br>");
  document.write("Estimated MAximun Age: " + maxAge);
  document.write("<br>");
  document.write("Amount of snacks per day: " + amtSnacks);
  document.write("<br>");
  document.write("You will need "+ totalsnacks + " chocolate chip to last you until the ripe old age of " + maxAge);
 
}







// Assignment6 task1 
function task6_1(){
  var a = +10;
  document.write("Result <br> The Value of a is: "+ a + "<br>.......................................... <br><br>"); 
  document.write("The Value of ++a:"+ ++a +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of a++:"+ a++ +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of --a:"+ --a +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");
  document.write("The Value of a--:"+ a-- +"</br>");
  document.write("Now The Value of a is:"+ a + "</br><br><br>");

}

//Assignment6   task 2
function task6_2(){
    var a = 2, b = 1;       
    var result =  --a - --b + ++b + b--;
 //   --a;  the value of a will become  1 due to pre decrement
//--a - --b; the value of a is 1 now & the value of b will become 0 from 1 due to pre decrement & their subtraction will be 1-0 = 1
//--a - --b + ++b; now here there will pre increment in b so the value will become 1 from 0  & after addition with previous result 1+1 = 2
//--a - --b + ++b + b--; in the last expression b-- there is a post decrement so the value of be will stay 1 so the result will be 2+1 =3
alert(result);

}


//Assignment6   task 3
function task6_3(){
   var name = prompt("Enter Your name");
   if( name.length > 0){

 document.write("Hey Dear User : -"+ name +" -Welcome Have a Nice Day !! Ahead <br>");
   }
   else{ alert("Input field is Empty !! please Enter Your Name")
   }
    

}

//Assignment6   task 4 not found in pdf


//Assignment6   task 5 
function task6_5(){
    var num = +prompt("Enter one number to see its multiplication");
    if( num == ""){
 num =5;
  for(var i = 1 ; i <= 10;i++)
{
    document.write(   "5 X " +i + " = "  + num * i +'<br>'  );
}
 }
 else{
     
  for(var i = 1 ; i <= 10;i++)
  {
    document.write(  num + " X " + i + " = "  + num * i +'<br>'  );
  }

 }
} 

//Assignment 6 task 6 
function task6_5(){
var sub1 = prompt("<br> Enter Subject 1 name");
var sub2 = prompt("Enter Subject 2 name");
var sub3 = prompt("Enter Subject 3 name");
var obt1marks = +prompt("Enter Subject 1 marks");
var obt2marks = +prompt("Enter Subject 2 marks");
var obt3marks = +prompt("Enter Subject 3 marks");
var total_marks = 100;   
var percentage = parseInt(((obt1marks + obt2marks + obt3marks) * total_marks) / 300);
document.write(" <table> <th> Subject </th>  <th> Total Marks </th> <th> Obtained Marks </th> <th> Percentage </th>"+
"<tr> <td>"+ sub1 +"</td><td>"+ total_marks +"</td> <td>"+ obt1marks +"</td> <td>"+ parseInt(obt1marks*total_marks)/100+"%"+"</td> </tr>" + 
"<tr> <td>"+ sub2 +"</td><td>"+ total_marks +"</td> <td>"+ obt2marks +"</td> <td>"+ parseInt(obt2marks*total_marks)/100+"%"+"</td> </tr>"+
"<tr> <td>"+ sub3 +"</td><td>"+ total_marks +"</td> <td>"+ obt3marks +"</td> <td>"+ parseInt(obt3marks*total_marks)/100+"%"+"</td> </tr> "+
"<tr><td></td> <td>"+ total_marks*3 +"</td> <td>"+ (obt1marks+obt2marks+obt3marks) +"</td> <td>"+percentage+"%"+"</td></tr></table>");
}













// Assignment9-11 task1 
function task9_11_1(){
  var city= prompt("Enter City Name??");
 if( city == "karachi" ){
  document.write("Welcome to City Of Lights</br><br><br>");
 }
}

// Assignment9-11 task2 
function task9_11_2(){
  var gender= prompt("Enter Gender");
  if( gender == "male"){
   document.write("Good Morning Sir<br>");
  }else if( gender == "female"){
    document.write("Good Morning Madam <br>");
  }
  else{
    alert("enter male or female"); 
  }

}


// Assignment9-11 task3
function task9_11_3(){
  var color = prompt("Enter traffic signal color");
  if( color == "green"){
   document.write("Move Now <br>");
  }else if( color == "red"){
    document.write("Must Stop <br>");
  }
  else if( color == "yellow"){
    document.write("ready to move"); 
  }
  else{
    alert("choose between traffic color");
  }

}


// Assignment9-11 task4
function task9_11_4(){
  var remainingFuel = prompt("Enter Remaining Fuel in Car in liters");
  if( remainingFuel < 0.25){
   document.write("Please refill the fuel in your car <br>");
  }
  else{
    alert("Youre Good to Go");
  }

}

// Assignment9-11 task5
function task9_11_5(){
// a true alert will run
  var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

// b false will not show alert
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

//  condition 2 & 4 are true they will be alerted
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true"); //true
}
if (++c < 14){
alert("condition 3 is true"); 
}
if(c === 14){
alert("condition 4 is true"); //true
}

// cost will be equal alert will be displsyed
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}

// trueee will be alerted
if (true){
  alert("True");
  }
  if (false){
  alert("false");
 } 

  // true alert will be displayed
   if("car" < "cat"){
alert("car is smaller than cat");
}

}

//Assignment 9_11 task 6
function task9_11_6(){
 var marks1 = +prompt("Enter 1 subject marks");
var marks2 = +prompt("Enter 2 subject marks");
var marks3 = +prompt("Enter 3 subject marks");
var total = 300;
var obtainedMarks = marks1 + marks2 + marks3 ;
var percentage = parseInt(((obtainedMarks)/300)*100);

if(percentage >= 80){
var grade = "A-One";
var msg = "Excellent";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}
else if(percentage >= 70){
var grade = "A";
var msg = "Good";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}
else if(percentage >= 60){
var grade = "B";
var msg = "You need Improvement";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}else if(percentage < 50){
var grade = "fail";
var msg = "sorry";
document.writeln("Total Marks: "+total +"<br>") ;
document.write("Obtained Marks: "+obtainedMarks+"<br>");
document.writeln("Percentage: "+percentage+"%"+"<br>");
document.writeln("Grade: " +grade +"<br>");
document.writeln("ReMarks: "+msg+"<br>");
}

}

// Assignment 9_11 task7
function task9_11_7(){
var sno = 5 ;
var uinp = +prompt("Guess Secret number ranging from 1 to 10");
if(sno === uinp){
   
   alert("Bingo ! Correct Answer");
}else if(uinp === sno + 1 || uinp === sno - 1){
   
   alert("Close Enough");
}else{   
   alert("Wrong Guess ... Try Again");
}
   
}
//Assignment 9_11 task8
function task9_11_8(){
    
  var inp = +prompt("Enter number to check its divisibility with 3");
if( inp % 3 === 0){
  
alert(inp + " is divisible by 3");
}else{
  
  
  alert(inp + " is not divisible by 3");
}
}

// Assignment 9_11 task9
function task9_11_9(){
   var inp = +prompt("Enter Number to check if it is even or odd");
  if( inp % 2 === 0){
     alert(inp + " is an Even Number");
  }else{   
    alert(inp + " is an Odd Number");
  }
     
  }

  // Assignment 9_11 task10
function task9_11_10(){
  var temp = +prompt("Enter Temperature");
 if( temp > 40 ){
    alert("It is too hot outside.");
 }else if( temp > 30){   
   alert("The Weather today is Normal");
 }else if(temp > 20){
  alert("Today’s Weather is cool");
 }else if(temp > 10){
   alert("OMG! Today’s weather is so Cool.")
 }else{

  alert("enter correct temperature...")
 }
    
 }
  
// Assignment 9_11 task11
function task9_11_11(){
  var num1 = +prompt("Enter Number1");
  var num2 = +prompt("Enter Number2");
  var op = prompt("Enter Operation +, -, *, /, %");
  alert(op);
 if( op == '+'){  
  alert("Addition of " + num1 +" + "+ num2 + " is : " + (num1 + num2));
 }if( op == '-'){   
  alert(" Subtraction of " + num1 +" & "+ num2 + " is : " + (num1 - num2));
 }if( op == '*'){
  alert("Multiplication of " + num1 +" * "+ num2 + " is : " + (num1 * num2));
 }if(op == '/'){
  alert("Division of " + num1 +" / "+ num2 + " is : " + (num1 / num2));
 }if( op == '%'){
  alert("Mod of " + num1 +" % "+ num2 + " is : " + (num1 % num2));
 }
}



function task12_13_1(){
    
  var ch = prompt("Enter to check a char");
  
  if(ch>='65' && ch<='91' || ch.toUpperCase())
  {
   alert("Upper case letter");
  }
  else if(ch>='97' && ch<='122'|| ch.toLowerCase())
  {
   alert("Lower case letter");
  }
  else if(ch>='48' && ch<='57')
  {
   alert("Digit");
  }
}

//chapter 12_13 task 2
function task12_13_2(){
    
  var num1 = +prompt("Enter 1st integer");
  var num2 = +prompt("Enter 2nd integer");
  if(num1 > num2){
      
      alert(num1 + " is larger than " + num2);
  }else if(num1 === num2){
      
      alert(num1 + " is equals to " + num2);
      
  }else{
      
  alert(num1 + " is smaller than " + num2);
  }
      
  }
// chapter 12_13 task 3
  function task12_13_3(){
    var num1 = +prompt("Enter 1st integer");
    if(num1 > 0){
        
        alert(num1 + ": Positive number ");
    }else if(num1 === 0){
        
        alert(num1 + ": Zero ");
        
    }else if(num1 < 0){
        
    alert(num1 + ": Negative number");
    }
        }

// chapter 12_13 task 4
function task12_13_4(){
    
var str = prompt("Enter a char to check if its a vowel");
str = str.toLowerCase();
str = str.slice(0,1);
if(str === 'a' || str === 'e' || str =='i' || str=== 'o' || str == 'u'){
alert("True its a vowel");
}else{
  alert("False not Vowel");
}
}

// chapter 12_13 task 5
function task12_13_5(){
    
    
  var cpass = "royalrange";
var upass = prompt("Enter your password");
if(upass === ""){
  
  alert("Please Enter your password");
  
}else if(upass === cpass){
  
  alert("Correct password");
}else{
  
  alert("Imcorrect Password !! Try Again");
}
  
}
// chapter 12_13 task 6
function task12_13_6(){    
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting); //added to display the alert
} //fixed
else{ // fixed
greeting = "Good evening";
alert(greeting);// added to display the alert
} 
}

// chapter 12_13 task 7
function task12_13_7(){    
  var time = +prompt("Enter Time in 24 Hour Format ex --> 1900");
  if (time >= 0000 && time < 1200) {
  greeting = "Good Morning!";
  alert(greeting); 
  } 
  else if(time >= 1200 && time <= 1700){ 
  greeting = "Good AfterNoon!";
  alert(greeting);
  }
  else if(time >= 1700 && time <= 2100){ 
    greeting = "Good Evening!";
    alert(greeting);
    }
    else if(time >= 2100 && time <= 2359){ 
      greeting = "Good Night!";
      alert(greeting);
      } 
  }





//chapter 14_16 task 1
function task14_16_1_2_3_4_5_6(){

//task1 : empty Array to store student Names Using JS literal Notation
  var studentNames = [];

//task2 : empty Array to store student Names Using JS Object Notation
  var studentNames = new Array();
 
  
//task3 :  Declare & Initialize a string Array
  var strArray = ["book","umbrella","color","fruits"];
  alert(strArray);

//task4 : Declare & Initialize a number Array
  var numArray = [1,2,3,4,5,6,7,8,9,10];
  alert(numArray);

//task5 :  Declare & Initialize a Boolean Array
  var boolArray = [true,false,true,true,false];
  alert(boolArray);

//task6 :  Declare & Initialize a Mixed Array
  var mixArray = ["Adeel Khan",1993,true];
  alert(mixArray);
}
//chapter 14_16 task 7
 function task14_16_7(){
  var education = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.","PhD"];
  document.write("Qualifications : <br> <br>")
  for(var i= 1 ; i <= education.length ; i++){
  document.write( i+") "+ education[i-1] +"<br>");
  }
}
 //chapter 14_16 task 8
 function  task14_16_8(){
  var names =["Michael","John","Tony"];
  var score =[320,230,480];
  var total = 500;
  document.write("Score of "+names[0]+ " is "+score[0]+ " Percentage: "+ score[0]/total * 100 + "% <br>");
  document.write("Score of "+names[1]+ " is "+score[1]+ " Percentage: "+ score[1]/total * 100 + "% <br>");
  document.write("Score of "+names[2]+ " is "+score[2]+ " Percentage: "+ score[2]/total * 100 + "% <br>");
}
//chapter 14_16 task 9
function task14_16_9(){
    
  var colorNames = ["red","green", "blue" ,"yellow"];
  document.write("colorNames : " + colorNames);
  document.write("<br>");
  // a add to start 
  var begColor = prompt("what color you want to add in beginning");
  colorNames.unshift(begColor);
  document.write("colorNames with Addition in Beginning :  " + colorNames);
  document.write("<br>");

  //add  one in end;
  var endColor = prompt("what color you want to add in End");
  colorNames.push(endColor);
  document.write("colorNames with Addition in End :  " + colorNames);
  document.write("<br>");

  //c add two in beginning
  var fColor = prompt("what color you want to add in beginning");
  var sColor = prompt("what color you want to add in beginning");
  colorNames.unshift(fColor,sColor);
  document.write("colorNames with Addition in Beginning :  " + colorNames);
  document.write("<br>");
  
  //d delete first from beginning 
  colorNames.shift(begColor);
  document.write("colorNames with one Deletion in Beginning :  " + colorNames);
  document.write("<br>");


   //e delete first from beginning 
   colorNames.pop(endColor);
   document.write("colorNames with one Deletion from End:  " + colorNames);
   document.write("<br>");
   
   //f add at index
   var index = +prompt("on which index u want to put a color?");
   var color = prompt("Which Color you want to add at " + index);
   colorNames.splice(index,0,color);
   document.write("colorName iNsetion at index no :  " + colorNames);
   document.write("<br>");

   //g remove at index
   var index = +prompt("on which index u want to remove a color?");
   var mch = +prompt("How many u want to remove ?");
   colorNames.splice(index, mch);
   document.write("colorName remove at index no :  " + colorNames);
   document.write("<br>");
}
//chapter 14_16 task 10
function task14_16_10(){
  var scores =[320,230,480,120];
  document.write("Scores of Students : "+scores + "<br>");
  scores.sort();
  document.write("Ordered Score of Students : "+scores);
}
//chapter 14_16 task 11
function task14_16_11(){
  var cities = ["karachi","Lahore","islamabad","Queeta","peshawar"];
  document.write("Cities= "+ cities +"<br>");
  var selected = cities.slice(2,4);
  document.write("Selected cities= " +selected);
}
//chapter 14_16 task 12
function task14_16_12(){
  var arr = ["This","is","my","cat"];
  document.write("Array : <br>");
  document.write(arr);
  document.write("<br>");
  arr = arr.join(" ");
  document.write("String : <br>")
  document.write(arr);
}
//chapter 14_16 task 13

function task14_16_13(){
  var arr = [];
  arr.unshift("keyboard");
  arr.unshift("mouse");
  arr.unshift("printer");
  arr.unshift("monitor");
  document.write(" TOTAL ");
  document.write("<br>");
  document.write("Array : " + arr);

  document.write("<br>");
  document.write(" Removal ");
  document.write("<br>");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("keyboard");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("mouse");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("printer");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.shift("monitor");
  document.write("<br>");
}

//chapter 14_16 task 14
function task14_16_14(){
  var arr = [];
  arr.push("keyboard");
  arr.push("mouse");
  arr.push("printer");
  arr.push("monitor");
  document.write(" TOTAL ");
  document.write("<br>");
  document.write("Array : " + arr);

  document.write("<br>");
  document.write(" Removal ");
  document.write("<br>");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("keyboard");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("mouse");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("printer");
  document.write("Array : " + arr);
  document.write("<br>");
  arr.pop("monitor");
  document.write("<br>");
}


//chapter 14_16 task 15
function task14_16_15(){
  var manufactures = [ "Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<select> <option>"+ manufactures[0]+ "</option> <option>"+ 
manufactures[1]+ "</option> <option>"+ manufactures[2]+ 
"</option> <option>"+ manufactures[3]+ "</option> <option>"+ manufactures[4]+
 "</option> <option>"+ manufactures[5]+ "</option> </select>");
}

  



//chapter 17_20 task 1
// task17_20_1_2_3
function task1_2_3(){
    var array = [[],[]];
    
  //task2
    var multi =[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    for(var i=0 ; i < multi.length;i++){      
        document.write(multi[i].join(" ") +"<br>");
    }
    
    
  //task3
    var count = 10;
    for(var i = 1 ; i <=count ; i++){
        document.write(i+"<br>");
    }
  }
  //chapter 17_20 task 4
  function task17_20_4(){
    var num = +prompt("Emter a number to see its multiplication");
    var len = +prompt("Enter length of table");
    for(var i = 1; i <= len; i++){
        
      document.write(num+ " x "+ i + " = "+ num*i + "<br>");
        
    }
  }
  //chapter 17_20 task 5
  function task17_20_5(){
    var fruits = ["apple","banana","mango","orange","strawberry"];
    for(var i = 0 ; i <fruits.length;i++){
        document.write(fruits[i]+ "<br>");   
    }
        document.write("<br>");
    for(var i = 0 ; i <fruits.length;i++){
         document.write("Element at index " +i+ " is "  +fruits[i]+ "<br>");
    }
    }
    
 //chapter 17_20 task 6
  function task17_20_6(){
  //counting
    document.write("Counting: ");
    for(var i = 1 ; i <=15;i++){
      document.write( i+ '\n' );   
    }
  
    //reverse counting
    document.write("<br> Reverse Counting: ");
    for(var i = 10 ; i >= 1;i--){
    document.write( i+ '\n' );   
    }
  
    //Even
    document.write("<br> Even: ");
    for(var i = 0 ; i < 21; i++){

        if( i % 2 === 0){
    document.write( i+ '\n' );  
        } 
    }

    //odd
     document.write("<br> ODD: ");
    for(var i = 0 ; i < 21; i++){
    if( i % 2 !== 0){
        document.write( i+ '\n' );  
            } 
    }

    //Series
    document.write("<br> Series: ");
    for(var i = 2 ; i<21; i++){
        if( i % 2 === 0){
            document.write( i+'k'+'\n' );  
        } 
    } 
 
}

 //chapter 17_20 task 7
function task17_20_7(){
   
    A = ["cake", "apple pie", "cookie", "chips", "patties"];
    var search=prompt("Enter for search in our bakery");
document.write("Array:"+ A +'<br>');

for(i=0 ; i<A.length;i++){

A[i]=A[i].toLowerCase();
search = search.toLowerCase();
    if(A[i]=== search){
        document.write("Found : "+ A[i] + ' at index'+i+ ' in our Bakery <br>');
        break;
      }else if(A[i] !== search){
          document.write("We are sorry " +search +" not found");
          break;
      }

}


}
  
 //chapter 17_20 task 8
 function task17_20_8(){
    A = [24, 53, 78, 91, 12];
  var max =  +Math.max(...A);
  document.write("Array : "+A + '<br>');
    document.write("Largest: " + max);

}


//chapter 17_20 task 9
function task17_20_9(){
    A = [24, 53, 78, 91, 12];
  var min =  +Math.min(...A);
  document.write("Array : "+A + '<br>');
    document.write("Smallest: " + min);
}
  

//chapter 17_20 task 10
function task17_20_10(){
  for(var i = 1; i <= 100;i++){
      if(i%5===0){
      document.write(i + "\n");
      }
  }
}
  
