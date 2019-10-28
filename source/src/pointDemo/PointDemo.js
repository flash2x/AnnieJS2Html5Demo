/**
 * annie.Point
 * 坐标点
 */
AnnieRoot.pointDemo=AnnieRoot.pointDemo||{};
pointDemo.PointDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.finalText=null;s.pointCount=null;s.x1Point=null;s.x2Point=null;s.y1Point=null;s.y2Point=null;/*_a2x_need_end*/
	annie.initRes(s,"pointDemo","PointDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//将所有输入框的输入类型设置为只可以输入数字
		s.x1Point.inputType = 0;
		s.y1Point.inputType = 0;
		s.x2Point.inputType = 0;
		s.y2Point.inputType = 0;
	});

	s.pointCount.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//判断输入框是否全部填写完整了，是则计算输入的两个坐标点的距离，否则提示将坐标填写完整
		if (s.x1Point.text && s.y1Point.text && s.x2Point.text && s.y2Point.text) {
			s.finalText.text = "两坐标点的距离为："+annie.Point.distance(s.x1Point.text,s.y1Point.text,s.x2Point.text,s.y2Point.text);
		}else {
			alert("请将坐标填写完整！")
		}
	})
};
A2xExtend(pointDemo.PointDemo,annie.Sprite);
