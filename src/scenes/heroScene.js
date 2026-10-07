/**
 * heroScene.js — Interactive Three.js 3D violet particle orb & cyber crystal
 */
import * as THREE from 'three';

export function initHeroScene(canvas) {
  if (!canvas) return null;

  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scene setup
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x07050d, 0.0018);

  const camera = new THREE.PerspectiveCamera(
    45,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  );
  camera.position.z = 85;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // ── Particle Core (Inner Sphere of Light Points) ──
  const particleCount = 1200;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const color1 = new THREE.Color(0xa855f7); // Violet
  const color2 = new THREE.Color(0x7c3aed); // Deep Violet
  const color3 = new THREE.Color(0xffd21f); // Subtle Gold sparkle

  for (let i = 0; i < particleCount; i++) {
    // Distribute around sphere radius 22-28
    const phi = Math.acos(-1 + (2 * i) / particleCount);
    const theta = Math.sqrt(particleCount * Math.PI) * phi;
    const radius = 24 + (Math.random() - 0.5) * 6;

    positions[i * 3]     = radius * Math.cos(theta) * Math.sin(phi);
    positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // Color gradient mixing
    const mixed = color1.clone().lerp(color2, Math.random());
    if (Math.random() < 0.08) mixed.lerp(color3, 0.6); // slight gold accents

    colors[i * 3]     = mixed.r;
    colors[i * 3 + 1] = mixed.g;
    colors[i * 3 + 2] = mixed.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Circular point texture generated dynamically
  const getCircleTexture = () => {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.3, 'rgba(216, 180, 254, 0.8)');
    grad.addColorStop(0.8, 'rgba(168, 85, 247, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(canvas);
  };

  const pointMaterial = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    map: getCircleTexture(),
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleOrb = new THREE.Points(geometry, pointMaterial);
  scene.add(particleOrb);

  // ── Outer Wireframe Cage (Geodesic Icosahedron) ──
  const cageGeometry = new THREE.IcosahedronGeometry(26, 2);
  const cageMaterial = new THREE.MeshBasicMaterial({
    color: 0x9333ea,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });
  const cageMesh = new THREE.Mesh(cageGeometry, cageMaterial);
  scene.add(cageMesh);

  // ── Ambient Ring ──
  const ringGeo = new THREE.TorusGeometry(34, 0.4, 16, 100);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0xa855f7,
    transparent: true,
    opacity: 0.25,
    wireframe: true
  });
  const ringMesh = new THREE.Mesh(ringGeo, ringMat);
  ringMesh.rotation.x = Math.PI / 3;
  scene.add(ringMesh);

  // ── Mouse Interactivity with Smooth Damping ──
  let targetMouseX = 0;
  let targetMouseY = 0;
  let mouseX = 0;
  let mouseY = 0;

  const onMouseMove = (e) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    targetMouseX = (e.clientX - halfW) / halfW;
    targetMouseY = (e.clientY - halfH) / halfH;
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // ── Resize Observer ──
  let resizeTimeout;
  const onResize = () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      if (!width || !height) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    }, 100);
  };

  window.addEventListener('resize', onResize);

  // ── Visibility Pause (Conserve battery/GPU) ──
  let isVisible = true;
  const observer = new IntersectionObserver(([entry]) => {
    isVisible = entry.isIntersecting;
  }, { threshold: 0.05 });
  observer.observe(canvas);

  // ── Animation Loop ──
  let animationFrameId;
  const startTime = performance.now();
  let lastTime = startTime;

  const animate = () => {
    animationFrameId = requestAnimationFrame(animate);

    if (!isVisible) return;

    const now = performance.now();
    const delta = (now - lastTime) / 1000;
    const elapsedTime = (now - startTime) / 1000;
    lastTime = now;

    if (!prefersReducedMotion) {
      // Smooth mouse follow lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Rotate particles & cage
      particleOrb.rotation.y += 0.003;
      particleOrb.rotation.x += 0.001;

      cageMesh.rotation.y = elapsedTime * 0.05;
      cageMesh.rotation.z = elapsedTime * 0.03;

      ringMesh.rotation.z = -elapsedTime * 0.08;

      // Mouse tilt
      scene.rotation.y = mouseX * 0.35;
      scene.rotation.x = -mouseY * 0.25;

      // Gentle floating breathing effect
      const breathe = Math.sin(elapsedTime * 1.5) * 0.8;
      particleOrb.scale.set(1 + breathe * 0.03, 1 + breathe * 0.03, 1 + breathe * 0.03);
    }

    renderer.render(scene, camera);
  };

  animate();

  // Cleanup helper
  return {
    destroy() {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      geometry.dispose();
      pointMaterial.dispose();
      cageGeometry.dispose();
      cageMaterial.dispose();
      ringGeo.dispose();
      ringMat.dispose();
      renderer.dispose();
    }
  };
}
