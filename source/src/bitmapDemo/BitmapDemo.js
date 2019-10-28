/**
 * annie.Bitmap
 * 图形显示类，一般可以用来显示图片，canvas,视频
 */
AnnieRoot.bitmapDemo = AnnieRoot.bitmapDemo || {};
bitmapDemo.BitmapDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/
    /*_a2x_need_end*/
    annie.initRes(s, "bitmapDemo", "BitmapDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var nameList = ["显示fla库中的位图", "显示同域名下位图", "显示网络位图", "显示canvas", "显示视频"];
    //为什么要先把变时声明好，是不想反复去new同一种类型的对象去浪费内存。
    var image1 = null;
    var image2 = null;
    var image3 = null;
    var image4 = null;
    var image5 = null;
    var bitmap = null;
    s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
        //将变量声明放在循环的外面是一个非常好的习惯
        var button = null;
        for (var i = 0; i < nameList.length; i++) {
            button = new home.ItemButton();
            //这里为什么有一个initData方法，你们能看明白吗？
            button.initData(i, {name: nameList[i]});
            //这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
            //我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
            //640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
            button.x = (640 - 526) / 2;
            //92-home.ItemButton的高，20-每个按钮纵向间隔20像素，150-从舞台150像素位置开始放
            button.y = i * (92 + 20) + 150;
            //直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
            button.hitArea = new annie.Rectangle(0, 0, 526, 92);
            s.addChild(button);
        }
    });
    function initBitmap(image) {
        if (!bitmap) {
            bitmap = new annie.Bitmap(image);
            bitmap.x = 10;
            bitmap.y = 700;
            s.addChild(bitmap);
        } else {
            bitmap.bitmapData = image;
        }
    }
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        switch (e.target.id) {
            case 0:
                //显示fla库中绑定的图片资源
                if (!image1)
                //在我们的bitmapDemo.fla的库中有一个MyLogo的绑定类图片资源
                    image1 = annie.getResource("bitmapDemo", "MyLogo");
                initBitmap(image1);
                break;
            case 1:
                //这里大家一定不要搞混了，这个Image类是Html自带的图片类，和你们平时用<img>..</img> 这种标签在页面中生成的图片是同一个东西
                if (!image2) {
                    image2 = new Image();
                    image2.src = "resource/logo.png";
                }
                initBitmap(image2);
                break;
            case 2:
                if (!image3) {
                    image3 = new Image();
                    //这里有个细节就是设置了跨域
                    image3.crossOrigin = "anonymous";
                    image3.src = "resource/logo.jpg";
                }
                initBitmap(image3);
                break;
            case 3:
                if (!image4) {
                    //这里只是为了演示可以用annie.Bitmap来显示canvas,至于canvas里是什么内容，这个大家可以自行发挥，我这里只是简单示意
                    //在移动端如果你的域名不是https的可能都无法播放，fuuuuuuk!
                    image4 = document.createElement("canvas");
                    image4.width = 200;
                    image4.height = 200;
                    var ctx = image4.getContext("2d");
                    ctx.fillStyle = "green";
                    ctx.rect(0, 0, 200, 200);
                    ctx.fill();
                }
                initBitmap(image4);
                break;
            case 4:
                //加载视频,视频不同时期在移动端有很多他娘的问题，我已尽力，如果你有幸需要制作有视频的项目，我只能祝你好运。
                //并且视频在移动端有可能需要点击事件才能播放
                if (!image5) {
                    //如果无法读取到网络上的视频可以试下本地的
                    //image5=new annie.Video("resource/test.mp4",320,176);
                    image5 = document.createElement("video");
                    image5.crossOrigin = "anonymous";
                    image5.width = 320;
                    image5.height = 176;
                    image5.autoplay = true;
                    image5.src = "resource/test.mp4";
                }
                initBitmap(image5);
                break;
        }
    })
};
A2xExtend(bitmapDemo.BitmapDemo, annie.Sprite);
