function MyCar(scene) {
	CGFobject.call(this,scene);

	this.top = [
					[
					[-2.5, 0.2, 1, 1],
					[-2.5, 0.2, 1, 1],
					[-2.5, 0.2, 1, 1],
					[-2.5, 0.2, -1, 1],
					[-2.5, 0.2, -1, 1],
					[-2.5, 0.2, -1, 1]
					],


					[
					[-2.5, 0.2, 1, 1],
					[-2.5, 1, 1, 1],
					[-2.5, 1, 1, 1],
					[-2.5, 1, -1, 1],
					[-2.5, 1, -1, 1],
					[-2.5, 0.2, -1, 1]
					],

					[
					[-1.8, 0.2, 1, 1],
					[-1.3, 1, 1, 1],
					[-1, 1, 1, 1],
					[-1, 1, -1, 1],
					[-1.3, 1, -1, 1],
					[-1.8, 0.2, -1, 1]
					],

					[
					[-1.8, 0.2, 1, 1],
					[-1.3, 1, 1, 1],
					[-1, 1, 1, 1],
					[-1, 1, -1, 1],
					[-1.3, 1, -1, 1],
					[-1.8, 0.2, -1, 1]
					],

					[
					[-1.6, 0.8, 1, 1],
					[-1.1, 1, 1, 1],
					[-1, 1, 1, 1],
					[-1, 1, -1, 1],
					[-1.1, 1, -1, 1],
					[-1.6, 0.8, -1, 1]
					],

					[
					[-1.3, 0.8, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, -1, 1],
					[-0.8, 1, -1, 1],
					[-1.3, 0.8, -1, 1]
					],

					[
					[-0.8, 0.8, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, -1, 1],
					[-0.8, 1, -1, 1],
					[-0.8, 0.8, -1, 1]
					],

					[
					[-0.3, 0.8, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, 1, 1],
					[-0.8, 1, -1, 1],
					[-0.8, 1, -1, 1],
					[-0.3, 0.8, -1, 1]
					],

					[
					[0, 0.5, 1, 1],
					[-0.5, 1, 1, 1],
					[-0.6, 1, 1, 1],
					[-0.6, 1, -1, 1],
					[-0.5, 1, -1, 1],
					[0, 0.5, -1, 1]
					],

					[
					[0.2, 0.2, 1, 1],
					[-0.3, 1, 1, 1],
					[-0.6, 1, 1, 1],
					[-0.6, 1, -1, 1],
					[-0.3, 1, -1, 1],
					[0.2, 0.2, -1, 1]
					],

					[
					[0.2, 0.2, 1, 1],
					[-0.3, 1, 1, 1],
					[-0.6, 1, 1, 1],
					[-0.6, 1, -1, 1],
					[-0.3, 1, -1, 1],
					[0.2, 0.2, -1, 1]
					],

					[
					[0.2, 0.2, 1, 1],
					[0.2, 2.5, 1.1, 1],
					[0.2, 2.5, 0.9, 1],
					[0.2, 2.5, -1.1, 1],
					[0.2, 2.5, -0.9, 1],
					[0.2, 0.2, -1, 1]
					],

					[
					[0.5, 0.2, 1, 1],
					[0.5, 2.5, 1.1, 1],
					[0.5, 2.5, 0.9, 1],
					[0.5, 2.5, -1.1, 1],
					[0.5, 2.5, -0.9, 1],
					[0.5, 0.2, -1, 1]
					],

					[
					[1, 0.2, 1, 1],
					[1, 2.5, 1.1, 1],
					[1, 2.5, 0.9, 1],
					[1, 2.5, -1.1, 1],
					[1, 2.5, -0.9, 1],
					[1, 0.2, -1, 1]
					],
					
					[
					[1.8, 0.2, 1, 1],
					[1.8, 2.5, 1.1, 1],
					[1.8, 2.5, 0.9, 1],
					[1.8, 2.5, -1.1, 1],
					[1.8, 2.5, -0.9, 1],
					[1.8, 0.2, -1, 1]
					],

					[
					[2.5, 0.2, 1, 1],
					[2.5, 2.5, 1.1, 1],
					[2.5, 2.5, 0.9, 1],
					[2.5, 2.5, -1.1, 1],
					[2.5, 2.5, -0.9, 1],
					[2.5, 0.2, -1, 1]
					]

					];

	this.bottom = [
					[
					[-2.5, 0.2, -1, 1],
					[-2.5, 0.2, 1, 1]
					],

					[
					[-1.8, 0.2, -1, 1],
					[-1.8, 0.2, 1, 1]
					],

					[
					[-1.8, 0.2, -0.5, 1],
					[-1.8, 0.2, 0.5, 1]
					],

					[
					[0.2, 0.2, -0.5, 1],
					[0.2, 0,2, 0.5, 1]
					],

					[
					[0.2, 0.2, -1, 1],
					[0.2, 0,2, 1, 1]
					],

					[
					[2.5, 0.2, -1, 1],
					[2.5, 0.2, 1, 1]
					]

					]
	this.initBuffers();
};

MyCar.prototype = Object.create(CGFobject.prototype);
MyCar.prototype.constructor = MyCar;

MyCar.prototype.initBuffers = function() {

	this.body = [];
	this.body.push(new MyPatch(this.scene, 15, 5, 30, 30, this.top));
	this.body.push(new MyPatch(this.scene, 5, 1, 30, 30, this.bottom));
	this.wheel = [];
	for (i = 0; i < 4; i++)
		this.wheel.push(new Wheel(this.scene));
	this.tex = new CGFtexture(this.scene, '../resources/images/car.png');

}

MyCar.prototype.display = function() {
	
	//this.body[0].display();
	this.tex.bind(0);
	this.scene.translate(-2,0.8,0);
	// Body
	this.scene.pushMatrix();
		this.scene.translate(0, 0.15, 0);
		this.scene.scale(0.8, 1, 1.5);
		
		for (i = 0; i< 2; i++)
			this.body[i].display();
		this.scene.rotate(Math.PI, 0,1,0);
		this.scene.translate(-4.9,0,0);
		//for (i = 0; i< 2; i++)
			this.body[0].display();
			//this.scene.rotate(Math.PI, 1, 0, 0);
			this.body[1].display();
	this.scene.popMatrix();

	//Wheel1
	this.scene.pushMatrix();
		this.scene.translate(-0.9,0,1.1);
		this.scene.scale(0.9,0.8,0.5);
		this.wheel[0].display();
	this.scene.popMatrix();
	
	//Wheel2
	this.scene.pushMatrix();
		this.scene.translate(-0.9,0,-1.6);
		this.scene.scale(0.9,0.8,0.5);
		this.wheel[1].display();
	this.scene.popMatrix();
	
	//Wheel3
	this.scene.pushMatrix();
		this.scene.translate(4.8,0,1.1);
		this.scene.scale(0.9,0.8,0.5);
		this.wheel[2].display();
	this.scene.popMatrix();
	
	//Wheel4
	this.scene.pushMatrix();
		this.scene.translate(4.8,0,-1.6);
		this.scene.scale(0.9,0.8,0.5);
		this.wheel[3].display();
	this.scene.popMatrix();
}