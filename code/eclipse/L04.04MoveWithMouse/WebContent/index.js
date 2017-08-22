var cjs = createjs;

var stage = new cjs.Stage(document.getElementById("gameView"));
cjs.Ticker.setFPS(30);
cjs.Ticker.addListener(stage);


var bitmap = new cjs.Bitmap("1.jpg");
stage.addChild(bitmap);


stage.onMouseMove = function(event){
	bitmap.x=event.stageX;
	bitmap.y=event.stageY;
};