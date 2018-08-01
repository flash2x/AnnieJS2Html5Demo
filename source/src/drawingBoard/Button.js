window.drawingBoard=window.drawingBoard||{};
drawingBoard.Button=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.title_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"drawingBoard","Button");
};
A2xExtend(drawingBoard.Button,annie.Sprite);
