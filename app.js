const presets = [
  {
    id: 1,
    title: "自分を 0, 100, 0 へテレポート",
    cat: "移動",
    target: "自分",
    level: 1,
    cmd: "/tp @s 0 100 0",
    desc: "絶対座標へ移動。高所や壁内など、到着地点の安全には注意。",
  },
  {
    id: 2,
    title: "自分を現在位置から10ブロック上へ",
    cat: "移動",
    target: "自分",
    level: 1,
    cmd: "/tp @s ~ ~10 ~",
    desc: "~ は現在位置を基準にする相対座標。",
  },
  {
    id: 3,
    title: "最も近いプレイヤーを自分の場所へ",
    cat: "移動",
    target: "他プレイヤー",
    level: 2,
    cmd: "/tp @p @s",
    desc: "@p は最寄りプレイヤー。複数人プレイでは対象を確認。",
  },
  {
    id: 4,
    title: "自分に弓を1個与える",
    cat: "アイテム",
    target: "自分",
    level: 1,
    cmd: "/give @s bow 1",
    desc: "弓を1個入手。エンチャントする場合は弓をメインハンドに持つ。",
  },
  {
    id: 5,
    title: "自分に矢を64本与える",
    cat: "アイテム",
    target: "自分",
    level: 1,
    cmd: "/give @s arrow 64",
    desc: "矢を64本入手。",
  },
  {
    id: 6,
    title: "自分にダイヤモンドのツルハシ",
    cat: "アイテム",
    target: "自分",
    level: 1,
    cmd: "/give @s diamond_pickaxe 1",
    desc: "アイテムIDの underscore も読み上げでは単語に分ける。",
  },
  {
    id: 7,
    title: "手に持った弓へ射撃ダメージ増加 V",
    cat: "エンチャント",
    target: "弓",
    level: 5,
    cmd: "/enchant @s power 5",
    desc: "Power V。先に弓をメインハンドへ持ってから実行。",
  },
  {
    id: 8,
    title: "手に持った弓へフレイム I",
    cat: "エンチャント",
    target: "弓",
    level: 1,
    cmd: "/enchant @s flame 1",
    desc: "矢を炎上させる Flame。",
  },
  {
    id: 9,
    title: "手に持った弓へ耐久力 III",
    cat: "エンチャント",
    target: "弓",
    level: 3,
    cmd: "/enchant @s unbreaking 3",
    desc: "Unbreaking III。",
  },
  {
    id: 10,
    title: "手に持った防具へ棘の鎧 III",
    cat: "エンチャント",
    target: "防具",
    level: 3,
    cmd: "/enchant @s thorns 3",
    desc: "Thorns（ソーンズ）の発音練習にも。対応する防具を手に持って実行。",
  },
  {
    id: 11,
    title: "手に持った剣へ虫特効 V",
    cat: "エンチャント",
    target: "剣・斧",
    level: 5,
    cmd: "/enchant @s bane_of_arthropods 5",
    desc: "Bane of Arthropods。長い英語IDの読み練習向け。",
  },
  {
    id: 12,
    title: "手に持った剣へ鋭さ V",
    cat: "エンチャント",
    target: "剣・斧",
    level: 5,
    cmd: "/enchant @s sharpness 5",
    desc: "Sharpness V。",
  },
  {
    id: 13,
    title: "手に持った道具へ効率強化 V",
    cat: "エンチャント",
    target: "道具",
    level: 5,
    cmd: "/enchant @s efficiency 5",
    desc: "Efficiency V。ツルハシ、斧、シャベルなど対応道具で。",
  },
  {
    id: 14,
    title: "周囲の石だけを地下50まで空気へ",
    cat: "建築・整地",
    target: "周囲ブロック",
    level: 4,
    cmd: "/fill ~-5 ~-1 ~-5 ~5 ~-50 ~5 air replace stone",
    desc: "自分を中心に前後左右5、足元から地下50の範囲で stone のみ air に置換。重要ワールドではバックアップ推奨。",
  },
  {
    id: 15,
    title: "周囲を地下20まで丸ごと空洞化",
    cat: "建築・整地",
    target: "周囲ブロック",
    level: 5,
    cmd: "/fill ~-5 ~-1 ~-5 ~5 ~-20 ~5 air",
    desc: "石以外も含めて範囲を空気にする強力な例。誤操作注意。",
  },
  {
    id: 16,
    title: "足元にガラス床を11×11で作る",
    cat: "建築・整地",
    target: "周囲ブロック",
    level: 3,
    cmd: "/fill ~-5 ~-1 ~-5 ~5 ~-1 ~5 glass",
    desc: "現在位置の1ブロック下に11×11のガラス床。",
  },
  {
    id: 17,
    title: "目の前に石の壁を作る",
    cat: "建築・整地",
    target: "周囲ブロック",
    level: 3,
    cmd: "/fill ~-5 ~ ~5 ~5 ~5 ~5 stone",
    desc: "相対座標による壁の例。向きではなく座標軸基準なので注意。",
  },
  {
    id: 18,
    title: "最寄りの森の洋館を探す",
    cat: "探索",
    target: "構造物",
    level: 2,
    cmd: "/locate structure mansion",
    desc: "森の洋館（Woodland Mansion）の位置を検索する例。",
  },
  {
    id: 19,
    title: "最寄りの村を探す",
    cat: "探索",
    target: "構造物",
    level: 2,
    cmd: "/locate structure village",
    desc: "最寄りの村を検索。",
  },
  {
    id: 20,
    title: "最寄りの古代都市を探す",
    cat: "探索",
    target: "構造物",
    level: 2,
    cmd: "/locate structure ancient_city",
    desc: "Ancient City を検索。",
  },
  {
    id: 21,
    title: "最寄りの要塞を探す",
    cat: "探索",
    target: "構造物",
    level: 2,
    cmd: "/locate structure stronghold",
    desc: "Stronghold を検索。",
  },
  {
    id: 22,
    title: "自分へ暗視を10分",
    cat: "効果",
    target: "自分",
    level: 2,
    cmd: "/effect @s night_vision 600 0 true",
    desc: "600秒、増幅0（レベルI）、パーティクル非表示。",
  },
  {
    id: 23,
    title: "自分へ移動速度上昇 II を2分",
    cat: "効果",
    target: "自分",
    level: 2,
    cmd: "/effect @s speed 120 1 false",
    desc: "amplifier 1 は表示上 Speed II。",
  },
  {
    id: 24,
    title: "自分の効果をすべて消す",
    cat: "効果",
    target: "自分",
    level: 1,
    cmd: "/effect @s clear",
    desc: "付与中のステータス効果を解除。",
  },
  {
    id: 25,
    title: "時間を昼にする",
    cat: "ワールド",
    target: "ワールド",
    level: 1,
    cmd: "/time set day",
    desc: "ワールド時刻を昼へ。",
  },
  {
    id: 26,
    title: "時間を夜にする",
    cat: "ワールド",
    target: "ワールド",
    level: 1,
    cmd: "/time set night",
    desc: "ワールド時刻を夜へ。",
  },
  {
    id: 27,
    title: "自分をクリエイティブへ",
    cat: "ワールド",
    target: "自分",
    level: 1,
    cmd: "/gamemode creative @s",
    desc: "自分だけを Creative mode へ。",
  },
  {
    id: 28,
    title: "自分をサバイバルへ",
    cat: "ワールド",
    target: "自分",
    level: 1,
    cmd: "/gamemode survival @s",
    desc: "自分だけを Survival mode へ。",
  },
  {
    id: 29,
    title: "自分の位置に雷を呼ぶ",
    cat: "召喚",
    target: "自分の位置",
    level: 2,
    cmd: "/summon lightning_bolt ~ ~ ~",
    desc: "現在位置へ雷。周囲への影響に注意。",
  },
  {
    id: 30,
    title: "自分の位置に村人を召喚",
    cat: "召喚",
    target: "自分の位置",
    level: 2,
    cmd: "/summon villager ~ ~ ~",
    desc: "相対座標の基本例。",
  },
];

