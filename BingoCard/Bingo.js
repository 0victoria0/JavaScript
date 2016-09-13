/**
 * Created by victoria on 16/9/12.
 */


//脚本加载页面时自动运行脚本
/*
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
    }while (usedNums[newNum]);// 如果为true,则数据重复,继续do操作.

    usedNums[newNum] = true;
    document.getElementById(currentSquare).innerHTML = newNum;
}

function getNewNum(){
    //Math.floor 取整运算   Math.random()生成0~1的一个随机数
    return  Math.floor(Math.random()*15);
}
*/

/*
    用户有能力自己运行脚本
* */

window.onload = initAll;
var usedNums = new Array(76);

function initAll(){
    if (document.getElementById){
        document.getElementById("reload").onclick = anotherCard;
        newCard();
    }else {
        alert("Sorry, your browser doesn't support this script");
    }
}

//初始化Bingo Card
function newCard(){
    for (var i=0; i<24; i++){
        setSquare(i);
    }
}

//Square的数据写入
function setSquare(thisSquare){
    var currenSquare = "square"+thisSquare;
    var colPlace = new Array(0,0,0,0,0,1,1,1,1,1,2,2,2,2,3,3,3,3,3,4,4,4,4,4);
    var colBasis = colPlace[thisSquare]*15;
    var newNum = colBasis+getNewNum()+1;
    do {
        newNum = colBasis+getNewNum()+1;
    }while (usedNums[newNum]);
    usedNums[newNum] = true;
    document.getElementById(currenSquare).innerHTML = newNum;
    document.getElementById(currenSquare).className = "";
    document.getElementById(currenSquare).onmousedown = toggleColor;
}

//点击Square时颜色的变化
function toggleColor(evt){
    /*
        如果evt值存在,就说明用户的浏览器不是IE,可以看到evt的目标.
        如果是IE浏览器,就要查看window对象的event属性的srcElement.
    * */
    if (evt){
        var thisSquare = evt.target;
    }else {
        var thisSquare = window.event.srcElement;
    }
    if (thisSquare.className == ""){
        thisSquare.className = "pickedBG";
    }else {
        thisSquare.className = "";
    }
    checkWin();
}

//检查是否获胜
function checkWin(){
    var winningOption = -1;//存储用户可能遇到的获胜选项
    var setSquares = 0;//存储已经单击的格子
    //数组中的每一个数字都是有效获胜组合的编码值
    var winners = new Array(31,992,15360,507904,541729,557328,1083458,2162820,4329736,8519745,8659472,16252928);

    for (var i=0; i<24; i++){
        var currentSquare = "square" + i;
        if (document.getElementById(currentSquare).className != ""){
            document.getElementById(currentSquare).className = "pickedBG";
            setSquares = setSquares | Math.pow(2,i);
        }
    }
    for (var i=0; i<winners.length; i++){
        if ((winners[i] & setSquares) == winners[i]){
            winningOption = i;
        }
    }
    if (winningOption > -1){
        for (var  i=0; i<24; i++){
            if (winners[winningOption] & Math.pow(2,i)){
                currentSquare = "square" + i;
                document.getElementById(currentSquare).className = "winningBG";
            }
        }
    }
}

//获取0~15的随机整数
function getNewNum(){
    return Math.floor(Math.random()*15);
}

//重新初始化Bingo Card
function anotherCard(){
    for (var i=1; i<usedNums.length; i++){
        usedNums[i] = false;
    }
    newCard();
    return false;
}
