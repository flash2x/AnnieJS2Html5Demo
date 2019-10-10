window.home=window.home||{};
home.Home=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.title_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"home","Home");
	//声明好类菜单列表，其实可以配置一个json文件动态去加载以方便更新及调整。这里为了简便直接写到了这里
    s.classList = [];
    s.classList.push({name: "annie.Trace", scene: "traceDemo",classObj:"traceDemo.TraceDemo",title:"调试打印",isMake:true});
    s.classList.push({name: "annie.AObject", scene: "aObjectDemo",classObj:"aObjectDemo.AObjectDemo",title:"annie.AObject基类",isMake:true});
    s.classList.push({name: "annie.DisplayObject", scene: "displayObjectDemo",classObj:"displayObjectDemo.DisplayObjectDemo",title:"显示对象基类",isMake:true});
    s.classList.push({name: "annie.Bitmap", scene: "bitmapDemo",classObj:"bitmapDemo.BitmapDemo",title:"图形显示对象",isMake:true});
    s.classList.push({name: "annie.Shape", scene: "shapeDemo",classObj:"shapeDemo.ShapeDemo",title:"矢量显示对象",isMake:true});
    s.classList.push({name: "annie.TextField", scene: "textFieldDemo",classObj:"textFieldDemo.TextFieldDemo",title:"文本显示对象",isMake:true});
    s.classList.push({name: "annie.FloatDisplay", scene: "floatDisplayDemo",classObj:"floatDisplayDemo.FloatDisplayDemo",title:"悬浮显示对象",isMake:true});
    s.classList.push({name: "annie.Input", scene: "inputDemo",classObj:"inputDemo.InputDemo",title:"输入显示对象",isMake:true});
    s.classList.push({name: "annie.Sprite", scene: "spriteDemo",classObj:"spriteDemo.SpriteDemo",title:"容器显示对象",isMake:false});
    s.classList.push({name: "annie.MovieClip", scene: "movieClipDemo",classObj:"movieClipDemo.MovieClipDemo",title:"动画显示对象",isMake:false});
    s.classList.push({name: "annie.Stage", scene: "stageDemo",classObj:"stageDemo.StageDemo",title:"舞台显示对象",isMake:false});
    s.classList.push({name: "annie.getStagePixels", scene: "getStagePixelsDemo",classObj:"getStagePixelsDemo.GetStagePixelsDemo",title:"获取舞台指定区域像素值",isMake:false});
    s.classList.push({name: "annie.Event", scene: "eventDemo",classObj:"eventDemo.EventDemo",title:"事件类",isMake:false});
    s.classList.push({name: "annie.MouseEvent", scene: "mouseEventDemo",classObj:"mouseEventDemo.MouseEventDemo",title:"鼠标(触摸)事件",isMake:false});
    s.classList.push({name: "annie.TouchEvent", scene: "touchEventDemo",classObj:"touchEventDemo.TouchEventDemo",title:"多点触摸事件",isMake:false});
    s.classList.push({name: "annie.globalDispatcher", scene: "globalDispatcherDemo",classObj:"globalDispatcherDemo.GlobalDispatcherDemo",title:"单例事件触发器",isMake:false});
    s.classList.push({name: "annie.Timer", scene: "timerDemo",classObj:"timerDemo.TimerDemo",title:"定时器",isMake:false});
    s.classList.push({name: "annie.Tween", scene: "tweenDemo",classObj:"tweenDemo.TweenDemo",title:"Tween",isMake:false});
    s.classList.push({name: "annie.Sound", scene: "soundDemo",classObj:"soundDemo.SoundDemo",title:"声音",isMake:false});
    s.classList.push({name: "annie.Video", scene: "videoDemo",classObj:"videoDemo.VideoDemo",title:"视频",isMake:false});
    s.classList.push({name: "annie.Filters", scene: "filtersDemo",classObj:"filtersDemo.FiltersDemo",title:"滤镜",isMake:false});
    s.classList.push({name: "annie.Point", scene: "pointDemo",classObj:"pointDemo.PointDemo",title:"Point",isMake:false});
    s.classList.push({name: "annie.Rectangle", scene: "rectangleDemo",classObj:"rectangleDemo.RectangleDemo",title:"Rectangle",isMake:false});
    s.classList.push({name: "annie.Matrix", scene: "matrixDemo",classObj:"matrixDemo.MatrixDemo",title:"矩阵",isMake:false});
    s.classList.push({name: "annie.URLLoader", scene: "urlLoaderDemo",classObj:"urlLoaderDemo.UrlLoaderDemo",title:"资源加载类",isMake:false});
    s.classList.push({name: "annie.Ajax", scene: "ajaxDemo",classObj:"ajaxDemo.AjaxDemo",title:"Ajax",isMake:false});
    s.classList.push({name: "annie.jsonp", scene: "jsonpDemo",classObj:"jsonpDemo.JsonpDemo",title:"jsonp",isMake:false});
    s.classList.push({name: "annie.navigateToURL", scene: "navigateToURLDemo",classObj:"navigateToURLDemo.NavigateToURLDemo",title:"链接跳转",isMake:false});
    s.classList.push({name: "annie.sendToURL", scene: "sendToURLDemo",classObj:"sendToURLDemo.SendToURLDemo",title:"向后台只传不收",isMake:false});
    s.classList.push({name: "annie.getQueryString", scene: "getQueryStringDemo",classObj:"getQueryStringDemo.GetQueryStringDemo",title:"获取地址栏上的参数",isMake:false});
    s.classList.push({name: "annie.LoadScene", scene: "loadSceneDemo",classObj:"loadSceneDemo.LoadSceneDemo",title:"加载场景",isMake:false});
    s.classList.push({name: "annie.isLoadedScene", scene: "isLoadedSceneDemo",classObj:"isLoadedSceneDemo.IsLoadedSceneDemo",title:"判断场景是否加载完成",isMake:false});
    s.classList.push({name: "annie.unLoadScene", scene: "unLoadSceneDemo",classObj:"unLoadSceneDemo.unLoadSceneDemo",title:"卸载加载过的场景",isMake:false});
    s.classList.push({name: "annie.toDisplayDataURL", scene: "toDisplayDataURLDemo",classObj:"toDisplayDataURLDemo.ToDisplayDataURLDemo",title:"将显示对象截图",isMake:false});
    s.classList.push({name: "annie.osType", scene: "osTypeDemo",classObj:"osTypeDemo.OsTypeDemo",title:"判断系统类型",isMake:false});
    s.classList.push({name: "annieUI.ScrollPage", scene: "scrollPageDemo",classObj:"scrollPageDemo.ScrollPageDemo",title:"长页面组件",isMake:false});
    s.classList.push({name: "annieUI.ScrollList", scene: "scrollListDemo",classObj:"scrollListDemo.ScrollListDemo",title:"滚动列表组件",isMake:false});
    s.classList.push({name: "annieUI.SlidePage", scene: "slidePageDemo",classObj:"slidePageDemo.SlidePageDemo",title:"翻页组件",isMake:false});
    s.classList.push({name: "annieUI.FlipBook", scene: "flipBookDemo",classObj:"flipBookDemo.FlipBookDemo",title:"电子杂志组件",isMake:false});
    s.classList.push({name: "annieUI.FacePhoto", scene: "facePhotoDemo",classObj:"facePhotoDemo.FacePhotoDemo",title:"头像或图片加载组件",isMake:false});
    s.classList.push({name: "annieUI.DrawingBoard", scene: "drawingBoardDemo",classObj:"drawingBoardDemo.DrawingBoardDemo",title:"画板组件",isMake:false});
    s.classList.push({name: "annieUI.ScratchCard", scene: "scratchCardDemo",classObj:"scratchCardDemo.ScratchCardDemo",title:"刮刮卡组件",isMake:false});
    s.classList.push({name: "annieUI.Scroller", scene: "scrollerDemo",classObj:"scrollerDemo.ScrollerDemo",title:"Scroller管理类",isMake:false});
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        if(!e.target.title_txt)return;
        if (!s.classList[e.target.id].isMake){
            alert(e.target.title_txt.text + "还在开发中,敬请期待!");
        }else{
            annie.globalDispatcher.dispatchEvent("onChangeContent",e.target.data);
        }
    });
    //声明一个列表，将他们装起来
    var sl=new annieUI.ScrollList(home.ItemButton,580,100,580,1040-96);
    s.addChild(sl);
    sl.updateData(s.classList,true);
    sl.y=108;
    sl.x=56;
};
A2xExtend(home.Home,annie.Sprite);
