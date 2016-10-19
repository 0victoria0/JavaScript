if (typeof document.oncontextmenu == "object") {//检查浏览器 是否是Firefox
	//如果不是Firefox,检查浏览器是否是IE
	if (document.all) {
		//检查结果为IE浏览器
		document.onmousedown = captureMousedown;
	}
	else {
		//检查结果为Safari
		document.oncontextmenu = captureMousedown;
	}
}
else {
	//检查结果为Firefox
	window.oncontextmenu = captureMousedown;
}

function captureMousedown(evt) {
	//Safari和Netscape在触发事件时会自动地生成和传递evt参数,这个变量包含关于事件的信息.
	if (evt) {
		//通过evt来判断用户点击的是哪个按钮.
		var mouseClick = evt.which;
	}
	else {
		//用户使用IE,用户操作的结果会在window.event.button中找到
		var mouseClick = window.event.button;
	}
	
	if (mouseClick==1 || mouseClick==2 || mouseClick==3) {
		//像用户指出这个功能已经禁用了,并且返回false.返回false会阻止显示菜单窗口.
		alert("Menu Disabled");
		return false;
	}
}
