window.drag=window.drag||{};
drag.Drag=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.test_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"drag","Drag");
    s.addEventListener(annie.MouseEvent.MOUSE_DOWN,function () {
        //不固定中心
        s.test_mc.startDrag();
        //固定中心点到鼠标
        // s.test_mc.startDrag(true);
        // 固定中心点到鼠标并拖动范围
        // s.test_mc.startDrag(true,new annie.Rectangle(100,100,300,300));
        // 不固定中心点到鼠标并拖动范围
        // s.test_mc.startDrag(false,new annie.Rectangle(100,100,300,300));
    })
};
A2xExtend(drag.Drag,annie.Sprite);
