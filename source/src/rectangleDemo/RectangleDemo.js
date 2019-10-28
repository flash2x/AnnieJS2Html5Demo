AnnieRoot.rectangleDemo=AnnieRoot.rectangleDemo||{};
rectangleDemo.RectangleDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.pointCount=null;s.showBox=null;/*_a2x_need_end*/
	annie.initRes(s,"rectangleDemo","RectangleDemo");
	var rect1 = null;
	var shape1;
	var shape2;
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//给出原点和宽高确定一个矩形
		rect1 = new annie.Rectangle(0,0,200,300);
		var rect3 =new annie.Rectangle();
		//给出至少两个点确定一个矩形
		annie.Rectangle.createFromPoints(rect3,new annie.Point(100,100),new annie.Point(300,400));
		console.log(rect3);
		//将rect1实体化，rectangle只能生成无法显示
		//使用shape画出矩形
		shape1 = new annie.Shape();
		shape1.beginFill("#666");
		shape1.drawRect(0,0,200,300);
		shape1.endFill();
		s.showBox.addChild(shape1);
		//将rect2实体化，rectangle只能生成无法显示
		shape2 = new annie.Shape();
		shape2.beginFill("red");
		shape2.drawRect(rect3.x,rect3.y,rect3.width,rect3.height);
		shape2.endFill();
		s.showBox.addChild(shape2);
	})
	s.pointCount.addEventListener(annie.MouseEvent.CLICK,function (e) {
		console.log("两个矩形是否相交：（true为相交，false为不相交）",annie.Rectangle.testRectCross(shape1,shape2));
	})
	
};
A2xExtend(rectangleDemo.RectangleDemo,annie.Sprite);
