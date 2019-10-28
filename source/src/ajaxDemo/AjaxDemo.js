/**
 * annie.Ajax
 * 向后台请求或者传输数据的快速简便方法,比直接用URLLoader要方便,小巧
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.ajaxDemo=AnnieRoot.ajaxDemo||{};
ajaxDemo.AjaxDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.erCode_mc=null;s.getData_btn=null;s.message_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"ajaxDemo","AjaxDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	s.getData_btn.mouseChildren=false;//阻止冒泡；
	//img  new在外面是为避免img重复添加导致页面资源过多造成画面卡顿
	var img = new Image();
	s.addEventListener(annie.MouseEvent.CLICK, function (e) {
		if (e.target.name=="getData_btn"){
			//这个方式通过Get方式去获取后台数据；
			// annie.ajax({
			// 	type: "GET",
			// 	//TODO （这里TODO起强调作用）请求后端数据的时候，请打开下面的地址。关闭本地json数据url,serverUrl是后端访问链接+接口名称
			// 	// 请求后端数据。正式打开下面url.
			// 	// url: serverUrl + "Home/Getinfo/getPersonInfo",
			// 	//请求本地json数据
			// 	url: "messageUrl.json",
			// 	responseType: 'json',//TODO （这里TODO起强调作用）这个参数是接收到后端传过来的数据时，解析的方式：text/json,一般不写这个话，默认的是：text
			// 	success: function (result) { //TODO  （这里TODO起强调作用）这里就是你处理后台数据的地方了
			// 		if (result.data.response.status == 0) {
			// 			sameFn(result);
			// 		} else {
			// 			alert("请求状态错误");
			// 		}
			// 	},
			// 	error: function (result) {
			// 		trace(result)
			// 	},//TODO  （这里TODO起强调作用）这里是后台数据返回错误信息的地方；
			// });

			//TODO （这里TODO起强调作用）这种是POST方式获取后台数据
			annie.ajax({
			    type: "POST",
			    //TODO （这里TODO起强调作用）请求后端数据的时候，请打开下面的地址。关闭本地json数据url,serverUrl是后端访问链接+接口名称
			    // 请求后端数据。正式打开下面url.
			    // url: serverUrl + "Home/Getinfo/getPersonInfo",
			    //请求本地json数据
			    url: "resource/messageUrl.json",
			    //data: {parameter: "你想传的数据"},//TODO  （这里TODO起强调作用）这里是前端向后端传送数据的参数，如果需要传送数据的话，请打开这个，在花括号内填写你传送的数据
			    responseType: 'json',//TODO  （这里TODO起强调作用）这个参数是接收到后端传过来的数据时，解析的方式：text/json,一般不写这个话，默认的是：text
			    success: function (result) {
			    	//这里成功回调；
			        trace(result)
					var resultData=result.data.response;
			        if (resultData.status == 0) {//TODO  （这里TODO起强调作用）这里就是你处理后台数据的地方了
			            sameFn(resultData);
			        } else {
			            alert("请求状态错误");
			        }
			    },
			    error: function (result) {
					//TODO  （这里TODO起强调作用）这里是后台数据返回错误信息的地方；
			        trace(result)
			    },
			});
		}
	});
	//多个地方相同代码，放在一起，用一个函数装着，这样，哪里有用到，随时可以调用，这样节约资源，也可以方便改动
	function sameFn(result) {
		s.message_mc.companyName_txt.text = result.companyName;
		s.message_mc.qqCode_txt.text = result.qqCode;
		s.message_mc.askWeb_txt.text = result.askWeb;
		s.message_mc.annieWeb_txt.text = result.annieWeb;
		img.src = result.imageUrl;
		img.onload=function () {
			var bitmap = new annie.Bitmap(img);
			bitmap.scaleX=bitmap.scaleY=0.5;
			s.erCode_mc.image_mc.addChild(bitmap);
		}
	}
};
A2xExtend(ajaxDemo.AjaxDemo,annie.Sprite);
