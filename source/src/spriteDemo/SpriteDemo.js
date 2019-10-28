AnnieRoot.spriteDemo = AnnieRoot.spriteDemo || {};
spriteDemo.SpriteDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/s.change_btn=null;s.cleanAll_btn=null;s.clean_btn=null;s.click_btn=null;s.testBox=null;/*_a2x_need_end*/
    annie.initRes(s, "spriteDemo", "SpriteDemo");
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
            bitmap = new annie.Bitmap(image2);
            s.testBox.addChild(bitmap);
        } else {
            s.testBox.addChild(bitmap);
        }
        if (!image1) {
            image1 = new Image();
            image1.src = "resource/logo.png";
            bitmap1 = new annie.Bitmap(image1);
            bitmap1.x = 100;
            s.testBox.addChildAt(bitmap1, 0);
        } else {
            s.testBox.addChildAt(bitmap1, 0);
        }

        console.log("bitmap(左边的图片)的层级：", s.testBox.getChildIndex(bitmap));
        console.log("层级为1的对象信息：", s.testBox.getChildAt(1));
        console.log("bitmap1(右边的图片)的层级：", s.testBox.getChildIndex(bitmap1));
        console.log("层级为0的对象信息：", s.testBox.getChildAt(0));
    })

    s.change_btn.addEventListener(annie.MouseEvent.CLICK, function (e) {
        s.testBox.swapChild(bitmap,bitmap1)
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
