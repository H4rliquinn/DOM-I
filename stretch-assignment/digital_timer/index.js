
let secondTensClock=document.querySelector('#secondTens');
let secondOnesClock=document.querySelector('#secondOnes');
let msTensClock=document.querySelector('#msTens');
let msHundredsClock=document.querySelector('#msHundreds');
let colon=document.querySelector('#colon');
let countMax=10;

function updateClock(secondTens,secondOnes,msTens,msHundreds){
    secondTensClock.textContent=secondTens;
    secondOnesClock.textContent=secondOnes;
    msHundredsClock.textContent=msHundreds;
    msTensClock.textContent=msTens;
};

function startClock(secondTens,secondOnes,msTens,msHundreds){
     secondTens=secondTens;
     secondOnes=secondOnes;
     msHundreds=msHundreds;
     msTens=msTens;

  
    setTimeout(function(){
      // console.log(secondTens,secondOnes,msTens,msHundreds);    
      if (msHundreds=="-"){msHundreds=0;};     
      if (msHundreds==9){
        msHundreds=0;
        if (msTens=="-"){msTens=0;};
        if (msTens==9){
         msTens=0;
         if (secondOnes=="-"){secondOnes=0;};
         if (secondOnes==9){
            secondTens=1;
            secondOnes=0;
         }else{
            secondOnes=parseInt(secondOnes)+1;
         }
        }else{
          msTens=parseInt(msTens)+1
        }
      } else {
        msHundreds=parseInt(msHundreds)+1
      }
      updateClock(secondTens,secondOnes,msTens,msHundreds);
      // console.log(secondTens,secondOnes,msTens,msHundreds);
      if (parseInt(secondTens)==1){
          // console.log(msTensClock); 
        secondTensClock.classList.add("redDigit");
        secondOnesClock.classList.add("redDigit");
        msTensClock.classList.add("redDigit");
        msHundredsClock.classList.add("redDigit");
        colon.classList.add("redDigit");
      }else{
           startClock(secondTens,secondOnes,msTens,msHundreds);     
      }
    }
    ,10);
};
  
startClock(secondTensClock.textContent,secondOnesClock.textContent,msTensClock.textContent,msHundredsClock.textContent);

// console.log(x);  
