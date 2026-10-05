import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0.8, 5.5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // Group for the entire laptop
    const laptopGroup = new THREE.Group();
    scene.add(laptopGroup);

    // Materials
    const titaniumDarkMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#101614'),
      metalness: 0.85,
      roughness: 0.25,
      clearcoat: 0.4,
      clearcoatRoughness: 0.15,
      reflectivity: 0.9,
    });

    const titaniumLightMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#1A2420'),
      metalness: 0.9,
      roughness: 0.2,
      clearcoat: 0.3,
    });

    const screenBezelMat = new THREE.MeshBasicMaterial({ color: 0x050706 });

    const screenDisplayMat = new THREE.MeshBasicMaterial({
      color: 0x0C120E,
    });

    // Create a dynamic canvas texture for the screen content (VulnShop interface preview)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 1024;
    screenCanvas.height = 640;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      // Screen background
      ctx.fillStyle = '#080C0A';
      ctx.fillRect(0, 0, 1024, 640);

      // Top bar
      ctx.fillStyle = '#0F1612';
      ctx.fillRect(0, 0, 1024, 48);

      // Status indicator
      ctx.fillStyle = '#B7FF6A';
      ctx.beginPath();
      ctx.arc(40, 24, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#F5F7F4';
      ctx.font = 'bold 18px sans-serif';
      ctx.fillText('VULNSHOP / OS 4.2', 64, 30);

      // Code / UI preview blocks
      ctx.fillStyle = '#141E18';
      ctx.roundRect(40, 80, 440, 240, 12);
      ctx.fill();

      ctx.fillStyle = '#B7FF6A';
      ctx.font = '16px monospace';
      ctx.fillText('> SYSTEM: READY', 64, 120);
      ctx.fillStyle = '#89928E';
      ctx.font = '14px monospace';
      ctx.fillText('ENCRYPTION: AES-GCM-256', 64, 150);
      ctx.fillText('CATALOG: 6 HARDWARE NODES', 64, 180);
      ctx.fillText('BURP SUITE: PASS-THROUGH OK', 64, 210);

      // Waveform / Chart
      ctx.fillStyle = '#141E18';
      ctx.roundRect(510, 80, 470, 240, 12);
      ctx.fill();

      ctx.strokeStyle = '#B7FF6A';
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(530, 240);
      ctx.bezierCurveTo(620, 120, 700, 280, 800, 140);
      ctx.bezierCurveTo(860, 200, 920, 100, 960, 160);
      ctx.stroke();

      // Lower cards
      ctx.fillStyle = '#141E18';
      ctx.roundRect(40, 350, 940, 240, 12);
      ctx.fill();

      ctx.fillStyle = '#F5F7F4';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText('AeroBook 14 — Cinematic Precision', 70, 410);

      ctx.fillStyle = '#B7FF6A';
      ctx.font = 'bold 28px monospace';
      ctx.fillText('₹69,999', 70, 460);

      ctx.fillStyle = '#89928E';
      ctx.font = '16px sans-serif';
      ctx.fillText('Titanium Unibody · M3 Ultra Grade · Ultra-Low Latency', 70, 510);
    }
    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    screenDisplayMat.map = screenTexture;
    screenDisplayMat.needsUpdate = true;

    const emissiveLimeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color('#B7FF6A'),
    });

    const keyboardMat = new THREE.MeshStandardMaterial({
      color: 0x0A0F0D,
      roughness: 0.6,
      metalness: 0.2,
    });

    const trackpadMat = new THREE.MeshStandardMaterial({
      color: 0x141C17,
      roughness: 0.4,
      metalness: 0.5,
    });

    // 1. Base (Bottom Chassis)
    const baseGeo = new THREE.BoxGeometry(2.4, 0.07, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, titaniumDarkMat);
    baseMesh.position.set(0, 0, 0);
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    laptopGroup.add(baseMesh);

    // Keyboard well
    const kbWellGeo = new THREE.BoxGeometry(2.1, 0.01, 0.85);
    const kbWell = new THREE.Mesh(kbWellGeo, keyboardMat);
    kbWell.position.set(0, 0.036, -0.2);
    laptopGroup.add(kbWell);

    // Trackpad
    const tpGeo = new THREE.BoxGeometry(0.8, 0.005, 0.5);
    const tpMesh = new THREE.Mesh(tpGeo, trackpadMat);
    tpMesh.position.set(0, 0.038, 0.45);
    laptopGroup.add(tpMesh);

    // Emissive accent light bar along front edge
    const accentBarGeo = new THREE.BoxGeometry(2.2, 0.015, 0.02);
    const accentBar = new THREE.Mesh(accentBarGeo, emissiveLimeMat);
    accentBar.position.set(0, 0.01, 0.8);
    laptopGroup.add(accentBar);

    // 2. Display Hinge & Lid
    const displayHinge = new THREE.Group();
    displayHinge.position.set(0, 0.04, -0.78);
    displayHinge.rotation.x = THREE.MathUtils.degToRad(-108); // Open angle
    laptopGroup.add(displayHinge);

    // Display Lid (Back)
    const lidGeo = new THREE.BoxGeometry(2.4, 1.55, 0.04);
    const lidMesh = new THREE.Mesh(lidGeo, titaniumDarkMat);
    lidMesh.position.set(0, 0.775, 0);
    lidMesh.castShadow = true;
    displayHinge.add(lidMesh);

    // Logo on back of lid
    const logoGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.005, 32);
    const logoMesh = new THREE.Mesh(logoGeo, titaniumLightMat);
    logoMesh.rotation.x = Math.PI / 2;
    logoMesh.position.set(0, 0.775, -0.022);
    displayHinge.add(logoMesh);

    // Screen Bezel
    const bezelGeo = new THREE.PlaneGeometry(2.32, 1.48);
    const bezelMesh = new THREE.Mesh(bezelGeo, screenBezelMat);
    bezelMesh.position.set(0, 0.775, 0.021);
    displayHinge.add(bezelMesh);

    // Active Display Screen
    const screenGeo = new THREE.PlaneGeometry(2.24, 1.4);
    const screenMesh = new THREE.Mesh(screenGeo, screenDisplayMat);
    screenMesh.position.set(0, 0.775, 0.022);
    displayHinge.add(screenMesh);

    // 3. Floating Dust Particles
    const particlesCount = 80;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 5 + 0.5;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xB7FF6A,
      size: 0.025,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Main studio key light
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 5, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    scene.add(keyLight);

    // Lime accent rim light
    const rimLight = new THREE.PointLight(0xB7FF6A, 4, 8);
    rimLight.position.set(-3, 2, 2);
    scene.add(rimLight);

    // Cool violet fill light
    const fillLight = new THREE.PointLight(0xA8A2FF, 2.5, 8);
    fillLight.position.set(3, -1, -2);
    scene.add(fillLight);

    // Floor shadow plane
    const shadowPlaneGeo = new THREE.PlaneGeometry(10, 10);
    const shadowPlaneMat = new THREE.ShadowMaterial({ opacity: 0.35 });
    const shadowPlane = new THREE.Mesh(shadowPlaneGeo, shadowPlaneMat);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Initial position & orientation
    laptopGroup.position.set(0.3, -0.1, 0);
    laptopGroup.rotation.set(0.2, -0.4, 0.05);

    // Mouse & Scroll State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationY = -0.4;
    let targetRotationX = 0.2;
    let scrollOffset = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = -0.4 + mouseX * 0.45;
      targetRotationX = 0.2 - mouseY * 0.25;
    };

    const onScroll = () => {
      scrollOffset = window.scrollY || window.pageYOffset;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', onScroll, { passive: true });

    // Handle Resize
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth interpolation for mouse orientation
      laptopGroup.rotation.y += (targetRotationY - laptopGroup.rotation.y) * 0.05;
      laptopGroup.rotation.x += (targetRotationX - laptopGroup.rotation.x) * 0.05;

      // Floating oscillation
      laptopGroup.position.y = -0.1 + Math.sin(elapsedTime * 1.2) * 0.08 - scrollOffset * 0.001;
      laptopGroup.position.z = -scrollOffset * 0.002;

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.03;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="relative w-80 h-48 rounded-2xl bg-surface-elevated border border-surface-border p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="meta-badge text-lime-primary">AeroBook 14</span>
            <span className="w-2 h-2 rounded-full bg-lime-primary animate-ping" />
          </div>
          <div>
            <div className="text-xl font-bold text-text-primary">Cinematic Precision</div>
            <div className="text-sm text-text-secondary mt-1">Titanium Edition</div>
          </div>
          <div className="text-xs font-mono text-lime-primary">₹69,999 · SYSTEM ONLINE</div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      title="Drag mouse to inspect 3D hardware"
    />
  );
};
