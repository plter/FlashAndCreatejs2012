
var cjs = createjs;
var stage = new cjs.Stage(document.getElementById("gameView"));
cjs.Ticker.setFPS(30);
cjs.Ticker.addListener(stage);


function DragableRect(color){
	
	cjs.Shape.call(this);
	
	with(this.graphics){
		beginFill(color);
		rect(0,0,100,100);
		endFill();
	}
	
	this._startMouseX=0;
	this._startMouseY=0;
	this._startX=0;
	this._startY=0;
	this._offsetX=0;
	this._offsetY=0;
	
	this.onPress=function(event){
		
		this.parent.setChildIndex(this,this.parent.getNumChildren()-1);
		
		this._startMouseX=event.stageX;
		this._startMouseY=event.stageY;
		this._startX=this.x;
		this._startY=this.y;
		
		this.onTick=function(){
			this._offsetX=this.getStage().mouseX-this._startMouseX;
			this._offsetY=this.getStage().mouseY-this._startMouseY;
			
			this.x=this._startX+this._offsetX;
			this.y=this._startY+this._offsetY;
		};
		
		var __this = this;
		this.getStage().onMouseUp=function(){
			__this.onTick=null;
			__this.getStage().onMouseUp=null;
		};
	};
}
DragableRect.prototype=new cjs.Shape();


//red rect
var r = new DragableRect('#FF0000');
stage.addChild(r);
r = new DragableRect('#00FF00');
stage.addChild(r);