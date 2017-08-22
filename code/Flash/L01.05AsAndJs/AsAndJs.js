(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.AsAndJs = function() {
	this.initialize();

	// timeline function:
	this.frame_0 = function() {
		alert("Hello JS");
	}

	this.frame_0();
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;