/**
 *annie.TextField
 * 文本类简单的表示一些文本，但一般时候，为了保持各种终端样式的一至性，我们强烈建议将
 * 静态文本转成位图来。
 */
AnnieRoot.textFieldDemo = AnnieRoot.textFieldDemo || {};
textFieldDemo.TextFieldDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/
    s.d_txt = null;
    /*_a2x_need_end*/
    annie.initRes(s, "textFieldDemo", "TextFieldDemo");
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //试着点击下界面中的文字，看看会发生什么
        s.d_txt.text = new Date().getTime().toString();
    })
};
A2xExtend(textFieldDemo.TextFieldDemo, annie.Sprite);
