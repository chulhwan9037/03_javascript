const box = document.querySelector("#box");
	
	// 마우스가 범위에 들어왔을때
	box.addEventListener("mouseenter",(e)=>{
		box.style.backgroundColor = "pink";
	});
	// 마우스가 범위를 벗어났을때
	box.addEventListener("mouseleave",(e)=>{
		box.style.backgroundColor = "aqua";
	});