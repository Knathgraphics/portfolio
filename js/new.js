
class Counter{
    constructor(){
       
    }
    Count(id,plus){
        var ElementText = document.getElementById(id);
        var Start = 1;
        var Speed = +document.getElementById(id).getAttribute('data-speed');
        var Target = +document.getElementById(id).getAttribute('data-target');
        
        function Out (){
          ElementText.innerText = Start++;
          if(plus != ""){
            ElementText.innerText += plus;
          }

          if(plus == ""){
            ElementText.innerText += plus;
          }
          if(Start == Target + 1){
            var clear = clearInterval(Interval);
          }
        }
        var Interval = setInterval(Out,Speed)
        
        }
    
    
}

