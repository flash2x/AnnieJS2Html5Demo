/**
 * https://github.com/flash2x/AnnieJS
 */
window.A2xExtend = __extends;
window.addEventListener("load", function () {
    annie.debug = true;
    /**
     * 因为这是个文件是入口文件,加载时间越短越好,那么就需要这个文件里代码量越少越好，尽量在其他文件写项目逻辑
     * 装载引擎的Canvas的div的id,可以在一个页面同时放多个stage.
     * 设计尺寸的宽
     * 设计尺寸的高
     * FPS刷新率
     * 缩放模式
     * 渲染模式
     */
    var stage = new annie.Stage("annieEngine", 640, 1040, 30, annie.StageScaleMode.FIXED_HEIGHT, 0);
    //是否自动resize
    stage.autoResize=true;
    //是否自动旋转
    // stage.autoSteering=true;
    stage.addEventListener(annie.Event.ON_INIT_STAGE, function (e) {
        //想要同时加载多个场景的话，Annie2x.loadScene的第一个参数可以传数组如 ["scene1","scene2",...]
        annie.loadScene(["loading", "home"], function (per) {
            //加载进度
            console.log("加载进度:" + per + "%");
        }, function (result) {
            //加载完成 result 里包含了当前加载完成的是哪个场景序号，以及总加载场景数有多少，所以
            //需要同时加载多个模块时可以判断已经加载好的后直接出内容，其他偷偷在后台加载
            if (result.sceneId == result.sceneTotal) {
                //声明主要的菜单场景
                var homeObj = new home.Home();
                //声明统一返回按钮
                var backBtn = new home.BackBtn();
                //声明每个版块的title
                var titleMc = new home.TitleMc();
                //声明loading
                var loadObj = new loading.Loading();
                var currentObj = null;
                //将主菜单场景添加到显示列表的舞台中。
                stage.addChild(homeObj);
                //监听一个全局事件，如果有切换场景的事件触发，则切换到相应场景
                annie.globalDispatcher.addEventListener("onChangeContent", function (ge) {
                    //设置对应的title内容
                    titleMc.title_txt.text = ge.data.title;
                    if (annie.isLoadedScene(ge.data.scene)) {
                        //如果检测到之前已经加载过该场景了，则直接跳过加载直接显示内容
                        //如果加载完成先删除掉舞台中之前残留的所有显示对象
                        stage.removeAllChildren();
                        //可以看看这句代码。这个是借助annie.Eval动态去声明一个类。
                        currentObj = annie.Eval("new " + ge.data.classObj);
                        //再依次添加需要的显示内容
                        stage.addChild(currentObj);
                        stage.addChild(titleMc);
                        stage.addChild(backBtn);
                    } else {
                        //如果检测到没有加载过该场景了，则显示loading，等待加载完成再执行相应步骤
                        //如果加载完成先删除掉舞台中之前残留的所有显示对象
                        stage.removeAllChildren();
                        //显示loading
                        stage.addChild(loadObj);
                        loadObj.per_txt.text = "0%";
                        annie.loadScene(ge.data.scene, function (progress) {
                            loadObj.per_txt.text = progress + "%";
                        }, function (e) {
                            //如果加载完成先删除掉舞台中之前残留的所有显示对象,这里其实就是移除loading
                            stage.removeAllChildren();
                            if (currentObj) {
                                currentObj.destroy();
                            }
                            //可以看看这句代码。这个是借助annie.Eval动态去声明一个类。
                            currentObj = annie.Eval("new " + ge.data.classObj);
                            //再依次添加需要的显示内容
                            stage.addChild(currentObj);
                            stage.addChild(titleMc);
                            stage.addChild(backBtn);
                        })
                    }
                });
                //点击返回按钮后，返回到菜单主场景
                backBtn.addEventListener(annie.MouseEvent.CLICK, function (e) {
                    stage.removeAllChildren();
                    if (currentObj) {
                        //这里用了destroy，销毁一个场景，等待GC回收资源。大家注意销毁一个对象尽量把你自己声明的一些对象先释放，这样有利于垃圾回收。
                        currentObj.destroy();
                        currentObj = null;
                    }
                    stage.addChild(homeObj);
                })
            }
        });
    })
});
