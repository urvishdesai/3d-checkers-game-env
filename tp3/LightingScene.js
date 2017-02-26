var degToRad = Math.PI / 180.0;

function LightingScene() {
	CGFscene.call(this);
}

LightingScene.prototype = Object.create(CGFscene.prototype);
LightingScene.prototype.constructor = LightingScene;

LightingScene.prototype.init = function(application) {
	CGFscene.prototype.init.call(this, application);

	this.initCameras();

	this.initLights();

	this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
	this.gl.clearDepth(100.0);
	this.gl.enable(this.gl.DEPTH_TEST);
	this.gl.enable(this.gl.CULL_FACE);
	this.gl.depthFunc(this.gl.LEQUAL);

	this.axis = new CGFaxis(this);

	this.enableTextures(true);

	// Scene elements

	this.table = new MyTable(this);
	this.clockwall = new MyQuad(this);
	this.oppwall = new MyQuad(this);
	this.blackwall = new MyQuad(this);
	this.whitewall = new MyQuad(this);
	this.floor = new MyQuad(this);
	this.cube = new MyUnitCubeQuad(this);
	
	this.game = new MyGame(this);
	
	//Chess 'marble' or 'wood'
	this.chess = new MyChessboard(this, 8, 8, 'marble', [0.67, 0.16, 0.16, 1], [1, 1, 1, 0.8], [1, 1, 0, 1], 1, 1);

	//// Materials
	this.materialDefault = new CGFappearance(this);
	
	this.materialA = new CGFappearance(this);
	this.materialA.setAmbient(0.3,0.3,0.3,1);
	this.materialA.setDiffuse(0.6,0.6,0.6,1);
	this.materialA.setSpecular(1,0.2,0,1);
	this.materialA.setShininess(120);

	this.materialB = new CGFappearance(this);
	this.materialB.setAmbient(0.3,0.3,0.3,1);
	this.materialB.setDiffuse(0.6,0.6,0.6,1);
	this.materialB.setSpecular(0.8,0.8,0.8,1);	
	this.materialB.setShininess(120);

	this.floorAppearance = [];
	this.clockwallAppearance = [];
	this.oppwallAppearance = [];
	this.blackwallAppearance = [];
	this.whitewallAppearance = [];

	for (i = 0; i < 2; i++){
		this.floorAppearance[i] = new CGFappearance(this);
		this.clockwallAppearance[i] = new CGFappearance(this);
		this.blackwallAppearance[i] = new CGFappearance(this);
		this.whitewallAppearance[i] = new CGFappearance(this);
		this.oppwallAppearance[i] = new CGFappearance(this);
		
		this.floorAppearance[i].loadTexture("../resources/images/floor"+i+".png");
		this.clockwallAppearance[i].loadTexture("../resources/images/clockwall"+i+".png");
		this.blackwallAppearance[i].loadTexture("../resources/images/blackwall"+i+".png");
		this.whitewallAppearance[i].loadTexture("../resources/images/whitewall"+i+".png");
		this.oppwallAppearance[i].loadTexture("../resources/images/oppwall"+i+".png");
	}

	this.setPickEnabled(true);
	this.setUpdatePeriod(100);
	//this.currTime = new Date();
};

LightingScene.prototype.update = function(currTime) {
	this.game.update(currTime);
};

LightingScene.prototype.initCameras = function() {
	this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(30, 30, 30), vec3.fromValues(0, 0, 0));

		this.camera.setPosition(vec3.fromValues(7, 16, -13));
		this.camera.setTarget(vec3.fromValues(7, 3.7, 9));
		//this.camera.zoom(10);

};

LightingScene.prototype.logPicking = function ()
{
	if (this.pickMode == false) {
		if (this.pickResults != null && this.pickResults.length > 0) {
			for (var i=0; i< this.pickResults.length; i++) {
				var obj = this.pickResults[i][0];
				if (obj)
				{
					this.customId = this.pickResults[i][1];				
					console.log("Picked object: " + obj + ", with pick id " + this.customId);
				}
			}
			this.pickResults.splice(0,this.pickResults.length);
		}		
	}
}

