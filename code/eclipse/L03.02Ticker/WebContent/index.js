var cjs = createjs;

var stage = new cjs.Stage(document.getElementById("gameView"));

var txt  = new cjs.Text("Hello CreateJS");
txt.color='#f00';
txt.onTick=function(){
	txt.x++;
	txt.y++;
	
};

stage.addChild(txt);
//stage.update();

cjs.Ticker.setFPS(24);
cjs.Ticker.addListener(stage);

