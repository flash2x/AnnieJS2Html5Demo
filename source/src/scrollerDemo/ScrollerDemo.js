/*
* annieUI.Scroller
* 长页面滑动，动画随之播放
* */
AnnieRoot.scrollerDemo=AnnieRoot.scrollerDemo||{};
scrollerDemo.ScrollerDemo=function(){
	var s = this;
	annie.MovieClip.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scrollerDemo","ScrollerDemo");
	s.stop();
	var sc=new annieUI.Scroller();
	sc.addEventListener(annie.Event.ON_SCROLL_ING,function (e) {
		//这里控制你的动画进行播放
		s.gotoAndStop(e.data);
	});
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//添加到舞台，将组件进行初始化
		sc.init(s.stage,s.totalFrames);
	});
	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		//为了资源优化，在移除舞台的时候将组件销毁；
		sc.destroy();
	})
};
A2xExtend(scrollerDemo.ScrollerDemo,annie.MovieClip);
