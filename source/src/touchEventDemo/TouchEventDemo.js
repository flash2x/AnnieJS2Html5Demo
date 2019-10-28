/**
 * annie.TouchEvent
 * 多点触碰事件。单点事件请使用mouseEvent,pc和mobile通用
 */
AnnieRoot.touchEventDemo = AnnieRoot.touchEventDemo || {};
touchEventDemo.TouchEventDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/s.touchArea=null;/*_a2x_need_end*/
    annie.initRes(s, "touchEventDemo", "TouchEventDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
        //打开多点触控功能
        s.stage.isMultiTouch = true;
        //多点触控的侦听事件
        s.stage.addEventListener(annie.TouchEvent.ON_MULTI_TOUCH, function (evt) {
            // s.test_mc.rotation+=evt.rotate;
            s.touchArea.rotation+=evt.rotate;//根据手指的操作变化改变显示对象旋转角度
            s.touchArea.scaleY+=evt.scale;//根据手指的操作变化改变显示对象y轴方向的大小
            s.touchArea.scaleX+=evt.scale;//根据手指的操作变化改变显示对象x轴方向的大小
        });
    });
    //页面移除舞台事件，当页面被remove的时候执行
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        //关闭多点触控功能
        s.stage.isMultiTouch=false;
        //移除该页面所有监听事件
        s.removeAllEventListener();
    })

};
A2xExtend(touchEventDemo.TouchEventDemo, annie.Sprite);
