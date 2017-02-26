/**
 * MyCircle
 * @constructor
 */
 function MyCircle(scene, slices) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;

 	this.initBuffers();
 };

 MyCircle.prototype = Object.create(CGFobject.prototype);
 MyCircle.prototype.constructor = MyCircle;

 MyCircle.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
 	var a_rad = 2 * Math.PI / this.slices;

 	// For vertices
 	this.vertices = [];
 	
 		for (var slice = 0; slice < this.slices; slice++) {
 			this.vertices.push(Math.cos(slice *a_rad), Math.sin(slice *a_rad), 0);
 			//this.vertices.push(0.5*Math.cos(slice *a_rad), 0.5*Math.sin(slice *a_rad), 0);
 		}

 	
 	// For normals
 	this.normals = [];

 		for (var slice = 0; slice < this.slices; slice++)
 			this.normals.push(0, 0, 1);
 	
 	// For indices
 	this.indices = [];

 		for (var slice = 0; slice < this.slices - 2; slice++)
 			this.indices.push(0, slice+1, slice +2);

 	// Texture Co-ordinates
 	this.texCoords = [];

 		for (var slice = 0; slice < this.slices; slice++)
 			this.texCoords.push(0.5 + Math.cos(slice*a_rad)/2, 0.5 - Math.sin(slice*a_rad)/2);
 		
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
