/*
* annie.loadScene
* 加载场景
* 这个加载方法，我们一般会在main.js里面进行书写，Annie2x工具也会生成一个。
* 如果页面资源过多，那就需要考虑到分布加载，这时你可以重新写一个加载。
*  */
AnnieRoot.loadSceneDemo = AnnieRoot.loadSceneDemo || {};
loadSceneDemo.LoadSceneDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*//*_a2x_need_end*/
    annie.initRes(s, "loadSceneDemo", "LoadSceneDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var button = new home.ItemButton();
    var loadObj = new loading.Loading();
    button.initData(0, {name: "点击加载场景"});
    //这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
    //我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
    //640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
    button.x = (640 - 526) / 2;
    button.y = 150;
    //直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
    button.hitArea = new annie.Rectangle(0, 0, 526, 92);
    s.addChild(button);
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
		//判断是否点击到按钮；
		if (e.target.id == 0) {
            //做个示例，我们加载个testLoadFla
			s.addChild(loadObj);
            annie.loadScene("testLoadFla", function (per) {
            	//加载百分比
                loadObj.per_txt.text = per + "%";
            }, function (result) {
                if (result.sceneId == result.sceneTotal) {
                    //这里面就是场景加载完成，就可以显示你加载完成的页面；
                    s.removeAllChildren();
                    s.addChild(new testLoadFla.TestLoadFla());
                }
            })
        }
    })
};
A2xExtend(loadSceneDemo.LoadSceneDemo, annie.Sprite);
