/**
 * Created by victoria on 16/9/18.
 */

window.onload = rolloverInit;

function rolloverInit(){
    for (var i=0; i<document.links.length; i++){
        var linkObj = document.links[i];
        if (linkObj.className){
            //通过链接的className拿到页面上id的名称为链接class名称的元素(这里拿到的是显示图片介绍的图片元素)
            var imgObj = document.getElementById(linkObj.className);
            if (imgObj){
                setupRollover(linkObj,imgObj);
            }
        }
    }
}

function setupRollover(thisLink,textImage){
    thisLink.imgToChange = new Array;//与链接相关的图片元素
    thisLink.outImage = new Array;
    thisLink.overImage = new Array;

    thisLink.imgToChange[0] = textImage;
    thisLink.onmouseout = rollOut;
    thisLink.onmouseover = rollOver;

    thisLink.outImage[0] = new Image();
    thisLink.outImage[0].src = textImage.src;

    thisLink.overImage[0] = new Image();
    thisLink.overImage[0].src = "images/"+thisLink.id+"Text.gif";//

    var rolloverObj = document.getElementById(thisLink.id+"Img");
    if (rolloverObj){
        thisLink.imgToChange[1] = rolloverObj;

        thisLink.outImage[1] = new Image();
        thisLink.outImage[1].src = rolloverObj.src;

        thisLink.overImage[1] = new Image();
        thisLink.overImage[1].src = "images/"+thisLink.id+"_on.gif";
    }
}

function rollOver(){
    for (var  i=0; i<this.imgToChange.length; i++){
        this.imgToChange[i].src = this.overImage[i].src;
    }
}

function rollOut(){
    for (var i=0; i<this.imgToChange.length; i++){
        this.imgToChange[i].src = this.outImage[i].src;
    }
}