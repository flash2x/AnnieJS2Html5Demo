AnnieRoot.mouseEventDemo=AnnieRoot.mouseEventDemo||{};
mouseEventDemo.MouseEventDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.clickArea=null;s.nowStatus=null;s.xPoint=null;s.yPoint=null;/*_a2x_need_end*/
	annie.initRes(s,"mouseEventDemo","MouseEventDemo");
	var nowStatu = null;
	var localXDown = null;
	var localYDown = null;
	//showText和e为调用函数时传递过来的数据
	function changeShowText(showText,e){
		//取坐标小数点后两位
		//获取点击时的全局坐标（将stageX改为localX则是在clickArea元件中的坐标）
		localXDown = Math.ceil(e.stageX*100)/100;
		localYDown = Math.ceil(e.stageY*100)/100;
		//将坐标和当前操作显示在页面
		s.nowStatus.text = showText;
		s.xPoint.text = localXDown;
		s.yPoint.text = localYDown;
	}
	//监听手指点击事件
	s.clickArea.addEventListener(annie.MouseEvent.CLICK,function (e) {
		nowStatu = "点击事件！";
		//e是将当前的数据传入changeShowText()中，nowStatus是告知当前的操作方式为什么。
		console.log("CLICK");
		changeShowText(nowStatu,e);
	});
	//监听手指移动事件
	s.clickArea.addEventListener(annie.MouseEvent.MOUSE_MOVE,function (e) {
		nowStatu = "移动事件！";
		console.log("MOUSE_MOVE");
		changeShowText(nowStatu,e);
	})
	//监听手指按下事件
	s.clickArea.addEventListener(annie.MouseEvent.MOUSE_DOWN,function (e) {
		nowStatu = "按下事件！";
		console.log("MOUSE_DOWN");
		changeShowText(nowStatu,e);
	})
	//监听手指抬起事件
	s.clickArea.addEventListener(annie.MouseEvent.MOUSE_UP,function (e) {
		nowStatu = "抬起事件！";
		console.log("MOUSE_UP");
		changeShowText(nowStatu,e);
	})
	//监听手指里开clickArea区域事件
	s.clickArea.addEventListener(annie.MouseEvent.MOUSE_OUT,function (e) {
		nowStatu = "离开事件！";
		console.log("MOUSE_OUT");
		changeShowText(nowStatu,e);
	})
	s.clickArea.addEventListener(annie.MouseEvent.MOUSE_OVER,function (e) {
		nowStatu = "移入事件！";
		console.log("MOUSE_OVER");
		changeShowText(nowStatu,e);
	})
	};
A2xExtend(mouseEventDemo.MouseEventDemo,annie.Sprite);
