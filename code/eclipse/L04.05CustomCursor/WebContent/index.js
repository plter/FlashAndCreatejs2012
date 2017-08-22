var cjs = createjs;
var canvas = document.getElementById("gameView");

var stage = new cjs.Stage(canvas);
cjs.Ticker.setFPS(30);
cjs.Ticker.addListener(stage);

//stage.enableMouseOver();
//
//var s = new cjs.Shape();
//with(s.graphics){
//	beginFill("#0000FF");
//	rect(0,0,100,30);
//	endFill();
//}
//stage.addChild(s);
//s.onMouseOver=function(){
//	canvas.style.cursor = "pointer";
//};
//s.onMouseOut=function(){
//	canvas.style.cursor = "auto";
//};

var bitmap = new cjs.Bitmap("logo.png");
stage.addChild(bitmap);
bitmap.onTick=function(){
	bitmap.x=stage.mouseX;
	bitmap.y=stage.mouseY;
};




