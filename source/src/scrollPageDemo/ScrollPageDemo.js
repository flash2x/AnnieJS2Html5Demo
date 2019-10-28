/**
 * annieUI.ScrollPage
 * 长页面进行滑动。这个时候就应该用到这个类了，属性包括：scrollTo 和 setViewRect 。
 * setViewRect可以重新设置显示宽高；
 * scrollTo可以滑动到你指定的距离
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.scrollPageDemo=AnnieRoot.scrollPageDemo||{};
scrollPageDemo.ScrollPageDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scrollPageDemo","ScrollPageDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var sp=new annieUI.ScrollPage(640,1040);
	//你可以在在flash里面将你要滑动的页面直接拼到一起，就可以直接在这里进行添加，下面是用代码进行拼接的。
	var pageList=[scrollPageDemo.Page1,scrollPageDemo.Page2,scrollPageDemo.Page3,scrollPageDemo.Page4,scrollPageDemo.Page5];
	for(var i=0;i<5;i++){
		var p=new pageList[i];
		p.y=i*1040;
		sp.view.addChild(p);
	}
	//maxDistance是你必须要进行设置的，这里的设置是滑动的总长度
	sp.maxDistance=1040*pageList.length;
	//将组件添加到舞台
	s.addChildAt(sp,0);
	//如果需要重新设置宽高,需要将滑动方向重新设置一遍，如果不需要重新设置，就不用写下面两句代码.
	sp.setViewRect(640,1040);
	sp.isVertical=false;
	//这里是滑动到指定的距离；
	sp.scrollTo(20);
	sp.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
		//滑动的开始事件
		trace(e.type);
	});
	sp.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
		//滑动停止事件
		trace(e.type);

	});
	sp.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
		//滑动到顶部的事件
		trace(e.type);
	});
	sp.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
		//滑到底部的事件
		trace(e.type);
	});
};
A2xExtend(scrollPageDemo.ScrollPageDemo,annie.Sprite);
