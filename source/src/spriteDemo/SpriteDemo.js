/**
 * annie.Sprite
 * 显示对象的容器类,可以将其他显示对象放入其中,是annie引擎的核心容器类. Sprite 类是基本显示列表构造块。
 * 一个可显示图形并且也可包含子项的显示列表节点。 Sprite 对象与影片剪辑类似，但没有时间轴。
 * Sprite 是不需要时间轴的对象的相应基类。 例如，Sprite 将是通常不使用时间轴的用户界面 (UI) 组件的逻辑基类
 */
AnnieRoot.spriteDemo = AnnieRoot.spriteDemo || {};
spriteDemo.SpriteDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/
    s.change_btn = null;
    s.cleanAll_btn = null;
    s.clean_btn = null;
    s.click_btn = null;
    s.testBox = null;/*_a2x_need_end*/
    annie.initRes(s, "spriteDemo", "SpriteDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var image1 = null;
    var image2 = null;
    var bitmap = null;
    var bitmap1 = null;
    var canRemoveOther = false;
    //养成设置mouseChildren=false的好习惯，更好的建议是使用hitArea属性
    s.click_btn.mouseChildren = false;

    s.click_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //每次添加对象进入容器前都将容器清空一遍
        s.testBox.removeAllChildren();
        //分别判断iamge2和image1是否为空，为空才new一张图进去，避免反复new图片造成功能损耗
        if (!image2) {
            image2 = new Image();
            image2.src = "resource/logo.png";
            image2.onload = function (e) {
                bitmap = new annie.Bitmap(image2);
                s.testBox.addChild(bitmap);
            }
        } else {
            s.testBox.addChild(bitmap);
        }
        if (!image1) {
            image1 = new Image();
            image1.src = "resource/logo.png";
            image1.onload = function (e) {
                bitmap1 = new annie.Bitmap(image1);
                bitmap1.x = 100;
                s.testBox.addChildAt(bitmap1, 0);
            }
        } else {
            s.testBox.addChildAt(bitmap1, 0);
        }

        console.log("bitmap(左边的图片)的层级：", s.testBox.getChildIndex(bitmap));
        console.log("层级为1的对象信息：", s.testBox.getChildAt(1));
        console.log("bitmap1(右边的图片)的层级：", s.testBox.getChildIndex(bitmap1));
        console.log("层级为0的对象信息：", s.testBox.getChildAt(0));
    })

    s.change_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        s.testBox.swapChild(bitmap, bitmap1)
    })

    s.cleanAll_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //移除页面所有显示对象
        s.testBox.removeAllChildren();
    })

    s.clean_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //如果bitmap1存在，则指定将bitmap1移除舞台
        if (bitmap1) {
            canRemoveOther = true;
            s.testBox.removeChild(bitmap1);
        }

    })

};
A2xExtend(spriteDemo.SpriteDemo, annie.Sprite);
