(function(){
  var canvas = document.getElementById('signal');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduceMotion) return;

  var w, h, dpr = Math.min(window.devicePixelRatio || 1, 2);

  function resize(){
    w = canvas.offsetWidth;
    h = canvas.offsetHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  window.addEventListener('resize', resize);
  resize();

  var t = 0;

  function wave(offsetY, amp, freq, speed, color, lineWidth){
    ctx.beginPath();
    for(var x=0; x<=w; x+=4){
      var y = offsetY + Math.sin((x*freq) + t*speed) * amp * Math.sin(x/w*Math.PI);
      if(x===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    }
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  function grid(){
    ctx.strokeStyle = 'rgba(77,141,255,0.05)';
    ctx.lineWidth = 1;
    var step = 48;
    for(var x=0;x<w;x+=step){
      ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();
    }
    for(var y=0;y<h;y+=step){
      ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();
    }
  }

  function draw(){
    ctx.clearRect(0,0,w,h);
    grid();
    wave(h*0.42, 26, 0.012, 1.4, 'rgba(77,141,255,0.5)', 1.6);
    wave(h*0.58, 16, 0.02, -1.0, 'rgba(29,78,216,0.5)', 1.2);
    wave(h*0.5, 40, 0.006, 0.6, 'rgba(127,176,255,0.18)', 1);
    t += 1;
    requestAnimationFrame(draw);
  }
  draw();
})();
