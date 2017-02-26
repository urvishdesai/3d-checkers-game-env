function Wheel(scene) {
	CGFobject.call(this,scene);

	this.top = new MyCircle(scene, 20);
	this.top.initBuffers();

	this.rim = new MyCylinder(scene, 20, 1);
	this.rim.initBuffers();

	this.rimtex = new CGFtexture(scene, '../resources/images/rim.png');
	this.wheeltex = new CGFtexture(scene,'../resources/images/wheel.png');
};

Wheel.prototype = Object.create(CGFobject.prototype);
Wheel.prototype.constructor = Wheel;

Wheel.prototype.display = function() {
	this.scene.pushMatrix();
		this.rimtex.bind(0);
		this.rim.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wheeltex.bind(0);
		this.scene.translate(0, 0, 1);
		this.top.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.wheeltex.bind(0);
		//this.scene.translate(0, 0, 0);
		this.scene.rotate(Math.PI, 1, 0, 0);
		this.top.display();
	this.scene.popMatrix();
}