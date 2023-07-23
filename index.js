let initialscore=100
let highscore=null;
let randomnumber = generateRandomInteger(100);
function restartgame(){
    document.querySelector('.score').textContent=100
    document.getElementById('inputNumber').value=""
    document.querySelector('#textChange').textContent="Start guessing..."
    document.querySelector('.number').textContent="?"
    document.body.style.backgroundImage="url(./background_img.jpg)"
    document.querySelector('.number').style.height="48px"
    randomnumber = generateRandomInteger(100)
}

function generateRandomInteger(max) {
    return Math.floor(Math.random() * 100) + 1;
}
  
    
  
  function InputNumber(){
          
      let inputnumber= document.querySelector('#inputNumber').value

      if(initialscore!==0){
          if(inputnumber>randomnumber ){
          document.querySelector('.message').textContent="Your Guess Is High"
          initialscore--
          document.querySelector('.score').textContent=initialscore
      }
      else if(inputnumber<randomnumber){
          document.querySelector('.message').textContent="Your Guess Is Low"
          initialscore--
          document.querySelector('.score').textContent=initialscorehh
      }
      else{
          document.querySelector('.score').textContent=initialscore
          document.querySelector('.number').textContent=randomnumber;
          document.querySelector('.highscore').textContent=highscore
          document.querySelector('.check').style.visibility="hidden" 
          document.querySelector('.message').textContent=" Hurray You Won "
          document.body.style.backgroundImage= "url(./win_change.jpg)"
            initialscore--
          document.querySelector('.number').style.height="10rem"
          highscore=initialscore
   
      }
    } 
    else {
        document.querySelector('.message').textContent="Game Over your score is 0"
        
    }
       
}