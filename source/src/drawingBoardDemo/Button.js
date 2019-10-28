AnnieRoot.drawingBoardDemo=AnnieRoot.drawingBoardDemo||{};
drawingBoardDemo.Button=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.title_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"drawingBoardDemo","Button");
};
A2xExtend(drawingBoardDemo.Button,annie.Sprite);
