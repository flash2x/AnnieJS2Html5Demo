window.loading=window.loading||{};
loading.Loading=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.per_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"loading","Loading");
};
A2xExtend(loading.Loading,annie.Sprite);
