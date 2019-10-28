/**
 * annie.Tween
 * 全局静态单列类,不要实例化此类
 */
AnnieRoot.tweenDemo=AnnieRoot.tweenDemo||{};
tweenDemo.TweenDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.Rotate=null;s.UsebackInOut=null;s.Useloop=null;s.Useyoyo=null;s.ball=null;s.bigger=null;s.miss=null;s.move_x=null;s.move_y=null;/*_a2x_need_end*/
	annie.initRes(s,"tweenDemo","TweenDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	if (!s.gTimer) {
		s.gTimer = new annie.Timer(100, 1);
		s.gTimer.addEventListener(annie.Event.TIMER, s.gt = function (e) {
			s.start();
		});
		s.gTimer.start();
	}

	//点击事件后通过判断当前帧数改变按钮状态
	s.move_x.mouseChildren = false;
	s.move_y.mouseChildren = false;
	s.Useyoyo.mouseChildren = false;
	s.Useloop.mouseChildren = false;
	s.UsebackInOut.mouseChildren = false;
	s.Rotate.mouseChildren = false;
	s.bigger.mouseChildren = false;
	s.miss.mouseChildren = false;
	s.addEventListener(annie.MouseEvent.CLICK, function (e) {
		//判断e.target.name的名字来改变按钮的状态
		s.ResetAll();
		//改变x轴方向的数据
		if (e.target.name == "move_x") {
			if (s.move_y.currentFrame == 1) {
				s.move_x.gotoAndStop(2);
			} else {
				s.move_x.gotoAndStop(1);
			}
			s.gTimer.start();
			//改变y轴方向的数据
		}
		//改变y轴方向的数据
		else if (e.target.name == "move_y") {
			if (s.move_y.currentFrame == 1) {
				s.move_y.gotoAndStop(2);
			} else {
				s.move_y.gotoAndStop(1);
			}
			s.gTimer.start();
		}
		//使用yoyo的缓动类型
		else if (e.target.name == "Useyoyo") {
			if (s.Useyoyo.currentFrame == 1) {
				s.Useyoyo.gotoAndStop(2);
				s.Useloop.gotoAndStop(1);
			} else {
				s.Useyoyo.gotoAndStop(1);
			}
			s.gTimer.start();
		}
		//使用loop的缓动类型
		else if (e.target.name == "Useloop") {
			if (s.Useloop.currentFrame == 1) {
				s.Useloop.gotoAndStop(2);
				s.Useyoyo.gotoAndStop(1);
			} else {
				s.Useloop.gotoAndStop(1);
			}
			s.gTimer.start();
		}
		//使用backInOut的缓动类型
		else if (e.target.name == "UsebackInOut") {
			if (s.UsebackInOut.currentFrame == 1) {
				s.UsebackInOut.gotoAndStop(2);
			} else {
				s.UsebackInOut.gotoAndStop(1);
			}
			s.gTimer.start();
		}
		//改变球的旋转角度
		else if (e.target.name == "Rotate") {
			if (s.Rotate.currentFrame == 1) {
				s.Rotate.gotoAndStop(2);
			} else {
				s.Rotate.gotoAndStop(1);
			}
			s.gTimer.start();
		}
		//改变球的大小
		else if (e.target.name == "bigger") {
			if (s.bigger.currentFrame == 1) {
				s.bigger.gotoAndStop(2);
			} else {
				s.bigger.gotoAndStop(1)
			}
			s.gTimer.start();
		}
		//改变球的透明度
		else if (e.target.name == "miss") {
			if (s.miss.currentFrame == 1) {
				s.miss.gotoAndStop(2);
			} else {
				s.miss.gotoAndStop(1);
			}
			s.gTimer.start();
		}
	})
};
A2xExtend(tweenDemo.TweenDemo,annie.Sprite);
//共同使用代码
tweenDemo.TweenDemo.prototype.ResetAll = function () {
	var s = this;
	//killAll()移除掉所有tween事件，也可以用kill()来移除
	annie.Tween.killAll();
	//让球回复初始状态
	s.ball.x = 80;
	s.ball.y = 707;
	s.ball.rotation = 0;
	s.ball.scaleX = 1;
	s.ball.scaleY = 1;
	s.ball.alpha = 1;
};

tweenDemo.TweenDemo.prototype.start = function () {
	var s = this;
	var tweenData = {};
	//定义一个空数组，存放点击不同按钮后需要改变的数据
	if (s.move_x.currentFrame == 2) {
		tweenData.x = 586;
		//往x轴方向移动
	}
	if (s.move_y.currentFrame == 2) {
		tweenData.y = 214;
		//往y轴方向移动
	}
	if (s.Useyoyo.currentFrame == 2) {
		tweenData.yoyo = true;
		//来回循环
	}
	if (s.Useloop.currentFrame == 2) {
		tweenData.loop = true;
		//单向循环
	}
	if (s.UsebackInOut.currentFrame == 2) {
		tweenData.ease = annie.Tween.backInOut();
		//使用backInOut缓动类型
	}
	if (s.Rotate.currentFrame == 2) {
		tweenData.rotation = 360
		//旋转角度，数字代表旋转的度数
	}
	if (s.bigger.currentFrame == 2) {
		tweenData.scaleX = 2;
		tweenData.scaleY = 2;
		//缩放图形，数字表示缩放倍数
	}
	if (s.miss.currentFrame == 2) {
		tweenData.alpha = 0;
		//改变图形透明度
	}
	//if判断条件为每个按钮的当前帧数
	annie.Tween.to(s.ball, 1, tweenData);
};

