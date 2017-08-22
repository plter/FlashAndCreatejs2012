var cjs = createjs;
var stage = new cjs.Stage(document.getElementById("gameView"));

var blueRect = getRect('#0000FF', '#000000');
stage.addChild(blueRect);

var redRect = getRect('#FF0000', '#000000');
redRect.x=50;
redRect.y=50;
//stage.addChildAt(redRect,0);
stage.addChild(redRect);
stage.swapChildren(blueRect,redRect);



cjs.Ticker.setFPS(24);
cjs.Ticker.addListener(stage);

function getRect(fillColor,strokeColor){
	var s = new cjs.Shape();

	with(s.graphics){
		beginFill(fillColor);
		setStrokeStyle(3);
		beginStroke(strokeColor);
		rect(0,0,100,100);
		endFill();
		endStroke();
	}
	
	return s;
}