/**
 * MyCylinder
 * @constructor
 */
 function MyCylinder(scene, slices, stacks) {
 	CGFobject.call(this,scene);
	
	this.slices = slices;
	this.stacks = stacks;

 	this.initBuffers();
 };

 MyCylinder.prototype = Object.create(CGFobject.prototype);
 MyCylinder.prototype.constructor = MyCylinder;

 MyCylinder.prototype.initBuffers = function() {
 	/*
 	* TODO:
 	* Replace the following lines in order to build a prism with a **single mesh**.
 	*
 	* How can the vertices, indices and normals arrays be defined to
 	* build a prism with varying number of slices and stacks?
 	*/
 	var a_rad = 2 * Math.PI / this.slices;
 	var b_rad = a_rad / 2;

 	// For vertices
 	this.vertices = [];
 	
 	for (var stck = 0; stck < this.stacks + 1; stck++) {

 		for (var slice = 0; slice < this.slices; slice++) {
 			//x_cord = Math.cos(slice * a_rad);
 			//y_cord = Math.sin(slice * a_rad);
 			//z_cord = stck/this.stacks;
 			this.vertices.push(Math.cos(slice *a_rad), Math.sin(slice *a_rad), stck / this.stacks);
 			//this.vertices.push(Math.cos((slice +1) * a_rad), Math.sin((slice +1) *a_rad), stck / this.stacks);
 		}
 	}

 	// For normals
 	this.normals = [];

 	for (var stck = 0; stck < this.stacks + 1; stck++) {
 		
 		for (var slice = 0; slice < this.slices; slice++) {
 			x_cord = Math.cos(slice * a_rad);
 			y_cord = Math.sin(slice * a_rad);
 			this.normals.push(x_cord, y_cord, 0);
 			//this.normals.push(x_cord, y_cord, 0);
 		}
 	}

 	// For indices
 	this.indices = [];

 	for (var stck = 0; stck < this.stacks; stck++) {
 		
 		for (var slice = 0; slice < this.slices-1; slice++) {
 			var bottom = stck * this.slices;
 			var top = (stck+1) * this.slices;
 			this.indices.push((bottom + slice), (bottom + slice) +1, (top + slice) +1);
 			this.indices.push((bottom + slice), (top + slice) +1, (top + slice));
			this.indices.push((bottom + slice), (top + slice) +1, (bottom + slice) +1);
 			this.indices.push((bottom + slice),  (top + slice), (top + slice) +1);

 		}
 		this.indices.push(bottom + this.slices - 1, bottom, top);
 		this.indices.push(bottom + this.slices - 1, top, top + this.slices - 1); 
 		this.indices.push(bottom + this.slices - 1, top, bottom);
 		this.indices.push(bottom + this.slices - 1, top + this.slices - 1, top); 

 	}
 	/*this.vertices = [
 	-0.5, -0.5, 0,
 	0.5, -0.5, 0,
 	-0.5, 0.5, 0,
 	0.5, 0.5, 0
 	];

 	this.indices = [
 	0, 1, 2, 
 	3, 2, 1
 	];

 	this.normals = [
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1,
 	0, 0, 1
 	];
	//*/
 	this.primitiveType = this.scene.gl.TRIANGLES;
 	this.initGLBuffers();
 };
