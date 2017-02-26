 
function MyGame (scene) {
	CGFobject.call(this,scene);

	this.cyl = [];
	this.squares = [];
	this.selsquare = [];
	this.cells = [];
	this.score = [0,0];

	this.undocube = new MyUnitCubeQuad(this.scene);
	this.moviecube = new MyUnitCubeQuad(this.scene);
	this.resetcube = new MyUnitCubeQuad(this.scene);
	this.envirocube = new MyUnitCubeQuad(this.scene);
	this.sideboard = new MyQuad(this.scene);
	this.scoreboard = new MyBoard(this.scene);
	this.clockspeed = 0;
	this.clock = new MyCustomClock(this.scene, this.clockspeed + 1);
	this.enviro = 0;

	this.player = 1;
	this.gamescene = [];
	this.count = 0;
	this.framecount = -1;

	this.position = [1, 3, 5, 7,
				8, 10, 12, 14,
				17, 19, 21, 23,

				40, 42, 44, 46,
				49, 51, 53,	55,
				56, 58, 60, 62];
	
	for (i=0; i<64; i++){
		this.cells[i] = new MyQuad(this.scene);
		this.squares[i] = 0;
	}

	for (i=0; i<24; i++){
		this.cyl[i] = new MyPiece(this.scene);
		this.squares[this.position[i]] = i<=11?1:-1;
	}

	this.gamescene[0] = [];
	for (i = 0; i<24; i++)
		this.gamescene[0].push(this.position[i]);

	this.boxAappearance = new CGFappearance(this.scene);
	this.boxAappearance.setAmbient(0.4,0.2,0.1,0.5);
	this.boxAappearance.setSpecular(0.1,0.1,0.1,0.1);
	this.boxAappearance.setDiffuse(0.8,0.8,0.8,1);
	this.boxAappearance.setShininess(5);
	this.boxAappearance.loadTexture("../resources/images/blackglass.png");

	this.boxBappearance = new CGFappearance(this.scene);
	this.boxBappearance.setAmbient(0.4,0.2,0.1,0.5);
	this.boxBappearance.setSpecular(0.1,0.1,0.1,0.1);
	this.boxBappearance.setDiffuse(0.8,0.8,0.8,1);
	this.boxBappearance.setShininess(5);
	this.boxBappearance.loadTexture("../resources/images/glass.png");

	this.selAppearance = new CGFappearance(this.scene);
	this.selAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.selAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.selAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.selAppearance.setShininess(5);
	this.selAppearance.loadTexture("../resources/images/green.png");

	this.sideAppearance = [];
	for(i = 0; i< 2; i++){
		this.sideAppearance[i] = new CGFappearance(this.scene);
		this.sideAppearance[i].setAmbient(0.4,0.2,0.1,0.5);
		this.sideAppearance[i].setSpecular(0.1,0.1,0.1,0.1);
		this.sideAppearance[i].setDiffuse(0.8,0.8,0.8,1);
		this.sideAppearance[i].setShininess(5);
		this.sideAppearance[i].loadTexture("../resources/images/table"+i+".png");
	}


	this.pieceAppearance = new CGFappearance(this.scene);
	this.pieceAppearance.setAmbient(1,1,1,1);
	this.pieceAppearance.setSpecular(1,1,1,1);
	this.pieceAppearance.setDiffuse(0,0,0,1);
	this.pieceAppearance.setShininess(5);

	this.selpieceAppearance = new CGFappearance(this.scene);
	this.selpieceAppearance.setAmbient(1,1,1,1);
	this.selpieceAppearance.setSpecular(1,1,1,1);
	this.selpieceAppearance.setDiffuse(1,0.3,0,1);
	this.selpieceAppearance.setShininess(5);

	this.undoAppearance = new CGFappearance(this.scene);
	this.undoAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.undoAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.undoAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.undoAppearance.setShininess(5);
	this.undoAppearance.loadTexture("../resources/images/undo.png");

	this.movieAppearance = new CGFappearance(this.scene);
	this.movieAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.movieAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.movieAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.movieAppearance.setShininess(5);
	this.movieAppearance.loadTexture("../resources/images/movie.png");

	this.enviroAppearance = new CGFappearance(this.scene);
	this.enviroAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.enviroAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.enviroAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.enviroAppearance.setShininess(5);
	this.enviroAppearance.loadTexture("../resources/images/enviro.png");

	this.resetAppearance = new CGFappearance(this.scene);
	this.resetAppearance.setAmbient(0.4,0.2,0.1,0.5);
	this.resetAppearance.setSpecular(0.1,0.1,0.1,0.1);
	this.resetAppearance.setDiffuse(0.8,0.8,0.8,1);
	this.resetAppearance.setShininess(5);
	this.resetAppearance.loadTexture("../resources/images/reset.png");

	this.Movetime = 1;
	this.points = [0,0,0,
					14,0,14];
	//	console.log(this.scene.customId);

	this.obj1 = new MyUnitCubeQuad(this.scene);
	this.Move = new LinearAnimation(this.scene, this.points, this.Movetime*7);
};


