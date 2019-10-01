window.saveImg=window.saveImg||{};
saveImg.SaveImg=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"saveImg","SaveImg");
    var code1=new annie.FloatDisplay();
    //找到Image标签内容将他赋值给FloatDisplay,这个对不是SpriteSheet里的小图有用
    code1.init(annie.getResource("saveImg","CodeImg1"));
    code1.x=179.5;
    code1.y=527;
    s.addChild(code1);
};
A2xExtend(saveImg.SaveImg,annie.Sprite);
