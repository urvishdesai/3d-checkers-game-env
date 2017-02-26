function MyBoard(scene) {
 	CGFobject.call(this, scene);

 	this.myUnitCubeQuad = new MyUnitCubeQuad(this.scene);
 	this.myUnitCubeQuad.initBuffers();

 	this.quad = new MyQuad(this.scene);
 	this.quad.initBuffers();

 	this.boardAppearance = new	CGFappearance(this.scene);
 	this.boardAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.boardAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.boardAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.boardAppearance.setShininess(5);
	this.boardAppearance.loadTexture("../resources/images/plain.png");

	this.wood = new	CGFappearance(this.scene);
 	this.wood.setAmbient(0.4,0.2,0.1,0.5);
	this.wood.setSpecular(0.1,0.1,0.1,0.1);
	this.wood.setDiffuse(0.8,0.8,0.8,1);
	this.wood.setShininess(5);
	this.wood.loadTexture("../resources/images/lightwood.png");

	this.num = [];

	for (i =0; i<6; i++){
		this.num[i] = new	CGFappearance(this.scene);
	 	this.num[i].setAmbient(0.4,0.2,0.1,0.5);
		this.num[i].setSpecular(0.1,0.1,0.1,0.1);
		this.num[i].setDiffuse(0.8,0.8,0.8,1);
		this.num[i].setShininess(5);
		this.num[i].loadTexture("../resources/images/"+(i)+".png");
	}	

	this.diff = [];
	for (i =0; i<5; i++){
		this.diff[i] = new	CGFappearance(this.scene);
	 	this.diff[i].setAmbient(0.4,0.2,0.1,0.5);
		this.diff[i].setSpecular(0.1,0.1,0.1,0.1);
		this.diff[i].setDiffuse(0.8,0.8,0.8,1);
		this.diff[i].setShininess(5);
		this.diff[i].loadTexture("../resources/images/"+(i+1)+".png");
	}	

	this.minus = new	CGFappearance(this.scene);
 	this.minus.setAmbient(0.4,0.2,0.1,0.5);
	this.minus.setSpecular(0.1,0.1,0.1,0.1);
	this.minus.setDiffuse(0.8,0.8,0.8,1);
	this.minus.setShininess(5);
	this.minus.loadTexture("../resources/images/minus.png");

};

MyBoard.prototype = Object.create(CGFobject.prototype);
MyBoard.prototype.constructor = MyBoard;

MyBoard.prototype.display = function(num1, num2, clockspeed) {

	this.scene.translate(0, 0.5, 0);
	
	this.scene.pushMatrix();
		this.scene.translate(0.3,3,0);
		this.scene.pushMatrix();
			this.boardAppearance.apply();
			this.scene.scale(0.3, 3,5);
			this.myUnitCubeQuad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.num[num1].apply();
			this.scene.translate(0.2,-0.3,1.25)
			this.scene.scale(1, 1.5, 1);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.minus.apply();
			this.scene.translate(0.2,-0.2,0.5)
			this.scene.scale(0.7, 0.6, 0.5);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.quad.display();
		this.scene.popMatrix();

		this.scene.pushMatrix();
			this.minus.apply();
			this.scene.translate(0.2,-0.2,-0.5)
			this.scene.scale(0.7, 0.6, 0.5);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.quad.display();;
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.diff[clockspeed].apply();
			this.scene.translate(0.2,-0.3,0)
			this.scene.scale(0.5, 0.5, 0.5);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.quad.display();
		this.scene.popMatrix();
		
		this.scene.pushMatrix();
			this.num[num2].apply();
			this.scene.translate(0.2,-0.3,-1.25)
			this.scene.scale(1, 1.5, 1);
			this.scene.rotate(Math.PI/2, 0, 1, 0);
			this.quad.display();
		this.scene.popMatrix();
	this.scene.popMatrix();

	this.wood.apply();
	this.scene.pushMatrix();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.scale(0.5,6,0.5);
		this.myUnitCubeQuad.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(0, 3, 0);
		this.scene.scale(0.5,0.5,4);
		this.myUnitCubeQuad.display();
	this.scene.popMatrix();
}