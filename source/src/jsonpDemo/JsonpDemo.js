/*
* annie.jsonp
* *jsonp分为两种：data型jsopn和方法型jsonp，在Annie2x中jsonp请求会带有两个参数一个是0，另一个是1,0是代表data型jsonp,1是代表方法型jsonp；
* 首先data型jsonp，是和ajax获取数据类型有异曲同工之妙，只不过不同的是jsonp它是可以跨域请求的，并且它需要有一个后端用变量去储存，然后传给你。
* 最后方法型jsonp,是后端创建一个方法，然后你用jsonp去调用，具体操作请看下面代码。
* */
AnnieRoot.jsonpDemo=AnnieRoot.jsonpDemo||{};
jsonpDemo.JsonpDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.erCode_mc=null;s.getData_btn=null;s.getFn_btn=null;s.message_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"jsonpDemo","JsonpDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造

	//这里的mousechildren=false，是阻止往下冒泡，在点击事件里我们通过e.target.name，知道你点击的是哪一个，然后在里面进行操作；
	s.getData_btn.mouseChildren=false;
	s.getData_btn.mouseChildren=false;
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		//在这里如果有两个以上的点击事件，我建议你可以选择switch,这样会显得代码不是很杂。
		if(e.target.name=="getData_btn"){
			annie.jsonp('resource/messageUrl.js', 0, 'callback', function (result) {
				//初始化数据，是为了让你们能看到两种不同获取json数据的方式
				initData();
				sameFn(result,1);
			})
		}else{
			annie.jsonp('resource/messageFn.js', 1, 'callback', function (result) {
				//初始化数据，是为了让你们能看到两种不同获取json数据的方式
				initData();
				sameFn(result,2);
			})
		}

	});
	//信息填入
	function sameFn(result,colorType) {
		s.message_mc.companyName_txt.text = result.companyName;
		s.message_mc.qqCode_txt.text = result.qqCode;
		s.message_mc.askWeb_txt.text = result.askWeb;
		s.message_mc.annieWeb_txt.text = result.annieWeb;
		if (colorType==1){
			s.message_mc.companyName_txt.color="#ff0000";
			s.message_mc.qqCode_txt.color="#ff0000";
			s.message_mc.askWeb_txt.color="#ff0000";
			s.message_mc.annieWeb_txt.color="#ff0000";
		}else{
			s.message_mc.companyName_txt.color="#00ff00";
			s.message_mc.qqCode_txt.color="#00ff00";
			s.message_mc.askWeb_txt.color="#00ff00";
			s.message_mc.annieWeb_txt.color="#00ff00";
		}
	}
	//初始化数据；
	function initData() {
		s.message_mc.companyName_txt.text = "";
		s.message_mc.qqCode_txt.text = "";
		s.message_mc.askWeb_txt.text = "";
		s.message_mc.annieWeb_txt.text = "";
		s.erCode_mc.image_mc.removeAllChildren();
	}
};
A2xExtend(jsonpDemo.JsonpDemo,annie.Sprite);
