AnnieRoot.globalDispatcherDemo=AnnieRoot.globalDispatcherDemo||{};
globalDispatcherDemo.ShowOrNo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.changeBox=null;s.getNews=null;/*_a2x_need_end*/
	annie.initRes(s,"globalDispatcherDemo","ShowOrNo");
	annie.globalDispatcher.addEventListener("myTest",function(e){
		//该代码放到任何合适想改变的地方
		console.log("收到了其他地方发来的消息:"+e.data);
		s.getNews.text = e.data;
		s.changeBox.rotation +=90;
	});
};
A2xExtend(globalDispatcherDemo.ShowOrNo,annie.Sprite);
