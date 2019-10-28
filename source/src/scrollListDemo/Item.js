AnnieRoot.scrollListDemo=AnnieRoot.scrollListDemo||{};
scrollListDemo.Item=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.coin_txt=null;s.distance_txt=null;s.nickName_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"scrollListDemo","Item");

	//这个类非常重要，类名可以随便启，但是这个类作为ScrollList的item类，需要有几个地方特别注意
};
A2xExtend(scrollListDemo.Item,annie.Sprite);
//一定要有这个属性
scrollListDemo.Item.prototype.id=0;
//一定要有这个属性
scrollListDemo.Item.prototype.data=null;
//一定要实现这个方法
scrollListDemo.Item.prototype.initData=function(id,data){
	//这里需要考虑性能。如果是多次需要new一个对象，建议建一个对象池，避免重复new，
	var s=this;
	s.id=id;
	s.data=data;
	if(data) {
		s.coin_txt.text = data.coin;
		s.distance_txt.text = data.distance;
		s.nickName_txt.text = data.nickName;
	}
};
