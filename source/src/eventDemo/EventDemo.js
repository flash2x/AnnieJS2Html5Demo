/**
 * annie.Event
 * 事件类,annie引擎中一切事件的基类
 */
AnnieRoot.eventDemo=AnnieRoot.eventDemo||{};
eventDemo.EventDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"eventDemo","EventDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		console.log("页面被添加到舞台上")
	});

	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		console.log("页面被移除舞台")
	})
};
A2xExtend(eventDemo.EventDemo,annie.Sprite);
