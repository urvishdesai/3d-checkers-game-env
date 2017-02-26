function MyChessboard(scene, du, dv, texselect, c1, c2, cs, su, sv) {
	CGFobject.call(this,scene);

	this.dimu = du;
	this.dimv = dv;
	this.texselect = texselect;
	this.c1 = c1;
	this.c2 = c2;
	this.cs = cs;
	this.su = su;
	this.sv = sv;

	this.board = new MyPlane(this.scene, this.dimu, this.dimv, this.dimu*5, this.dimv*5);
	
	//this.appearance = new CGFappearance(this.scene);

	if (texselect == 'marble') {
		this.tex = new CGFtexture(this.scene, '../resources/images/marble.png');
		//this.tex.loadTexture('../resources/images/marble.png');
	}
	else {
		this.tex = new CGFtexture(this.scene, '../resources/images/wood.png');
		//this.tex.loadTexture('../resources/images/wood.png');
	}
	//this.appearance.setTexture(this.tex);

	this.shader = new CGFshader(this.scene.gl, '../shaders/chessboard.vert', '../shaders/chessboard.frag');

	this.shader.setUniformsValues({du: this.dimu});
	this.shader.setUniformsValues({dv: this.dimv});
	this.shader.setUniformsValues({c1: this.c1});
	this.shader.setUniformsValues({c2: this.c2});
	this.shader.setUniformsValues({cs: this.cs});
	this.shader.setUniformsValues({su: this.su});
	this.shader.setUniformsValues({sv: this.sv});
	
	this.initBuffers();
};

MyChessboard.prototype = Object.create(CGFobject.prototype);
MyChessboard.prototype.constructor = MyChessboard;

MyChessboard.prototype.display = function () {

	//this.appearance.apply();
	this.scene.pushMatrix();
		this.tex.bind(0);
		this.scene.rotate(Math.PI/2, -1, 0 ,0);
		this.scene.setActiveShader(this.shader);
		this.board.display();
	this.scene.popMatrix();
		this.scene.setActiveShader(this.scene.defaultShader);
	//console.log(this.su);
	//console.log(this.sv);
	//console.log(this.)
}