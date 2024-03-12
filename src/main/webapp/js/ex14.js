	
	const btn1 = document.querySelector("#btn1");
	const btn2 = document.querySelector("#btn2");
	const btn3 = document.querySelector("#btn3");
	
	btn1.addEventListener("click",(e)=>{
		result.style.backgroundColor = "green";
	});
	btn2.addEventListener("click",(e)=>{
		result.style.backgroundColor = "orange";
	});
	btn3.addEventListener("click",(e)=>{
		result.style.backgroundColor = "purple";
	});
	
	function changBg(color){
		result.style.backgroundColor=color;
	}
	