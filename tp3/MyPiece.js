function MyPiece(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	this.innercylinder = new MyCylinder(this.scene, 20, 1);
 	this.innercylinder.initBuffers();

 	this.outercylinder = new MyPrism(this.scene, 25, 1);
 	this.outercylinder.initBuffers();

 	this.circle = new MyCircle(this.scene, 20);
 	this.circle.initBuffers();

 	this.pieceAppearance = new	CGFappearance(this.scene);
 	this.pieceAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.pieceAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.pieceAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.pieceAppearance.setShininess(5);
	this.pieceAppearance.loadTexture("../resources/images/chip.png");

};

MyPiece.prototype = Object.create(CGFobject.prototype);
MyPiece.prototype.constructor = MyPiece;

MyPiece.prototype.display = function() {

	this.scene.scale(1, 1, 0.8);
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(1,1,1);
		this.outercylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.6,0.6,1);
		this.innercylinder.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0,0,-0.8);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.6,0.6,0.6);
		this.circle.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.pieceAppearance.apply();
		this.scene.translate(0,0,-0.8);
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(1,1,1);
		this.circle.display();
	this.scene.popMatrix();

}