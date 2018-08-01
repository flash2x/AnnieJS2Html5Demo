window.scrollList=window.scrollList||{};
scrollList.ScrollList=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scrollList","ScrollList");
    s.dataCount=0;
    //生成2行的数据，当然你也可以生成其他行的
    var sl=new annieUI.ScrollList(scrollList.Item,300,50,600,300,true,2);
    s.addChild(sl);
    sl.y=120;
    sl.updateData(s.getData());
    sl.addEventListener(annie.Event.ON_SCROLL_TO_END,function (e) {
        trace("end");
        //读取数据，这里可以向后台请求数据。我这里只是模拟
        sl.updateData(s.getData());
    });
    sl.addEventListener(annie.Event.ON_SCROLL_START,function (e) {
        trace("start");
    });
    sl.addEventListener(annie.Event.ON_SCROLL_STOP,function (e) {
        trace("stop");
    });
    sl.addEventListener(annie.Event.ON_SCROLL_TO_HEAD,function (e) {
        trace("head");
    });
};
A2xExtend(scrollList.ScrollList,annie.Sprite);

scrollList.ScrollList.prototype.getData=function () {
    var s=this;
    var dataList=[];
    for(var i=0;i<30;i++){
        dataList.push({nickName:"小可"+s.dataCount,coin:Math.random()*10000>>0,distance:Math.random()*20000>>0});
        s.dataCount++;
    }
    return dataList;
}