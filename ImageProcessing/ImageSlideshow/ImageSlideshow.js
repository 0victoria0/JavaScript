/**
 * Created by victoria on 16/9/21.
 */

var myPix = new Array("../images/robot1.jpg","../images/robot2.jpg","../images/robot3.jpg");
var thisPic = 0;

window.onload = initLinks;

function initLinks(){
    document.getElementById("prevLink").onclick = processPrevious;
    document.getElementById("nextLink").onclick = processNext;
}

function processPrevious(){
   if (thisPic == 0){
       thisPic = myPix.length;
   }
    thisPic--;
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;
}

function processNext(){
    thisPic++;
    if (thisPic == myPix.length){
        thisPic = 0;
    }
    document.getElementById("myPicture").src = myPix[thisPic];
    return false;
}

