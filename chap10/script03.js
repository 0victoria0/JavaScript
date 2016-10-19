window.onload = initAll;
var nodeChgArea;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = nodeChanger;
	//HTML页面现在有多个段落,所以不容易跟踪哪些段落可以删除,哪些不可以删除.所以我们建立一个全新的区域.
	nodeChgArea = document.getElementById("modifiable");
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	var newText = document.createTextNode(inText);

	var newGraf = document.createElement("p");
	newGraf.appendChild(newText);

	nodeChgArea.appendChild(newGraf);
}

function delNode() {
	//拿到select标签选中的Index
	var grafChoice = document.getElementById("grafCount").selectedIndex;
	//取到所有modifiable标签下的所有P标签
	var allGrafs = nodeChgArea.getElementsByTagName("p");
	//将要删除的段落存储在oldGraf中
	var oldGraf = allGrafs.item(grafChoice);

	nodeChgArea.removeChild(oldGraf);
}

//更改节点
function nodeChanger()  {
	//操作类型  0-添加节点  1-删除节点   其他-没有有效的操作
	var actionType = -1;
	var pGrafCt = nodeChgArea.getElementsByTagName("p").length;
	//取出name为nodeAction的标签
	var radioButtonSet = document.getElementsByTagName("form")[0].nodeAction;

	//判断是哪种操作类型
	for (var i=0; i<radioButtonSet.length; i++) {
		if (radioButtonSet[i].checked) {
			actionType = i;
		}
	}
	
	switch(actionType) {
		case 0:
			addNode();
			break;
		case 1:
			if (pGrafCt > 0) {
				delNode();
				break;
			}
		default:
			alert("No valid action was chosen");
	}

	document.getElementById("grafCount").options.length = 0;

	//select标签进行赋值
	for (i=0; i<nodeChgArea.getElementsByTagName("p").length; i++) {
		document.getElementById("grafCount").options[i] = new Option(i+1);
	}

	return false;
}
