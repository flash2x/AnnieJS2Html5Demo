window.cut=window.cut||{};
cut.Cut=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.cut_btn=null;s.monkey_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"cut","Cut");
	s.cut_btn.mouseChildren=false;
	s.cut_btn.addEventListener(annie.MouseEvent.CLICK,function () {
        var imageDate=annie.toDisplayDataURL(s.monkey_mc, {
            x: 0,
            y: 0,
            width:s.monkey_mc.width,
            height: s.monkey_mc.height
        }, {
            type: "jpeg",
            quality:80
        }, '#CDDBEB');
        var image=new Image();
        image.src=imageDate;
		var f=new annie.FloatDisplay();
		f.init(image);
		s.addChild(f);
		f.x=Math.random()*s.stage.viewRect.width>>1;
		f.y=Math.random()*s.stage.viewRect.height>>1;
    })
};
A2xExtend(cut.Cut,annie.Sprite);
