window.scratchCard=window.scratchCard||{};
scratchCard.ScratchCard=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*//*_a2x_need_end*/
	annie.initRes(s,"scratchCard","ScratchCard");
    //注意本demo 在annie 4.x及以上版本才支持
    var img = annie.Bitmap.convertToImage(new annie.Bitmap(annie.getResource("scratchCard", "Logo")), false);
    var sc=new annieUI.ScratchCard(200,200,"#999",annie.Shape.getBitmapStyle(img));
    sc.addEventListener("onDrawTime",function (e) {
        trace("第一张图已经刮了"+e.data.per+"%");
        if(e.data.per==100) {
            alert("已刮完");
        }
    });
    s.addChild(sc);
    sc.x=220;
    sc.y=150;
    //注意本demo 在annie 4.x及以上版本才支持
    var img1 = annie.Bitmap.convertToImage(new annie.Bitmap(annie.getResource("scratchCard", "Two")), false);
    var img2 = annie.Bitmap.convertToImage(new annie.Bitmap(annie.getResource("scratchCard", "One")), false);
    var db2 = new annieUI.ScratchCard(512, 512, annie.Shape.getBitmapStyle(img2),annie.Shape.getBitmapStyle(img1));
    //注意本demo 在annie 4.x及以上版本才支持
    s.addChild(db2);
    db2.x = 60;
    db2.y = 400;
    db2.addEventListener("onDrawTime",function (e) {
        trace("第二张图已经刮了"+e.data.per+"%");
        if(e.data.per==100) {
            alert("已刮完");
        }
    });
    //注意本demo 在annie 4.x及以上版本才支持
};
A2xExtend(scratchCard.ScratchCard,annie.Sprite);
