"use strict";
//Arzu Guliyev Code Academy 2019

// We have to get lamp elements and set into the variables.
// We have 2 type lamps, on and off. on lamp's default class is d-none but off lamp's is 
// default values is display block.

//   on lamps  
let on_1 = document.getElementById('on1'),
on_2 = document.getElementById('on2'),
on_3 = document.getElementById('on3'),
on_4 = document.getElementById('on4'),

//   of lamps
off_1 = document.getElementById('off1'),
off_2 = document.getElementById('off2'),
off_3 = document.getElementById('off3'),
off_4 = document.getElementById('off4');



function load()
{
    //We have to get energy value from input and set into the a variable
    //this variable is loadValue.
    //load is our load bar. We'll change load's style related to loadValue
    //Because if loadValue is 60% load's witdh must be 60%
    //load Percent is span.  We'll print loadValue with it
    //We are adding percent symbol to last loadValuePrint cause we enter input example(40)
    //but style value must be px ol %.
    //checkEenerjy If loadValue little from 0 or big from 100, give to us error
    //onLamps add d-none to off lamps and remove d-none from onLamps
    //offLamps add d-none to on lamps and remove d-none from off lamps
    let loadValue = document.getElementById('load-value').value,
        load = document.getElementById('load'),
        loadPercent = document.getElementById('loadPercent'),
        loadValuePrint = loadValue;
        loadValuePrint += '%'; 
        checkEnerjy(loadValue, load, loadValuePrint, loadPercent);
        onLamps(loadValue);
        offLamps(loadValue);
    
      
    }

function checkEnerjy(loadValue, load, loadValuePrint, loadPercent)
{ 
  if(loadValue < 0  || loadValue > 100)
  {
      alert('ERROR');
  }
  else
  {
      load.style.width = loadValuePrint;
      loadPercent.innerHTML = loadValuePrint;
  }
}

function onLamps(loadValue)
{
  if(loadValue > 0 && loadValue <=25)
  {
    // on the lamps  
    off_1.classList.add('d-none');  
    on_1.classList.remove('d-none');

  
  }
  else if( loadValue >25 && loadValue<=50)
  {
    off_1.classList.add('d-none');  
    on_1.classList.remove('d-none');  
    off_2.classList.add('d-none');  
    on_2.classList.remove('d-none');  
  }
  else if(loadValue > 50 && loadValue <= 75)
  {
    off_1.classList.add('d-none');  
    on_1.classList.remove('d-none');  
    off_2.classList.add('d-none');  
    on_2.classList.remove('d-none');
    off_3.classList.add('d-none');
    on_3.classList.remove('d-none');     
  }
  else if(loadValue > 75 && loadValue <= 100)
  {
    off_1.classList.add('d-none');  
    on_1.classList.remove('d-none');  
    off_2.classList.add('d-none');  
    on_2.classList.remove('d-none');
    off_3.classList.add('d-none');
    on_3.classList.remove('d-none');
    off_4.classList.add('d-none');
    on_4.classList.remove('d-none');     
  }          
}





function offLamps(loadValue)
{
  if(loadValue==0)
  {
    // on the lamps  
    off_1.classList.remove('d-none');  
    on_1.classList.add('d-none');  
    off_2.classList.remove('d-none');  
    on_2.classList.add('d-none');
    off_3.classList.remove('d-none');
    on_3.classList.add('d-none');
    off_4.classList.remove('d-none');
    on_4.classList.add('d-none');

  
  }
  else if(loadValue >0 && loadValue<=25)
  {
    off_2.classList.remove('d-none');  
    on_2.classList.add('d-none');
    off_3.classList.remove('d-none');
    on_3.classList.add('d-none');
    off_4.classList.remove('d-none');
    on_4.classList.add('d-none');
  }
  else if(loadValue > 25 && loadValue <= 50)
  {
    off_3.classList.remove('d-none');
    on_3.classList.add('d-none');
    off_4.classList.remove('d-none');
    on_4.classList.add('d-none');  
  }
  else if(loadValue > 50 && loadValue <= 75)
  {
    off_4.classList.remove('d-none');
    on_4.classList.add('d-none');    
  }          
}

