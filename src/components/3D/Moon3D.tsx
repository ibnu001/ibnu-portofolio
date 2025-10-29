"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { cn } from "@/lib/utils";

const Moon3D = ({className}: {className?: string}) => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // === Setup dasar ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 1, 3);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(
      mount.clientWidth,
      mount.clientHeight
    );
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // === Pencahayaan ===
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(2, 2, 5);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    // === Load model GLB ===
    const loader = new GLTFLoader();
    loader.load(
      "/models/moon.glb",
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(0.03, 0.03, 0.03);

        // Center model
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        model.position.sub(center);

        scene.add(model);

        // Animasi rotasi ringan
        const animate = () => {
          requestAnimationFrame(animate);
          model.rotation.y += 0.005;
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
      camera.aspect =
        mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        mount.clientWidth,
        mount.clientHeight
      );
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
      className={cn("w-[350px] md:w-[400px] lg:w-[500px] h-[350px] md:h-[400px] lg:h-[500px] aspect-square bg-transparent rounded-2xl", className)}
    />
  );
};

export default Moon3D;
