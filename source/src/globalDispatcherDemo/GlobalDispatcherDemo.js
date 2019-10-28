/**
 * annie.globalDispatcher
 * 全局事件触发器
 */
AnnieRoot.globalDispatcherDemo=AnnieRoot.globalDispatcherDemo||{};
globalDispatcherDemo.GlobalDispatcherDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.tryBtn=null;/*_a2x_need_end*/
	annie.initRes(s,"globalDispatcherDemo","GlobalDispatcherDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.tryBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//该代码放到任何一个可以点击的对象的构造函数中
		annie.globalDispatcher.dispatchEvent("myTest","旋转度增加90");
		});
};
A2xExtend(globalDispatcherDemo.GlobalDispatcherDemo,annie.Sprite);
