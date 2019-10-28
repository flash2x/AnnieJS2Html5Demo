AnnieRoot.movieClipDemo = AnnieRoot.movieClipDemo || {};
movieClipDemo.MovieClipDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/
    s.biaoQianText = null;
    s.midPlayBtn = null;
    s.midStopBtn = null;
    s.nextBtn = null;
    s.playBtn = null;
    s.preBtn = null;
    s.stopBtn = null;
    s.testCaton = null;/*_a2x_need_end*/
    annie.initRes(s, "movieClipDemo", "MovieClipDemo");

    s.playBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //播放动画
        s.testCaton.play()
    });

    s.stopBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //暂停动画
        s.testCaton.stop()
    });

    s.midPlayBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //从第25帧开始播放动画
        s.testCaton.gotoAndPlay(25)
    });

    s.midStopBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //将动画停在第25帧
        s.testCaton.gotoAndStop(25)
    });

    s.preBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //判断当前动画是否正在播放，若没有则执行代码，若有则不进行任何操作
        if (!s.testCaton.isPlaying) {
            console.log("操作前动画帧数：",s.testCaton.currentFrame);
            //将动画后退一帧
            s.testCaton.prevFrame()
            console.log("操作后动画帧数：",s.testCaton.currentFrame);
        }
    });

    s.nextBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if (!s.testCaton.isPlaying) {
            console.log("操作前动画帧数：",s.testCaton.currentFrame);
            //将动画前进一帧
            s.testCaton.nextFrame()
            console.log("操作后动画帧数：",s.testCaton.currentFrame);
        }
    });

    //动画到最后一帧时执行该函数
    s.testCaton.addEventListener(annie.Event.END_FRAME, function (e) {
        console.log("movieClip的当前帧的标签数组:", s.testCaton.getCurrentLabel());
        console.log("已经播放到最后一帧！")
    });


    //给第30帧动画添加一个回调函数（会覆盖之前添加的代码）
    s.testCaton.addFrameScript(30, function (e) {
        console.log("当前播放到30帧！");
    })


};
A2xExtend(movieClipDemo.MovieClipDemo, annie.Sprite);
