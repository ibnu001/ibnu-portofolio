"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { cn } from "../../lib/utils";

const Atat3D = ({ className }: { className?: string }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Setup dasar ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(1.2, 0, 3.2);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // === Pencahayaan ===
    // Ambient light lembut
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Hemisphere light untuk nuansa langit dan tanah
    const hemiLight = new THREE.HemisphereLight(0xcceeff, 0x444444, 0.6);
    hemiLight.position.set(0, 20, 0);
    scene.add(hemiLight);

    // Directional light utama (seperti matahari)
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7.5);
    dirLight.castShadow = true;
    scene.add(dirLight);

    // Directional light tambahan dari sisi lain untuk fill light
    const fillLight = new THREE.DirectionalLight(0xfff2cc, 0.3);
    fillLight.position.set(-5, 5, -7);
    scene.add(fillLight);

    // === Load model GLB ===
    const loader = new GLTFLoader();
    loader.load(
      "/models/star_wars_atat_animation.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.5, 0.5, 0.5);

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);
        // model.position.set(0, 1.0878103020254042, 0.43355752548067056); 
        model.position.x += 0.3;

        model.rotation.y = -Math.PI / 7;
        const pivot = new THREE.Group();
        pivot.add(model);
        scene.add(pivot);

        // === Animasi GLB ===
        let mixer: THREE.AnimationMixer | null = null;
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          gltf.animations.forEach((clip) => {
            mixer!.clipAction(clip).play();
          });
        }

        // Animasi render loop
        const clock = new THREE.Clock();
        const animate = () => {
          requestAnimationFrame(animate);
          if (mixer) mixer.update(clock.getDelta());
          controls.update();
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // === OrbitControls ===
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = false;

    // === Resize handler ===
    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      window?.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={cn(
        "w-[500px] h-[500px] aspect-square bg-transparent rounded-2xl",
        className
      )}
    />
  );
};

export default Atat3D;
