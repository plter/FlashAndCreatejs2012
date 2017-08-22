

var btn;

function appInit(){
	
	stage.enableMouseOver();
	
	
	btn = new lib.Button();
	btn.x=100;
	btn.y=100;
	btn.label.text="Click me";
	
	btn.onMouseOver=function(){
		btn.gotoAndStop(1);
	};
	btn.onMouseOut=function(){
		btn.gotoAndStop(0);
	};
	
	exportRoot.addChild(btn);
	
	btn.onClick=function(){
		alert("Btn Clicked");
	};
}