MyGame.prototype = Object.create(CGFobject.prototype);
MyGame.prototype.constructor = MyGame;

MyGame.prototype.update = function(currTime) {
	//this.currTime = currTime;
	this.Move.update(currTime);
	this.clock.update(currTime);
}

MyGame.prototype.display = function () {

	this.scene.translate(7.5, 3.7, 7.5);
	this.scene.pushMatrix();
		this.scene.translate(-3.5,0.01,-3.5);	

		if (this.scene.customId == 150)
			this.undomode(4);
		else if (this.scene.customId == 200)
			this.moviemode(5);
		else if (this.scene.customId == 250)
			this.resetgame(); 
		else if (this.scene.customId == 300)
			this.envirotoggle();
		else if (this.scene.customId == 350)
			this.timetoggle();
		else if (this.scene.customId < 100)
			this.pickedsquare(2);		
		else if(this.scene.customId > 100)
			this.pickedcylinder(1);
		else
			this.defaultdisp(3);

	this.scene.popMatrix();
}

MyGame.prototype.drawsquares = function (mode) {
	for (i =0; i<this.cells.length; i++) {
		this.scene.pushMatrix();

			this.scene.translate(i%8, 0, Math.floor(i/8));

			this.scene.registerForPick(100, this);

			if (this.selsquare[i] && mode == 1){
				this.selAppearance.apply();
				this.scene.registerForPick(i, this.cells[i]);
			}
			else if (Math.floor(i/8) % 2 ^ i%2 == 0)
				this.boxAappearance.apply();
			else
				this.boxBappearance.apply();

			this.scene.rotate(Math.PI/2, -1, 0, 0);	
			this.cells[i].display();
		this.scene.popMatrix();
		if (mode == 5)
			this.scene.customId = 200;
	}
}

MyGame.prototype.drawcylinders = function(mode) {

	var kickcount = [-1,-1];
	var zshift;

	for (i = 0; i < this.cyl.length; i++) {
		this.scene.pushMatrix();

			if (mode == 1 && i == (this.savePick - 101))
				this.selpieceAppearance.apply();
			else if (i >= 12)
				this.pieceAppearance.apply();
			
			if (this.position[i] != -1)
				this.scene.translate(this.position[i] % 8, 0, Math.floor(this.position[i] / 8));

			if ((this.player == 1 && i < 12) || (this.player == -1 && i >= 12) && this.position[i]!= -1)
				this.scene.registerForPick(i+1+100, this.cyl[i]);
			else
				this.scene.registerForPick(100, this);
			
			if (this.position[i] == -1){
				this.scene.translate(9, 0, 4);
				zshift = i>=12?1:0;
				kickcount[zshift]++;
				this.scene.translate(kickcount[zshift]%2, Math.floor(kickcount[zshift]/2)*0.4, -1*zshift);
				this.scene.rotate(Math.PI/2, 1,0,0);
				this.scene.scale(0.4,0.4,0.4,1);
				this.cyl[i].display();
			}
			else if (i == (this.savePick - 101) && mode == 2) {

				this.Move.apply(this.player, this.left);
				this.scene.rotate(Math.PI/2, 1,0,0);
				this.scene.scale(0.4,0.4,0.4,1);
				this.cyl[i].display();
			}
			else {
				this.scene.rotate(Math.PI/2, 1,0,0);
				this.scene.scale(0.4,0.4,0.4,1);
				this.cyl[i].display();
			}

		this.scene.popMatrix();
		// mode 3 this.scene.customId = 100;
	}

	if (mode != 2)
		this.scene.registerForPick(100, this);
}

