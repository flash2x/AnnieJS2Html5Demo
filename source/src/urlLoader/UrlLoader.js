window.urlLoader=window.urlLoader||{};
urlLoader.UrlLoader=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.cssBtn=null;s.imageBtn=null;s.jsBtn=null;s.jsonBtn=null;s.textBtn=null;s.xmlBtn=null;/*_a2x_need_end*/
	annie.initRes(s,"urlLoader","UrlLoader");
    s.jsBtn.mouseChildren=false;
    s.jsonBtn.mouseChildren=false;
    s.imageBtn.mouseChildren=false;
    s.cssBtn.mouseChildren=false;
    s.xmlBtn.mouseChildren=false;
    s.textBtn.mouseChildren=false;
    var loader=new annie.URLLoader();
    loader.addEventListener(annie.Event.ERROR,function (e) {
        alert(e.data.msg);
    });
    loader.addEventListener(annie.Event.COMPLETE,function (e) {
        trace(e.data.response);
        switch(e.data.type){
            case "js":
                //加载完自己运行,无需处理
                break;
            case "json":
                //加载完后就是json对象
                break;
            case "css":
                //加载完后需要手动插入
                document.head.appendChild(e.data.response);
                break;
            case "text":
                break;
            case "image":
                //加载完后就是Image 标签对象
                var bitmap=new annie.Bitmap(e.data.response);
                s.addChild(bitmap);
                bitmap.x=220;
                bitmap.y=150;
                break;
        }});
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        switch(e.target.name){
            case "jsBtn":
                loader.responseType="js";
                loader.load("resource/urlLoader/test.js");
                break;
            case "jsonBtn":
                loader.responseType="json";
                loader.load("resource/urlLoader/test.json");
                break;
            case "cssBtn":
                loader.responseType="css";
                loader.load("resource/urlLoader/test.css");
                break;
            case "xmlBtn":
                loader.responseType="text";
                loader.load("resource/urlLoader/test.xml");
                break;
            case "textBtn":
                loader.responseType="text";
                loader.load("resource/urlLoader/test.txt");
                break;
            case "imageBtn":
                loader.responseType="image";
                loader.load("resource/urlLoader/test.png");
                break;
        }
    });
    s.addEventListener(annie.Event.REMOVE_TO_STAGE,function (e) {
        document.body.style.backgroundColor="#fff";
    })
};
A2xExtend(urlLoader.UrlLoader,annie.Sprite);
