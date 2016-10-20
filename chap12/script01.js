window.onload = initAll;

function initAll() {
	var allLinks = document.getElementsByTagName("a");

	for (var i=0; i<allLinks.length; i++) {
		if (allLinks[i].className.indexOf("menuLink") > -1) {
			allLinks[i].onclick = toggleMenu;
		}
	}
}

function toggleMenu() {
	/*stringObject.lastIndexOf(searchvalue,fromindex) 该方法将从尾到头地检索字符串 stringObject，
	看它是否含有子串 searchvalue。开始检索的位置在字符串的 fromindex 处或字符串的结尾（没有指定 fromindex 时）。
	如果找到一个 searchvalue，则返回 searchvalue 的第一个字符在 stringObject 中的位置。stringObject 中的字符位置
	是从 0 开始的。*/
	var startMenu = this.href.lastIndexOf("/")+1;
	var stopMenu = this.href.lastIndexOf(".");
	//substring截取字符串
	var thisMenuName = this.href.substring(startMenu,stopMenu);

	var thisMenu = document.getElementById(thisMenuName).style;
	if (thisMenu.display == "block") {	
		thisMenu.display = "none";
	}
	else {
		thisMenu.display = "block";
	}

	return false;
}
