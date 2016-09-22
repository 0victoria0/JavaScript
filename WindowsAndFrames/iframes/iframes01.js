/**
 * Created by victoria on 16/9/22.
 */

window.onload = initLinks;

function initLinks(){
    for (var i=0; i<document.links.length; i++){
        //iframeName：指iframe的属性name，如<iframe name=”somename”>
        document.links[i].target = "mycontent";
        //通过iframeName把链接的内容设置在iframe的子窗口内

        /*本来链接是进入新的窗口界面,但是通过设置target,
        会把新的窗口界面作为iframe的子窗口界面展示出来*/
    }
}