window.home=window.home||{};
home.Home=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.title_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"home","Home");
    s.classList = [];
    s.classList.push({name: "StartDrag", scene: "drag",classObj:"drag.Drag",title:"鼠标拖动",isMake:false});
    s.classList.push({name: "annie.URLLoader", scene: "urlLoader",classObj:"urlLoader.UrlLoader",title:"加载示例",isMake:false});
    s.classList.push({name: "annie.Shape", scene: "shapeColor",classObj:"shapeColor.ShapeColor",title:"矢量示例",isMake:false});
    s.classList.push({name: "annie.Input", scene: "input",classObj:"input.Input",title:"输入文本示例"});
    s.classList.push({name: "annie.FloatDisplay", scene: "saveImg",classObj:"saveImg.SaveImg",title:"配合Html标签示例",isMake:false});
    s.classList.push({name: "annie.MovieClip", scene: "movieClip",classObj:"movieClip.MovieClip",title:"动画示例",isMake:true});
    s.classList.push({name: "stage.MultiTouch", scene: "multTouch",classObj:"multTouch.MultTouch",title:"多点手势示例",isMake:false});
    s.classList.push({name: "stage.Sound", scene: "sound",classObj:"sound.Sound",title:"音乐播放示例",isMake:false});
    s.classList.push({name: "annieUI.FacePhoto", scene: "facePhoto",classObj:"facePhoto.FacePhoto",title:"加载头像示例",isMake:false});
    s.classList.push({name: "annieUI.FlipBook", scene: "flipBook",classObj:"flipBook.FlipBook",title:"电子杂志示例",isMake:false});
    s.classList.push({name: "annieUI.DrawingBoard", scene: "drawingBoard",classObj:"drawingBoard.DrawingBoard",title:"画板示例",isMake:true});
    s.classList.push({name: "annieUI.ScratchCard", scene: "scratchCard",classObj:"scratchCard.ScratchCard",title:"刮刮卡示例",isMake:false});
    s.classList.push({name: "annieUI.ScrollList", scene: "scrollList",classObj:"scrollList.ScrollList",title:"滚动列表示例",isMake:true});
    s.classList.push({name: "annieUI.ScrollPage", scene: "scrollPage",classObj:"scrollPage.ScrollPage",title:"长页滚动示例",isMake:true});
    s.classList.push({name: "annieUI.SlidePage", scene: "slidePage",classObj:"slidePage.SlidePage",title:"滑动翻页示例",isMake:false});
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
