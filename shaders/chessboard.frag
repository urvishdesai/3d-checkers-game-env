#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;
uniform sampler2D uSampler;

uniform vec4 c1;
uniform vec4 c2;
uniform vec4 cs;

uniform float su;
uniform float sv;
uniform float du;
uniform float dv;

void main() {
	vec4 color = texture2D(uSampler, vTextureCoord);

	if ( (vTextureCoord.x > su/du) && (vTextureCoord.y < (1.0 - sv/dv)) && (vTextureCoord.x < (su+1.0)/du) && (vTextureCoord.y > (1.0 - (sv+1.0)/dv) ))
			color.rgba *= cs;
	
	else if ( (mod(du * vTextureCoord.x,2.0) < 1.0) && (mod(dv * vTextureCoord.y,2.0) < 1.0) )
		color.rgba *= c1;
	
	else if ( (mod(du * vTextureCoord.x,2.0) > 1.0) && (mod(dv * vTextureCoord.y,2.0) > 1.0) )
		color.rgba *= c1;
	
	else 
		color.rgba *= c2;

	//color.rgba /= 2.0;
	gl_FragColor = color;
}
