/**
 * Created by victoria on 16/9/22.
 */

window.onload = initLinks;

function initLinks(){
    for (var i=0; i<document.links.length; i++){
        //iframeName：指iframe的属性name，如<iframe name=”somename”>
        //在指定的框架中打开被链接文档(这里的指定框架为framename为mycontent的框架)

        //document.links[i].target = "mycontent";

        /*link 的target属性
        * target属性规定在哪个窗口和框架中加载被链接文档
        * _blank 在新窗口中打开被链接文档
        * _self 默认.在相同的框架中打开被链接文档
        * _parent 在父框架集中打开被链接文档
        * _top 在整个窗口中打开被链接文档
        * framename 在指定的框架中打开被链接文档*/

        document.links[i].onclick = setContent;

    }
}

function setContent(){
    //document对象使我们可以从脚本中对HTML页面中对所有元素进行访问
        //document对象是window对象对一部分,可通过window.document属性对其进行访问
    //contentWindow属性是指指定的frame或iframe所在的window对象.
    document.getElementById("icontent").contentWindow.document.location.href = this.href;
    return false;//告诉浏览器不要将href一并载入主窗口.
}