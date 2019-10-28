/*
* annie.video
* 视频类，此类不建议使用，因为很大部分手机无法看到视频
* video的属性包括:play和pause,stop;
* H5视频建议做成原生的
* */
AnnieRoot.videoDemo=AnnieRoot.videoDemo||{};
videoDemo.VideoDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.video_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"videoDemo","VideoDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	//正式线上项目通过手机浏览的话，整个项目和视频的线上地址一定要用https的链接，否则有可能无法正常浏览；
	var isPLay=false;//设置一个点击播放和暂停的开关
	var videoPlayer = new annie.Video('resource/test.mp4',640,1040);
	var floatDisplay=new annie.FloatDisplay();
	floatDisplay.init(videoPlayer);
	s.video_mc.addChild(floatDisplay);
	//直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
	s.hitArea = new annie.Rectangle(0, 0, 640, 1040);
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//每次进入此页面时将参数初始化一遍,保证数据不混乱
		isPLay=false;
		videoPlayer.play();//播放视频
	});
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if (!isPLay){
			videoPlayer.pause();//暂停视频
			isPLay=true
		}else {
			videoPlayer.pause(false);//播放视频
			isPLay=false;
		}
	});
	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		//当视频页面移除舞台时，将视频停止
		videoPlayer.stop();//停止播放
	})
};
A2xExtend(videoDemo.VideoDemo,annie.Sprite);
