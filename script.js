var ind2017 = [0.89,0.52,0.20,0.47,0.10, -0.72];
var ind2018 = [-1.08,-0.49,0.89,1.52,0.70,0.51];
var mes = ['Dezembro','Novembro','Outubro','Setembro','Agosto','Julho'];
var dif = [];
function Dados(){
    for(var i=0; i< mes.length; i++){
        calcular();
         document.getElementById("tbody").innerHTML += "<tr><td>"+mes[i]+"</td><td>"+ind2018[i]+"</td><td>"+ind2017[i]+"</td><td id=dife style=color:MediumSeaGreen;>"+dif[i]+"</td>"; 
        cor();     
    }
    
};

function calcular(){ 
    for(var i=0; i < ind2018.length ; i++){
		    var n1 = ind2018[i];
		    var n2 = ind2017[i];
		    var dif = (n1)-(n2);
		    var resut= dif / n1;
        var result = resut *100;
        this.dif.push((parseFloat(result).toFixed(2))); 
    }    
};

function cor(){
    for (var i=0; i< ind2018.length; i++){
      if (ind2018[i] < 0.0){
      dif[i] = document.getElementById("dife").style.color = "#FF0000";
      }
    }     
  
};