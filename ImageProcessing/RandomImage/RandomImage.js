/**
 * Created by victoria on 16/9/21.
 */
window.onload = choosePic;
var myPix  = new Array("../images/lion.jpg","../images/tiger.jpg","../images/bear.jpg");
var thisPic = 0;

function choosePic(){
    thisPic = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture").src = myPix[thisPic];
    rotate();
}

function rotate(){
    thisPic++;
    if (thisPic == myPix.length){
        thisPic = 0;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
    setTimeout(rotate,3*1000);
}