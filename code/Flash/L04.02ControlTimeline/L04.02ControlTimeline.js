(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.L0402ControlTimeline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		var __this=this;
		
		__this.stop();
		
		__this.playBtn.onClick=function(){
			__this.play();	
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(38));

	// btn
	this.playBtn = new lib.Symbol2();
	this.playBtn.setTransform(473.5,361.9,1,1,0,0,0,49.5,20.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playBtn}]}).wait(39));

	// Layer 1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(114,140,1,1,0,0,0,28,28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:121.9,y:143.6},0).wait(1).to({x:129.9,y:147.2},0).wait(1).to({x:137.8,y:150.8},0).wait(1).to({x:145.8,y:154.4},0).wait(1).to({x:153.7,y:158},0).wait(1).to({x:161.7,y:161.6},0).wait(1).to({x:169.6,y:165.2},0).wait(1).to({x:177.6,y:168.8},0).wait(1).to({x:185.5,y:172.4},0).wait(1).to({x:193.5,y:176.1},0).wait(1).to({x:201.4,y:179.7},0).wait(1).to({x:209.3,y:183.3},0).wait(1).to({x:217.3,y:186.9},0).wait(1).to({x:225.2,y:190.5},0).wait(1).to({x:233.2,y:194.1},0).wait(1).to({x:241.1,y:197.7},0).wait(1).to({x:249.1,y:201.3},0).wait(1).to({x:257,y:204.9},0).wait(1).to({x:265,y:208.5},0).wait(1).to({x:272.9,y:212.1},0).wait(1).to({x:280.9,y:215.7},0).wait(1).to({x:288.8,y:219.3},0).wait(1).to({x:296.8,y:222.9},0).wait(1).to({x:304.7,y:226.5},0).wait(1).to({x:312.7,y:230.1},0).wait(1).to({x:320.6,y:233.7},0).wait(1).to({x:328.5,y:237.3},0).wait(1).to({x:336.5,y:240.9},0).wait(1).to({x:344.4,y:244.6},0).wait(1).to({x:352.4,y:248.2},0).wait(1).to({x:360.3,y:251.8},0).wait(1).to({x:368.3,y:255.4},0).wait(1).to({x:376.2,y:259},0).wait(1).to({x:384.2,y:262.6},0).wait(1).to({x:392.1,y:266.2},0).wait(1).to({x:400,y:269.8},0).wait(1).to({x:408,y:273.4},0).wait(1).to({x:416,y:277},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(86,112,437,271);


// symbols:
(lib.Symbol2 = function() {
	this.initialize();

	// txt
	this.text = new cjs.Text("Play", "24px Times", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.setTransform(50.1,7);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CCFF").s("#000000").ss(1,1,1).p("AHvDRIvdAAIAAmhIPdAAIAAGh").cp();
	this.shape.setTransform(49.5,21);

	this.addChild(this.shape,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,99,42);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s("#000000").ss(1,1,1).p("AEYkXIAAIvIovAAIAAovIIvAA").cp();
	this.shape_1.setTransform(28,28);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56,56);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;