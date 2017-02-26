
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
function MyPlane(scene, xlen, ylen, uDivs, vDivs) {
	//CGFObject.call(this,scene);
	this.scene = scene;
	// nrDivs = 1 if not provided
	uDivs = typeof uDivs !== 'undefined' ? uDivs : 1;
	vDivs = typeof vDivs !== 'undefined' ? vDivs : 1;
	/*this.smin = minS || 0;
	this.tmin = minT || 0;
	this.smax = maxS || 1;
	this.tmax = maxT || 1;
	*/
	this.uDivs = uDivs;
	this.vDivs = vDivs;
	this.controlPoints = [
							[[-xlen/2, -ylen/2, 0, 1], [-xlen/2, ylen/2, 0, 1]],
							[[xlen/2, -ylen/2, 0, 1], [xlen/2, ylen/2, 0, 1]]
						];

	this.patch1 = this.makeSurface();
	
	//this.patchLength = 1.0 / nrDivs;

	this.initBuffers();
};

MyPlane.prototype = Object.create(CGFobject.prototype);
MyPlane.prototype.constructor = MyPlane;

MyPlane.prototype.getKnotsVector = function(degree) { // TODO (CGF 0.19.3): add to CGFnurbsSurface
	
	var v = new Array();
	for (var i=0; i<=degree; i++) {
		v.push(0);
	}
	for (var i=0; i<=degree; i++) {
		v.push(1);
	}
	return v;
}

MyPlane.prototype.makeSurface = function () {
		
	var knots1 = this.getKnotsVector(1); 
	var knots2 = this.getKnotsVector(1);

	var nurbsSurface = new CGFnurbsSurface(1, 1, knots1, knots2, this.controlPoints);
	
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

	var obj = new CGFnurbsObject(this.scene, getSurfacePoint, this.uDivs, this.vDivs);
	return obj;		
}

MyPlane.prototype.display = function() {
	this.patch1.display();
		//console.log(this.vertices);
}