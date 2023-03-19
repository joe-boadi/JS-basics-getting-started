let message = "";
let hasBlackJack = false;
isAlive = true;
document.getElementById('message-el') = message;
message.textContent = "Let's Go!";

function startGame(){
   if(sum <= 20){
        message = "Do you wish to draw a new card?";

   }else if(sum === 21){
        message = "You got a black Jack!🥳";
        hasBlackJack = true;

   }else{
        message = "You are out!";
        isAlive = false;
   }
   console.log(message);
}