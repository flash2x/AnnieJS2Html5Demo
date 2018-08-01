window.scrollPage=window.scrollPage||{};
scrollPage.ScrollPage=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scrollPage","ScrollPage");
    var sp=new annieUI.ScrollPage(640,1040);
    var pageList=[scrollPage.Page1,scrollPage.Page2,scrollPage.Page3,scrollPage.Page4,scrollPage.Page5];
    for(var i=0;i<5;i++){
        var p=new pageList[i];
        p.y=i*1040;
        sp.view.addChild(p);
    }
    sp.maxDistance=1040*pageList.length;
    s.addChildAt(sp,0);
    sp.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
        trace(e.type);
    });
    sp.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
        trace(e.type);
    });
};
A2xExtend(scrollPage.ScrollPage,annie.Sprite);
