/**
 * MyClock
 * @constructor
 */
 function MyClock(scene) {
 	CGFobject.call(this,scene);
	
	this.time = 0;
	this.cylinder = new MyCylinder(this.scene, 12, 1);
	this.cylinder.initBuffers();

	this.circle = new MyCircle(this.scene, 12);
	this.circle.initBuffers();

	this.sec = new MyClockHand(this.scene, 0);
	this.sec.initBuffers();

	this.min = new MyClockHand(this.scene, 0);
	this.min.initBuffers();

	this.hr = new MyClockHand(this.scene, 0);
	this.hr.initBuffers();
	
	this.hr.setAngle(105);
	this.min.setAngle(181);
	this.sec.setAngle(270);

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

 MyClock.prototype = Object.create(CGFobject.prototype);
 MyClock.prototype.constructor = MyClock;

 MyClock.prototype.display = function() {
 	
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

 	this.scene.pushMatrix();
 		this.scene.rotate(this.min.angle* rad, 0, 0, -1);
 		this.scene.translate(0,0.2,1);
 		this.scene.scale(0.06, 0.8, 0.1);
 		this.pointerAppearance.apply();
 		this.min.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 		this.scene.rotate(this.hr.angle* rad, 0, 0, -1);
 		this.scene.translate(0,0.2,1);
 		this.scene.scale(0.06, 0.5, 0.1);
 		this.pointerAppearance.apply();
 		this.hr.display();
 	this.scene.popMatrix();

 };

MyClock.prototype.update = function(currTime) {

		if (this.time == 0) {
		this.time = currTime;
		var seconds = 0.6;
	}
	else {
		var diff = currTime - this.time;
		this.time = currTime;
		var seconds = diff * (360 / (60 * 1000));
	}

	this.sec.setAngle(this.sec.angle + seconds);
	this.min.setAngle(this.min.angle + seconds/60);
	this.hr.setAngle(this.hr.angle + seconds/60/60);
};