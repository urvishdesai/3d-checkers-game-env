
/** Represents a plane with nrDivs divisions along both axis, with center at (0,0) */
function MyPatch(scene, uDeg, vDeg, uDivs, vDivs, controlPoints) {
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
	this.uDeg = uDeg;
	this.vDeg = vDeg;
	this.controlPoints = controlPoints;
	this.patch = this.makeSurface();

	//this.patchLength = 1.0 / nrDivs;

	this.initBuffers();
};

MyPatch.prototype = Object.create(CGFobject.prototype);
MyPatch.prototype.constructor = MyPatch;

MyPatch.prototype.getKnotsVector = function(degree) { // TODO (CGF 0.19.3): add to CGFnurbsSurface
	
	var v = new Array();
	for (var i=0; i<=degree; i++) {
		v.push(0);
	}
	for (var i=0; i<=degree; i++) {
		v.push(1);
	}
	return v;
}

MyPatch.prototype.makeSurface = function () {
		
	var knots1 = this.getKnotsVector(this.uDeg); 
	var knots2 = this.getKnotsVector(this.vDeg);

	var nurbsSurface = new CGFnurbsSurface(this.uDeg, this.vDeg, knots1, knots2, this.controlPoints);
	
	getSurfacePoint = function(u, v) {
		return nurbsSurface.getPoint(u, v);
	};

	var obj = new CGFnurbsObject(this.scene, getSurfacePoint, this.uDivs, this.vDivs);
	return obj;		
}

MyPatch.prototype.display = function() {
	this.patch.display();
}