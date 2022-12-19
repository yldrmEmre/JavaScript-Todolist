const input =document.querySelector("#task");
const liste=document.querySelector("#list");
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')


function newElement(){
    
    if(input.value.trim() ==  "" ){
       Toast(false)
        
      }
    

else{
   listcreate()
   Toast(true)
    
    
}

function listcreate(){
  let li=document.createElement("li");
  li.classList.add("eleman", "list-group-item", "d-flex", "justify-content-between", "align-items-center")
  li.innerHTML=`${input.value}`;
  li.addEventListener("click",function c(){li.style.backgroundColor="Green"})
  let span =document.createElement("span")
  span.classList.add("remove");
  span.className = "close";
  span.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
</svg>`;

  span.onclick=function rmvli(){
      span.parentElement.remove()
  };
  
  li.appendChild(span);
  liste.prepend(li);
 
}


}
function Toast(sonuc) {
  if (sonuc == false) {
      $(".error").toast("show");
  }
  else {
      $(".success").toast("show");
      

  }

}
