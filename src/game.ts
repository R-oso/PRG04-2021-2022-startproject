import * as PIXI from "pixi.js";
import fishImage from "./images/fish.png";
import bubbleImage from "./images/bubble.png";
import waterImage from "./images/water.jpg";

//
// STAP 1 - maak een pixi canvas
//
const pixi = new PIXI.Application({ width: 1200, height: 900 });
document.body.appendChild(pixi.view);

//
// STAP 2 - preload alle afbeeldingen
//
const loader = new PIXI.Loader();
loader.add("fishTexture", fishImage).add("bubbleTexture", bubbleImage).add("waterTexture", waterImage);
loader.load(() => loadCompleted());

//
// STAP 3 - maak een sprite als de afbeeldingen zijn geladen
//
function loadCompleted() {
  let water = new PIXI.Sprite(loader.resources["waterTexture"].texture!);
  pixi.stage.addChild(water);

  //   const fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!);
  //   fish.anchor.set(0.5);
  //   pixi.stage.addChild(fish);

  //   pixi.stage.interactive = true;
  //   pixi.stage.on("pointermove", movePlayer);

  // player object
  const player = new PIXI.Sprite(loader.resources["fishTexture"].texture!);
  player.anchor.set(0.5);
  player.x = pixi.view.width / 2;
  player.y = pixi.view.height / 2;

  pixi.stage.addChild(player);

  // mouse interactions
  pixi.stage.interactive = true;
  pixi.stage.on("pointermove", movePlayer);

  function movePlayer(e) {
    let pos = e.data.global;

    player.x = pos.x;
    player.y = pos.y;
  }
}
