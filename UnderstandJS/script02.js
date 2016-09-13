/**
 * Created by victoria on 16/9/12.
 */

window.onload = initAll;

function initAll(){
    console.log("第二次");
    document.getElementById("redirect").onclick = initRedirect;
}

function initRedirect(){
    window.location = "Hyperlink02.html";
    return false;
}