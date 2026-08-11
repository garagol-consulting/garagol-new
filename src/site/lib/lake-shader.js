// Black-lake surface. Raw WebGL1, dependency-free, ~2kB gz. From the v3 design
// handoff; client-only (never import at module scope in SSR paths).
export function createLake(canvas, opts = {}) {
  const o = Object.assign({ interactive: true, ambient: 1, dprCap: 1.5, specular: 1 }, opts);
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
  if (!gl) return null;
  const NR = 12;
  const vs = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}';
  const fs = `precision highp float;
uniform vec2 uRes;uniform float uT;uniform float uAmb;uniform float uSpec;uniform vec4 uR[${NR}];
float H(vec2 p){
 float h=0.;
 h+=uAmb*0.011*sin(p.x*3.1+uT*0.34)*sin(p.y*2.3-uT*0.21);
 h+=uAmb*0.007*sin(p.x*6.4-uT*0.47+p.y*3.1);
 for(int i=0;i<${NR};i++){vec4 r=uR[i];float age=uT-r.z;
  if(r.w>0.0005&&age>0.){float d=distance(p,r.xy);
   h+=r.w*exp(-d*4.2)*exp(-age*1.25)*sin(26.0*d-7.2*age);}}
 return h;}
void main(){
 vec2 uv=gl_FragCoord.xy/uRes;
 vec2 p=vec2(uv.x*uRes.x/uRes.y,uv.y);
 float e=0.0045;float h=H(p);
 float hx=H(p+vec2(e,0.))-h;float hy=H(p+vec2(0.,e))-h;
 vec3 n=normalize(vec3(-hx/e*0.34,-hy/e*0.34,1.));
 vec3 base=mix(vec3(0.020,0.024,0.028),vec3(0.047,0.055,0.062),pow(1.0-uv.y,1.4));
 vec3 L=normalize(vec3(0.35,0.55,0.35));
 vec3 Hh=normalize(L+vec3(0.,0.,1.));
 float nh=max(dot(n,Hh),0.);
 float spec=(pow(nh,95.)*0.85+pow(nh,14.)*0.085)*uSpec;
 vec3 brass=vec3(0.851,0.757,0.463);
 float diff=max(dot(n,L),0.)*0.05;
 float streak=exp(-pow((uv.x-0.66)*7.5,2.))*exp(-abs(uv.y-0.34)*2.6)*(0.55+0.45*sin(p.y*46.+h*160.+uT*0.6))*0.035*uSpec;
 vec3 col=base+diff*vec3(0.09,0.10,0.11)+spec*brass+streak*brass;
 float vig=smoothstep(1.35,0.3,length(uv-vec2(0.5,0.45)));
 col*=mix(0.68,1.0,vig);
 col+=(fract(sin(dot(gl_FragCoord.xy,vec2(12.9898,78.233)))*43758.5453)-0.5)/255.;
 gl_FragColor=vec4(col,1.);}`;
  function sh(t, s) { const x = gl.createShader(t); gl.shaderSource(x, s); gl.compileShader(x); return x; }
  const pr = gl.createProgram();
  gl.attachShader(pr, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(pr, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(pr);
  if (!gl.getProgramParameter(pr, gl.LINK_STATUS)) return null;
  gl.useProgram(pr);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(pr, 'p');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n) => gl.getUniformLocation(pr, n);
  const uRes = U('uRes'), uT = U('uT'), uAmb = U('uAmb'), uSpec = U('uSpec'), uR = U('uR[0]');
  const ripples = new Float32Array(NR * 4);
  let ri = 0, raf = 0, running = false, t0 = performance.now();
  const now = () => (performance.now() - t0) / 1000;
  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, o.dprCap);
    const w = Math.max(2, Math.round(canvas.clientWidth * dpr)), hgt = Math.max(2, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== hgt) { canvas.width = w; canvas.height = hgt; gl.viewport(0, 0, w, hgt); }
  }
  function draw(t) {
    resize();
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform1f(uT, t); gl.uniform1f(uAmb, o.ambient); gl.uniform1f(uSpec, o.specular);
    gl.uniform4fv(uR, ripples);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
  function loop() { if (!running) return; draw(now()); raf = requestAnimationFrame(loop); }
  canvas.addEventListener('webglcontextlost', (e) => {
    e.preventDefault();
    api.stop();
    canvas.style.opacity = '0'; // the poster gradient shows through
  });
  const api = {
    start() { if (!running) { running = true; raf = requestAnimationFrame(loop); } },
    stop() { running = false; cancelAnimationFrame(raf); },
    spawn(x, y, amp) {
      const a = canvas.width / canvas.height;
      ripples[ri * 4] = x * a; ripples[ri * 4 + 1] = 1 - y; ripples[ri * 4 + 2] = now(); ripples[ri * 4 + 3] = amp;
      ri = (ri + 1) % NR;
    },
    still(t, list) {
      ripples.fill(0); t0 = performance.now() - t * 1000;
      resize();
      (list || []).forEach((r, i) => {
        if (i < NR) {
          ripples[i * 4] = r[0] * (canvas.width / canvas.height || 1);
          ripples[i * 4 + 1] = 1 - r[1];
          ripples[i * 4 + 2] = t - r[2];
          ripples[i * 4 + 3] = r[3];
        }
      });
      draw(t);
    },
    destroy() { api.stop(); const e = gl.getExtension('WEBGL_lose_context'); if (e) e.loseContext(); },
    canvas, gl,
  };
  return api;
}

export function attachPointer(lake, el) {
  let lx = -1, ly = -1, lt = 0;
  const mv = (e) => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    const t = performance.now();
    const d = Math.hypot(x - lx, y - ly);
    if (d > 0.018 && t - lt > 34) {
      const amp = Math.min(0.028, 0.006 + d * (46 / Math.max(t - lt, 16)) * 0.9);
      lake.spawn(x, y, amp); lx = x; ly = y; lt = t;
    }
  };
  const dn = (e) => { const r = el.getBoundingClientRect(); lake.spawn((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height, 0.05); };
  el.addEventListener('pointermove', mv);
  el.addEventListener('pointerdown', dn);
  return () => { el.removeEventListener('pointermove', mv); el.removeEventListener('pointerdown', dn); };
}