const targetLabels = {
  helmet: { en: "Helmet", jp: "ヘルメット" },
  turtle_shell: { en: "Turtle Shell", jp: "カメの甲羅" },
  armor: { en: "Armor", jp: "防具" },
  boots: { en: "Boots", jp: "ブーツ" },
  many: { en: "Many items", jp: "多くの装備" },
  sword: { en: "Sword", jp: "剣" },
  axe: { en: "Axe", jp: "斧" },
  mace: { en: "Mace", jp: "メイス" },
  trident: { en: "Trident", jp: "トライデント" },
  tools: { en: "Tools", jp: "道具" },
  bow: { en: "Bow", jp: "弓" },
  fishing_rod: { en: "Fishing Rod", jp: "釣竿" },
  crossbow: { en: "Crossbow", jp: "クロスボウ" },
  leggings: { en: "Leggings", jp: "レギンス" },
};
const enchantRows = [
  ["Aqua Affinity", "水中採掘", "aqua_affinity", ["helmet", "turtle_shell"], 1],
  ["Bane of Arthropods", "虫特効", "bane_of_arthropods", ["sword", "axe"], 5],
  ["Blast Protection", "爆発耐性", "blast_protection", ["armor"], 4],
  ["Breach", "防具貫通", "breach", ["mace"], 4],
  ["Channeling", "召雷", "channeling", ["trident"], 1],
  ["Curse of Binding", "束縛の呪い", "binding", ["armor"], 1],
  ["Curse of Vanishing", "消滅の呪い", "vanishing", ["many"], 1],
  ["Depth Strider", "水中歩行", "depth_strider", ["boots"], 3],
  ["Density", "重撃", "density", ["mace"], 5],
  ["Efficiency", "効率強化", "efficiency", ["tools"], 5],
  ["Feather Falling", "落下耐性", "feather_falling", ["boots"], 4],
  ["Fire Aspect", "火属性", "fire_aspect", ["sword", "axe"], 2],
  ["Fire Protection", "火炎耐性", "fire_protection", ["armor"], 4],
  ["Flame", "フレイム", "flame", ["bow"], 1],
  ["Fortune", "幸運", "fortune", ["tools"], 3],
  ["Impaling", "串刺し", "impaling", ["trident"], 5],
  ["Infinity", "無限", "infinity", ["bow"], 1],
  ["Knockback", "ノックバック", "knockback", ["sword"], 2],
  ["Looting", "ドロップ増加", "looting", ["sword"], 3],
  ["Loyalty", "忠誠", "loyalty", ["trident"], 3],
  ["Luck of the Sea", "宝釣り", "luck_of_the_sea", ["fishing_rod"], 3],
  ["Lure", "入れ食い", "lure", ["fishing_rod"], 3],
  ["Mending", "修繕", "mending", ["many"], 1],
  ["Multishot", "拡散", "multishot", ["crossbow"], 1],
  ["Piercing", "貫通", "piercing", ["crossbow"], 4],
  ["Power", "射撃ダメージ増加", "power", ["bow"], 5],
  [
    "Projectile Protection",
    "飛び道具耐性",
    "projectile_protection",
    ["armor"],
    4,
  ],
  ["Protection", "防護", "protection", ["armor"], 4],
  ["Punch", "パンチ", "punch", ["bow"], 2],
  ["Quick Charge", "高速装填", "quick_charge", ["crossbow"], 3],
  ["Respiration", "水中呼吸", "respiration", ["helmet", "turtle_shell"], 3],
  ["Riptide", "激流", "riptide", ["trident"], 3],
  ["Sharpness", "鋭さ", "sharpness", ["sword", "axe"], 5],
  ["Silk Touch", "シルクタッチ", "silk_touch", ["tools"], 1],
  ["Smite", "アンデッド特効", "smite", ["sword", "axe"], 5],
  ["Soul Speed", "ソウルスピード", "soul_speed", ["boots"], 3],
  ["Swift Sneak", "スニーク速度上昇", "swift_sneak", ["leggings"], 3],
  ["Thorns", "棘の鎧", "thorns", ["armor"], 3],
  ["Unbreaking", "耐久力", "unbreaking", ["many"], 3],
  ["Wind Burst", "ウィンドバースト", "wind_burst", ["mace"], 3],
];
const enchants = enchantRows.map((x, i) => ({
  id: i + 1,
  en: x[0],
  jp: x[1],
  cmd: x[2],
  targets: x[3],
  max: x[4],
}));

