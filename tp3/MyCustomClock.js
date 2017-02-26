/**
 * MyCustomClock
 * @constructor
 */
 function MyCustomClock(scene, clockspeed) {
 	CGFobject.call(this,scene);
	
	this.time = 0;
	this.cylinder = new MyCylinder(this.scene, 12, 1);
	this.cylinder.initBuffers();

	this.circle = new MyCircle(this.scene, 12);
	this.circle.initBuffers();

	this.sec = new MyClockHand(this.scene, 0);
	this.sec.initBuffers();
	this.sec.setAngle(0);

	this.clockspeed = clockspeed;

	//Materials
	this.clockAppearance = new CGFappearance(this.scene);
	//this.clockAppearance.setAmbient(1,1,1,1);
	//this.clockAppearance.setShininess(5);
	this.clockAppearance.loadTexture("../resources/images/clock.png");
	
	this.pointerAppearance = new CGFappearance(this.scene);
	this.pointerAppearance.setDiffuse(0, 0, 0, 0);
	this.pointerAppearance.setSpecular(0, 0, 0, 0);
	this.pointerAppearance.setShininess(5);
	
 };

 MyCustomClock.prototype = Object.create(CGFobject.prototype);
 MyCustomClock.prototype.constructor = MyCustomClock;

 MyCustomClock.prototype.display = function() {
 	
 	this.scene.pushMatrix();
 		this.scene.scale(1,1,1);
 		this.cylinder.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.scene.translate(0, 0, 1);
 		this.clockAppearance.apply();
 		this.circle.display();
 	this.scene.popMatrix();

 	var rad = Math.PI/180;

 	this.scene.pushMatrix();
 		this.scene.rotate(this.sec.angle* rad, 0, 0, -1);
 		this.scene.translate(0,0.2,1);
 		this.scene.scale(0.03, 0.9, 0.1);
 		this.pointerAppearance.apply();
 		this.sec.display();
 	this.scene.popMatrix();

 };

MyCustomClock.prototype.update = function(currTime) {

		if (this.time == 0) {
		this.time = currTime;
		var seconds = 0.6;
	}
	else {
		var diff = currTime - this.time;
		this.time = currTime;
		var seconds = this.clockspeed * diff * (360 / (60 * 1000));
	}

	this.sec.setAngle(this.sec.angle + seconds);

};