// A simple 5X5 grid
#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;

void main(){          
  vec2 uv = gl_FragCoord.xy / u_resolution;
  vec3 col = vec3(0.);
  uv *= 5.;  
  vec2 gv = fract(uv)-.5;
  gl_FragColor = vec4(uv,0., 1.0);    
  if(gv.x>.48 ||gv.y>.48) 
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
  else 
    gl_FragColor = vec4(col, 1.0);  
}