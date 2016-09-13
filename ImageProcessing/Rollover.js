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
    thisImage.outImage = new Image();//添加新的属性
    thisImage.outImage.src = thisImage.src;
    thisImage.onmouseout = function(){
        this.src = this.outImage.src;
    }

    thisImage.overImage = new Image();
    thisImage.overImage.src = "images/"+thisImage.id+"_on.gif";
    thisImage.onmouseover = function(){
        this.src = this.overImage.src;
    }
}