MyGame.prototype.drawobjects = function() {
	
	this.scene.pushMatrix();
		this.scene.translate(9.5,0,1);
		
		if (this.count > 0){
			this.scene.registerForPick(150, this.undocube);
			this.undoAppearance.apply();
			this.undocube.display();
		}
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2,0,1);
		
		if (this.count > 0){
			this.scene.registerForPick(250, this.resetcube);
			this.resetAppearance.apply();
			this.resetcube.display();
		}
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-2, 0, 6);
		this.scene.registerForPick(300, this.envirocube);
		this.enviroAppearance.apply();
		this.envirocube.display();
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(9.5, 0, 6);
		this.scene.registerForPick(200, this.moviecube);
		this.movieAppearance.apply();
		this.moviecube.display();

		this.scene.registerForPick(100, this);
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-4, 0, 4);
		this.scoreboard.display(this.score[0], this.score[1], this.clockspeed);
	this.scene.popMatrix();

	this.scene.pushMatrix();
		this.scene.translate(-3.9, 4.3, 4);
		this.scene.registerForPick(350, this.clock);
		this.scene.scale(0.4,0.6,0.6);
		this.scene.rotate(Math.PI/2, 0,1,0);
		this.clock.display();
		this.scene.registerForPick(100, this);
	this.scene.popMatrix();
}

MyGame.prototype.drawside = function() {
	
	for (i = 0; i < 4; i++){
		this.scene.pushMatrix();
			this.sideAppearance[this.enviro].apply();
		
			this.scene.translate(9 + i%2, 0, 4 - Math.floor(i/2));
			this.scene.rotate(Math.PI/2, -1, 0, 0);	
			this.sideboard.display();
		this.scene.popMatrix();
	}
}

MyGame.prototype.moviemode = function(mode) {
	
	if (this.framecount == this.count){
		this.scene.customId = 100;
		this.framecount = -1;
		this.defaultdisp(3);
	}

	else {
		this.framecount++;
		this.frame1 = new Date();
		this.frame2 = new Date();
		
		while(this.frame2 - this.frame1 < 500){
			this.change = new Date();	
			this.frame2 = this.change;
		}
		//console.log(this.framecount + " " + this.count)
		for (j = 0; j < 24; j++){
			this.position[j] = this.gamescene[this.framecount][j];
		}
		this.defaultdisp(mode);
	}	
}

MyGame.prototype.undomode = function(mode) {

	//console.log("asdf");
	for (i = 0; i < 64; i++)
		this.squares[i] = 0;

	for(i = 0; i < 24; i++){
		this.position[i] = this.gamescene[this.count - 1][i];
		this.squares[this.position[i]] = i<=11?1:-1;
	}

	this.count--;
	this.defaultdisp(mode);
	this.playerswap();
	this.scene.customId = 100;
}

