/**
 * annieUI.ScratchCardDemo
 * 刮刮卡类，属性包括：reset 。
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.scratchCardDemo=AnnieRoot.scratchCardDemo||{};
scratchCardDemo.ScratchCardDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scratchCardDemo","ScratchCardDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造

	//注意本demo 在annie2x 4.2.1及以上版本才支持
	//使用annie.getResource获取库里面资源（音乐，视频，图片），这些资源都需要在库里面绑定类；
	var logoImg=annie.getResource("scratchCardDemo", "Logo");
	//将刮刮卡组件new出来，getBitmapStyle设置位图填充时需要使用的方法,一般给用户使用较少,Annie2x工具自动使用;
	var sc=new annieUI.ScratchCard(200,200,"#999",annie.Shape.getBitmapStyle(logoImg));
	sc.addEventListener("onDrawTime",function (e) {
		//用户刮了的进度，这里是实时侦听。
		console.log("第一张图已经刮了"+e.data.per+"%");
	});
	s.addChild(sc);
	sc.x=220;
	sc.y=150;
	//注意本demo 在annie2x 4.2.1及以上版本才支持
	//使用annie.getResource获取库里面资源（音乐，视频，图片），这些资源都需要在库里面绑定类；
	var img1 = annie.getResource("scratchCardDemo", "Two");
	var img2 = annie.getResource("scratchCardDemo", "One");
	var db2 = new annieUI.ScratchCard(512, 512, annie.Shape.getBitmapStyle(img2),annie.Shape.getBitmapStyle(img1));
	//注意本demo 在Flash2x 3.1.1及以上版本才支持
	s.addChild(db2);
	db2.x = 60;
	db2.y = 400;
	db2.addEventListener("onDrawTime",function (e) {
		//用户刮了的进度，这里是实时侦听。
		console.log("第二张图已经刮了"+e.data.per+"%");
	});
	s.addEventListener(annie.Event.ADD_TO_STAGE,function (e) {
		//要更换的被刮出来的图片,不赋值的话默认之前设置的；
		sc.reset();
		db2.reset();
	})
};
A2xExtend(scratchCardDemo.ScratchCardDemo,annie.Sprite);
