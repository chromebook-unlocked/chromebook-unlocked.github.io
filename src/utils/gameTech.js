/**
 * Detects a game's engine from signatures in its own games/<folder>/index.html.
 * Only reports an engine when the file contains direct evidence of it; anything
 * else is reported as plain "HTML5", which is true of every game on the site.
 */
const fs = require("fs");
const path = require("path");

// Order matters: first match wins (e.g. a Flash port may mention other engines).
const ENGINE_SIGNATURES = [
  ["Flash (via Ruffle)", /ruffle(?:\.js|-rs|\/ruffle)|\.swf\b/i],
  ["Unity WebGL", /UnityLoader|createUnityInstance|\.unityweb\b|unityFramework|\.loader\.js["']|\/Build\/[^"']+\.(?:wasm|data)(?:\.br|\.gz)?["']/],
  ["GameMaker", /GameMaker|gml_Script|html5game\//],
  ["Construct", /c3runtime|c2runtime|Construct ?[23]|cr_createRuntime/],
  ["Godot", /\bGodot\b|\.pck["']|godot\.js/i],
  ["LÖVE", /game\.love["']|love\.js/i],
  ["Ren'Py", /renpy/i],
  ["Emulator", /EmulatorJS|retroarch|EJS_core|\.gba["']|\.nes["']/i],
  ["Phaser", /\bphaser[\w.-]*\.js|Phaser\.Game/i],
  ["Cocos", /cocos2d|CCBoot|cc\.game/],
  ["PixiJS", /pixi(?:\.min)?\.js|PIXI\./],
  ["Scratch (TurboWarp)", /turbowarp|scratch-vm/i],
];

function detectTechnology(gamesDir, folder) {
  const file = path.join(gamesDir, folder, "index.html");
  if (!fs.existsSync(file)) return "HTML5";
  const html = fs.readFileSync(file, "utf8");
  const hit = ENGINE_SIGNATURES.find(([, re]) => re.test(html));
  return hit ? hit[0] : "HTML5";
}

module.exports = { detectTechnology };
