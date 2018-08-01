window.movieClip=window.movieClip||{};
movieClip.MovieClip=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.check1_mc=null;s.check2_mc=null;s.check3_mc=null;s.control_btn=null;s.monkey_mc=null;s.play_btn=null;s.tip_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"movieClip","MovieClip");
    s.control_btn.mouseChildren=false;
    s.play_btn.mouseChildren=false;
    s.check1_mc.mouseChildren=false;
    s.check2_mc.mouseChildren=false;
    s.check3_mc.mouseChildren=false;
    s.monkey_mc.mouseChildren=false;
    var setTip=function (msg) {
        s.tip_txt.text=msg;
    };
    s.addEventListener(annie.MouseEvent.CLICK,function (e){
        trace("ok");
        switch(e.target.name){
            case "play_btn":
                if(e.target.currentFrame==1){
                    s.monkey_mc.stop();
                    e.target.nextFrame();
                }else{
                    s.monkey_mc.play();
                    e.target.prevFrame();
                }
                break;
            case "control_btn":
                if(e.target.currentFrame==1){
                    s.monkey_mc.play(false);
                    e.target.nextFrame();
                }else{
                    s.monkey_mc.play(true);
                    e.target.prevFrame();
                }
                break;
            case "check1_mc":
            case "check2_mc":
            case "check3_mc":
                if(e.target.currentFrame==1){
                    e.target.nextFrame();
                }else{
                    e.target.prevFrame();
                }
                break;
        }
        s.tip_txt.text="";
    });
    s.monkey_mc.addEventListener(annie.Event.END_FRAME,function (e) {
        if(s.check1_mc.currentFrame>1) {
            if (e.data.frameIndex == 1) {
                setTip("倒着播放到第一帧结束事件");
            } else {
                setTip("顺着播放到最后一帧结束事件");
            }
        }
    });
    s.monkey_mc.addEventListener(annie.Event.CALL_FRAME,function (e) {
        if(s.check2_mc.currentFrame>1) {
            setTip("当前帧" + e.data.frameIndex + ";标签名:" + e.data.frameName);
        }
    });
    s.monkey_mc.addFrameScript(14,function () {
        if(s.check3_mc.currentFrame>1) {
            setTip("触发当前事件时，当前帧为" + s.monkey_mc.currentFrame);
        }
    });
};
A2xExtend(movieClip.MovieClip,annie.Sprite);
