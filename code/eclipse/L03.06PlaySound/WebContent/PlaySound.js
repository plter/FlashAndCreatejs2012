(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.PlaySound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		playSound("HélèneRollesCopaincopain");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;