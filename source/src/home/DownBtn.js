window.home=window.home||{};
home.DownBtn=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"home","DownBtn");
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		annie.navigateToURL("https://gitee.com/flash2x/AnnieJS2Html5Demo");
    })
};
A2xExtend(home.DownBtn,annie.Sprite);
