var randomNumber1 = Math.random();
randomNumber1 *=6;
randomNumber1 +=1;
randomNumber1 =Math.floor(randomNumber1);

var randomNumber2 = Math.random();
randomNumber2 *=6;
randomNumber2 +=1;
randomNumber2 =Math.floor(randomNumber2);




if(randomNumber1>randomNumber2){
  document.querySelector('.winner').innerHTML = "Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector('.winner').innerHTML = "Player 2 wins!";
}
else if(randomNumber1==randomNumber2){
  document.querySelector('.winner').innerHTML = "Draw!";
}

/********************************************************* image 1 *************************************************/
if(randomNumber1==1){
  document.querySelector(".img1").src = "dice1.png";
}
else if(randomNumber1==2){
  document.querySelector(".img1").src = "dice2.png";
}
else if(randomNumber1==3){
  document.querySelector(".img1").src = "dice3.png";
}
else if(randomNumber1==4){
  document.querySelector(".img1").src = "dice4.png";
}
else if(randomNumber1==5){
  document.querySelector(".img1").src = "dice5.png";
}
else if(randomNumber1==6){
  document.querySelector(".img1").src = "dice6.png";
}
/********************************************************* image 2 *************************************************/
if(randomNumber2==1){
  document.querySelector(".img2").src = "dice1.png";
}
else if(randomNumber2==2){
  document.querySelector(".img2").src = "dice2.png";
}
else if(randomNumber2==3){
  document.querySelector(".img2").src = "dice3.png";
}
else if(randomNumber2==4){
  document.querySelector(".img2").src = "dice4.png";
}
else if(randomNumber2==5){
  document.querySelector(".img2").src = "dice5.png";
}
else if(randomNumber2==6){
  document.querySelector(".img2").src = "dice6.png";
}
