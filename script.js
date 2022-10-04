'use strict';

let secretNumber =Math.trunc(Math.random()*20+1);
let score =20;
let highScore=0;
const displayMassage= function(message){
    document.querySelector('.message').textContent= message;
}
console.log(secretNumber);

document.querySelector('.check').addEventListener('click',function(){
   const guess= Number( document.querySelector('.guess').value);
   console.log(guess)

   if (!guess) {
    displayMassage('Sayı Giriniz!')
   }else if(guess===secretNumber) {
        displayMassage('Doğru Sayı👍!')
         document.querySelector('.number').textContent=secretNumber;
         document.querySelector('body').style.backgroundColor='#60b347';
         document.querySelector('.number').style.width='30rem';
         
         if (score>highScore) {
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
         }

   }
   else if (guess!==secretNumber){
    displayMassage(guess > secretNumber ? 'Çok Yüksek 🤔' :'Çok Alçak 🤔'  );
    score--;
    document.querySelector('.score').textContent =score;
    if (score===0) {
        document.querySelector('.score').textContent =score+'\tKaybettiniz';
        
    }
 }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretNumber= Math.trunc(Math.random()*20)+1;
    console.log(secretNumber);
    displayMassage('Numarayı Tahmin Et!')
    document.querySelector('.score').textContent =score;
    document.querySelector('.number').textContent ='?';
    document.querySelector('.guess').value ='';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})
