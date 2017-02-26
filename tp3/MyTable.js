/**
 * MyTable
 * @constructor
 */
 function MyTable(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	this.tableAppearance = [];
 	for(i = 0; i < 2; i++){
 		this.tableAppearance[i] = new	CGFappearance(this.scene);
		this.tableAppearance[i].setAmbient(0.4,0.2,0.1,0.5);
		this.tableAppearance[i].setSpecular(0.1,0.1,0.1,0.1);
		this.tableAppearance[i].setDiffuse(0.8,0.8,0.8,1);
		this.tableAppearance[i].setShininess(5);
		this.tableAppearance[i].loadTexture("../resources/images/table"+i+".png");
 	}	

	this.legAppearance = new CGFappearance(this.scene);
	this.legAppearance.setAmbient(0.8,0.8,0.8,1);
	this.legAppearance.setSpecular(0.8,0.8,0.8,1);
	this.legAppearance.setDiffuse(0.4,0.4,0.4,1);
	this.legAppearance.setShininess(20);
 };

 MyTable.prototype = Object.create(CGFobject.prototype);
 MyTable.prototype.constructor =MyTable;

 MyTable.prototype.display = function() {
 	// legs
 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.legAppearance.apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, 1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	this.scene.pushMatrix();
 	this.scene.translate(-2, 3.5 / 2, -1);
 	this.scene.scale(0.3, 3.5, 0.3);
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();

 	// table top
 	this.scene.pushMatrix();
 	this.scene.translate(0, 3.5, 0);
 	this.scene.scale(5, 0.3, 3);
 	this.tableAppearance[this.scene.game.enviro].apply();
 	this.myUnitCubeQuad.display();
 	this.scene.popMatrix();
 }
