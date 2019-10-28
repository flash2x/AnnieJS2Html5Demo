/**
 * annieUI.FlipBook
 * 电子杂志类，属性包括：endPage flipTo prevPage  nextPage  startPage  canFilp  totalPage。
 * 电子杂志组件一般使用需要什么翻书效果的交互上，翻页效果是不需要去做任何动画的。
 * 这里说下，翻页的页数尽量是选择偶数；
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.flipBookDemo=AnnieRoot.flipBookDemo||{};
flipBookDemo.FlipBookDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"flipBookDemo","FlipBookDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	//首先将翻页组件new出来
	//页面的对象提前进行new出来，避免资源过多加载
	var page1=new flipBookDemo.OnePage();
	var page2=new flipBookDemo.TwoPage();
	var  fp=new annieUI.FlipBook(320,640,8,function (index) {
		//通过此回调获取指定页的内容的显示对象
		var p=null;
		if(index%2==0){
			p=page1
		}else{
			p=page2;
		}
		p.page_txt.text="第"+index+"页";
		return p;
	});
	//翻页到第二个页面
	fp.flipTo(2);
	//通过设置 canFlip 为false 让杂志自身无法执行翻页效果
	fp.canFlip=true;
	s.addChild(fp);
	fp.y=200;
};
A2xExtend(flipBookDemo.FlipBookDemo,annie.Sprite);
