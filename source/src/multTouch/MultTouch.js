window.multTouch=window.multTouch||{};
multTouch.MultTouch=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.test_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"multTouch","MultTouch");
    s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
        s.stage.isMultiTouch=true;
        s.stage.addEventListener(annie.TouchEvent.ON_MULTI_TOUCH,function (evt) {
            s.test_mc.rotation+=evt.rotate;
            s.test_mc.scaleY+=evt.scale;
            s.test_mc.scaleX+=evt.scale;
        });
    });
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        s.stage.isMultiTouch=false;
        s.removeAllEventListener();
    })
};
A2xExtend(multTouch.MultTouch,annie.Sprite);
