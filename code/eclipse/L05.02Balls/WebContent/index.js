
var STAGE_WIDTH=550;
var STAGE_HEIGHT=400;
var cjs = createjs;
var stage = new cjs.Stage(document.getElementById("gameView"));
cjs.Ticker.setFPS(30);
cjs.Ticker.addListener(stage);

function Ball(){
	cjs.Shape.call(this);
	
	with(this.graphics){
		beginFill("#CCCCCC");
		beginStroke("#333333");
		arc(0,0,Ball.R,0,Math.PI*2);
		endFill();
		endStroke();
	}
	
	this.speedX=Math.random()*5+1;
	this.speedY=Math.random()*5+1;
	
	this.onTick = function(){
		this.x+=this.speedX;
		this.y+=this.speedY;
		
		if(this.x>STAGE_WIDTH-Ball.R){
			this.speedX=-Math.abs(this.speedX);
		};
		if(this.y>STAGE_HEIGHT-Ball.R){
			this.speedY=-Math.abs(this.speedY);
		}
		if(this.x<Ball.R){
			this.speedX=Math.abs(this.speedX);
		}
		if(this.y<Ball.R){
			this.speedY=Math.abs(this.speedY);
		}
	};
}
Ball.prototype = new cjs.Shape();
Ball.R = 15;


//var b = new Ball();
//b.x=20;
//b.y=20;
//stage.addChild(b);


var b;
for ( var i = 0; i < 10; i++) {
	b=new Ball();
	b.y=Math.random()*300+50;
	b.x=Math.random()*400+50;
	stage.addChild(b);
}