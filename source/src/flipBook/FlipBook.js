window.flipBook=window.flipBook||{};
flipBook.FlipBook=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"flipBook","FlipBook");
    var flip=new annieUI.FlipBook(320,640,7,function (index) {
        var p=null;
        if(index%2==0){
            p=new flipBook.OnePage();
        }else{
            p=new flipBook.TwoPage();
        }
        p.page_txt.text="第"+index+"页";
        return p;
    });
    flip.speed=0.2;
    flip.addEventListener(annie.Event.ON_FLIP_START,function (e) {
        trace("开始翻页");
    });
    flip.addEventListener(annie.Event.ON_FLIP_STOP,function (e) {
        trace("停止翻页")
    });
    flip.addEventListener(annie.MouseEvent.CLICK,function (e) {
		trace(flip.stage);
    })
    //通过设置 canFlip 为false 让杂志自身无法执行翻页效果
    // flip.flipTo(2);
    s.addChild(flip);
    flip.y=200;
    s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		s.removeAllEventListener();
        s.stage.addEventListener(annie.MouseEvent.MOUSE_UP,function (e) {
            if(e.stageX>320) {
                flip.nextPage();
            }else{
                flip.prevPage();
            }
        });
        s.stage.addEventListener(annie.MouseEvent.MOUSE_MOVE,function (e) {
            trace("Move");

        });
    });
};
A2xExtend(flipBook.FlipBook,annie.Sprite);
