/*
* annie.unLoadScene
* 卸载不需要的场景
* */
AnnieRoot.unLoadSceneDemo = AnnieRoot.unLoadSceneDemo || {};
unLoadSceneDemo.UnLoadSceneDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*//*_a2x_need_end*/
    annie.initRes(s, "unLoadSceneDemo", "UnLoadSceneDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var button = new home.ItemButton();
    var testObj = null;//建对象池；
    button.initData(0, {name: "点击卸载场景"});
    //这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
    //我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
    //640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
    button.x = (640 - 526) / 2;
    button.y = 150;
    //直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
    button.hitArea = new annie.Rectangle(0, 0, 526, 92);
    s.addChild(button);
    //下面加载代码为做演示使用的，在页面能看到效果;
    annie.loadScene("testLoadFla", function (per) {
    }, function (result) {
        if (result.sceneId == result.sceneTotal) {
            //加载完成
            if (!testObj) {
                testObj = new testLoadFla.TestLoadFla();
            }
            //添加场景
            s.addChildAt(testObj, 0);
			s.addEventListener(annie.MouseEvent.CLICK, function (e) {
				//按钮的点击事件
				if (e.target.id == 0) {
					//先移除new出来的对象，然后再卸载场景资源。
					s.removeAllChildren();
					//"testLoadFla"是测试使用的，你可以改成你需要检测的场景名称；
					if (annie.isLoadedScene('testLoadFla'))
						annie.unLoadScene('testLoadFla');
				}
			})
        }
    });


};
A2xExtend(unLoadSceneDemo.UnLoadSceneDemo, annie.Sprite);
