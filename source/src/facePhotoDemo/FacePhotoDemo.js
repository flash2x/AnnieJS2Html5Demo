/**
 * annieUI.FacePhoto
 * 头像类，属性包括：init.
 * 这个类一般使用在显示用户的头像上，这样轻松快捷调用，相对于bitmap来说，显示头像使用，有两大优点
 * 1.从获取到用户头像到显示头像，使用的代码相对较少；
 * 2.bitmap变成圆形头像，还需要在flash里面做一个遮罩层，而FacePhoto不需要，给一个装头像的容器就可以；
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.facePhotoDemo=AnnieRoot.facePhotoDemo||{};
facePhotoDemo.FacePhotoDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"facePhotoDemo","FacePhotoDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var photo1=new annieUI.FacePhoto();
	photo1.init("resource/userImage.jpg",200,200,0);
	s.addChild(photo1);
	photo1.x=220;
	photo1.y=200;
	var photo2=new annieUI.FacePhoto();
	photo2.init("resource/userImage.jpg",200,200,1);
	s.addChild(photo2);
	photo2.x=220;
	photo2.y=500;
};
A2xExtend(facePhotoDemo.FacePhotoDemo,annie.Sprite);
