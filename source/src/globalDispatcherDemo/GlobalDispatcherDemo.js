
AnnieRoot.globalDispatcherDemo=AnnieRoot.globalDispatcherDemo||{};
globalDispatcherDemo.GlobalDispatcherDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.tryBtn=null;/*_a2x_need_end*/
	annie.initRes(s,"globalDispatcherDemo","GlobalDispatcherDemo");
	s.tryBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//该代码放到任何一个可以点击的对象的构造函数中
		annie.globalDispatcher.dispatchEvent("myTest","旋转度增加90");
		});
};
A2xExtend(globalDispatcherDemo.GlobalDispatcherDemo,annie.Sprite);
