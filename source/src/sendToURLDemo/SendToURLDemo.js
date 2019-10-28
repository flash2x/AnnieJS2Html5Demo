/**
 * annie.sendToURL
 *请求一个链接，但是只传数据不处理任何返回信息，如果向后台传送信息请使用GET方式；
 */
AnnieRoot.sendToURLDemo=AnnieRoot.sendToURLDemo||{};
sendToURLDemo.SendToURLDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"sendToURLDemo","SendToURLDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var button = new home.ItemButton();
	button.initData(0, {name: "发送数据"});
	//这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
	//我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
	//640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
	button.x = (640 - 526) / 2;
	//直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
	button.hitArea = new annie.Rectangle(0, 0, 526, 92);
	s.addChild(button);
	s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
		//整个手机可视区域的一半，这样按钮的坐标就在最中间，但要考虑到按钮是有高度的，要想 按钮在最中间，就要按钮坐标向上移按钮高度一半，这样就让按钮处于最中间
		button.y = (s.stage.viewRect.height / 2) - (button.height / 2);
	});
	s.addEventListener(annie.MouseEvent.CLICK, function (e) {
		//判断是否点击到按钮；
		if (e.target.id == 0) {
			//sendToURL 使用用途在统计和“心跳”，什么是‘心跳’？‘心跳’是为了检测此项目是否在运行中。
			annie.sendToURL("http://www.annie2x.com??key1=value&key2=value");
			trace("数据已发送，请在调试器中查看具体发送数据")
		}
	})
};
A2xExtend(sendToURLDemo.SendToURLDemo,annie.Sprite);
