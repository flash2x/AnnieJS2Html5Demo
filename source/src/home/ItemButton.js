window.home=window.home||{};
home.ItemButton=function(){
	var s = this;
	annie.MovieClip.call(s);
	/*_a2x_need_start*/s.title_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"home","ItemButton");
	s.initButton();
};
A2xExtend(home.ItemButton,annie.MovieClip);
home.ItemButton.prototype.initData=function(id,data){
    var s=this;
    s.id=id;
    s.data=data;
    if(data) {
        s.title_txt.text = data.name;
    }else{
        s.title_txt.text = "";
    }
};
