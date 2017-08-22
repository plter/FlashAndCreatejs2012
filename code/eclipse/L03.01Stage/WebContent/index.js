
var cjs = createjs;

var stage = new cjs.Stage(document.getElementById("gameView"));

var txt = new cjs.Text("Hello CreateJS Stage");
stage.addChild(txt);
txt.color="#FF0000";

stage.update();