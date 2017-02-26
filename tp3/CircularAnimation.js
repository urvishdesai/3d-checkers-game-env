/**
 * CircularAnimation
 * @constructor
 */
 function CircularAnimation(scene, centre, radius, initangle, rotangle, time) {
 	
 	this.scene=scene;
	
	//Time variables
	this.initime = 0;
	this.temptime = [];
	this.totaltime = time;
	
	//Centre and Radius
	this.x_cent = centre[0];
	this.y_cent = centre[1];
	this.z_cent = centre[2];
	this.radius = radius;

	//Angles
	this.initangle = initangle * Math.PI/180;
	this.offsetR = rotangle * Math.PI/180;
	
	this.end = false;

 };

 CircularAnimation.prototype = Object.create(CGFobject.prototype);
 CircularAnimation.prototype.constructor = CircularAnimation;

 CircularAnimation.prototype.update = function(currTime) {

 	this.currTime = currTime;

 	if (this.initime == 0)
 		this.initime = currTime;
 	
 	this.angle = this.initangle + this.offsetR * ((currTime - this.initime) / (this.totaltime * 1000));
 	
 	if (this.angle >= (this.initangle + this.offsetR))
 		this.end = true;

 	if (this.offsetR >= 360)
 		this.end = false;

 	//console.log(currTime);
 	//console.log(this.angle);
 	//console.log(this.temptime[0]);
 	//console.log(this.temp);
 	//console.log(this.numpt);
 	//console.log(k);
 	//console.log(this.initime);
 	//console.log(this.temptime[0]);
 	//console.log(this.totaltime);
 	//console.log(currTime - this.initime);
 	//console.log(this.angle);

};

 CircularAnimation.prototype.apply = function() {
 		this.scene.translate(this.x_cent, this.y_cent, this.z_cent);
 	if (this.end == false)
 		this.scene.rotate(this.angle, 0, 1, 0);
 	else
 		this.scene.rotate(this.initangle + this.offsetR, 0, 1, 0);
 		this.scene.translate(this.radius, 0, 0);
 	if (this.end == false)
 		this.scene.rotate(-this.angle, 0, 1, 0);
 	else
 		this.scene.rotate(-this.initangle - this.offsetR, 0, 1, 0);
 		//this.scene.translate(-this.x_cent, -this.y_cent, -this.z_cent);
};