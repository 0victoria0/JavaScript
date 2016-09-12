/**
 * Created by victoria on 16/9/12.
 */

window.onload = initAll;
var usedNums = new Array(76);

function initAll() {
    //对象探测
    //如果脚本使用的对象并没有得道浏览器100%的支持,那么总是应该首先检查浏览器是否能够处理它.
    if (document.getElementById) {
        for (var i = 0; i < 24; i++) {
            setSquare(i);
        }
    } else {
        alert("Sorry, your browser doesn't support this script");
    }
}

function setSquare(thisSquare){
    var currentSquare = "square"+thisSquare;
    var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var colBasis = colPlace[thisSquare]*15;
    var newNum;
    do {
        newNum = colBasis + getNewNum() +1;
    }while (usedNums[newNum]);// 如果为true,,继续do操作

    usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum(){
    //Math.floor 取整运算   Math.random()生成0~1的一个随机数
    return  Math.floor(Math.random()*15);
}