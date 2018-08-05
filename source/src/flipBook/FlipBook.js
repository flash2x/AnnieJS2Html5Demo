window.flipBook=window.flipBook||{};
flipBook.FlipBook=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"flipBook","FlipBook");
    var flip=new annieUI.FlipBook(332,640,7,function (index) {
        var p=null;
        if(index%2==0){
            p=new flipBook.OnePage();
        }else{
            p=new flipBook.TwoPage();
        }
        p.page_txt.text="第"+index+"页";
        return p;
    });
    flip.speed=0.4;
    s.addChild(flip);
    flip.y=200;
};
A2xExtend(flipBook.FlipBook,annie.Sprite);
