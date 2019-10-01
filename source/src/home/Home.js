window.home=window.home||{};
home.Home=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.title_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"home","Home");
    s.classList = [];
    s.classList.push({name: "显示对象的拖动", scene: "drag",classObj:"drag.Drag",title:"鼠标拖动",isMake:true});
    s.classList.push({name: "显示对象的截图", scene: "cut",classObj:"cut.Cut",title:"显示对象截图",isMake:true});
    s.classList.push({name: "加载或提交数据", scene: "urlLoader",classObj:"urlLoader.UrlLoader",title:"加载示例",isMake:true});
    s.classList.push({name: "矢量对象初用", scene: "shape",classObj:"shape.Shape",title:"矢量示例",isMake:true});
    s.classList.push({name: "输入文本形式", scene: "input",classObj:"input.Input",title:"输入文本示例",isMake:true});
    s.classList.push({name: "长按保存二维码", scene: "saveImg",classObj:"saveImg.SaveImg",title:"配合Html标签示例",isMake:true});
    s.classList.push({name: "动画对象初步使用", scene: "movieClip",classObj:"movieClip.MovieClip",title:"动画示例",isMake:true});
    s.classList.push({name: "多点手指旋转缩放", scene: "multTouch",classObj:"multTouch.MultTouch",title:"多点手势示例",isMake:true});
    s.classList.push({name: "声音的使用", scene: "sound",classObj:"sound.Sound",title:"音乐播放示例",isMake:true});
    s.classList.push({name: "加载用户头像", scene: "facePhoto",classObj:"facePhoto.FacePhoto",title:"加载头像示例",isMake:true});
    s.classList.push({name: "电子杂志", scene: "flipBook",classObj:"flipBook.FlipBook",title:"电子杂志示例",isMake:true});
    s.classList.push({name: "画板", scene: "drawingBoard",classObj:"drawingBoard.DrawingBoard",title:"画板示例",isMake:true});
    s.classList.push({name: "刮刮卡", scene: "scratchCard",classObj:"scratchCard.ScratchCard",title:"刮刮卡示例",isMake:true});
    s.classList.push({name: "数据列表", scene: "scrollList",classObj:"scrollList.ScrollList",title:"滚动列表示例",isMake:true});
    s.classList.push({name: "长页面初用", scene: "scrollPage",classObj:"scrollPage.ScrollPage",title:"长页滚动示例",isMake:true});
    s.classList.push({name: "翻页组件", scene: "slidePage",classObj:"slidePage.SlidePage",title:"滑动翻页示例",isMake:true});
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if(!e.target.title_txt)return;
        if (!s.classList[e.target.id].isMake){
            alert(e.target.title_txt.text + "还在开发中,敬请期待!");
        }else{
            annie.globalDispatcher.dispatchEvent("onChangeContent",e.target.data);
        }
    });
    var sl=new annieUI.ScrollList(home.ItemButton,580,100,580,1040-96);
    s.addChild(sl);
    sl.updateData(s.classList,true);
    sl.y=108;
    sl.x=56;
};
A2xExtend(home.Home,annie.Sprite);
