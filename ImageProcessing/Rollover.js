/**
 * Created by victoria on 16/9/13.
 */

window.onload = rolloverInit;

function rolloverInit(){
    for (var i=0; i<document.images.length;i++){//扫描页面上的每个图像,
        // 检查图像外边的标签是否是<a>标签,如果是,就说明它是一个链接
        //检查包围图像的标签是否是锚标签.检查方法是查看对象的值是否为A(A是锚标签的名称)
        if (document.images[i].parentNode.tagName == "A"){
            setupRollover(document.images[i]);
        }
    }
}

function setupRollover(thisImage){
    /*
    拿到图片对象thisImage,给这个图片对象添加三个新的属性outImage,clickImage,和overImage(相当于图片对象有三种状态),
    不同状态时图片来源不同,什么事件时,图片对象的图片从不同状态中拿取.
    * */
    thisImage.outImage = new Image();//添加新的属性(鼠标不在图像上时的图像版本)
    thisImage.outImage.src = thisImage.src;//把图像的图片来源存入新的属性outImage的来源中
    console.log(this.src);//这个时候的this.src是不存在的,打印输出undefined,时间发生时,this才有意义.
    thisImage.onmouseout = function(){
        this.src = this.outImage.src;
    };

    thisImage.clickImage = new Image();//鼠标点击时的图像版本
    thisImage.clickImage.src = "images/"+thisImage.id+"_click.gif";
    thisImage.onclick = function(){
        this.src = this.clickImage.src;
    };

    thisImage.overImage = new Image();//鼠标在图像上时的图像版本
    thisImage.overImage.src = "images/"+thisImage.id+"_on.gif";
    thisImage.onmouseover = function(){
        this.src = this.overImage.src;
    };
}