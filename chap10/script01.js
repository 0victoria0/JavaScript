window.onload = initAll;

function initAll() {
	document.getElementsByTagName("form")[0].onsubmit = addNode;
}

function addNode() {
	var inText = document.getElementById("textArea").value;
	//创建一个text节点
	var newText = document.createTextNode(inText);

	//创建一个P节点
	var newGraf = document.createElement("p");
	//将文本添加到新段落中   将文本节点放进段落中
	newGraf.appendChild(newText);

	var docBody = document.getElementsByTagName("body")[0];
	docBody.appendChild(newGraf);
	
	return false;
}

/*提示
1.既然对innerHTML进行简单对赋值就可以实现同样对效果,那为什么要这么费事(创建文本节点,创建元素节点并且追加子节点)呢?
	原因一:利用这种方式,就不可能导致页面无效.例如,添加的每个P或div标签会自动结束.
	原因二:如果使用innerHTML,就非常容易形成无效的标签(简直太容易了).一旦发生这种情况,页面的DOM就很难处理了.例如,
		如果一个元素有开始标签,而没有结束标签,那么就无法读取这个元素的内容了.
段落本身不能再包含段落.如果你试图传入多个用空行分隔的句子,,这段代码将把他们合并成一个大段,而不是分析解析每一段.
* */
