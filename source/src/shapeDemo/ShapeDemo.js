/**
 * annie.Shape
 * 矢量显示类，一般复杂的矢量都是在fla文件中制作生成。矢量虽好，但是在移动端非常的吃性能，如非必要不要在项目中大量使用矢量。
 * 不是必须是矢量的元素应该将矢量元素在fla中转换为位图，这样会有很大的性能上的提升。
 * 如需要通过具体Api去实现矢量对象，请查阅annie官网API文档
 */
AnnieRoot.shapeDemo=AnnieRoot.shapeDemo||{};
shapeDemo.ShapeDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.bg_mc=null;s.border_mc=null;/*_a2x_need_end*/
	annie.initRes(s,"shapeDemo","ShapeDemo");
    s.border_mc.mouseEnable=false;
    s.bg_mc.mouseEnable=false;
    s.addEventListener(annie.MouseEvent.CLICK,function (e) {
        var r=(Math.random()*245+10)>>0;
        var g=(Math.random()*245+10)>>0;
        var b=(Math.random()*245+10)>>0;
        //annie.Shape的changeColor可以改变当前对象的颜色。
        e.target.changeColor({fillColor:"#"+r.toString(16)+g.toString(16)+b.toString(16)})
    });
};
A2xExtend(shapeDemo.ShapeDemo,annie.Sprite);
