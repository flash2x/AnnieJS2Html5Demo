/*
* annieUI.SlidePage
* 滑动页面类,
* */
AnnieRoot.slidePageDemo=AnnieRoot.slidePageDemo||{};
slidePageDemo.SlidePageDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"slidePageDemo","SlidePageDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var arrow=new slidePageDemo.Arrow();
	arrow.mouseEnable=false;
	/*
	***  false是横屏，true是竖屏
	 */
	var sp=new annieUI.SlidePage(640,1040,true);
	//这里是将页面添加滑动组件中，
	var arr=[slidePageDemo.Page1,slidePageDemo.Page2,slidePageDemo.Page3,slidePageDemo.Page4,slidePageDemo.Page5];
	sp.addPageList(arr);
	//将滑动组件添加到指定的容器内
	s.addChildAt(sp,0);
	s.addChildAt(arrow,1);
	//控制上下回弹
	sp.reBound=0.3;//0-1数值越大，反弹效果越大
	//页面跟随开关
	sp.isPageFollowToMove=true;
	// sp.canSlideNext=false;//滑动的开关，false为关掉滑动，true为打开滑动。
	// sp.canSlidePrev=false;//滑动的开关，false为关掉滑动，true为打开滑动。
	sp.addEventListener(annie.Event.ON_SLIDE_START,function (e) {
		//这是滑动开始时触发的事件
		sp.canSlideNext=false;
		sp.canSlidePrev=false;
		arrow.visible=false;
		trace("start");
	});
	sp.addEventListener(annie.Event.ON_SLIDE_END,function (e) {
		//这是滑动结束时触发的事件，sp.currentPageIndex为当前显示页面的索引;
		if(sp.currentPageIndex<4) {
			arrow.visible = true;
		}
		sp.canSlideNext=true;
		sp.canSlidePrev=true;
		trace("stop");
	});
};
A2xExtend(slidePageDemo.SlidePageDemo,annie.Sprite);