LightingScene.prototype.initLights = function() {
	this.setGlobalAmbientLight(0, 0, 0, 1.0);
	
	// Positions for four lights
	this.lights[0].setPosition(3, 7, 11, 1);
	this.lights[0].setVisible(true); // show marker on light position (different from enabled)
	
	this.lights[1].setPosition(12, 7, 11, 1.0);
	this.lights[1].setVisible(true); // show marker on light position (different from enabled)

	this.lights[2].setPosition(12, 7, 4.0, 1.0);
	this.lights[2].setVisible(true); // show marker on light position (different from enabled)

	this.lights[3].setPosition(3, 7, 4.0, 1.0);
	this.lights[3].setVisible(true); // show marker on light position (different from enabled)

	this.lights[0].setAmbient(0, 0, 0, 1);
	this.lights[0].setDiffuse(0.8, 0.8, 0.8, 1.0);
	this.lights[0].enable();
	this.lights[0].setQuadraticAttenuation(0);
	this.lights[0].setLinearAttenuation(0);
	this.lights[0].setConstantAttenuation(1);

	this.lights[1].setAmbient(0, 0, 0, 1);
	this.lights[1].setDiffuse(0.8, 0.8, 0.8, 1.0);
	this.lights[1].enable();
	this.lights[1].setConstantAttenuation(1);
	this.lights[1].setQuadraticAttenuation(0);
	this.lights[1].setLinearAttenuation(0);

	this.lights[2].setAmbient(0, 0, 0, 1);
	this.lights[2].setSpecular(1.0, 1.0, 1.0, 1.0);
	this.lights[2].setDiffuse(0.8, 0.8, 0.8, 1.0);
	this.lights[2].enable();
	this.lights[2].setConstantAttenuation(1);
	this.lights[2].setLinearAttenuation(0);
	this.lights[2].setQuadraticAttenuation(0);

	this.lights[3].setAmbient(0,0,0,1);
	this.lights[3].setDiffuse(0.8,0.8,0.8,1);
	this.lights[3].enable();
	this.lights[3].setConstantAttenuation(1);
	this.lights[3].setLinearAttenuation(0);
	this.lights[3].setQuadraticAttenuation(0);


};

LightingScene.prototype.updateLights = function() {
	for (i = 0; i < this.lights.length; i++)
		this.lights[i].update();
}


LightingScene.prototype.display = function() {
	
	this.logPicking();
	this.clearPickRegistration();
	// ---- BEGIN Background, camera and axis setup

	// Clear image and depth buffer everytime we update the scene
	this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
	this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);

	// Initialize Model-View matrix as identity (no transformation)
	this.updateProjectionMatrix();
	this.loadIdentity();

	// Apply transformations corresponding to the camera position relative to the origin
	this.applyViewMatrix();	

	// Update all lights used
	this.updateLights();

	// Draw axis
		//this.axis.display();

	this.materialDefault.apply();

	// ---- END Background, camera and axis setup

	// ---- BEGIN Primitive drawing section

	// Game
	this.pushMatrix();
		this.translate(0, -1, 3);
		this.scale(0.8,0.8,0.8);
		this.game.display(this.customId);
	this.popMatrix();
	
	// Floor
	this.pushMatrix();
		this.translate(7.5, 0, 10);
		this.rotate(-90 * degToRad, 1, 0, 0);
		this.scale(20, 20, 0.2);
		//this.floorAppearance.setTextureWrap('REPEAT','REPEAT');
		this.floorAppearance[this.game.enviro].apply();
		this.floor.display();
	this.popMatrix();

	// Clock Wall
	this.pushMatrix();
		this.translate(0, 4, 10);
		this.rotate(90 * degToRad, 0, 1, 0);
		this.scale(20, 8, 0.2);
		//this.clockwallAppearance[this.game.enviro].setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		this.clockwallAppearance[this.game.enviro].apply();
		this.clockwall.display();
	this.popMatrix();
	
	//blackwall	
	this.pushMatrix();
		this.translate(7.5, 4, 20);
		this.rotate(180 * degToRad, 0, 1, 0);
		this.scale(15, 8, 0.2);
		//this.blackwallAppearance[this.game.enviro].setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		this.blackwallAppearance[this.game.enviro].apply();
		this.clockwall.display();
	this.popMatrix();

	//whitewall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		//this.whitewallAppearance[this.game.enviro].setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		this.whitewallAppearance[this.game.enviro].apply();
		this.whitewall.display();
	this.popMatrix();

		// Opp wall
	this.pushMatrix();
		this.translate(15, 4, 10);
		this.rotate(-90 * degToRad, 0, 1, 0);
		this.scale(20, 8, 0.2);
		//this.oppwallAppearance[this.game.enviro].setTextureWrap('CLAMP_TO_EDGE', 'CLAMP_TO_EDGE');
		this.oppwallAppearance[this.game.enviro].apply();
		this.clockwall.display();
	this.popMatrix();

	/*// Plane Wall
	this.pushMatrix();
		this.translate(7.5, 4, 0);
		this.scale(15, 8, 0.2);
		this.materialDefault.apply();
		//this.wall.display();
	this.popMatrix();
	*/
	
	// First Table
	this.pushMatrix();
		this.translate(6, -0.25, 9);
		this.scale(1.4,0.6,2.4);
		this.table.display();
	this.popMatrix();
	//Cube
	this.pushMatrix();
		this.translate(6,0.7,4);
		this.scale(2,1.4,2);
		this.cube.display();
	this.popMatrix();
	this.pushMatrix();
		this.translate(6,0.7,14);
		this.scale(2, 1.4, 2);
		this.cube.display();
	this.popMatrix();
	
	if (this.game.enviro == 0){
	}
	else if (this.game.enviro ==1) {
	}
	
	//console.log(this.game.enviro);
	
	// ---- END Primitive drawing section
};
