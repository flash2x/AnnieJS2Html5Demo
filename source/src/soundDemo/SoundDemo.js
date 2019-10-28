/**
 * annie.Sound
 * 声音类,需要通过代码控制音乐的，可以使用这个
 * 下面这个是示范，这个可能会有较少可能性，让音乐播放时，播放不了。
 * 所以我们一般音乐我们一般建议是放在fla的库里面，并绑定一个类，通过类去获取音乐，进行控制.
 */
AnnieRoot.soundDemo=AnnieRoot.soundDemo||{};
soundDemo.SoundDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.playBtn=null;s.playSecondBtn=null;/*_a2x_need_end*/
	annie.initRes(s,"soundDemo","SoundDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    //在ADD_TO_STAGE事件外定义变量为了避免每次进入页面都要var一次，浪费性能
	var soundPlayer1 = null;
	var soundPlayer2 = null;
	//判断两个按钮当前的状态，以此做出按钮提示文字和音乐播放与暂停的变化
	var isPlay = true;
	var isPlay2 = false;
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//页面添加到舞台的时候，让变量恢复到初始值
		s.playBtn.firstBtnText.text = "暂停音乐";
		s.playSecondBtn.firstBtnText.text = "停止2音乐";
		isPlay = true;
		isPlay2 = true;
		//新建一个annie.Sound装入变量中，并控制它播放
		soundPlayer1 = new annie.Sound('./resource/test2.mp3');
		soundPlayer1.play();//播放音乐
		//soundPlayer.pause();//暂停音乐
		//soundPlayer.stop();//停止音乐
	});

	//使用pause（）或者stop（）暂停音乐的play2（）不起作用。但使用stop2（）暂停音乐的play（）可以起作用。
	s.playBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//通过isPlay的当前状态对音乐做出相对于的操作，如果isPlay为true则暂停音乐，反之则播放音乐
		if (isPlay){
			isPlay = false;
			soundPlayer1.pause();//暂停音乐
			s.playBtn.firstBtnText.text = "播放音乐"
		}else {
			isPlay = true;
			soundPlayer1.pause(false);//播放音乐
			s.playBtn.firstBtnText.text = "暂停音乐"
		}
	});

	s.playSecondBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//通过isPlay2的当前状态对音乐做出相对于的操作，如果isPlay2为true则停止音乐，反之则播放音乐
		if (isPlay2){
			isPlay2 = false;
			soundPlayer1.stop2();//停止音乐
			s.playSecondBtn.firstBtnText.text = "播放2音乐"
		}else {
			isPlay2 = true;
			//play2（）的原理就是如果用户之前使用stop（）关闭过了，那调用这个方法就不会播放声音，如果没关闭则会播放声音。
			soundPlayer1.play2();//播放音乐
			s.playSecondBtn.firstBtnText.text = "停止2音乐"
		}
	})
};
A2xExtend(soundDemo.SoundDemo,annie.Sprite);
