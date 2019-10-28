AnnieRoot.stageDemo=AnnieRoot.stageDemo||{};
stageDemo.StageDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"stageDemo","StageDemo");
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//部分代码在Main.js文件17至26行。
		console.log("设计尺寸的高:",annie.desHeight1);
		console.log("设计尺寸的宽:",annie.desWidth1);
		console.log("舞台可见区域x点坐标：",annie.viewRect1.x);
		console.log("舞台可见区域y点坐标：",annie.viewRect1.y);
		console.log("舞台可见区域高：",annie.viewRect1.height);
		console.log("舞台可见区域宽：",annie.viewRect1.width);
	});
};
A2xExtend(stageDemo.StageDemo,annie.Sprite);
