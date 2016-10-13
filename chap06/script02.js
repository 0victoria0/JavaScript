window.onload = initForm;

function initForm() {
	document.getElementById("months").selectedIndex = 0;
	document.getElementById("months").onchange = populateDays;
}

function populateDays() {
	var monthDays = new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var monthStr = this.options[this.selectedIndex].value;
	
	if (monthStr != "") {
		var theMonth = parseInt(monthStr);//将monthStr转换成数字

		//在改变Day菜单时,首先将它的选项长度设置为0,这样会消除以前操作的影响
		document.getElementById("days").options.length = 0;
		for(var i=0; i<monthDays[theMonth]; i++) {
			document.getElementById("days").options[i] = new Option(i+1);
		}
	}
}
