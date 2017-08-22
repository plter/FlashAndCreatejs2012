var cjs = createjs;

var stage = new cjs.Stage(document.getElementById("gameView"));
cjs.Ticker.setFPS(30);
cjs.Ticker.addListener(stage);



var rect = new cjs.Shape();
with(rect.graphics){
	beginFill("#0000FF");
	rect(0,0,100,100);
	endFill();
}
rect.x=32;
rect.y=15;
stage.addChild(rect);

var shapeOffsetX=0,shapeOffsetY=0;

rect.onPress=function(event){
	shapeOffsetX= event.target.x-event.stageX;
	shapeOffsetY=event.target.y-event.stageY;
	
	stage.onMouseMove=stageMouseMoveHandler;
};


function stageMouseMoveHandler(event){
	rect.x=event.stageX+shapeOffsetX;
	rect.y=event.stageY+shapeOffsetY;
}


stage.onMouseUp=function(){
	stage.onMouseMove=null;
};
