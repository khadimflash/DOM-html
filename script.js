let btnplus=document.querySelector('button.quantitéplus');
let btnmoin=document.querySelector('button.quantitémoin');
let supbtn=document.querySelectorAll('button.sup');

var btnplus2=document.getElementById("plus");
var btnmoin2=document.getElementById("moins");
btnplus2.addEventListener("click",increaseQuantity2);
btnmoin2.addEventListener("click",decreasQuantity3);
function increaseQuantity2(){
  document.getElementById("qty2").value =parseInt( document.getElementById("qty2").value) + 1;

  subtotal2();
  total();
   }
   function decreasQuantity3(){
    if(document.getElementById("qty2").value >0){
      parseInt(document.getElementById("qty2").value)  -= 1;
      subtotal2();
      total()
    }
   }
   
 function subtotal2(){
  let price=parseInt(document.getElementById("prx").innerHTML);
  let qty=parseInt(document.getElementById("qty2").value);
  let sub = price*qty;
  document.querySelector('p.prix3').innerHTML=`${sub} fr `;
  
 }
 

console.log(supbtn);
console.log(btnplus);
console.log(btnmoin);


for(value of supbtn){
  value.addEventListener('click',remove)
}
console.log(supbtn)
btnplus.addEventListener('click', increaseQuantity);
btnmoin.addEventListener('click', decreaseQuantity);


 function increaseQuantity(){
document.querySelector(".qty").value += 1;
subtotal();
total();

 }
 function decreaseQuantity(){
  if(document.querySelector('.qty').value >0){
    document.querySelector('.qty').value =parseInt(document.querySelector('.qty').value) -1;
    subtotal();
    total();
  }else{
    return alert('ya pas d\'article infieur a 0')
  }
 
 }


 function subtotal(){
  let price=parseInt(document.querySelector('p.prix').innerHTML);
  let qty=parseInt(document.querySelector('.qty').value);
  let sub = price*qty;
  document.querySelector('p.prix2').innerHTML=`${sub} fr `;
  
 }
 function total(){
  let stotal=parseInt(document.querySelector('p.prix2').innerHTML);
 let stotal2=parseInt(document.querySelector('p.prix3').innerHTML);
    document.querySelector('#ipt').value= stotal +stotal2 +" " +'fr' ;
 }
 function remove(){
  let parent= document.querySelector(".body");
  let childs=document.querySelector(".secondline");
  parent.removeChild(childs);
 
 }

 //boutton like....................................;
 var like=document.getElementById("btns1");
  like.addEventListener('click',aimer)
 function aimer(){
if(like.style.color =="red"){
  like.style.color ="grey"
}else{
 like.firstElementChild.setAttribute("class","fa-solid fa-heart");
 
  like.style.color ="red"
}
  
}
//...................................................

var like2=document.getElementById("btns2");
like2.addEventListener("click",aime2)
function aime2(){
  if(like2.style.color =="red"){
    like2.style.color ="grey"
  }else{
    like2.firstElementChild.setAttribute("class","fa-solid fa-heart");
    like2.style.color ="red"
  }
}