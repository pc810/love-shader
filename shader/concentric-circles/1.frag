
// Author: Priyank Kumar Chaudhari (https://github.com/pc810)
// https://twitter.com/marioecg/status/1318360618043428870
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform float u_time;

float circleshape(vec2 position, float radius, vec2 center){
    float x = length(position-center);
    float sg = sin(150.*(x) + 1.5*u_time)*0.2;
    return step(0.1, sg) + step(-0.19,sg);
}   

void main(){
    vec2 uv = gl_FragCoord.xy / u_resolution;	        
    vec3 color = vec3(0.0);
    vec2 c1 = vec2(0.15,0.5);
    vec2 c2 = vec2(1.-0.15,0.5);
    float circle1 = circleshape(uv, .1,c1);
    float circle2 = circleshape(uv, .1,c2);
    color = vec3(circle1*circle2);
    color = 1. - color;
    gl_FragColor = vec4(color, 1.0);
}