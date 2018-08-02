window.shape=window.shape||{};
shape.Shape=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.bg_mc=null;s.border_mc=null;s.tip_txt=null;s.title_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"shape","Shape");
    s.border_mc.mouseEnable=false;
    s.bg_mc.mouseEnable=false;
    s.tip_txt.mouseEnable=false;
    s.title_txt.mouseEnable=false;
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        var r=(Math.random()*245+10)>>0;
        var g=(Math.random()*245+10)>>0;
        var b=(Math.random()*245+10)>>0;
        e.target.changeColor({fillColor:"#"+r.toString(16)+g.toString(16)+b.toString(16)})
    });
};
A2xExtend(shape.Shape,annie.Sprite);
