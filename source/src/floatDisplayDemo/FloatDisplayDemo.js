/**
 * annie.FloatDisplay
 * FloatDisplay类是一个非常重要的类，他弥补了有些功能无法在Canvas里实现的一些功能。比如，上传组件，长按二维码识别，下拉选择组件等等。
 * 任何html组件或者组合组件都能被转换成FloatDisplay.转换的最主要的目的就是为了保持和canvas尺寸的一至性
 * 最最重要的一点就是如果html组件，或者组合的最外层元素没有明确设置style样式的宽和高，那么，这个floatDisplay对象将无法触发annie.MouseEvent事件，
 * 当然自身的html相关的事件还是可以触发的。
 */
AnnieRoot.floatDisplayDemo = AnnieRoot.floatDisplayDemo || {};
floatDisplayDemo.FloatDisplayDemo = function () {
    var s = this;
    annie.Sprite.call(s);
    /*_a2x_need_start*/
    s.box_mc = null;
    /*_a2x_need_end*/
    annie.initRes(s, "floatDisplayDemo", "FloatDisplayDemo");
    //声明一个放上传的图片的容器
    var bitmapCon = new annie.Sprite();
    s.addChild(bitmapCon);
    var bitmap = null;
    var image = null;
    bitmapCon.x = 640 / 2;
    bitmapCon.y = 1040 / 2;
    //声明一个上传组件的html元素,当然你也可以直接通过document.getElementById()及其他任何可以获取到html元素引用的方法。我这里是动态创建的
    var file = document.createElement("input");
    file.type = "file";
    file.style.width = "320px";
    file.style.height = "480px";
    file.onchange = function () {
        var fileReader = new FileReader();
        var fileObj = file.files[0];
        if (fileObj != null) {
            //将上传上来的文件以base64格式读取出来
            fileReader.readAsDataURL(fileObj);
            //fileReader读取内容是异步的，所以需要完成事件
            fileReader.onload = function (e) {
                var base64Data = fileReader.result;
                //想想为什么要这么判断，有什么好处
                if (!image) {
                    image = new Image();
                    //只有在加载完成事件里才能获取到image的宽和高，这点一定要记住
                    image.onload = function (evt) {
                        //想想为什么这么判断，有什么好处
                        if (!bitmap)
                            bitmap = new annie.Bitmap(image);
                        //思考下以下的这些操作是否明白为什么要这么做？
                        var maxPx=480;
                        var w=image.width;
                        var h=image.height;
                        var per=1;
                        if(w>h){
                            if(w>maxPx){
                                per=maxPx/w;
                                h*=per;
                                w=maxPx;
                            }
                        }else{
                            if(h>maxPx){
                                per=maxPx/h;
                                w*=per;
                                h=maxPx;
                            }
                        }
                        bitmap.scaleX=bitmap.scaleY=per;
                        bitmap.x = -w*0.5;
                        bitmap.y = -h*0.5;
                        //获取上传的图片的方向，有些时候在移动端的图片可能方向不对，需要调整
                        var orientation = floatDisplayDemo.getOrientation(floatDisplayDemo.base64ToArrayBuffer(base64Data));
                        //orientation = 1,         // Horizontal (Default)
                        //orientation = 2,         // Mirror Horizontal
                        //orientation  = 3,        // Rotate 180
                        //orientation = 4,         // Mirror vertical
                        //orientation = 5,         // Mirror horizontal and rotate 270 CW
                        //orientation = 6,         // Rotate 90 CW
                        //orientation = 7,         // Mirror horizontal and rotate 90 CW
                        //orientation = 8          // Rotate 270 CW
                        switch (orientation) {
                            case 2:
                                bitmap.scaleX = -1;
                                break;
                            case 3:
                                bitmap.rotation = 180;
                                break;
                            case 4:
                                bitmap.scaleY = -1;
                                break;
                            case 5:
                                bitmap.scaleX = -1;
                                bitmap.rotation = 270;
                                break;
                            case 6:
                                bitmap.rotation = 90;
                                break;
                            case 7:
                                bitmap.scaleY = -1;
                                bitmap.rotation = 90;
                                break;
                            case 8:
                                bitmap.rotation = 270;
                                break;
                        }
                        bitmapCon.addChild(bitmap);
                        fd.visible=false;
                        s.box_mc.visible=false;
                        //打开再次上传的按钮
                    }
                }
                image.src = base64Data;
            };
        }
    };
    //声明一个floatDisplay对象准备封装，仔细看好步骤
    var fd = new annie.FloatDisplay();
    //初始化这步很重要，核心代码，不可缺少
    fd.init(file);
    fd.x = s.box_mc.x;
    fd.y = s.box_mc.y;
    fd.alpha = 0;
    //添加到显示容器中，核心代码，不可缺少
    s.addChild(fd);
};
A2xExtend(floatDisplayDemo.FloatDisplayDemo, annie.Sprite);
// base64转ArrayBuffer对象
floatDisplayDemo.base64ToArrayBuffer = function (base64) {
    base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
    var binary = atob(base64);
    var len = binary.length;
    var buffer = new ArrayBuffer(len);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < len; i++) {
        view[i] = binary.charCodeAt(i);
    }
    return buffer;
}
// ArrayBuffer对象Unicode码转字符串
floatDisplayDemo.getStringFromCharCode = function (dataView, start, length) {
    var str = '';
    var i;
    for (i = start, length += start; i < length; i++) {
        str += fromCharCode(dataView.getUint8(i));
    }
    return str;
};
// 获取jpg图片的exif的图片拍摄方向
floatDisplayDemo.getOrientation = function (arrayBuffer) {
    var dataView = new DataView(arrayBuffer);
    var length = dataView.byteLength;
    var orientation = 0;
    var exifIDCode;
    var tiffOffset;
    var firstIFDOffset;
    var littleEndian;
    var endianness;
    var app1Start;
    var ifdStart;
    var offset;
    var i;
    // Only handle JPEG image (start by 0xFFD8)
    if (dataView.getUint8(0) === 0xFF && dataView.getUint8(1) === 0xD8) {
        offset = 2;
        while (offset < length) {
            if (dataView.getUint8(offset) === 0xFF && dataView.getUint8(offset + 1) === 0xE1) {
                app1Start = offset;
                break;
            }
            offset++;
        }
    }
    if (app1Start) {
        exifIDCode = app1Start + 4;
        tiffOffset = app1Start + 10;
        if (getStringFromCharCode(dataView, exifIDCode, 4) === 'Exif') {
            endianness = dataView.getUint16(tiffOffset);
            littleEndian = endianness === 0x4949;

            if (littleEndian || endianness === 0x4D4D /* bigEndian */) {
                if (dataView.getUint16(tiffOffset + 2, littleEndian) === 0x002A) {
                    firstIFDOffset = dataView.getUint32(tiffOffset + 4, littleEndian);

                    if (firstIFDOffset >= 0x00000008) {
                        ifdStart = tiffOffset + firstIFDOffset;
                    }
                }
            }
        }
    }
    if (ifdStart) {
        length = dataView.getUint16(ifdStart, littleEndian);
        for (i = 0; i < length; i++) {
            offset = ifdStart + i * 12 + 2;
            if (dataView.getUint16(offset, littleEndian) === 0x0112 /* Orientation */) {

                // 8 is the offset of the current tag's value
                offset += 8;

                // Get the original orientation value
                orientation = dataView.getUint16(offset, littleEndian);

                // Override the orientation with its default value for Safari (#120)
                if (IS_SAFARI_OR_UIWEBVIEW) {
                    dataView.setUint16(offset, 1, littleEndian);
                }
                break;
            }
        }
    }
    //orientation = 1,         // Horizontal (Default)
    //orientation = 2,         // Mirror Horizontal
    //orientation  = 3,        // Rotate 180
    //orientation = 4,         // Mirror vertical
    //orientation = 5,         // Mirror horizontal and rotate 270 CW
    //orientation = 6,         // Rotate 90 CW
    //orientation = 7,         // Mirror horizontal and rotate 90 CW
    //orientation = 8          // Rotate 270 CW
    return orientation;
};