const blockOptions = [
  ["air", "Air", "空気"],
  ["stone", "Stone", "石"],
  ["cobblestone", "Cobblestone", "丸石"],
  ["dirt", "Dirt", "土"],
  ["grass_block", "Grass Block", "草ブロック"],
  ["gravel", "Gravel", "砂利"],
  ["sand", "Sand", "砂"],
  ["sandstone", "Sandstone", "砂岩"],
  ["granite", "Granite", "花崗岩"],
  ["diorite", "Diorite", "閃緑岩"],
  ["andesite", "Andesite", "安山岩"],
  ["deepslate", "Deepslate", "深層岩"],
  ["water", "Water", "水"],
  ["lava", "Lava", "溶岩"],
  ["oak_leaves", "Oak Leaves", "オークの葉"],
  ["netherrack", "Netherrack", "ネザーラック"],
  ["soul_sand", "Soul Sand", "ソウルサンド"],
  ["end_stone", "End Stone", "エンドストーン"],
  ["glass", "Glass", "ガラス"],
  ["glass_pane", "Glass Pane", "ガラス板"],
  ["obsidian", "Obsidian", "黒曜石"],
  ["stone_bricks", "Stone Bricks", "石レンガ"],
  ["oak_planks", "Oak Planks", "オークの板材"],
  ["glowstone", "Glowstone", "グロウストーン"],
  ["sea_lantern", "Sea Lantern", "シーランタン"],
].map(([id, en, jp]) => ({ id, en, jp }));
const itemOptions = [
  ["bow", "Bow", "弓"],
  ["arrow", "Arrow", "矢"],
  ["crossbow", "Crossbow", "クロスボウ"],
  ["trident", "Trident", "トライデント"],
  ["mace", "Mace", "メイス"],
  ["diamond_pickaxe", "Diamond Pickaxe", "ダイヤモンドのツルハシ"],
  ["netherite_pickaxe", "Netherite Pickaxe", "ネザライトのツルハシ"],
  ["diamond_sword", "Diamond Sword", "ダイヤモンドの剣"],
  ["netherite_sword", "Netherite Sword", "ネザライトの剣"],
  ["iron_sword", "Iron Sword", "鉄の剣"],
  ["shield", "Shield", "盾"],
  ["elytra", "Elytra", "エリトラ"],
  ["ender_pearl", "Ender Pearl", "エンダーパール"],
  ["torch", "Torch", "松明"],
  ["cooked_beef", "Cooked Beef", "ステーキ"],
  ["golden_apple", "Golden Apple", "金のリンゴ"],
  ["diamond", "Diamond", "ダイヤモンド"],
  ["emerald", "Emerald", "エメラルド"],
  ["oak_log", "Oak Log", "オークの原木"],
  ["glass", "Glass", "ガラス"],
  ["water_bucket", "Water Bucket", "水入りバケツ"],
  ["lava_bucket", "Lava Bucket", "溶岩入りバケツ"],
].map(([id, en, jp]) => ({ id, en, jp }));
const structureOptions = [
  ["end_city", "End City", "エンドシティ"],
  ["fortress", "Nether Fortress", "ネザー要塞"],
  ["mineshaft", "Mineshaft", "廃坑"],
  ["monument", "Ocean Monument", "海底神殿"],
  ["stronghold", "Stronghold", "要塞"],
  ["temple", "Temple", "寺院系構造物"],
  ["village", "Village", "村"],
  ["mansion", "Woodland Mansion", "森の洋館"],
  ["shipwreck", "Shipwreck", "難破船"],
  ["buried_treasure", "Buried Treasure", "埋もれた宝"],
  ["ruins", "Ocean Ruins", "海底遺跡"],
  ["pillager_outpost", "Pillager Outpost", "略奪者の前哨基地"],
  ["ruined_portal", "Ruined Portal", "荒廃したポータル"],
  ["bastion_remnant", "Bastion Remnant", "砦の遺跡"],
  ["ancient_city", "Ancient City", "古代都市"],
  ["trail_ruins", "Trail Ruins", "旅路の遺跡"],
  ["trial_chambers", "Trial Chambers", "試練の間"],
].map(([id, en, jp]) => ({ id, en, jp }));
const effectOptions = [
  ["night_vision", "Night Vision", "暗視"],
  ["speed", "Speed", "移動速度上昇"],
  ["haste", "Haste", "採掘速度上昇"],
  ["strength", "Strength", "攻撃力上昇"],
  ["jump_boost", "Jump Boost", "跳躍力上昇"],
  ["water_breathing", "Water Breathing", "水中呼吸"],
  ["fire_resistance", "Fire Resistance", "火炎耐性"],
  ["resistance", "Resistance", "耐性"],
  ["regeneration", "Regeneration", "再生能力"],
  ["slow_falling", "Slow Falling", "落下速度低下"],
  ["invisibility", "Invisibility", "透明化"],
].map(([id, en, jp]) => ({ id, en, jp }));
const playerTargets = [
  { value: "@s", label: "@s — Self / 自分" },
  { value: "@p", label: "@p — Nearest Player / 最も近いプレイヤー" },
  { value: "@a", label: "@a — All Players / 全プレイヤー" },
  { value: "@r", label: "@r — Random Player / ランダムなプレイヤー" },
];
const destinationTargets = [
  { value: "@s", label: "@s — Self / 自分" },
  { value: "@p", label: "@p — Nearest Player / 最も近いプレイヤー" },
  { value: "@r", label: "@r — Random Player / ランダムなプレイヤー" },
];
const FILL_BLOCK_LIMIT = 32768;

