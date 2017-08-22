(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.UsingLib = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


// symbols:
(lib.Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(29));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("ADtDtInZAAIAAnZIHZAAIAAHZ").cp();
	this.shape.setTransform(23.8,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjqjkQBygDBzgBQB0gCB2AAQADBzABB0QACBzAAB1Qh0ADh0ABQhyACh1AAQgDhzgBhzQgChzAAh2").cp();
	this.shape_1.setTransform(23.6,23.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjpjcQBugFBygEQBxgEB1AAQAFBwAEByQAEBwAABzQhxAGhyAEQhvAEh0AAQgFhwgEhxQgEhwAAh1").cp();
	this.shape_2.setTransform(23.5,23.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjnjTQBqgJBvgFQBvgGBzAAQAJBrAFBwQAGBuAAByQhsAJhwAFQhtAGhyAAQgJhrgFhvQgGhvAAhy").cp();
	this.shape_3.setTransform(23.4,23.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjljLQBlgLBugIQBsgHByAAQALBnAIBtQAHBsAABxQhoALhtAIQhsAHhwAAQgLhngIhtQgHhsAAhx").cp();
	this.shape_4.setTransform(23.2,23.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjkjDQBigOBrgJQBrgKBwAAQAOBjAJBsQAKBpAABwQhkAOhsAJQhpAKhvAAQgOhjgJhrQgKhqAAhw").cp();
	this.shape_5.setTransform(23.1,23.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("Ajii7QBdgQBpgMQBpgLBvAAQAQBfAMBpQALBoAABtQhgARhpAMQhnALhuAAQgQhfgMhoQgLhoAAhv").cp();
	this.shape_6.setTransform(23,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjhizQBagTBngNQBmgOBuAAQATBbANBnQANBmABBsQhcAUhnANQhlANhsABQgUhbgNhnQgOhlAAhu").cp();
	this.shape_7.setTransform(22.8,22.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjfiqQBWgWBkgQQBkgPBsAAQAWBXAPBlQAQBjAABrQhYAWhlAPQhiAQhrAAQgWhXgQhkQgPhkAAhr").cp();
	this.shape_8.setTransform(22.7,22.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjdiiQBRgZBjgRQBigRBqAAQAZBSARBjQARBhAABqQhTAZhjARQhgARhqAAQgZhSgRhjQgRhhAAhq").cp();
	this.shape_9.setTransform(22.6,22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjciaQBOgbBggTQBggUBpAAQAbBPATBgQATBfABBoQhQAchgATQhfAThoABQgbhPgThgQgUhfAAhp").cp();
	this.shape_10.setTransform(22.5,22.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjaiSQBJgeBfgVQBdgVBoAAQAeBKAVBfQAVBcAABnQhLAfhfAVQhcAVhnAAQgehKgVheQgVhdAAho").cp();
	this.shape_11.setTransform(22.3,22.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjYiKQBFggBcgXQBbgXBnAAQAgBGAXBcQAXBbAABlQhHAhhcAXQhaAXhlAAQghhGgXhcQgXhaAAhn").cp();
	this.shape_12.setTransform(22.2,22.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjXiCQBBgjBagZQBZgZBmAAQAjBCAZBaQAYBZABBkQhDAkhaAZQhYAYhkABQgkhCgZhaQgZhZAAhl").cp();
	this.shape_13.setTransform(22.1,22.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjVh5QA9gmBYgbQBXgbBjAAQAmA+AbBYQAbBWAABiQg/AnhYAbQhVAbhjAAQgmg+gbhYQgbhWAAhj").cp();
	this.shape_14.setTransform(21.9,21.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjThxQA5gpBVgdQBVgcBiAAQApA5AcBWQAdBUAABhQg6AqhWAcQhTAdhiAAQgpg5gdhWQgchUAAhi").cp();
	this.shape_15.setTransform(21.8,21.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjShpQA1grBUgfQBSgfBhAAQArA2AfBUQAfBRAABgQg2AshUAfQhRAfhgAAQgsg2gfhTQgfhSAAhh").cp();
	this.shape_16.setTransform(21.7,21.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjQhhQAxguBRghQBQggBgAAQAuAxAgBSQAhBPAABfQgyAvhSAgQhPAhheAAQgvgxghhSQgghQAAhf").cp();
	this.shape_17.setTransform(21.6,21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjPhZQAtgwBPgjQBRgjBcAAQAwAuAjBPQAiBQABBaQguAyhQAjQhPAihbABQgxgugjhPQgjhQAAhc").cp();
	this.shape_18.setTransform(21.4,21.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjNhQQApg0BNglQBOgkBaAAQA0ApAkBOQAlBNAABZQgqA1hNAkQhNAlhaAAQg0gpglhOQgkhNAAha").cp();
	this.shape_19.setTransform(21.3,21.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjLhIQAkg2BLgnQBMgmBZAAQA2AlAnBLQAmBLAABYQglA3hMAnQhKAmhZAAQg2glgnhLQgmhLAAhZ").cp();
	this.shape_20.setTransform(21.2,21.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjKhAQAhg5BJgoQBJgpBYAAQA5AhAoBJQAoBJABBXQgiA6hJAoQhIAohXABQg6ghgohJQgphJAAhY").cp();
	this.shape_21.setTransform(21,21);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjIg4QAdg7BGgrQBHgqBXAAQA7AdAqBHQArBGAABVQgdA9hHAqQhGArhWAAQg8gdgrhHQgqhHAAhW").cp();
	this.shape_22.setTransform(20.9,20.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjGgwQAYg+BFgsQBFgsBVAAQA+AYAsBFQAsBEAABUQgZBAhFAsQhEAshUAAQg/gYgshFQgshFAAhV").cp();
	this.shape_23.setTransform(20.8,20.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjFgnQAVhBBCgvQBDguBTAAQBBAVAuBCQAuBDABBSQgVBChDAuQhCAuhTABQhBgVgvhDQguhCAAhT").cp();
	this.shape_24.setTransform(20.6,20.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjDgfQAQhEBAgwQBBgwBSAAQBEAQAwBBQAwBAAABRQgRBFhAAwQhAAwhRAAQhFgQgwhBQgwhAAAhS").cp();
	this.shape_25.setTransform(20.5,20.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjBgXQAMhGA+gzQA+gxBRAAQBGAMAyA+QAyA+AABPQgMBIg/AyQg9AyhQAAQhHgMgzg+Qgxg+AAhR").cp();
	this.shape_26.setTransform(20.4,20.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("AjAgPQAIhJA8g0QA9g0BPAAQBJAIA0A8QAzA8ABBOQgJBLg8A0Qg7AzhPABQhKgIg0g9Qg0g8AAhP").cp();
	this.shape_27.setTransform(20.3,20.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FF0000").s("#000000").ss(1,1,1).p("Ai+gHQAEhLA6g3QA6g1BOAAQBLAEA2A6QA2A5AABNQgEBNg6A2Qg5A2hOAAQhMgEg3g6Qg1g6AAhO").cp();
	this.shape_28.setTransform(20.1,20.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FF0000").s("#000000").ss(1,1,1).de(-18.9,-18.9,38,38);
	this.shape_29.setTransform(20,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,47.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;