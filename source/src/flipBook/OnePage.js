window.flipBook=window.flipBook||{};
flipBook.OnePage=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.page_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"flipBook","OnePage");
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
    	trace(s);
        trace("parent:"+s.parent);
        trace("stage:"+s.stage);
    })
};
A2xExtend(flipBook.OnePage,annie.Sprite);
