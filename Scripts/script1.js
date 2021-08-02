function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
    while (true){

    
    
      for (let i = 0; i <4; i++) {
       
        
    //alert(i);
    switch (i) {
      
        case 0:
            
            document.getElementById('_1').checked = true;
            await sleep(4000);
            break;
        case 1:
           
            document.getElementById('_2').checked = true;
            await sleep(4000);
               break;
        case 2:
            
            document.getElementById('_3').checked = true;
            await sleep(4000);
                break;
        case 3:
            
            document.getElementById('_4').checked = true;
            await sleep(4000);
                break;
        
    }
  }
  }
  // Sleep in loop
  


}

demo();

//Validaciones

//document.getElementById("imgmedia").style.opacity = "1";
function validarImg(){


//  Precios en formulario
var valores = {
basica:10,
media:20,
alta: 40,
comida:10
};


var valorComida = document.getElementById("Comida").checked;


var valor = document.getElementById("basica").checked;
if (valor == true){

  document.getElementById("imgbasicaDuo").style.opacity = "1";
  document.getElementById("imgbasica").style.opacity = "0";
  document.getElementById("imgmedia").style.opacity = "0";
  precio(valor, valorComida,valores.basica,valores.comida );

}
var valor2 = document.getElementById("media").checked;
if (valor2 == true){
 
  document.getElementById("imgbasicaDuo").style.opacity = "0";
  document.getElementById("imgbasica").style.opacity = "1";
  document.getElementById("imgmedia").style.opacity = "0";
  precio(valor2, valorComida,valores.media,valores.comida );
}
var valor3 = document.getElementById("alta").checked;
if (valor3 == true){

  document.getElementById("imgbasicaDuo").style.opacity = "0";
  document.getElementById("imgbasica").style.opacity = "0";
  document.getElementById("imgmedia").style.opacity = "1";
  precio(valor3, valorComida,valores.alta,valores.comida );
}
}
validarImg()



function precio(thabitacion,comida, valorH, valorC) {
var total;


var Npersona= document.getElementById("npersona").value;



if(thabitacion && comida){
  
  total=(parseFloat(valorH) + parseFloat(valorC))* parseFloat(Npersona);
  
}else if(thabitacion && comida==false){
  total=parseFloat(valorH) * parseFloat(Npersona)
  
}

document.getElementById("precio").innerHTML = "$"+ total ;


}