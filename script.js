let inp = document.querySelector("input");
let no = document.querySelector("#no");
let h1=document.querySelector("h1");

const Limit=20;

inp.addEventListener("input", () => {
   if(Limit-inp.value.length<0){
    h1.firstChild.textContent=`Character exceeded : `;
    no.style.color="red";
    no.textContent=`${Math.abs(Limit-inp.value.length)}`;
}
else{
    h1.firstChild.textContent=`Character left : `;
    no.style.color="blue";
    no.textContent=`${Math.abs(Limit-inp.value.length)}`
   }

});