const $ = (s) => document.querySelector(s),
  $$ = (s) => [...document.querySelectorAll(s)];
function esc(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[
        c
      ])
  );
}

const THEME_KEY = "minecraft-command-trainer-theme";
const VOICE_KEY = "minecraft-command-trainer-voice";
const RATE_KEY = "minecraft-command-trainer-rate";
function applyTheme(theme) {
  const safe = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = safe;
  const color = safe === "dark" ? "#122118" : "#213d2a";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", color);
  document.documentElement.style.backgroundColor = color;
  if ($("#themeSelect")) $("#themeSelect").value = safe;
}
function initTheme() {
  let saved = "light";
  try {
    saved = localStorage.getItem(THEME_KEY) || "light";
  } catch {}
  applyTheme(saved);
  $("#themeSelect").addEventListener("change", (e) => {
    applyTheme(e.target.value);
    try {
      localStorage.setItem(THEME_KEY, e.target.value);
    } catch {}
  });
}

$$(".tab").forEach(
  (b) =>
    (b.onclick = () => {
      $$(".tab").forEach((x) => x.classList.remove("active"));
      $$(".panel").forEach((x) => x.classList.remove("active"));
      b.classList.add("active");
      $("#" + b.dataset.tab).classList.add("active");
    })
);

function displayTargets(keys) {
  return {
    en: keys.map((k) => targetLabels[k]?.en || k).join(" / "),
    jp: keys.map((k) => targetLabels[k]?.jp || k).join(" / "),
  };
}
function populateFilters() {
  [...new Set(presets.map((x) => x.cat))]
    .sort()
    .forEach((v) => $("#categoryFilter").add(new Option(v, v)));
  [...new Set(presets.map((x) => x.target))]
    .sort()
    .forEach((v) => $("#targetFilter").add(new Option(v, v)));
  Object.entries(targetLabels)
    .sort((a, b) => a[1].en.localeCompare(b[1].en))
    .forEach(([key, v]) =>
      $("#enchantTarget").add(new Option(`${v.en} / ${v.jp}`, key))
    );
}

function commandToSpeech(cmd) {
  return cmd
    .trim()
    .split(/\s+/)
    .map((t, i) => {
      if (i === 0 && t.startsWith("/"))
        return "slash " + t.slice(1).replaceAll("_", " ");
      if (t.startsWith("@")) return "at " + t.slice(1).split("").join(" ");
      if (t === "~") return "tilde";
      if (t.startsWith("~-")) return "tilde minus " + t.slice(2);
      if (t.startsWith("~")) return "tilde " + t.slice(1);
      return t.replaceAll("_", " ");
    })
    .join(", ");
}

let voices = [];
const femaleVoiceHints =
  /\b(Samantha|Ava|Allison|Susan|Zira|Aria|Jenny|Hazel|Victoria|Karen|Moira|Tessa|Fiona|Serena|Salli|Joanna|Kendra|Kimberly|Ivy|Nicole|Emma|Amy|Olivia|Female)\b/i;
