/**
 * annieUI.DrawingBoard
 * 画板类，属性包括：drawColor,drawRadius,reset,cancel.
 * 具体使用方法，请看下面详细示范
 */
AnnieRoot.drawingBoardDemo=AnnieRoot.drawingBoardDemo||{};
drawingBoardDemo.DrawingBoardDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.canel_btn=null;/*_a2x_need_end*/
	annie.initRes(s,"drawingBoardDemo","DrawingBoardDemo");
	//上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
	var isAllCancel=false;
	//画板组件先new出来,按照api文档的示范，相对应的填入该组件所需要的属性；
	var db=new annieUI.DrawingBoard(500,500,"#000000");
	//设置画笔的颜色；
	db.drawColor="#ff0000";
	//设置画笔粗细；
	db.drawRadius=10;
	s.addChild(db);
	db.x=60;
	db.y=200;
	//mouseChildren=false是为了阻止鼠标冒泡，实现该位置的点击交互效果，如果有多个鼠标事件，就可以使用一个侦听，对多个按钮进行侦听，这样既优化了性能，又减少了你代码的书写;
	s.canel_btn.title_txt.text="撤消到第二步";
	s.canel_btn.mouseChildren=false;
	s.addEventListener(annie.MouseEvent.CLICK,function (e) {
		if (e.target.name=="canel_btn"){
			if (db.totalStepList.length>0){
				if (isAllCancel){
					s.canel_btn.title_txt.text="撤消到第二步";
					//全部撤消
					db.reset();
					isAllCancel=false;
				}else {
					//撤回到第二步;
					s.canel_btn.title_txt.text="全部撤消";
					db.cancel(2);
					isAllCancel=true;
				}
			}else {
				trace("请在画板作画，才能进行撤消")
			}
		}
	})
};
A2xExtend(drawingBoardDemo.DrawingBoardDemo,annie.Sprite);
