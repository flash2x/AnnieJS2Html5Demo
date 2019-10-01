window.slidePage=window.slidePage||{};
slidePage.SlidePage=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"slidePage","SlidePage");
    var arrow=new slidePage.Arrow();
    arrow.mouseEnable=false;
    var sp=new annieUI.SlidePage(320,640);
    sp.isPageFollowToMove=true;
    sp.reBound=0.3;
    // sp.canSlideNext=false;
    // sp.canSlidePrev=false;
    sp.addEventListener(annie.Event.ON_SLIDE_START,function (e) {
        sp.canSlideNext=false;
        sp.canSlidePrev=false;
        arrow.visible=false;
        trace("start");
    });
    sp.addEventListener(annie.Event.ON_SLIDE_END,function (e) {
        if(sp.currentPageIndex<4) {
            arrow.visible = true;
        }
        sp.canSlideNext=true;
        sp.canSlidePrev=true;
        trace("stop");
    });
    // sp.addEventListener(annie.MouseEvent.CLICK,function (e) {
    //     sp.slideTo(3);
    // })
    sp.addPageList([slidePage.Page1,slidePage.Page2,slidePage.Page3,slidePage.Page4,slidePage.Page5]);
    s.addChildAt(sp,0);
    s.addChildAt(arrow,1);
    sp.slideTo(2,true);
};
A2xExtend(slidePage.SlidePage,annie.Sprite);
