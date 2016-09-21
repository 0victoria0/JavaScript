/**
 * Created by victoria on 16/9/21.
 */

if (top.location != self.location){
    /*
    可以直接将top.location设置为self.location,但是有一个副作用,用户无法使用浏览器的back按钮.
    如果他们尝试通过单击back按钮返回前一个页面,就会自动跳回当前页面.使用replace()方法会替换浏览器
    历史中的当前页面,这使back按钮能够显示前一个页面.
    */
    top.location.replace(self.location);
}else {
    alert("浏览器窗口");
}