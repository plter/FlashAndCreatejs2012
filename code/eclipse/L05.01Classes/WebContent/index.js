function People(age){
	this.age=age;
}
People.prototype.sayHello = function(){
	console.log("People say Hello");
};
People.prototype.getAge=function(){
	return this.age;
};


var p = new People(12);
p.sayHello();
console.log("People age:"+p.getAge());


function Man(age){
	People.call(this,age);
}
Man.prototype = new People();
Man.prototype.sayHello=function(){
	console.log("Man say Hello");
};

var m = new Man(19);
m.sayHello();
console.log("Man age:"+m.getAge());
