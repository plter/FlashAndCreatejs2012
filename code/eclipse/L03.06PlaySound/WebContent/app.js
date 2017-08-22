var cjs = createjs;

var manifest=[{src:"sounds/Sound.mp3|sounds/Sound.ogg",id:"sound"}];

var loader = new cjs.PreloadJS(false);
loader.installPlugin(cjs.SoundJS);
loader.onComplete=function(){
	cjs.SoundJS.play("sound");
};
loader.loadManifest(manifest);