function voiceScore(v) {
  let score = 0;
  if (femaleVoiceHints.test(v.name)) score += 50;
  if (/^en-US$/i.test(v.lang)) score += 8;
  else if (/^en[-_]/i.test(v.lang)) score += 4;
  if (v.localService === true) score += 3;
  return score;
}
function appendVoiceGroup(select, label, list) {
  if (!list.length) return;
  const group = document.createElement("optgroup");
  group.label = label;
  [...list]
    .sort(
      (a, b) => voiceScore(b) - voiceScore(a) || a.name.localeCompare(b.name)
    )
    .forEach((v) => {
      const female = femaleVoiceHints.test(v.name) ? "★ " : "";
      group.append(
        new Option(`${female}${v.lang} — ${v.name}`, v.voiceURI || v.name)
      );
    });
  select.append(group);
}
function loadVoices() {
  if (!("speechSynthesis" in window)) {
    $("#voiceSelect").innerHTML = "<option>利用不可</option>";
    $("#voiceSelect").disabled = true;
    return;
  }
  voices = speechSynthesis.getVoices().filter((v) => /^en[-_]/i.test(v.lang));
  const sel = $("#voiceSelect");
  sel.innerHTML = "";
  if (!voices.length) {
    sel.add(new Option("英語音声を読み込み中…", ""));
    return;
  }
  const local = voices.filter((v) => v.localService === true);
  const online = voices.filter((v) => v.localService === false);
  const unknown = voices.filter((v) => typeof v.localService !== "boolean");
  appendVoiceGroup(sel, "端末内蔵 / On-device", local);
  appendVoiceGroup(sel, "インターネット利用 / Online", online);
  appendVoiceGroup(sel, "分類不明 / Other", unknown);
  let saved = "";
  try {
    saved = localStorage.getItem(VOICE_KEY) || "";
  } catch {}
  const savedVoice = voices.find((v) => (v.voiceURI || v.name) === saved);
  const preferred =
    savedVoice || [...voices].sort((a, b) => voiceScore(b) - voiceScore(a))[0];
  if (preferred) sel.value = preferred.voiceURI || preferred.name;
}
function getSelectedVoice() {
  const key = $("#voiceSelect").value;
  return voices.find((v) => (v.voiceURI || v.name) === key);
}
function speakUtterance(text, isCommand = false) {
  if (!("speechSynthesis" in window)) {
    alert("このブラウザでは音声読み上げを利用できません。");
    return;
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(
    isCommand ? commandToSpeech(text) : text
  );
  const v = getSelectedVoice();
  u.lang = v?.lang || "en-US";
  u.rate = Number($("#rate").value || 0.6);
  if (v) u.voice = v;
  speechSynthesis.speak(u);
}
function speakCommand(cmd) {
  speakUtterance(cmd, true);
}
function speakPhrase(text) {
  speakUtterance(text, false);
}
function initVoiceSettings() {
  if ("speechSynthesis" in window) {
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
  }
  let rate = 0.6;
  try {
    const saved = Number(localStorage.getItem(RATE_KEY + "-v004"));
    if (saved >= 0.3 && saved <= 1.2) rate = saved;
  } catch {}
  $("#rate").value = rate.toFixed(2);
  $("#rateValue").textContent = Number(rate).toFixed(2);
  $("#rate").addEventListener("input", () => {
    $("#rateValue").textContent = Number($("#rate").value).toFixed(2);
    try {
      localStorage.setItem(RATE_KEY + "-v004", $("#rate").value);
    } catch {}
  });
  $("#voiceSelect").addEventListener("change", () => {
    try {
      localStorage.setItem(VOICE_KEY, $("#voiceSelect").value);
    } catch {}
  });
}
async function copyText(t) {
  try {
    await navigator.clipboard.writeText(t);
  } catch {
    const a = document.createElement("textarea");
    a.value = t;
    document.body.append(a);
    a.select();
    document.execCommand("copy");
    a.remove();
  }
}

function renderPresets() {
  const q = $("#search").value.toLowerCase(),
    cat = $("#categoryFilter").value,
    target = $("#targetFilter").value,
    sort = $("#sortPreset").value;
  let list = presets.filter(
    (x) =>
      (!q ||
        [x.title, x.cat, x.target, x.cmd, x.desc]
          .join(" ")
          .toLowerCase()
          .includes(q)) &&
      (!cat || x.cat === cat) &&
      (!target || x.target === target)
  );
  if (sort === "name")
    list.sort((a, b) => a.title.localeCompare(b.title, "ja"));
  if (sort === "category")
    list.sort((a, b) => a.cat.localeCompare(b.cat, "ja") || a.level - b.level);
  if (sort === "level")
    list.sort(
      (a, b) => a.level - b.level || a.title.localeCompare(b.title, "ja")
    );
  $(
    "#presetCount"
  ).textContent = `${list.length} 件を表示 / 全 ${presets.length} 件`;
  $("#presetList").innerHTML = list
    .map(
      (x) =>
        `<article class="preset-card"><div class="meta"><span class="badge">${esc(
          x.cat
        )}</span><span class="badge">${esc(
          x.target
        )}</span><span class="badge level">難度 ${
          x.level
        }</span></div><h3>${esc(x.title)}</h3><pre class="command">${esc(
          x.cmd
        )}</pre><p class="spoken">🔊 ${esc(
          commandToSpeech(x.cmd)
        )}</p><p class="desc">${esc(
          x.desc
        )}</p><div class="actions"><button data-copy="${
          x.id
        }">コピー</button><button class="primary" data-speak="${
          x.id
        }">英語で読む</button><button data-load="${
          x.id
        }">作成欄へ</button></div></article>`
    )
    .join("");
  $$("[data-copy]").forEach(
    (b) =>
      (b.onclick = () =>
        copyText(presets.find((x) => x.id == b.dataset.copy).cmd))
  );
  $$("[data-speak]").forEach(
    (b) =>
      (b.onclick = () =>
        speakCommand(presets.find((x) => x.id == b.dataset.speak).cmd))
  );
  $$("[data-load]").forEach(
    (b) =>
      (b.onclick = () => {
        const p = presets.find((x) => x.id == b.dataset.load);
        $$(".tab")
          .find((x) => x.dataset.tab === "builder")
          .click();
        $("#builderType").value = "custom";
        buildFields(p.cmd);
      })
  );
}
["#search", "#categoryFilter", "#targetFilter", "#sortPreset"].forEach((s) =>
  $(s).addEventListener("input", renderPresets)
);

function idJapaneseLabel(o) {
  return `${o.id} — ${o.jp}`;
}
function fillDatalist(id, options) {
  $("#" + id).innerHTML = options
    .map((o) => `<option value="${esc(o.id)}">${esc(o.jp)}</option>`)
    .join("");
}
function initDatalists() {
  fillDatalist("blockDatalist", blockOptions);
  fillDatalist("itemDatalist", itemOptions);
  fillDatalist("structureDatalist", structureOptions);
  fillDatalist(
    "enchantDatalist",
    enchants.map((x) => ({ id: x.cmd, en: x.en, jp: x.jp }))
  );
  fillDatalist("effectDatalist", effectOptions);
}
function targetField(id, label, defaultValue = "@s", options = playerTargets) {
  return `<label>${label}<select data-target-select="${id}">${options
    .map(
      (o) =>
        `<option value="${o.value}" ${
          o.value === defaultValue ? "selected" : ""
        }>${esc(o.label)}</option>`
    )
    .join(
      ""
    )}<option value="__custom">自由入力…</option></select><input data-field="${id}" value="${esc(
    defaultValue
  )}" hidden placeholder="プレイヤー名やセレクターを入力"><small class="field-help">候補から選択できます。自由入力ではプレイヤー名や詳細セレクターも指定できます。</small></label>`;
}
function comboField(id, label, options, datalistId, defaultValue) {
  return `<div class="combo-field full"><div class="combo-title">${esc(
    label
  )}</div><div class="id-combo"><label>代表候補（選択用）<select data-preset-for="${id}">${options
    .map(
      (o) =>
        `<option value="${esc(o.id)}" ${
          o.id === defaultValue ? "selected" : ""
        }>${esc(idJapaneseLabel(o))}</option>`
    )
    .join(
      ""
    )}<option value="__custom">自由入力…</option></select></label><label>ID（入力用）<input data-field="${id}" list="${datalistId}" value="${esc(
    defaultValue
  )}" placeholder="IDを直接入力"></label></div><small class="field-help">選択用は「ID — 日本語名」で表示します。候補を選ぶと入力用IDへ反映されます。入力用IDは直接編集でき、入力候補も表示されます。</small></div>`;
}
function enchantComboField(defaultValue = "power") {
  return `<div class="combo-field full"><div class="combo-title">エンチャントID</div><div class="id-combo"><label>エンチャントID（選択用）<select data-preset-for="ench">${enchants
    .map(
      (o) =>
        `<option value="${esc(o.cmd)}" ${
          o.cmd === defaultValue ? "selected" : ""
        }>${esc(idJapaneseLabel({ id: o.cmd, jp: o.jp }))}</option>`
    )
    .join(
      ""
    )}<option value="__custom">自由入力…</option></select></label><label>エンチャントID（入力用）<input data-field="ench" list="enchantDatalist" value="${esc(
    defaultValue
  )}" placeholder="例: power"></label></div><small class="field-help">選択用は「ID — 日本語名」で表示します。入力用はIDを直接編集でき、候補も表示されます。</small></div>`;
}
function coordFields(values) {
  return `<div class="triple">${["X", "Y", "Z"]
    .map(
      (axis, i) =>
        `<label>${axis}<input data-field="${values[i][0]}" value="${esc(
          values[i][1]
        )}"></label>`
    )
    .join("")}</div>`;
}
function attachBuilderEvents() {
  $$("[data-target-select]").forEach((sel) =>
    sel.addEventListener("change", () => {
      const input = $(`[data-field="${sel.dataset.targetSelect}"]`);
      if (sel.value === "__custom") {
        input.hidden = false;
        input.focus();
      } else {
        input.value = sel.value;
        input.hidden = true;
      }
      updateBuild();
    })
  );
  $$("[data-preset-for]").forEach((sel) =>
    sel.addEventListener("change", () => {
      const input = $(`[data-field="${sel.dataset.presetFor}"]`);
      if (sel.value !== "__custom") input.value = sel.value;
      else input.focus();
      if (sel.dataset.presetFor === "ench") updateEnchantBuilderMeta(true);
      updateBuild();
    })
  );
  $$("[data-field]").forEach((x) =>
    x.addEventListener("input", () => {
      if (x.dataset.field === "ench") updateEnchantBuilderMeta(false);
      if (x.dataset.field === "fillMode") toggleReplaceField();
      if (x.dataset.field === "tpDestinationMode") toggleTpDestination();
      updateBuild();
    })
  );
  const mode = $('[data-field="fillMode"]');
  if (mode)
    mode.addEventListener("change", () => {
      toggleReplaceField();
      updateBuild();
    });
  const tpMode = $('[data-field="tpDestinationMode"]');
  if (tpMode)
    tpMode.addEventListener("change", () => {
      toggleTpDestination();
      updateBuild();
    });
}
function buildFields(customText = "") {
  const type = $("#builderType").value;
  let html = "";
  if (type === "custom")
    html = `<label class="full">自由入力<textarea id="customCmd" style="min-height:150px" placeholder="/fill ...">${esc(
      customText
    )}</textarea><small class="field-help">任意のBedrockコマンドを入力できます。読み上げ時は /、@、~、_ を聞き取りやすい形に変換します。</small></label>`;
  else if (type === "tp")
    html =
      targetField("target", "移動させる対象") +
      `<label>移動先の指定方法<select data-field="tpDestinationMode"><option value="coords">座標を指定</option><option value="target">対象を指定</option></select></label><div class="full" id="tpCoordinates"><strong>移動先座標</strong>${coordFields(
        [
          ["x", "0"],
          ["y", "100"],
          ["z", "0"],
        ]
      )}</div><div class="full" id="tpTargetDestination">${targetField(
        "destinationTarget",
        "移動先の対象",
        "@s",
        destinationTargets
      )}</div>`;
  else if (type === "give")
    html =
      targetField("target", "付与対象") +
      comboField("item", "アイテムID", itemOptions, "itemDatalist", "bow") +
      `<label>個数<input data-field="amount" type="number" min="1" value="1"></label>`;
  else if (type === "enchant")
    html =
      targetField("target", "付与対象") +
      enchantComboField("power") +
      `<label>レベル<select data-field="level"></select></label><div class="enchant-meta" id="enchantBuilderMeta"></div>`;
  else if (type === "fill")
    html =
      `<div class="full"><strong>始点</strong>${coordFields([
        ["x1", "~-5"],
        ["y1", "~-1"],
        ["z1", "~-5"],
      ])}</div><div class="full"><strong>終点</strong>${coordFields([
        ["x2", "~5"],
        ["y2", "~-50"],
        ["z2", "~5"],
      ])}</div>` +
      comboField(
        "block",
        "置くブロック",
        blockOptions,
        "blockDatalist",
        "air"
      ) +
      `<label>fill mode<select data-field="fillMode"><option value="">指定なし（通常）</option><option value="destroy">destroy — 破壊扱い</option><option value="hollow">hollow — 中空</option><option value="keep">keep — 空気のみ</option><option value="outline">outline — 外周のみ</option><option value="replace" selected>replace — 置換</option></select></label>` +
      comboField(
        "replaceBlock",
        "置換元ブロック",
        blockOptions,
        "blockDatalist",
        "stone"
      ) +
      `<div class="mode-note" id="fillModeNote"></div><div class="fill-estimate" id="fillEstimate"></div>`;
  else if (type === "locate")
    html =
      comboField(
        "structure",
        "構造物ID（公式列挙17種を収録）",
        structureOptions,
        "structureDatalist",
        "mansion"
      ) +
      `<label class="full">新しいチャンクだけ<select data-field="newChunks"><option value="">指定しない（false）</option><option value="true">true — 新しいチャンクのみ</option><option value="false">false — falseを明示</option></select></label>`;
  else if (type === "effect")
    html =
      targetField("target", "付与対象") +
      comboField(
        "effect",
        "効果ID",
        effectOptions,
        "effectDatalist",
        "night_vision"
      ) +
      `<label>秒数<input data-field="seconds" type="number" min="1" value="600"></label><label>増幅値（0 = I）<input data-field="amp" type="number" min="0" value="0"></label><label>パーティクル非表示<select data-field="particles"><option value="true">true — 非表示</option><option value="false">false — 表示</option></select></label>`;
  else if (type === "gamemode")
    html =
      `<label>モード<select data-field="mode"><option value="creative">creative / クリエイティブ</option><option value="survival">survival / サバイバル</option><option value="adventure">adventure / アドベンチャー</option><option value="spectator">spectator / スペクテイター</option></select></label>` +
      targetField("target", "対象");
  else if (type === "time")
    html = `<label>時刻<select data-field="time"><option value="day">day / 昼</option><option value="night">night / 夜</option><option value="noon">noon / 正午</option><option value="midnight">midnight / 真夜中</option></select></label>`;
  $("#builderFields").innerHTML = html;
  if (type === "custom") {
    $("#customCmd").addEventListener("input", updateBuild);
  } else attachBuilderEvents();
  toggleTpDestination();
  toggleReplaceField();
  if (type === "enchant") updateEnchantBuilderMeta(true);
  updateBuild();
}
function toggleTpDestination() {
  const mode = fv("tpDestinationMode");
  const coords = $("#tpCoordinates"),
    target = $("#tpTargetDestination");
  if (!coords || !target) return;
  coords.style.display = mode === "target" ? "none" : "block";
  target.style.display = mode === "target" ? "block" : "none";
}
function toggleReplaceField() {
  const mode = $('[data-field="fillMode"]');
  const source = $('[data-field="replaceBlock"]');
  if (!mode || !source) return;
  const box = source.closest(".combo-field") || source.closest("label");
  box.style.display = mode.value === "replace" ? "flex" : "none";
  const note = $("#fillModeNote");
  if (note) {
    const texts = {
      "": "通常：範囲全体を指定ブロックにします。",
      destroy: "destroy：元ブロックを破壊扱いにして指定ブロックへ置換します。",
      hollow: "hollow：外側を指定ブロックで囲い、内側を空気にします。",
      keep: "keep：空気ブロックの場所だけを指定ブロックで埋めます。",
      outline: "outline：外周だけを指定ブロックにします。",
      replace:
        "replace：範囲全体、または「置換元ブロック」で指定したブロックだけを置換します。",
    };
    note.textContent = texts[mode.value] || "";
  }
}
function updateEnchantBuilderMeta(preferMax = false) {
  const input = $('[data-field="ench"]'),
    level = $('[data-field="level"]'),
    meta = $("#enchantBuilderMeta");
  if (!input || !level || !meta) return;
  const e = enchants.find((x) => x.cmd === input.value.trim());
  const previous = Number(level.value) || 1;
  if (e) {
    level.innerHTML = Array.from(
      { length: e.max },
      (_, i) => `<option value="${i + 1}">${i + 1}</option>`
    ).join("");
    level.value = String(
      preferMax ? e.max : Math.min(Math.max(previous, 1), e.max)
    );
    const t = displayTargets(e.targets);
    meta.innerHTML = `<strong>付与可能な主な対象:</strong> ${esc(t.en)} / ${esc(
      t.jp
    )}<br><strong>有効レベル:</strong> 1 ～ ${
      e.max
    }<br><span>対象プレイヤーが、対応アイテムをメインハンドに持っている状態で実行します。</span>`;
  } else {
    level.innerHTML = Array.from(
      { length: 5 },
      (_, i) => `<option value="${i + 1}">${i + 1}</option>`
    ).join("");
    level.value = String(Math.min(Math.max(previous, 1), 5));
    meta.innerHTML =
      "<strong>候補外のIDです。</strong> 対応アイテムと有効レベルを公式資料で確認してください。";
  }
}
function parseFillCoord(value) {
  const s = String(value).trim();
  let m = s.match(/^~(-?\d+)?$/);
  if (m) return { relative: true, n: Number(m[1] || 0) };
  if (/^-?\d+$/.test(s)) return { relative: false, n: Number(s) };
  return null;
}
function fillAxisSize(a, b) {
  const p = parseFillCoord(a),
    q = parseFillCoord(b);
  if (!p || !q || p.relative !== q.relative) return null;
  return Math.abs(q.n - p.n) + 1;
}
function updateFillEstimate() {
  const box = $("#fillEstimate");
  if (!box) return;
  const dx = fillAxisSize(fv("x1"), fv("x2")),
    dy = fillAxisSize(fv("y1"), fv("y2")),
    dz = fillAxisSize(fv("z1"), fv("z2"));
  if ([dx, dy, dz].some((v) => v === null)) {
    box.innerHTML =
      '<strong>対象ブロック数:</strong> 座標形式が混在しているため自動計算できません。絶対座標同士、または <code>~</code> 相対座標同士で指定すると計算できます。<div class="caution">⚠ /fill は大きな範囲を一瞬で変更し、実行後に元へ戻す専用の取り消しコマンドはありません。</div>';
    return;
  }
  const total = dx * dy * dz,
    over = total > FILL_BLOCK_LIMIT;
  box.innerHTML = `<strong>現在の指定範囲:</strong> ${total.toLocaleString(
    "ja-JP"
  )} ブロック（${dx} × ${dy} × ${dz}）<br><span class="${
    over ? "danger" : "ok"
  }">${
    over
      ? "⚠ 32,768 ブロックを超えています。Bedrock では上限超過エラーになる可能性が高いです。"
      : "✓ 32,768 ブロック以内です。"
  }</span><br><span>replace / hollow などでも、上限確認は指定した直方体全体のブロック数で考えるのが安全です。仕様はアップデートで変わる可能性があります。</span><div class="caution">⚠ /fill は実行後に元へ戻す専用の取り消しコマンドがありません。重要な場所ではコピーしたワールドや小範囲で先に試してください。</div>`;
}
function fv(id) {
  return $(`[data-field="${id}"]`)?.value.trim() || "";
}
function updateBuild() {
  const t = $("#builderType").value;
  let c = "";
  if (t === "custom") c = $("#customCmd")?.value || "";
  else if (t === "tp")
    c =
      fv("tpDestinationMode") === "target"
        ? `/tp ${fv("target")} ${fv("destinationTarget")}`
        : `/tp ${fv("target")} ${fv("x")} ${fv("y")} ${fv("z")}`;
  else if (t === "give")
    c = `/give ${fv("target")} ${fv("item")} ${fv("amount") || "1"}`;
  else if (t === "enchant")
    c = `/enchant ${fv("target")} ${fv("ench")} ${fv("level") || "1"}`;
  else if (t === "fill") {
    const mode = fv("fillMode"),
      source = fv("replaceBlock");
    c = `/fill ${fv("x1")} ${fv("y1")} ${fv("z1")} ${fv("x2")} ${fv("y2")} ${fv(
      "z2"
    )} ${fv("block")}`;
    if (mode) c += ` ${mode}`;
    if (mode === "replace" && source) c += ` ${source}`;
    updateFillEstimate();
  } else if (t === "locate") {
    c = `/locate structure ${fv("structure")}`;
    if (fv("newChunks")) c += ` ${fv("newChunks")}`;
  } else if (t === "effect")
    c = `/effect ${fv("target")} ${fv("effect")} ${fv("seconds")} ${fv(
      "amp"
    )} ${fv("particles")}`;
  else if (t === "gamemode") c = `/gamemode ${fv("mode")} ${fv("target")}`;
  else if (t === "time") c = `/time set ${fv("time")}`;
  $("#builtCommand").textContent = c;
  $("#spokenPreview").textContent = commandToSpeech(c);
}
$("#builderType").addEventListener("change", () => buildFields());
$("#copyBuilt").onclick = () => copyText($("#builtCommand").textContent);
$("#speakBuilt").onclick = () => speakCommand($("#builtCommand").textContent);

function renderEnchants() {
  const q = $("#enchantSearch").value.toLowerCase(),
    tar = $("#enchantTarget").value,
    lev = $("#enchantLevel").value,
    sort = $("#enchantSort").value;
  let list = enchants.filter((x) => {
    const targetText = displayTargets(x.targets);
    return (
      (!q ||
        [x.en, x.jp, x.cmd, targetText.en, targetText.jp]
          .join(" ")
          .toLowerCase()
          .includes(q)) &&
      (!tar || x.targets.includes(tar)) &&
      (!lev || x.max == lev)
    );
  });
  if (sort === "id") list.sort((a, b) => a.cmd.localeCompare(b.cmd));
  if (sort === "jp") list.sort((a, b) => a.jp.localeCompare(b.jp, "ja"));
  if (sort === "level")
    list.sort((a, b) => a.max - b.max || a.cmd.localeCompare(b.cmd));
  if (sort === "target")
    list.sort((a, b) =>
      displayTargets(a.targets).en.localeCompare(displayTargets(b.targets).en)
    );
  $("#enchantTable").innerHTML = list
    .map((x) => {
      const t = displayTargets(x.targets);
      return `<tr><td><strong>${esc(x.jp)}</strong></td><td><code>${esc(
        x.cmd
      )}</code></td><td class="target-cell"><strong>${esc(
        t.en
      )}</strong><span class="jp">${esc(t.jp)}</span></td><td>${
        x.max
      }</td><td><button data-phrase="${esc(x.en)}">🔊 ${esc(
        x.en
      )}</button></td><td><code>/enchant @s ${esc(x.cmd)} ${
        x.max
      }</code></td></tr>`;
    })
    .join("");
  $$("[data-phrase]").forEach(
    (b) => (b.onclick = () => speakPhrase(b.dataset.phrase))
  );
}
["#enchantSearch", "#enchantTarget", "#enchantLevel", "#enchantSort"].forEach(
  (s) => $(s).addEventListener("input", renderEnchants)
);

let deferredInstallPrompt = null;
function initPwa() {
  const installButton = $("#installApp"),
    status = $("#installStatus");
  const standalone =
    window.matchMedia?.("(display-mode: standalone)").matches ||
    window.navigator.standalone === true;
  const isiOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (standalone) {
    if (status)
      status.textContent =
        "ホーム画面から起動中です。アプリ本体はオフラインでも利用できます。";
  } else if (isiOS) {
    if (status)
      status.textContent =
        "iPhone / iPad: Safari の共有メニュー →「ホーム画面に追加」でインストールできます。";
  } else if (status) {
    status.textContent =
      "GitHub Pages など HTTPS で公開すると、対応ブラウザからインストールできます。";
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    if (installButton) installButton.hidden = false;
    if (status)
      status.textContent = "この端末ではアプリとしてインストールできます。";
  });
  if (installButton)
    installButton.addEventListener("click", async () => {
      if (!deferredInstallPrompt) return;
      deferredInstallPrompt.prompt();
      try {
        await deferredInstallPrompt.userChoice;
      } catch (_) {}
      deferredInstallPrompt = null;
      installButton.hidden = true;
    });
  window.addEventListener("appinstalled", () => {
    if (installButton) installButton.hidden = true;
    if (status)
      status.textContent =
        "インストールしました。次回からホーム画面から起動できます。";
  });
  if ("serviceWorker" in navigator && location.protocol !== "file:") {
    window.addEventListener("load", () =>
      navigator.serviceWorker.register("./service-worker.js").catch(() => {})
    );
  }
}

initTheme();
initVoiceSettings();
initDatalists();
populateFilters();
renderPresets();
buildFields();
renderEnchants();
initPwa();
