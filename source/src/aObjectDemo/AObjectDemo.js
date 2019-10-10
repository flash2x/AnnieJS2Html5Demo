/**
 * annie.AObject
 * annie引擎的基类，annie引擎所有类均继承此类，此类包含两个只卖属性。
 * 一个是instanceType,这个是实例对象的类型；一个是instanceId，这个是实例对象的唯一id。
 * 这两个属性在做一些类型判断或者对象池等应用中广泛使用，annie引擎中也有使用
 */
AnnieRoot.aObjectDemo=AnnieRoot.aObjectDemo||{};
aObjectDemo.AObjectDemo=function(){
	var s = this;
	annie.Sprite.call(s);
	/*_a2x_need_start*/s.msg_txt=null;/*_a2x_need_end*/
	annie.initRes(s,"aObjectDemo","AObjectDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var nameList = ["查看AObject.instanceType", "查看AObject.instanceId","查看此Demo类的instanceType","查看此Demo类的instanceId"];
    s.addEventListener(annie.Event.ADD_TO_STAGE, function (e) {
        //将变量声明放在循环的外面是一个非常好的习惯
        var button=null;
        for (var i = 0; i < nameList.length; i++) {
            button= new home.ItemButton();
            //这里为什么有一个initData方法，你们能看明白吗？
            button.initData(i, {name: nameList[i]});
            //这里不要直接获取button的宽，高。一来，因为刚刚初始化，宽高还没来的及更新，有可能不准确；二来获取显示对象的宽高本来就是一件很耗时的操作。
            //我们能在flash直接查看到宽高我们就直接使用，没必要动态获取
            //640-舞台大小，526-home.ItemButton的宽，现在将其放在舞台正中间
            button.x = (640 - 526) / 2;
            //92-home.ItemButton的高，20-每个按钮纵向间隔20像素，150-从舞台150像素位置开始放
            button.y = i * (92 + 20) + 150;
            //直接通hitArea去设置按钮的点击区域，相当于mouseEnable=true;mousechildren=false; 两句的功能，但比这两句功能效率高
            button.hitArea = new annie.Rectangle(0, 0, 526, 92);
            s.addChild(button);
        }
    });
    //通过监听button的父级可以统一监听button点击，在实际应用中推荐使用。
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        switch (e.target.id) {
            case 0:
                var aobj=new annie.AObject();
                s.msg_txt.text="aobj的instanceType:"+aobj.instanceType;
                trace(s.msg_txt.text);
                break;
            case 1:
                var aobj=new annie.AObject();
                s.msg_txt.text="aobj的instanceId:"+aobj.instanceId;
                trace(s.msg_txt.text);
                break;
            case 2:
                s.msg_txt.text="此demo类的InstanceType:"+s.instanceType;
                trace(s.msg_txt.text);
                break;
            case 3:
                s.msg_txt.text="此demo类的InstanceId:"+s.instanceId;
                trace(s.msg_txt.text);
                break;
        }
    })
	//大家知道为什么我们的Demo类也有AObject的那两个属性呢？这两个属性大家在平时的应用中能怎么使用呢？聪明的你一定想到了
};
A2xExtend(aObjectDemo.AObjectDemo,annie.Sprite);
