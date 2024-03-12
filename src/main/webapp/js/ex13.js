	const link = document.querySelector("#a");
	
	/*요소명.addEventListener("이벤트명",(전달될값)=>{실행구문});*/
	link.addEventListener("click",(e)=>{
		/*alert("눌렀네");*/
		
		// e.기본값금지 해당이벤트의 기능을 동작하지 마세요.
		e.preventDefault();
		console.log("눌렀네");
	});
	
	const box = document.querySelector("#box");
	
	// 마우스가 범위에 들어왔을때
	box.addEventListener("mouseenter",(e)=>{
		box.style.backgroundColor = "pink";
	});
	// 마우스가 범위를 벗어났을때
	box.addEventListener("mouseleave",(e)=>{
		box.style.backgroundColor = "aqua";
	});
	
	