MyGame.prototype.pickedcylinder = function(mode) {

	this.savePick = this.scene.customId;
	
	for (i = 0; i<64; i++)
		this.selsquare[i] = 0;
	var pos = this.position[this.savePick - 101];
	if (this.squares[pos + 7*this.player] == 0 && (Math.floor(pos/8) - Math.floor((pos + 7*this.player)/8)) == -1*this.player)
		this.selsquare[pos + 7*this.player] = 1;
	if (this.squares[pos + 9*this.player] == 0 && (Math.floor(pos/8) - Math.floor((pos + 9*this.player)/8)) == -1*this.player)
		this.selsquare[pos + 9*this.player] = 1;
	if (this.squares[pos + 7*this.player] == -1*this.player && (this.squares[pos + 14*this.player] == 0) && (Math.floor(pos/8) - Math.floor((pos + 14*this.player)/8)) == -2*this.player)
		this.selsquare[pos + 14*this.player] = 1;
	if (this.squares[pos + 9*this.player] == -1*this.player && (this.squares[pos + 18*this.player] == 0) && (Math.floor(pos/8) - Math.floor((pos + 18*this.player)/8)) == -2*this.player)
		this.selsquare[pos + 18*this.player] = 1;
		
	this.defaultdisp(mode);

	this.init = new Date();
	this.Move = new LinearAnimation(this.scene, this.points, this.Movetime*10);
}

MyGame.prototype.pickedsquare = function(mode) {

	//Board
	this.savePick2 = this.scene.customId;
	var pos = this.position[this.savePick - 101];
	
	if (this.savePick2 - pos == 9 || this.savePick2 - pos == -9 || this.savePick2 - pos == 18 || this.savePick2 - pos == -18)
		this.left = 1;
	else
		this.left = -1;		

	this.defaultdisp(mode);

	var time = new Date();
	var timepermove = this.Movetime * (Math.abs(Math.floor(this.savePick2/8) - Math.floor(pos/8))) * 800;
	
	if (time - this.init >= timepermove) {
		this.position[this.savePick - 101] = this.savePick2;
		this.squares[this.savePick2] = this.squares[pos];
		this.squares[pos] = 0;

		//Jumping elimination
		if (Math.abs(Math.floor(this.savePick2/8) - Math.floor(pos/8)) == 2) {
			for(i = 0; i<24; i++)
				if (this.position[i] == pos + (this.savePick2 - pos)/2) {
					this.squares[this.position[i]] = 0;
					this.position[i] = -1;
				}
		}

		this.gamescene[++this.count] = [];
		for (i = 0; i < 24; i++) {
			this.gamescene[this.count].push(this.position[i]);
			
			if (i >= 12 && this.position[i] < 8 && this.position[i]!= -1){
				alert("Black wins!!");
				this.score[0]++;
				this.resetgame();
			}
			else if (i<12 && this.position[i]>55){
				alert("White wins!!");
				this.score[1]++;
				this.resetgame();
			}
			//console.log(i + " " + this.position[i]);
		}


		//console.log(this.count + " " + this.gamescene[this.count]);
		this.scene.customId = 100;
		this.playerswap();
	}
	//this.scene.registerForPick(100, this);
}

MyGame.prototype.resetgame = function() {
	while(this.count)
		this.undomode(4);
}

MyGame.prototype.playerswap = function() {
		this.player *= -1;
		if(this.player == 1)
			this.scene.camera.setPosition(vec3.fromValues(7, 16, -13));
		else
			this.scene.camera.setPosition(vec3.fromValues(7, 16, 30));
		this.clock.sec.angle =0;
}

MyGame.prototype.defaultdisp = function(mode) {
					
	//Squares
	this.drawsquares(mode);
	//Cylinders
	this.drawcylinders(mode);
	//Undo cube
	this.drawobjects();
	//SideBoard
	this.drawside();

	//Timer
	if (this.clock.sec.angle >= 360){
		this.playerswap();
		alert("Time up!");
	}
	//console.log(this.score);
} 

MyGame.prototype.envirotoggle = function() {
	this.enviro = (this.enviro + 1) % 2;
	this.defaultdisp(3);
	//console.log(this.enviro);
	this.scene.customId = 100;
}

MyGame.prototype.timetoggle = function() {
	this.clockspeed = (this.clockspeed + 1)%4;
	this.defaultdisp(3);
	this.clock = new MyCustomClock(this.scene, (this.clockspeed + 1)*2);
	//this.resetgame();
	this.scene.customId = 100;
}