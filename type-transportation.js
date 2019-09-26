'use strict'
function createGreeting() {
    // input
 var num;
 var greeting;
 var num = prompt('What is the most means of transport you use ? car ,plane ,ship' );
 

 while (num !== 'plane' && num !== 'car' && num !=='ship' )
   num  = prompt('please try plane car  ship');

 // processing:
 if (num =='plane' ) {
   greeting = 'nice! ,be careful dont lose your bag';
 } else if (num == 'ship' ) {
   greeting = 'Wow, you should Watch the weather forecast before any cruise';
 } else if (num == 'car' ) {
   greeting = ' Good ,Dont drive fast ';
 } else {
   greeting = 'I hope it will be comfortable and save for you';
 }
 //output:
 
 return greeting;
}
var showType = function() {
 // input
 var type = prompt('what is favorite transport way for you ?');
 var picture

 while (type !== 'plane' && type !== 'car' && type !=='ship' )
   type = prompt('please try plane ,car , ship');
 
 // processing
 if (type === 'car') {
   picture = '<img src=https://i.pinimg.com/originals/cd/1f/9c/cd1f9cc4fa98b0e122139a1d2a98cc43.png>'
 } else if (type === 'ship') {
   picture = '<img src=https://www.jing.fm/clipimg/detail/13-138241_animated-cruise-ship-transparent-cruise-ship-gif.png>'
 }
 else if (type === 'plane') {
    picture = '<img src= https://cdn5.vectorstock.com/i/1000x1000/22/34/plane-isometric-3d-icon-vector-6732234.jpg>';
  
  }
 // output
 return picture;
}
