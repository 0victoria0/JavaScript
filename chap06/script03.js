window.onload = initForms;

function initForms() {
	for (var i=0; i< document.forms.length; i++) {
		/*onsubmit组织表单提交事件,当onsubmit程序返回false值时,表单就不会被 会收到表单cai传回服务器,
		只有返回true值时,服务器才会收到表单*/
		document.forms[i].onsubmit = validForm;
	}
}

//阻止表单提交处理事件
function validForm() {
	var allGood = true;
	//星号让JavaScript返回一个包含页面上所有有标签的数组.然后,就可以遍历allTags数组来寻找感兴趣的标签.
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		//检查每个标签是否有什么东西阻止表单提交这个页面
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		//split函数会按照传递给它的字符串,将字符串分割为数组.这面的分割字符串的是一个空格
		//检查每个class属性,如果class的属性值里包含值reqd(名称自定的意义,不是JS的),则表示必须包含某些值.
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		thisTag.className = outClass;//覆盖当前的class属性.

		/*在新的class属性中可能返回的值之一就是单词invalid,所以要检查他啊.如果在新的class中找到了invalid,就说明有问题
		要执行相应的操作*/
		if (outClass.indexOf("invalid") > -1) {
			thisTag.focus();//将焦点放在这个标签,让用户知道哪里有问题
			//查看当前标签是否是<input>标签,是的话,就选择它的值
			if (thisTag.nodeName == "INPUT") {
				thisTag.select();
			}
			return false;
		}
		return true;
		
		function validBasedOnClass(thisClass) {
			var classBack = "";
		
			switch(thisClass) {
				case "":
				case "invalid":
					break;
				case "reqd":
					if (allGood && thisTag.value == "") {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				default:
					classBack += thisClass;
			}
			return classBack;
		}
	}
}
