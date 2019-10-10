/**
 * annie.Input
 * 输入文本一般是在做一些登录或者注册等简单的需要留下资料的过程中使用
 * 输入文本都是annie.FloatDisplay的子类，annie.toDisplayDataURL截图方法无法截取到floatDisplay对象
 */
AnnieRoot.inputDemo=AnnieRoot.inputDemo||{};
inputDemo.InputDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.e_txt=null;s.i_txt=null;s.n_txt=null;s.pw_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"inputDemo","InputDemo");
    //将n_txt文本设置成只能输入数字类型的字符
    s.n_txt.htmlElement.type="number";
    //通过onkeyup方法做正则替换 此方法在手机设备上生效，pc端有可能不生效
    s.e_txt.htmlElement.onkeyup="value=value.replace(/[^a-zA-Z]/g,'')";
    //通过onbeforepaste方法做正则替换 此方法在手机设备上生效，pc端有可能不生效
    s.e_txt.htmlElement.onbeforepaste="clipboardData.setData('text',clipboardData.getData('text').replace(/[^a-zA-Z]/g,''))";
};
A2xExtend(inputDemo.InputDemo,annie.Sprite);
