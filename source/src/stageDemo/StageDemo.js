/**
 * annie.Stage
 * Stage 表示显示 canvas 内容的整个区域，所有显示对象的顶级显示容器
 */
AnnieRoot.stageDemo=AnnieRoot.stageDemo||{};
stageDemo.StageDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"stageDemo","StageDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		console.log("设计尺寸的高:",s.stage.desHeight);
		console.log("设计尺寸的宽:",s.stage.desWidth);
		console.log("舞台可见区域x点坐标：",s.stage.viewRect.x);
		console.log("舞台可见区域y点坐标：",s.stage.viewRect.y);
		console.log("舞台可见区域高：",s.stage.viewRect.height);
		console.log("舞台可见区域宽：",s.stage.viewRect.width);
	});
};
A2xExtend(stageDemo.StageDemo,annie.Sprite);
