window.onresize = resizeFix;

/*我们只希望对使用Netscape4.x的用户执行以下代码,而这种测试是检查Netscape4.x浏览器的最简单的方法.document.layers对象
只在这种浏览器中存在*/
if (document.layers) {
	var origWidth = window.innerWidth;
	var origHeight = window.innerHeight;
}

function resizeFix() {
	if (document.layers) {
		if (window.innerWidth != origWidth || window.innerHeight != origHeight) {
			window.location.reload();
		}
	}
}
