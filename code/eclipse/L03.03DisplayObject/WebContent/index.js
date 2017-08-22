var cjs = createjs;
var stage = new cjs.Stage(document.getElementById("gameView"));

//位图使用
var bitmap = new cjs.Bitmap("1.jpg");
stage.addChild(bitmap);

//图形的使用
var s = new cjs.Shape();
s.x=300;
s.y=100;

with(s.graphics){
	beginFill('#FF0000');
	setStrokeStyle(3);
	beginStroke('#0000FF');
	rect(0,0,100,100);
	endFill();
	endStroke();
}
stage.addChild(s);

var c = new cjs.Shape();
with(c.graphics){
	beginFill('#00FF00');
	arc(0,0,20,0,Math.PI*2);
	endFill();
}
c.x=300;
c.y = 250;
stage.addChild(c);

cjs.Ticker.setFPS(24);
cjs.Ticker.addListener(stage);

