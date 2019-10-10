/**
 * trace
 * 全局调试打印函数，因为以前flash时代习惯所以增加了此方法。
 * 当然习惯js的 console 调试对象可以忽略此方法。本人也推荐使用console
 */
AnnieRoot.traceDemo = AnnieRoot.traceDemo || {};
traceDemo.TraceDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*//*_a2x_need_end*/
    annie.initRes(s, "traceDemo", "TraceDemo");
    //上面的代码Annie2x工具自动生成的，我们不要管他，也不要在它的上面去写代码，除非你看明白了Annie引擎的构造
    var nameList = ["打印数字", "打印字符串", "打印对象", "打印函数","多参数打印","用加号连接打印"];
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
    //随便声明一个方法一会打印用,没有任何逻辑意义。
    var testFun=function(){
        var test="哈哈，是我";
    };
    //通过监听button的父级可以统一监听button点击，在实际应用中推荐使用。
    s.addEventListener(annie.MouseEvent.CLICK, function (e) {
        //这里留给大家一个思考，为什么e.target有id属性
        switch (e.target.id) {
            case 0:
                //随便打印一个随机数字
                trace(Math.random());
                break;
            case 1:
                //请问这里的ran是做什么的？你学到了吗？
                var ran = Math.random();
                if (ran >= 0.5) {
                    trace("我爱Annie");
                } else {
                    trace("我爱小可");
                }
                break;
            case 2:
                //我们就打印e.target本身吧，你们去调试界面下看看，看能看到什么
                trace(e.target);
                break;
            case 3:
                var ran = Math.random();
                if(ran>0.5) {
                    //打印一个匿名函数
                    //给大家一个非常大的坑，看大家能不能爬出来，这里的this到底指什么
                    trace("匿名函数");
                    trace(this);
                }else{
                    //打印一个函数
                    trace("有名函数");
                    trace(testFun);
                }
                break;
            case 4:
                trace(Math.random(),"我是谁，我在哪",s);
                break;
            case 5:
                //你能发现这个跟case 4中的区别吗？想想看
                trace(Math.random()+"我是谁，我在哪"+s)

        }
    })
    //为什么home.ItemButton点击后会有颜色变深的效果？随着学习的深入你就会明白
};
A2xExtend(traceDemo.TraceDemo, annie.Sprite);
