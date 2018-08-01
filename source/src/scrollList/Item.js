window.scrollList=window.scrollList||{};
scrollList.Item=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.coin_txt=null;s.distance_txt=null;s.nickName_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"scrollList","Item");
	s.mouseChildren=false;
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        alert(s.data.nickName)
    })
};
A2xExtend(scrollList.Item,annie.Sprite);
//一定要有这个属性
scrollList.Item.prototype.id=0;
//一定要有这个属性
scrollList.Item.prototype.data=null;
//一定要实现这个方法
scrollList.Item.prototype.initData=function(id,data){
    var s=this;
    s.id=id;
    s.data=data;
    if(data) {
        s.coin_txt.text = data.coin;
        s.distance_txt.text = data.distance;
        s.nickName_txt.text = data.nickName;
    }
};
