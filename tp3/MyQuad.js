/**
 * MyQuad
 * @constructor
 */
 function MyQuad(scene, MinS, MaxS, MinT, MaxT) {
 	CGFobject.call(this,scene);

 	this.MinS = MinS || 0;
 	this.MaxS = MaxS || 1;
 	this.MinT = MinT || 0;
 	this.MaxT = MaxT || 1;

 	this.initBuffers();
 };

 MyQuad.prototype = Object.create(CGFobject.prototype);
 MyQuad.prototype.constructor = MyQuad;

 MyQuad.prototype.initBuffers = function() {
 	this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

 	this.texCoords = [
 	this.MinS, this.MaxT,
 	this.MaxS, this.MaxT,
 	this.MinS, this.MinT,
 	this.MaxS, this.MinT
 	];

 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.normals = [0, 0, 1,
 					0, 0, 1,
 					0, 0, 1,
 					0, 0, 1
 					];
 	this.initGLBuffers();
 };
