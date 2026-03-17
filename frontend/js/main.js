// js/main.js
// Lightweight startup bootstrap for faster first paint / better startup responsiveness
window.__POOL_PERF = Object.assign({
  initialMaxPixelRatio: 1.25,
  interactionMaxPixelRatio: 2,
  initialShadowMapSize: 1024,
  upgradedShadowMapSize: 2048,
  waterPrepassDelayMs: 1500,
  deferPBR: true,
  deferCaustics: true,
  waterSimSize: 192,
  waterAnisotropy: 2
}, window.__POOL_PERF || {});

const boot = async () => {
  const { PoolApp } = await import('./app/PoolApp.js');
  const app = new PoolApp();
  app.start();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(boot), { once: true });
} else {
  requestAnimationFrame(boot);
}
