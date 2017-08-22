(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.CustomButton = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// txt
	this.label = new cjs.Text("Button", "24px Times", "#FFFFFF");
	this.label.textAlign = "center";
	this.label.lineHeight = 26;
	this.label.lineWidth = 128;
	this.label.setTransform(64.1,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.label}]}).wait(2));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s("#000000").ss(1,1,1).p("AKTClI0lAAIAAlJIUlAAIAAFJ").cp();
	this.shape.setTransform(66,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s("#000000").ss(1,1,1).p("AKTClI0lAAIAAlJIUlAAIAAFJ").cp();
	this.shape_1.setTransform(66,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,132,33);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;