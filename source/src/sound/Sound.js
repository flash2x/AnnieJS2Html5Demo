window.sound=window.sound||{};
sound.Sound=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.big_btn=null;s.cd_mc=null;s.claw_mc=null;s.end_txt=null;s.last_btn=null;s.mode_btn=null;s.next_btn=null;s.play_btn=null;s.small_btn=null;s.start_txt=null;s.stop_btn=null;s.time_mc=null;s.voice2_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"sound","Sound");
    //分钟变量；
    var minute = 0;
    //秒钟变量
    var secend = 0;
    //音乐循环状态跳帧变量
    var modeCount = 1;
    //获取音乐的总时长
    var myVid = 1;
    //音乐大小变化的跳帧变量；
    var voiceFrame = 10;
    //fla里没有stop，这样可以我多写代码，让它多次旋转；
    s.cd_mc.stop();
    s.time_mc.bar_mc.visible = false;
    var musicPlayList = [new annie.Sound(annie.getResource("sound", "Music")), new annie.Sound(annie.getResource("sound", "Music2"))];
    s.voice2_mc.gotoAndStop(voiceFrame);
    s.stop_btn.mouseEnable = false;
    s.small_btn.mouseChildren = false;
    s.big_btn.mouseChildren = false;
    s.musicPlay = musicPlayList[0];
    /**
     * 初始化
     * @parame
     */
    s.addEventListener(annie.Event.ADD_TO_STAGE, function () {
        for (var i = 0; i <= 1; i++) {
            s.musicPlay = musicPlayList[i];
            s.musicPlay.addEventListener(annie.Event.ON_PLAY_UPDATE, upDateHandle);
            s.musicPlay.addEventListener(annie.Event.ON_PLAY_END, endHandle);
        }
        s.play_btn.dispatchEvent(annie.MouseEvent.CLICK);
    });
    /**
     * 移出舞台
     * @parame
     */
    s.addEventListener(annie.Event.REMOVE_TO_STAGE, function (e) {
        s.musicPlay.stop();
    });
    /**
     * UpDate控制时间和进度条
     * @parame
     */
    function upDateHandle(e) {
        secend = Math.floor((e.data.currentTime) % 60);
        minute = (Math.floor((e.data.currentTime) / 60));
        if (secend < 10) {
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
        } else {
            s.start_txt.text = "0" + minute + ":" + secend;
        }
        s.time_mc.bar_mc.scaleX = (e.data.currentTime) / myVid;
    }
    /**
     * 播放结束时间
     */
    function endHandle(e) {
        s.differentHandle();
        s.musicPlay.stop();
        if (modeCount == 1) {
            if (s.musicPlay == musicPlayList[0]) {
                s.musicPlay = musicPlayList[1];
                s.sameHandle();
            } else {
                s.musicPlay = musicPlayList[0];
                s.sameHandle();
            }
        } else if (modeCount == 2) {
            s.sameHandle();
        } else if (modeCount == 3) {
            s.musicPlay = musicPlayList[(Math.floor(Math.random() * 2))];
            s.sameHandle();
        } else if (modeCount == 4) {
            if (s.musicPlay == musicPlayList[0]) {
                s.musicPlay = musicPlayList[1];
                s.sameHandle();
            } else {
                s.musicPlay.stop();
                s.differentHandle();
            }
        }
    }

    /**
     * 侦听CD盘手柄最后一帧
     */
    s.claw_mc.addEventListener(annie.Event.END_FRAME, function () {
        s.claw_mc.stop();
    });

    /**
     * 播放音乐和暂停音乐
     * @parame
     */
    s.play_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (s.play_btn.currentFrame == 1) {
            s.time_mc.bar_mc.visible = true;
            s.cd_mc.play();
            s.claw_mc.play();
            s.play_btn.gotoAndStop(2);
            s.stop_btn.gotoAndStop(2);
            s.stop_btn.mouseEnable = true;
            myVid = s.musicPlay.media.duration;
            s.end_txt.text = "0" + Math.floor(myVid / 60) + ":" + (myVid - (Math.floor(myVid / 60)) * 60);
            s.musicPlay.pause(false);
        } else if (s.play_btn.currentFrame == 2) {
            s.musicPlay.pause(true);
            s.cd_mc.stop();
            s.play_btn.gotoAndStop(1);
            s.stop_btn.gotoAndStop(2);
            s.stop_btn.mouseEnable = true;
            s.claw_mc.play(false);
        }
    });

    /**
     * 停止播放音乐
     * @parame
     */
    s.stop_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        if (s.play_btn.currentFrame == 1) {
            s.musicPlay.stop();
            s.stop_btn.alpha = 0.4;
            s.stop_btn.mouseEnable = false;
            secend = 0;
            minute = 0;
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
            s.end_txt.text = "0" + Math.floor(myVid / 60) + ":" + (myVid - (Math.floor(myVid / 60)) * 60);
        }else if (s.play_btn.currentFrame == 2) {
            s.differentHandle();
            s.musicPlay.stop();
            secend = 0;
            minute = 0;
            s.start_txt.text = "0" + minute + ":" + "0" + secend;
        }
    });

    /**
     * 上一曲
     * @parame
     */
    s.last_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        s.differentHandle();
        secend = 0;
        minute = 0;
        s.start_txt.text = "0" + minute + ":" + "0" + secend;
        s.musicPlay = musicPlayList[1];
        myVid = s.musicPlay.media.duration;
        s.end_txt.text = "0" + Math.floor(myVid / 60) + ":" + (myVid - (Math.floor(myVid / 60)) * 60);
        s.last_btn.alpha = 0.4;
        s.last_btn.mouseEnable = false;
        s.next_btn.alpha = 1;
        s.next_btn.mouseEnable = true;

    });
    /**
     * 下一曲
     * @parame
     */
    s.next_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        secend = 0;
        minute = 0;
        s.start_txt.text = "0" + minute + ":" + "0" + secend;
        s.musicPlay = musicPlayList[0];
        myVid = s.musicPlay.media.duration;
        s.end_txt.text = "0" + Math.floor(myVid / 60) + ":" + (myVid - (Math.floor(myVid / 60)) * 60);
        s.last_btn.alpha = 1;
        s.last_btn.mouseEnable = true;
        s.next_btn.alpha = 0.4;
        s.next_btn.mouseEnable = false;
        s.differentHandle();
    });

    /**
     * 声音控制
     * @parame
     */
    s.addEventListener(annie.MouseEvent.MOUSE_DOWN, function (e) {
        s.musicPlay.volume = 0.5;
        if (e.target.name == "small_btn") {
            s.voice2_mc.gotoAndStop(voiceFrame - 2);
            voiceFrame = voiceFrame - 2;
            s.musicPlay.volume -= 0.1;
            if (s.voice2_mc.currentFrame == 4) {
                s.small_btn.alpha = 0.4;
                s.musicPlay.volume = 0;
                s.small_btn.mouseEnable = false;
            }
            s.big_btn.alpha = 1;
            s.big_btn.mouseEnable = true;
        } else if (e.target.name == "big_btn") {
            s.voice2_mc.gotoAndStop(voiceFrame + 2);
            voiceFrame = voiceFrame + 2;
            s.small_btn.alpha = 1;
            s.small_btn.mouseEnable = true;
            s.musicPlay.volume += 0.1;
            if (s.voice2_mc.currentFrame == 20) {
                s.big_btn.alpha = 0.3;
                s.musicPlay.volume = 1;
                s.big_btn.mouseEnable = false;
            }
        }
    });

    /**
     * 音乐模式变换，只是进行跳帧处理
     * @parame
     */
    s.mode_btn.addEventListener(annie.MouseEvent.CLICK, function () {
        modeCount++;
        if (modeCount < 5) {
            s.mode_btn.gotoAndStop(modeCount);

        } else {
            modeCount = 1;
            s.mode_btn.gotoAndStop(1);
        }
    });
};
A2xExtend(sound.Sound,annie.Sprite);
/**
 * 暂停播放共同代码
 * @parame
 */
sound.Sound.prototype.differentHandle = function () {
    var s=this;
    if (s.claw_mc.currentFrame != 1) {
        s.claw_mc.play(false);
    }
    s.time_mc.bar_mc.scaleX=0.01;
    s.cd_mc.stop();
    s.play_btn.gotoAndPlay(1);
    s.stop_btn.gotoAndPlay(1);
    s.stop_btn.mouseEnable = false;
};
/**
 * 播放共同代码
 * @parame
 */
sound.Sound.prototype.sameHandle = function () {
    var s=this;
    setTimeout(function () {
        s.cd_mc.play();
        s.claw_mc.play();
        s.musicPlay.play();
    }, 1000);
    s.play_btn.gotoAndStop(2);
    s.stop_btn.gotoAndStop(2);
    s.last_btn.alpha = 1;
    s.next_btn.alpha = 1;
    s.last_btn.mouseEnable = true;
    s.last_btn.mouseEnable = true;
    s.stop_btn.mouseEnable = true;
    myVid = s.musicPlay.media.duration;
    s.end_txt.text = "0" + Math.floor(myVid / 60) + ":" + (myVid - (Math.floor(myVid / 60)) * 60);
};
