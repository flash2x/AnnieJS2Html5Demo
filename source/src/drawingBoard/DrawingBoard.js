window.drawingBoard=window.drawingBoard||{};
drawingBoard.DrawingBoard=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.canel_btn=null;/*_a2x_need_end*/
	annie.initRes(s,"drawingBoard","DrawingBoard");
    var db=new annieUI.DrawingBoard(500,500,"#000000");
    db.drawColor="#ff0000";
    db.drawRadius=10;
    s.addChild(db);
    db.x=60;
    db.y=200;
    s.canel_btn.title_txt.text="撤消";
    s.canel_btn.mouseChildren=false;
    s.canel_btn.addEventListener(annie.MouseEvent.CLICK,function (e) {
        db.cancel(1);
    })
};
A2xExtend(drawingBoard.DrawingBoard,annie.Sprite);
