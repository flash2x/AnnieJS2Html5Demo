window.facePhoto=window.facePhoto||{};
facePhoto.FacePhoto=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"facePhoto","FacePhoto");
    var photo1=new annieUI.FacePhoto();
    photo1.init("http://web.flash2x.org/Public/images/Flash2xLogo.png",100,100);
    s.addChild(photo1);
    photo1.x=220;
    photo1.y=200;
    var photo2=new annieUI.FacePhoto();
    photo2.init("http://web.flash2x.org/Public/images/Flash2xLogo.png",200,100,1);
    s.addChild(photo2);

};
A2xExtend(facePhoto.FacePhoto,annie.Sprite);
