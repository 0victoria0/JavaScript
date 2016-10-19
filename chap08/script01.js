//使用新的addOnload()函数设置多重onload属性,解决加载页面时需要进行多个操作
//在这个例子中,在首次加载页面时,我们希望发生完全不同的三种情况.设置window.onload三次是不行的,因为第二次会覆盖第一次

addOnload(initOne);
addOnload(initThree);
addOnload(initTwo);

//参数newFunction,在触发onload事件时希望运行的函数的名称.
function addOnload(newFunction) {
	//如果已经设置了window.onload,就将它的值存储在这里.如果还没有设置,这一行也没什么坏处.
	var oldOnload = window.onload;

	//检查oldOnload变量的类型.如果已经设置了window.onload,那么他就应该是一个函数调用(否则,就是空的)
	//下面这段代码重新设置window.onload的值来完成两种操作:它之前所做的操作以及参数中传递的新函数
	if (typeof oldOnload == "function") {
		window.onload = function() {
			if (oldOnload) {
				oldOnload();
			}
			newFunction();
		}
	}
	else {
		window.onload = newFunction;
	}
}

/*提示:
1.如果想让一个onload处理程序执行多个操作,最简单的方法是创建一个执行所有操作的函数,然后让onload处理程序调用这个函数.
但是,要确保每个函数都返回.例如,如果你的函数包含对本身的setTimeout()调用,它将不会返回,因此不会到达被调用函数的其余部分.
2.如果你正在修改现有的代码,那么很容易意外地重新设置window.onload----任何HTML页面都可以调用多个外部JavaScript文件,
这些文件都可以设置事件处理程序.如果其中一个文件直接设置了window.onload,但是每次你都在此之后调用addOnload(),那么不会有问题.
但是,如果在设置window.onload之后(无论是直接设置,还是通过addOnload(),再设置window.onload,原来设置的函数就会丢失.
* */

function initOne() {
	document.getElementById("pageBody").style.backgroundColor = "#00F";
}

function initTwo() {
	document.getElementById("pageBody").style.color = "#F00";
}

function initThree() {
	var allTags = document.getElementsByTagName("*");

	for (var i=0; i<allTags.length; i++) {
		if (allTags[i].nodeName == "H1") {
			allTags[i].style.border = "5px green solid";
			allTags[i].style.padding = "25px";
			allTags[i].style.backgroundColor = "#FFF";
		}
	}
}
