/**
 * Created by victoria on 16/9/20.
 */
window.onload = initBannerLink;

var thisAd = 0;

function initBannerLink(){
    if (document.getElementById("adBanner").parentNode.tagName == "A"){
        document.getElementById("adBanner").parentNode.onclick = newLocation;
    }
    rotate();
}

function newLocation(){
    var adURL = new Array("negrino.com","sun.com","microsoft.com");
    document.location.href ="http://www."+adURL[thisAd];
    return false;
}

function rotate(){
    var adImages = new Array("../images/reading1.gif","../images/reading2.gif","../images/reading3.gif");

    thisAd++;
    if (thisAd == adImages.length){
        thisAd = 0;
    }
    document.getElementById("adBanner").src = adImages[thisAd];
    setTimeout(rotate,3 * 1000);//没3*1000时间,调用一次rotate函数
}