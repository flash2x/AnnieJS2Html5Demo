window.saveImg=window.saveImg||{};
saveImg.SaveImg=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"saveImg","SaveImg");
    var code1=new annie.FloatDisplay();
    //找到Image标签内容将他赋值给FloatDisplay,这个对不是SpriteSheet里的小图有用
    code1.init(new annie.Bitmap(annie.getResource("saveImg","CodeImg1")).bitmapData);
    code1.x=179.5;
    code1.y=527;
    s.addChild(code1);
    var code2=new annie.FloatDisplay();
    //找到Image标签内容将他赋值给FloatDisplay,这个对是SpriteSheet里的合成图有用
    code2.init(annie.Bitmap.convertToImage(new annie.Bitmap(annie.getResource("saveImg","CodeImg2"))));
    code2.x=179;
    code2.y=174;
    s.addChild(code2);
};
A2xExtend(saveImg.SaveImg,annie.Sprite);
