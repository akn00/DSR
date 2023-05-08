// document.getElementById("celcius").oninput=function(){celciusFunction()};
// document.getElementById("kelvin").oninput=function(){kelvinFunction()};

// function celciusFunction(){

//     let c= document.getElementById("celcius").value;
//     let k=c+273.15;
//     document.getElementById("kelvin")[0].value=k;
   
// };

// function kelvinFunction(){
//     let k= document.getElementById("kelvin").value;
//     let c=k-273.15;
//     document.getElementById("celcius")[0].value=c;
    
// };


document.getElementById("celcius").oninput = function() {
    celciusFunction();
  };
  
  document.getElementById("kelvin").oninput = function() {
    kelvinFunction();
  };
  
  document.getElementById("fahrenheit").oninput = function() {
    fahrenheitFunction();
  };
  
  function celciusFunction() {
    
    let c = parseFloat(document.getElementById("celcius").value);
    if(isNaN(c)){
        document.getElementById("kelvin").value = "";
    document.getElementById("fahrenheit").value = "";
    }
    
    else{let k = c + 273.15;
    let f = c * 9/5 + 32;
    document.getElementById("kelvin").value = k.toFixed(2);
    document.getElementById("fahrenheit").value = f.toFixed(2);}
  }
  
  function kelvinFunction() {
    let k = parseFloat(document.getElementById("kelvin").value);
    if(isNaN(k)){
        document.getElementById("celcius").value = "";
    document.getElementById("fahrenheit").value = "";
    }
    
    else{let c = k - 273.15;
    let f = c * 9/5 + 32;
    document.getElementById("celcius").value = c.toFixed(2);
    document.getElementById("fahrenheit").value = f.toFixed(2);}
  }
  
  function fahrenheitFunction() {
    let f = parseFloat(document.getElementById("fahrenheit").value);
    if(isNaN(f)){
        document.getElementById("celcius").value = "";
    document.getElementById("kelvin").value = "";
    }

    else{let c = (f - 32) * 5/9;
    let k = c + 273.15;
    document.getElementById("celcius").value = c.toFixed(2);
    document.getElementById("kelvin").value = k.toFixed(2);}
  }
  

