/*function showDetail(){
	document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
}
function hideDetail(){
	document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
}
*/

const open1 = document.querySelector("#open");
open1.addEventListener("click",(e)=>{
document.querySelector("#desc").style.display="block";
	document.querySelector("#open").style.display="none";
});
const close1 = document.querySelector("#close");
close1.addEventListener("click",(e)=>{
document.querySelector("#desc").style.display="none";
	document.querySelector("#open").style.display="block";
});

const plus = document.querySelector("#btnPlus");
plus.addEventListener("click",()=>{
	document.querySelector("#res").innerHTML++;
	/*document.querySelector("#res").innerHTML;
	k++;
	document.querySelector("#res").innerHTML = k ;*/
});
const minus = document.querySelector("#btnMinus");
minus.addEventListener("click",()=>{
	document.querySelector("#res").innerHTML--;
});




















