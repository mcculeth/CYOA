function SecondPage(){
document.getElementById("JJBA").innerHTML = 
"<h1>Act 1</h1>" +

"<p>You wake up on a beautiful morning in Morioh...</p>" +

"<p>You see the yellow sky gleaming through the window...</p>" +

"<p>You can even hear the faint tune of Morioh's daily morning radio from downstairs...</p>" +

"<p> You have a gut-feeling that today is going to be a great day...</p>" +

"<img id='Main-house' height= 337.5px width= 600px src='Moriohmain.jpg'>" +

"<button id='Continue1' type='button' onclick='ThirdPage()' > Continue </button>";
} 
function ThirdPage(){
document.getElementById("JJBA").innerHTML =
"<h1>Act 1</h1>" +

"<h3> You get dressed and and head on your way to school</h3>" +

"<p>On your way you stumble across a poor boy that just barely doesn't have enough money to get a snack</p>" +

"<img id=\Janken-Kid\ width=397px height=369px src=\Janken.jpg\>" +

"<p>You notice that he looks a little malnourished...</p>" +

"<p>What do you do???</p> <input type='radio' name='Choice' id='Choice1' onclick= 'Page4side1()'> Give him some spare change<br> <input type='radio' name='Choice' id='Choice2' onclick= 'Page4side2()'> Ignore Him <br>";
}
function Page4side1(){
document.getElementById("JJBA").innerHTML = 
"<h1> Act 1 </h1>" +

"<h3>You decided to help him, what a good Samaritan!</h3>" +

"<br>" +

"<button id='Continue2' type='button' onclick='Page5()' > Continue </button>";
}
function Page4side2(){
  document.getElementById("JJBA").innerHTML = 
  "<h1> Act 1 </h1>" +
  
  "<h3>You decided to ignore him, you seem to only be worried about yourself today.</h3>" +
  
  "<br>" +
  
  "<button id='Continue3' type='button' onclick='Page5()' > Continue </button>";
}
function Page5(){
  document.getElementById("JJBA").innerHTML = 
  "<h1> Act 2 </h1>" +
  
  "<h2> You begin to have a slight feel of hunger and you decide to grab a bite...</h2>" +

  "<img id='PearlJam' width= '514px' height= '288px' src='FoodResturant.jpg'>" +

 "<p>What would you like to order??</p>" +
 
 "<p>(You're a little low on the yen so you must only choose 1)</p>" +

  "<input type='checkbox' id='Spaghetti' onclick='Page5side1()'> Spaghetti <br> <input type='checkbox' id='Sandwich' onclick='Page5side2()'> Sandwich <br> <input type='checkbox' id='Jouskemom' onclick='Page5side3()'> Jouske Mom <br>";
}
function Page5side1(){
  document.getElementById("JJBA").innerHTML = "<h3>Act 2</h3>";
}
function Page5side2(){
  document.getElementById("JJBA").innerHTML  = 
  
  "<h1>Act 2</h1>" +

  "<h2> You see the most perfect sandwich and you're salivating at a standstill.</h2>" +

  "<img id='Sandwich' src='Sandwich.png'>" +

  "<h1> Are you sure you want it??? </h1>" +

  "<input type='radio' name='Choic2' id='Choice3' onclick= 'Page5side2partA()'> Yes <br> <input type='radio' name='Choice2' id='Choice4' onclick= 'Page5side2partB()'> No <br>";


}
function Part5side2partA(){
  document.getElementById("JJBA").innerHTML = 
  
  "<h1>Act 2</h1>" +

  "<h2>A mysterious man grabs the sandwich...</h2><p>\"How dare you try to steal my beloved wife's lunch?\"</p>" +

  "<button id='Continue6' type='button' onclick='End1()' > Run!!! </button>";
}
function Part5side2partB(){
  document.getElementById("JJBA").innerHTML = 
  "<h1>Act 2</h1>" +
  
  "<h2>You realized that you don't want to be late for the first day of highschool...</h2>" +

  "<h2>So you continue your journey!!!</h2>";
}
function Page5side3(){
  document.getElementById("JJBA").innerHTML = 
  "<h1>Act 2</h1>" +
  
  "<h2>She hears your voice as if she's right next to you, you set Ms. Tomoko into a whole mess, you need to get out of there!!</h2>" +

  "<img id='Tomoko' weight='640px' height= '360px' src='Tomoko.jpg'>" +

  "<br>" +

  "<button id='Continue5' type='button' onclick='Page5side3partA()' > Run!!! </button>";    
}
function Page5side3partA(){
  document.getElementById("JJBA").innerHTML = 
  "<h1>Act 2</h1>" +
  
  "<h2> Running away won't help you this time</h2>" +

  "<img id='End2' weight= '640px' height='360' src='Rohan_punched.png'>" +

  "<br>"+

  "<button id='StartOver2' type='button' onclick='SecondPage()' > Start Over </button>";

}
function Page6(){
  document.getElementById("JJBA").innerHTML = 
  "<h1>You decided to ignore him, you seem to only be worried about yourself today.</h1>";
}


function End1(){
  document.getElementById("JJBA").innerHTML = 
  "<h3>You thought you could run away but Kira has already planted his bomb on you</p>" +

  "<img id='End1' src='End.jpg'>" +

  "<button id='StartOver1' type='button' onclick='SecondPage()' > Start Over </button>";
}