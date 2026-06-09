import { useEffect, useRef } from "react";
import {
  Engine,
  Scene,
  ArcRotateCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Texture
} from "@babylonjs/core";
import sandTexture from "../../Textures/textures/coast_sand_rocks_02_diff_4k.jpg";

import "./SceneViewer.css";

function SceneViewr() {
      const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const engine = new Engine(canvas, true);
    const scene = new Scene(engine);

    const camera = new ArcRotateCamera(
      "camera",
      Math.PI / 2,
      Math.PI / 3,
      8,
      Vector3.Zero(),
      scene
    );

    camera.attachControl(canvas, true);

    new HemisphericLight("light", new Vector3(0, 1, 0), scene);

    // const ground = MeshBuilder.CreateGround(
    //   "ground",
    //   { width: 10, height: 10 },
    //   scene
    // );

    // const groundMat = new StandardMaterial("groundMat", scene);
    // groundMat.diffuseColor = new Color3(0.2, 0.5, 0.2);
    // ground.material = groundMat;
const ground = MeshBuilder.CreateGround(
  "largeTerrain",
  {
    width: 2000,
    height: 2000,
    subdivisions: 100,
  },
  scene
);

const terrainMaterial = new StandardMaterial("terrainMaterial", scene);

terrainMaterial.diffuseTexture = new Texture(
  sandTexture,
  scene
);

ground.material = terrainMaterial;

terrainMaterial.diffuseTexture.uScale = 20;
terrainMaterial.diffuseTexture.vScale = 20;
    const npc = MeshBuilder.CreateBox(
      "Village Elder",
      { size: 1 },
      scene
    );

    npc.position.y = 0.5;
    npc.position.x = -2;

    const chest = MeshBuilder.CreateBox(
      "Treasure Chest",
      { width: 1.2, height: 0.6, depth: 0.8 },
      scene
    );

    chest.position.y = 0.3;
    chest.position.x = 2;

    scene.onPointerPick = (event, pickResult) => {
      if (pickResult.hit && pickResult.pickedMesh) {
        const clickedObject = pickResult.pickedMesh.name;
        console.log("Clicked:", clickedObject);

        // Later connect this to dialogue, inventory, or quests
      }
    };

    engine.runRenderLoop(() => {
      scene.render();
    });

    window.addEventListener("resize", () => {
      engine.resize();
    });

    return () => {
      engine.dispose();
    };
  }, []);
  return (
      <div className="scene-viewer">
      <canvas ref={canvasRef} className="babylon-canvas" />
    </div>
  )
}

export default SceneViewr

