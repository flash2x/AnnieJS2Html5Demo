/*
* annie.toDisplayDataURL
* 截图，一般使用在用户长按识别二维码或需要用户长按保存图片
* 具体使用方法如下
* */
AnnieRoot.toDisplayDataURLDemo=AnnieRoot.toDisplayDataURLDemo||{};
toDisplayDataURLDemo.ToDisplayDataURLDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"toDisplayDataURLDemo","ToDisplayDataURLDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var button = new home.ItemButton();
	//img new在外面是为了资源优化
	var img=new Image();
	button.initData(0, {name: "点击截图"});
	//这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
	//我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
	//640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
	button.x = (640 - 526) / 2;
	button.y = 150;
	//直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
	button.hitArea = new annie.Rectangle(0, 0, 526, 92);
	s.addChild(button);
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//按钮点击
		if (e.target.id==0){
			//点击截图
			s.removeChild(button);
			//截出来是一个base64的图片地址，需要用img标签去存储
			img.src=annie.toDisplayDataURL(s,{
				x: 0,
				y: 0,
				width: 640,
				height: 1040
			}, {
				type: "jpeg",//数据类型jpg/png
				quality: 90//图片质量值1-100,png格式不需要设置quality
			}, '#000');
			//储存完成之后，需要将截出来的图浮在最上面一层，脱离canvas,方便用于长按识别或长按保存图片
			var f=new annie.FloatDisplay();
			f.init(img);
			s.addChild(f);
			//一般我们会将截出来的图，透明度改为0.
			f.alpha=0;
		}
	})
};
A2xExtend(toDisplayDataURLDemo.ToDisplayDataURLDemo,annie.Sprite);
