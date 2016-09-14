/**
 * Created by victoria on 16/9/14.
 */

window.onload = rolloverInit;

function rolloverInit(){
    //扫描页面上的每一个链接
    for (var i=0; i<document.links.length; i++){
        //获取链接对象
        var linkObj = document.links[i];
        if (linkObj.id){
            //获取图片对象
            var imgObj = document.getElementById(linkObj+"Img");
            if (imgObj){
                setupRollover(linkObj,imgObj);
            }
        }
    }
}

function setupRollover(thisLink,thisImage){
    thisLink.imgToChange = thisImage;//给链接对象添加新的属性imgToChange
    thisLink.onmouseout = function(){
        this.imgToChange.src = this.outImage.src;
    };
    thisLink.onmouseover = function(){
        this.imgToChange.src = this.overImage.src;
    };
    thisLink.outImage = new Image();//给链接对象一个新的属性outImage
    thisLink.outImage.src = thisImage.src;

    thisLink.overImage = new Image();//给链接对象一个新的属性overImage
    thisLink.overImage.src = "images/"+thisLink.id+"_on.gif";
}