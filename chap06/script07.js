window.onload = initForms;

function initForms() {
	for (var i=0; i< document.forms.length; i++) {
		document.forms[i].onsubmit = validForm;
	}
}

function validForm() {
	var allGood = true;
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (!validTag(allTags[i])) {
			allGood = false;
		}
	}
	return allGood;

	function validTag(thisTag) {
		var outClass = "";
		var allClasses = thisTag.className.split(" ");
	
		for (var j=0; j<allClasses.length; j++) {
			outClass += validBasedOnClass(allClasses[j]) + " ";
		}
	
		thisTag.className = outClass;
	
		if (outClass.indexOf("invalid") > -1) {
			invalidLabel(thisTag.parentNode);
			thisTag.focus();
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
				case "radio":
					if (allGood && !radioPicked(thisTag.name)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
					break;
				case "isNum":
				case "isZip":
				case "email":
					classBack += thisClass;
					break;
				default:
					if (allGood && !crossCheck(thisTag,thisClass)) {
						classBack = "invalid ";
					}
					classBack += thisClass;
			}
			return classBack;
		}
				
		function crossCheck(inTag,otherFieldID) {
			if (!document.getElementById(otherFieldID)) {
				return false;
			}
			return (inTag.value != "" || document.getElementById(otherFieldID).value != "");
		}

		/*radio是按钮组的名称 <input>标签的name属性使HTML知道哪些单选按钮分组在一起.也就是说所有相同name属性的
		<input>标签都属于同一个单选按钮组*/
		function radioPicked(radioName) {
			var radioSet = "";//变量初始化

			for (var k=0; k<document.forms.length; k++) {
				if (!radioSet) {
					radioSet = document.forms[k][radioName];
				}
			}
			if (!radioSet) {
				return false;
			}
			for (k=0; k<radioSet.length; k++) {
				alert(radioSet.length);
				if (radioSet[k].checked) {
					return true;
				}
			}
			return false;
		}
		
		function invalidLabel(parentTag) {
			if (parentTag.nodeName == "LABEL") {
				parentTag.className += " invalid";
			}
		}
	}
}
