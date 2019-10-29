/**
 * annieUI.ScrollList
 * 有些时候需要大量的有规则的滚动内容。这个时候就应该用到这个类了，属性包括：update
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.scrollListDemo=AnnieRoot.scrollListDemo||{};
scrollListDemo.ScrollListDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scrollListDemo","ScrollListDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.dataCount=0;
	//生成2行的数据，当然你也可以生成多行和单行的
	var sl=new annieUI.ScrollList(scrollListDemo.Item,300,50,600,800,true,2);
	s.addChild(sl);
	sl.y=120;
	//开始如果有数据可以先更新一批数据到页面上
	sl.updateData(s.getData());
	sl.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
		console.log("end");
		//读取数据，这里可以向后台请求数据。我这里只是模拟
		sl.updateData(s.getData());
	});
	sl.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
		//滑动开始时，触发这个时间
		console.log("start");
	});
	sl.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
		//滑动停止时，触发此事件
		console.log("stop");
	});
	sl.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
		//滑动到顶部时，触发的事件
		console.log("head");
	});

};
A2xExtend(scrollListDemo.ScrollListDemo,annie.Sprite);
scrollListDemo.ScrollListDemo.prototype.getData=function () {
	//这里只是模拟后台传送数据；
	var s=this;
	var dataList=[];
	for(var i=0;i<30;i++){
		dataList.push({nickName:"Annie2x",coin:Math.random()*10000>>0,distance:Math.random()*20000>>0} );
		// s.dataCount++;
	}
	return dataList;
};
