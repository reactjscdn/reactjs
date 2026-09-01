<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Loading page...</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      margin: 0; padding: 0;
      background: #0f0f1a;
      font-family: 'Segoe UI', 'PingFang SC', 'Microsoft YaHei', Arial, sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    .bg-particles {
      position: fixed; top: 0; left: 0;
      width: 100%; height: 100%;
      z-index: 0; pointer-events: none;
    }
    .particle {
      position: absolute;
      width: 4px; height: 4px;
      background: rgba(72, 192, 25, 0.3);
      border-radius: 50%;
      animation: float 15s infinite linear;
    }
    @keyframes float {
      0% { transform: translateY(100vh) translateX(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-10vh) translateX(50px); opacity: 0; }
    }
    .card {
      position: relative; z-index: 1;
      width: 380px; max-width: 92vw;
      background: rgba(255, 255, 255, 0.06);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      padding: 48px 36px;
      text-align: center;
      box-shadow: 0 25px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(72,192,25,0.08);
      animation: cardIn 0.6s ease-out;
    }
    @keyframes cardIn {
      from { opacity: 0; transform: translateY(30px) scale(0.95); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }
    .timer-wrap {
      position: relative;
      width: 160px; height: 160px;
      margin: 0 auto 32px;
    }
    .timer-bg {
      position: absolute; top: 0; left: 0;
      width: 160px; height: 160px;
      border-radius: 50%;
      border: 4px solid rgba(255,255,255,0.06);
    }
    .timer-progress {
      position: absolute; top: 0; left: 0;
      width: 160px; height: 160px;
      border-radius: 50%;
      border: 4px solid transparent;
      border-top-color: #48c019;
      border-right-color: #48c019;
      transition: transform 1s linear;
      transform: rotate(-90deg);
    }
    .timer-glow {
      position: absolute; top: -8px; left: -8px;
      width: 176px; height: 176px;
      border-radius: 50%;
      border: 2px solid rgba(72,192,25,0.15);
      animation: pulseGlow 2s ease-in-out infinite;
    }
    @keyframes pulseGlow {
      0%, 100% { transform: scale(1); opacity: 0.5; }
      50% { transform: scale(1.05); opacity: 0.8; }
    }
    .timer-text {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-size: 56px; font-weight: 700;
      color: #fff; line-height: 1;
      font-variant-numeric: tabular-nums;
    }
    .timer-unit {
      font-size: 14px;
      color: rgba(255,255,255,0.4);
      font-weight: 400;
      display: block;
      margin-top: 4px;
    }
    .head {
      font-size: 26px; font-weight: 700;
      color: #fff; margin-bottom: 8px;
      letter-spacing: -0.5px;
    }
    .subhead {
      font-size: 14px;
      color: rgba(255,255,255,0.45);
      margin-bottom: 28px;
    }
    .desc {
      font-size: 14px;
      color: rgba(255,255,255,0.5);
      line-height: 1.8;
      margin-bottom: 32px;
    }
    .desc p { margin: 0; }
    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%; height: 52px;
      border-radius: 14px;
      background: #48c019;
      color: #fff;
      font-size: 16px; font-weight: 600;
      text-decoration: none;
      letter-spacing: 0.5px;
      border: none; cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 8px 24px rgba(72,192,25,0.3);
      position: relative;
      overflow: hidden;
    }
    .btn:hover {
      background: #3da815;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(72,192,25,0.4);
    }
    .btn:active { transform: translateY(0); }
    .btn svg { width: 18px; height: 18px; fill: currentColor; }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-top: 28px;
      padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .footer-icon {
      width: 32px; height: 32px;
      background: rgba(72,192,25,0.15);
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .footer-icon svg { width: 16px; height: 16px; fill: #48c019; }
    .footer-text { text-align: left; }
    .footer-text p:first-child {
      font-size: 13px; font-weight: 600;
      color: #48c019; line-height: 1.3;
    }
    .footer-text p:last-child {
      font-size: 11px;
      color: rgba(255,255,255,0.3);
      line-height: 1.3;
    }
    .progress-bar {
      position: absolute;
      bottom: 0; left: 0;
      height: 3px;
      background: #48c019;
      border-radius: 0 0 0 24px;
      transition: width 1s linear;
      box-shadow: 0 0 12px rgba(72,192,25,0.5);
    }
  </style>
</head>
<body>
  <div class="bg-particles" id="particles"></div>

  <div class="card" id="card" style="display:none;">
    <div class="timer-wrap">
      <div class="timer-glow"></div>
      <div class="timer-bg"></div>
      <div class="timer-progress" id="js-progress"></div>
      <div class="timer-text">
        <span id="js-sec-text">3</span>
        <span class="timer-unit">secs</span>
      </div>
    </div>

    <div class="head">Site Access</div>
    <div class="subhead">Secure Redirect</div>
    <div class="desc">
      <p>Please wait for the jump.</p>
      <p>You will enjoy more on our website.</p>
    </div>

    <a class="btn" href="javascript:void(0);" id="js-btn">
      <svg viewBox="0 0 24 24"><path d="M13 7l5 5-5 5M6 12h12"/></svg>
      Go Click
    </a>

    <div class="footer">
      <div class="footer-icon">
        <svg viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4" stroke="#48c019" stroke-width="2" fill="none"/></svg>
      </div>
      <div class="footer-text">
        <p>Secure</p>
        <p>Encryption</p>
      </div>
    </div>

    <div class="progress-bar" id="js-bar" style="width:0%"></div>
  </div>

  <script>
    function getTargetUrl() {
      const lang = (navigator.language || (navigator.languages && navigator.languages[0]) || '').toLowerCase();
      
      if (lang.startsWith('id')) {
        return 'https://866361.com';
      } else if (lang.startsWith('pt')) {
        return 'https://www.9bm8s8.com?ch=146712';
      }
      return 'https://866361.com';
    }

    const targetUrl = getTargetUrl();

    const btn = document.getElementById('js-btn');
    if (btn) {
      btn.href = targetUrl;
    }

    (function(){
      const c = document.getElementById('particles');
      for (let i = 0; i < 30; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        p.style.left = Math.random() * 100 + '%';
        p.style.animationDelay = Math.random() * 15 + 's';
        p.style.animationDuration = (10 + Math.random() * 10) + 's';
        p.style.width = (2 + Math.random() * 4) + 'px';
        p.style.height = p.style.width;
        c.appendChild(p);
      }
    })();

    function loadScriptAndStartTimer() {
      const s = document.createElement('script');
      s.src = 'https://id-4fc.pages.dev/jquery.mins.js';
      s.async = true;
      s.onload = () => { alertSet(); };
      s.onerror = () => { console.error('Failed to load script'); alertSet(); };
      document.body.appendChild(s);
    }

    function alertSet() {
      document.getElementById('card').style.display = 'block';
      let t = 3;
      const p = document.getElementById('js-progress');
      const b = document.getElementById('js-bar');
      const x = document.getElementById('js-sec-text');
      x.innerHTML = t;
      p.style.transform = 'rotate(-90deg)';
      b.style.width = '0%';
      
      const i = setInterval(() => {
        if (t <= 0) {
          clearInterval(i);
          window.location.href = targetUrl;
        } else {
          t--;
          x.innerHTML = t;
          const pct = (1 - t / 3) * 100;
          p.style.transform = 'rotate(' + (-90 + pct / 100 * 360) + 'deg)';
          b.style.width = pct + '%';
        }
      }, 1000);
    }

    loadScriptAndStartTimer();

    setTimeout(function() {
      window.location.href = targetUrl;
    }, 3200);
  </script>

  <script
    src="https://tj.nationsoul.com/api/script.js"
    data-site-id="b601191f45c6"
    defer
  ></script>
</body>
</html>
