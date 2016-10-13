window.onload = initForm;
window.onunload = function() {};
/*********************解释onunload******************************/
/*
当窗口卸载时(即关闭窗口活着浏览器转到另一个网址),我们调用一个匿名函数(anonymous function),即没有名称的函数.在这个示例
中,这个函数不但没有名称,而且根本不做任何事情.提供这个函数是因为必须将onunload设置为某种东西,否则,当单击浏览器的back按钮时,
就不会触发onload事件,因为在某些浏览器(firefox和Safari)中页面会被缓存.让onunload执行任何操作,就会使页面不被缓存,
因此当用户后退时,会发生onload事件.
* */

function initForm() {
	document.getElementById("newLocation").selectedIndex = 0;//设置select控件,哪个被选中
	document.getElementById("newLocation").onchange = jumpPage;//菜单发生改变时
}

function jumpPage() {
	var newLoc = document.getElementById("newLocation");//取到select对象
	var newPage = newLoc.options[newLoc.selectedIndex].value;//获取select选中的options控件的值

	if (newPage != "") {
		window.location = newPage; //"script06.html";页面
	}
}
