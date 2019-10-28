AnnieRoot.timerDemo=AnnieRoot.timerDemo||{};
timerDemo.TimerDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.actionBtn=null;s.nowNum=null;s.replayBtn=null;s.stopBtn=null;/*_a2x_need_end*/
	annie.initRes(s,"timerDemo","TimerDemo");
	var nowTime = 10;
	//定义一个timmer类，事件间隔为1秒，一共执行10次
	var timer=new annie.Timer(1000,10);
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		s.actionBtn.actionText.text = "开始";
		nowTime = 10;
	});
	//annie.Timer定时器触发的事件
	timer.addEventListener(annie.Event.TIMER,function (e) {
		nowTime--;
		s.nowNum.text = nowTime;
	});
	//(TIMER_COMPLETE是annie.Timer定时器完成事件,)
	timer.addEventListener(annie.Event.TIMER_COMPLETE, function (e) {
		s.actionBtn.actionText.text = "开始";
		// 也可以在该事件中移除定时器
        // e.target.kill();
	});
	//点击按钮开始执行timmer
	s.actionBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if (!timer.running){
			//如果nowTime==0则说明timmer执行完成，此时将倒计时数字恢复到初始值，便于再次执行
			if(nowTime==0){
				nowTime = 10;
				s.nowNum.text = nowTime;
			}
			timer.start();
		}
	});
	//点击按钮暂停执行timmer
	s.stopBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if (timer.running){
			s.actionBtn.actionText.text = "继续";
			timer.stop();
		}
	});
	//点击按钮重置timmer，此时点击开始重新开始倒数
	s.replayBtn.addEventListener(annie.MouseEvent.CLICK,function (e) {
		nowTime = 10;
		s.nowNum.text = nowTime;
		s.actionBtn.actionText.text = "开始";
		timer.reset();
	});
	//定时器不用了，一定要记得杀死它
	s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
		timer.kill();
	})
	};
A2xExtend(timerDemo.TimerDemo,annie.Sprite);
