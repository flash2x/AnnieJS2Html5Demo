/**
 * annie.DisplayObject
 * annie显示对象的基类，拥有显示对象9大重要属性，是我们制作交互项目中不可或缺的。
 * 也是我们做交互项目的根基所在，通过对以下属性的相应变换来得到丰富多彩的交互体验
 * x,y,scaleX,scaleY,skewX,skewY,rotation,visible,alpha
 */
AnnieRoot.displayObjectDemo=AnnieRoot.displayObjectDemo||{};
displayObjectDemo.DisplayObjectDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.click_btn=null;s.s1_mc=null;s.s2_mc=null;s.s3_mc=null;s.s4_mc=null;s.s5_mc=null;s.s6_mc=null;s.s7_mc=null;s.s8_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"displayObjectDemo","DisplayObjectDemo");
    var nameList = ["Bitmap", "Shape","TextField","Input","FloatDisplay","Sprite","MovieClip","Stage"];
    for(var i=0;i<nameList.length;i++){
    	//这里使用中括号来获取对象是非常方便的，你是不是也会了呢？
    	s["s"+(i+1)+"_mc"].msg_txt.text=nameList[i];
	}
	//养成设置mouseChildren=false的好习惯，更好的建议是使用hitArea属性
	s.click_btn.mouseChildren=false;
    var s1X=s.s1_mc.x;
    var s2Y=s.s1_mc.y;
	s.click_btn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		s.s1_mc.x++;
		if(s.s1_mc.x>s1X+10){
			s.s1_mc.x=s1X;
		}
		s.s2_mc.y++;
		if(s.s2_mc.y>s2Y+10){
			s.s2_mc.y=s2Y;
		}
		s.s3_mc.alpha-=0.1;
		if(s.s3_mc.alpha<0){
			s.s3_mc.alpha=1;
		}
		s.s4_mc.scaleX+=0.1;
		s.s4_mc.scaleY+=0.1;
		if(s.s4_mc.scaleX>2){
			s.s4_mc.scaleX=s.s4_mc.scaleY=0.5;
		}
		s.s5_mc.rotation++;
		//这种使用取反的方法是否使用过？
		s.s6_mc.visible=!s.s6_mc.visible;
		s.s7_mc.skewX++;
		s.s8_mc.skewY++;
    })
};
A2xExtend(displayObjectDemo.DisplayObjectDemo,annie.Sprite);
