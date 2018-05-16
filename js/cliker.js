var coins = 0;

var inventario = [0,0,0];
var coinsproduce = [1,5,10];
var precioproducto = [100,500,1500];

function clic(){
  coins++;
}


function comprar(objeto){

  if(coins >= precioproducto[objeto]){
  inventario[objeto]++;
  coins -= precioproducto[objeto];
  }
  else {
    alert("NO TIENES DINERO !!");
  }
}

function producir(){
  for(contador=0; contador<inventario.length; contador++){
    coins += inventario[contador] * coinsproduce[contador]
  }
}


function render(){
  document.getElementById("contador").innerHTML = coins;
  document.getElementById("inventario").innerHTML =
        `Minero: ${inventario[0]} // 1 por segundo <br>
         Buzo: ${inventario[1]} // 5 por segundo <br>
         Maquina: ${inventario[2]} // 10 por segundo <br>
  `;
}

function mostrar(){
document.getElementsByClassName('minerooculto').style.display = 'block';
}




var FPSproduce = 1;

setInterval(function(){
  producir();
},1000/FPSproduce);

var FPS = 30;

setInterval(function(){
  render();
},1000/FPS);
