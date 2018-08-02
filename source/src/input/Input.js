window.input=window.input||{};
input.Input=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.pw_txt=null;s.sure_btn=null;s.userName_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"input","Input");
};
A2xExtend(input.Input,annie.Sprite);
