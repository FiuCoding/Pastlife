const professions = {
  stargazer: {
    name: "星象师",
    en: "THE CELESTIAL CARTOGRAPHER",
    glyph: "星",
    era: "观星台 · 某个无月的夜",
    subtitle: "在群星之间，替人间读懂命运的人。",
    keywords: ["远见", "直觉", "独处"],
    quote: "你总在别人看见答案之前，先看见风向。",
    description:
      "前世的你，可能在观星台上度过了大半生。你替远行的人辨认方向，替犹豫的人解读天意，也替自己保留了一小块不被打扰的夜空。你不喜欢喧哗，却总能在一团混沌里，看见那条若隐若现的线。",
    soulAge: "约 317 岁",
    talent: "洞察趋势",
    luckyItem: "黄铜星盘",
    affinity: "与风象灵魂共振",
    memory:
      "某个没有月亮的夜里，你把一颗尚未被命名的星，写进了只有自己读得懂的星图。后来它真的出现了。",
  },
  healer: {
    name: "草木药师",
    en: "THE HERBAL HEALER",
    glyph: "药",
    era: "山间药庐 · 雨后的清晨",
    subtitle: "用草木与耐心，替世界缝合细小裂缝的人。",
    keywords: ["共情", "疗愈", "耐心"],
    quote: "你比大多数人更早听见沉默里的疼痛。",
    description:
      "前世的你，也许背着一只旧药箱走过很多山路。你记得每一种草叶的气味，也记得每一双求助的眼睛。你并不总是能给出答案，但你很擅长让人相信：再等一等，天会亮。",
    soulAge: "约 289 岁",
    talent: "安抚人心",
    luckyItem: "一只旧药囊",
    affinity: "与大地灵魂共振",
    memory:
      "一个发着高烧的孩子握住你的手腕。你守到天亮，窗外那株枯了一冬的忍冬，忽然开花了。",
  },
  artisan: {
    name: "古物匠人",
    en: "THE MASTER ARTISAN",
    glyph: "匠",
    era: "城南工坊 · 炉火将熄时",
    subtitle: "把漫长时光，安静地打磨成一件作品的人。",
    keywords: ["专注", "手感", "执拗"],
    quote: "你不相信捷径，只相信双手留下的痕迹。",
    description:
      "前世的你可能没有太多野心，却有一双让旧物重生的手。你能听见木头的纹理、金属的脾气，也愿意为一道看不见的接缝反复推敲。别人以为你慢，其实你只是不肯敷衍。",
    soulAge: "约 254 岁",
    talent: "创造器物",
    luckyItem: "刻着暗纹的刻刀",
    affinity: "与土象灵魂共振",
    memory:
      "一枚被摔碎的铜镜在你手里重新合拢。裂缝没有消失，却成了它最美的纹路。",
  },
  bard: {
    name: "宫廷乐师",
    en: "THE COURT MUSICIAN",
    glyph: "乐",
    era: "旧宫殿 · 灯影摇晃的宴席",
    subtitle: "替那些说不出口的心事，找到旋律的人。",
    keywords: ["敏感", "浪漫", "表达"],
    quote: "你把别人说不出的话，藏在了一段旋律里。",
    description:
      "前世的你也许坐在宴席的一角，看似只是助兴，却在每一次拨弦时读懂了满座的心事。你知道什么时候该热闹，什么时候该让一个音停下来。你用音乐周旋于人群，也用它保护真正的自己。",
    soulAge: "约 236 岁",
    talent: "感染情绪",
    luckyItem: "一枚旧琴拨",
    affinity: "与火象灵魂共振",
    memory:
      "一场大雪封住了宫门。你弹起一支无人点名的曲子，檐下的侍卫忽然背过身，擦了擦眼睛。",
  },
  wanderer: {
    name: "天涯游侠",
    en: "THE WANDERING BLADE",
    glyph: "侠",
    era: "荒原古道 · 风起之前",
    subtitle: "把自由看得比安稳更重，却总为别人停下脚步的人。",
    keywords: ["自由", "赤诚", "行动"],
    quote: "你嘴上说随遇而安，心里却始终有一把尺。",
    description:
      "前世的你大概走过很多没有名字的路。你不太擅长解释自己，也不喜欢被安排。可一旦认定某件事值得，你会比谁都更早拔剑。你的洒脱不是冷漠，只是把柔软藏得比较深。",
    soulAge: "约 198 岁",
    talent: "破局应变",
    luckyItem: "一枚磨损的护身符",
    affinity: "与风象灵魂共振",
    memory:
      "你在渡口替一个陌生人挡下追兵，天亮后没有留名。很多年后，还有人把那晚的风讲给孩子听。",
  },
  storyteller: {
    name: "说书人",
    en: "THE STORYTELLER",
    glyph: "言",
    era: "临街茶楼 · 醒木落下时",
    subtitle: "把人间悲欢讲成故事，也把自己藏进故事里的人。",
    keywords: ["观察", "幽默", "共情"],
    quote: "你总能让陌生人，在三句话之内放下防备。",
    description:
      "前世的你可能没有显赫的身份，却是整条街消息最灵通的人。你记得每个普通人的高光时刻，也懂得怎样把难堪讲成笑谈。你用故事替弱者留一条路，用停顿替沉默的人发声。",
    soulAge: "约 271 岁",
    talent: "连接人群",
    luckyItem: "一块温润的醒木",
    affinity: "与水象灵魂共振",
    memory:
      "茶楼打烊后，一个总来听书的孩子问你：故事里那个没回家的人，后来怎么样了？你笑着说，他明天就回来。",
  },
  merchant: {
    name: "丝路商旅",
    en: "THE ROAD MERCHANT",
    glyph: "商",
    era: "西域驿站 · 驼铃渐远时",
    subtitle: "在远方与远方之间，运送货物、消息和可能的人。",
    keywords: ["胆识", "资源", "好奇心"],
    quote: "别人看见风险时，你已经在计算下一次出发。",
    description:
      "前世的你可能走过很长的商路。你懂得察言观色，也懂得在不确定里下注。你看起来精明，却不是只认钱的人——你见过太多地方，所以更明白信任有多贵。",
    soulAge: "约 222 岁",
    talent: "整合资源",
    luckyItem: "一枚异域旧钱币",
    affinity: "与火象灵魂共振",
    memory:
      "沙暴过后，你的一队骆驼只剩半袋水。你把最后一口水分给陌生的旅人，第二天，他带你找到了一处地图上没有的泉。",
  },
  sage: {
    name: "守卷人",
    en: "THE KEEPER OF SCROLLS",
    glyph: "卷",
    era: "藏书阁 · 烛火未眠的深夜",
    subtitle: "替世界保管问题、答案和那些尚未被理解的事的人。",
    keywords: ["沉静", "求知", "克制"],
    quote: "你不急着回答，因为你知道有些问题值得慢慢想。",
    description:
      "前世的你也许在一座藏书阁里待了很久。你整理、抄写、修补，也偷偷记住那些不该被遗忘的名字。你看起来离人群很远，其实你做的每一件事，都是为了让后来的人少走一点弯路。",
    soulAge: "约 342 岁",
    talent: "深度思考",
    luckyItem: "一枚铜制书签",
    affinity: "与土象灵魂共振",
    memory:
      "你在书页夹层里发现一张无名纸条，上面写着：如果你读到这句，请替我看一眼春天。",
  },
};

const questions = [
  {
    kicker: "第一段记忆 · 陌生的街道",
    title: "若在陌生古镇醒来，你最先注意到什么？",
    options: [
      { text: "屋檐之上，星星排列出的隐秘图案", scores: { stargazer: 3, sage: 1 } },
      { text: "街角药铺里飘出的草木苦香", scores: { healer: 3, storyteller: 1 } },
      { text: "半掩的工坊门后，一件未完成的器物", scores: { artisan: 3, merchant: 1 } },
      { text: "出城古道尽头的风，和很远处的声音", scores: { wanderer: 3, bard: 1 } },
    ],
  },
  {
    kicker: "第二段记忆 · 旅店的灯",
    title: "房间的木桌上，你最可能留下什么？",
    options: [
      { text: "一份写满数字与路线的货单", scores: { merchant: 3, artisan: 1 } },
      { text: "一段刚哼出来、还没写完的旋律", scores: { bard: 3, storyteller: 1 } },
      { text: "一封写给别人、却没有寄出的信", scores: { storyteller: 3, healer: 1 } },
      { text: "一本夹满批注和折角的旧书", scores: { sage: 3, stargazer: 1 } },
    ],
  },
  {
    kicker: "第三段记忆 · 停留的七日",
    title: "如果要在古镇多停留七天，你会怎么过？",
    options: [
      { text: "去药庐帮忙，辨认晒在竹匾里的草药", scores: { healer: 3, sage: 1 } },
      { text: "沿最远的山路走一趟，看看山那边是什么", scores: { wanderer: 3, bard: 1 } },
      { text: "逛遍集市，把有趣的人和货都记下来", scores: { merchant: 3, artisan: 1 } },
      { text: "留在工坊里，把一件旧物修到满意", scores: { artisan: 3, merchant: 1 } },
    ],
  },
  {
    kicker: "第四段记忆 · 忽然的馈赠",
    title: "如果拥有一种天赋，你最想要哪一个？",
    options: [
      { text: "听出一个人话里没有说出口的部分", scores: { sage: 3, storyteller: 1 } },
      { text: "在事情发生前，隐约看到它的走向", scores: { stargazer: 3, sage: 1 } },
      { text: "让一首歌替所有人说出心事", scores: { bard: 3, wanderer: 1 } },
      { text: "把一个普通人的一生，讲成值得记住的故事", scores: { storyteller: 3, wanderer: 1 } },
    ],
  },
  {
    kicker: "第五段记忆 · 无人的旧物",
    title: "捡到一件无主旧物，你会怎么做？",
    options: [
      { text: "研究它的结构，想办法让它重新可用", scores: { artisan: 3, stargazer: 1 } },
      { text: "判断它来自哪里、值多少钱、能换什么", scores: { merchant: 3, bard: 1 } },
      { text: "留意它是否属于某个正在着急寻找的人", scores: { healer: 3, wanderer: 1 } },
      { text: "查清它背后的年代，以及曾经的主人", scores: { sage: 3, healer: 1 } },
    ],
  },
  {
    kicker: "第六段记忆 · 不平之事",
    title: "遇到一件不公平的事，你的第一反应是？",
    options: [
      { text: "直接站出来，先把人护在身后", scores: { wanderer: 3, artisan: 1 } },
      { text: "把这件事讲出去，让更多人看见", scores: { storyteller: 3, sage: 1 } },
      { text: "先观察全局，找出最关键的那一环", scores: { stargazer: 3, merchant: 1 } },
      { text: "用一句话或一首歌，让气氛先松动下来", scores: { bard: 3, healer: 1 } },
    ],
  },
  {
    kicker: "第七段记忆 · 灵魂的选择",
    title: "你最舍不得失去哪一种能力？",
    options: [
      { text: "在混乱中迅速找到可用的资源", scores: { merchant: 3, storyteller: 1 } },
      { text: "把脑海里的东西亲手做出来", scores: { artisan: 3, stargazer: 1 } },
      { text: "长时间独处，并把一件事想透", scores: { sage: 3, wanderer: 1 } },
      { text: "感受他人情绪，并让对方安心", scores: { healer: 3, artisan: 1 } },
    ],
  },
  {
    kicker: "第八段记忆 · 最后的画面",
    title: "如果可以选择前世的离场方式，你会选？",
    options: [
      { text: "在一场盛大演出中谢幕", scores: { bard: 3, stargazer: 1 } },
      { text: "在观星台睡着，再没有醒来", scores: { stargazer: 3, sage: 1 } },
      { text: "留下最后一句话，然后独自上路", scores: { wanderer: 3, merchant: 1 } },
      { text: "把毕生故事讲完，笑着吹灭灯", scores: { storyteller: 3, healer: 1 } },
    ],
  },
];

const $ = (id) => document.getElementById(id);

const elements = {
  stars: $("stars"),
  brandLink: $("brandLink"),
  introScreen: $("introScreen"),
  quizScreen: $("quizScreen"),
  resultScreen: $("resultScreen"),
  startButton: $("startButton"),
  archiveCount: $("archiveCount"),
  backButton: $("backButton"),
  progressPercent: $("progressPercent"),
  progressFill: $("progressFill"),
  currentQuestion: $("currentQuestion"),
  asideNumber: $("asideNumber"),
  questionContent: $("questionContent"),
  questionKicker: $("questionKicker"),
  questionTitle: $("questionTitle"),
  options: $("options"),
  professionCard: $("professionCard"),
  archiveNumber: $("archiveNumber"),
  professionGlyph: $("professionGlyph"),
  professionEra: $("professionEra"),
  professionEn: $("professionEn"),
  professionTitle: $("professionTitle"),
  professionSubtitle: $("professionSubtitle"),
  resultHeadingName: $("resultHeadingName"),
  keywordRow: $("keywordRow"),
  archiveDate: $("archiveDate"),
  resultQuote: $("resultQuote"),
  resultDescription: $("resultDescription"),
  soulAge: $("soulAge"),
  talent: $("talent"),
  luckyItem: $("luckyItem"),
  affinity: $("affinity"),
  resultMemory: $("resultMemory"),
  shareButton: $("shareButton"),
  restartButton: $("restartButton"),
  toast: $("toast"),
  toastText: $("toastText"),
};

const state = {
  current: 0,
  answers: [],
  locked: false,
  resultKey: null,
};

const screens = {
  intro: elements.introScreen,
  quiz: elements.quizScreen,
  result: elements.resultScreen,
};

let answerTimer = null;
let toastTimer = null;
let optionButtons = [];
let shareLabel = elements.shareButton.querySelector("span");

function createStars() {
  const count = window.innerWidth < 620 ? 42 : 82;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < count; index += 1) {
    const star = document.createElement("span");
    const size = (Math.random() * 1.7 + 0.7).toFixed(2);
    star.className = "star";
    star.style.left = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.top = `${(Math.random() * 100).toFixed(2)}%`;
    star.style.setProperty("--size", `${size}px`);
    star.style.setProperty("--opacity", (Math.random() * 0.55 + 0.2).toFixed(2));
    star.style.setProperty("--duration", `${(Math.random() * 5 + 3).toFixed(2)}s`);
    star.style.setProperty("--delay", `${(-Math.random() * 6).toFixed(2)}s`);
    fragment.appendChild(star);
  }

  elements.stars.replaceChildren(fragment);
}

function setArchiveCount() {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now - startOfYear) / 86400000);
  elements.archiveCount.textContent = (1180 + dayOfYear * 3).toLocaleString("en-US");
}

function showScreen(name) {
  Object.values(screens).forEach((screen) => screen.classList.remove("is-active"));
  screens[name].classList.add("is-active");
  window.scrollTo({ top: 0, behavior: "auto" });
}

function updateBackButton() {
  elements.backButton.disabled = state.current === 0 || state.locked;
}

function renderQuestion() {
  const question = questions[state.current];
  const number = String(state.current + 1).padStart(2, "0");
  const progress = ((state.current + 1) / questions.length) * 100;

  elements.questionContent.classList.remove("is-changing");
  void elements.questionContent.offsetWidth;
  elements.questionContent.classList.add("is-changing");

  elements.currentQuestion.textContent = number;
  elements.asideNumber.textContent = number;
  elements.progressPercent.textContent = `${Math.round(progress)}%`;
  elements.progressFill.style.width = `${progress}%`;
  elements.questionKicker.textContent = question.kicker;
  elements.questionTitle.textContent = question.title;

  const fragment = document.createDocumentFragment();
  optionButtons = question.options.map((option, index) => {
    const button = document.createElement("button");
    const selected = state.answers[state.current] === index;

    button.type = "button";
    button.className = `option${selected ? " is-selected" : ""}`;
    button.setAttribute("aria-pressed", String(selected));
    button.innerHTML = `
      <span class="option-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="option-text"></span>
      <span class="option-arrow" aria-hidden="true">→</span>
    `;
    button.querySelector(".option-text").textContent = option.text;
    button.addEventListener("click", () => selectOption(index));
    fragment.appendChild(button);
    return button;
  });

  elements.options.replaceChildren(fragment);
  updateBackButton();
  elements.questionTitle.focus({ preventScroll: true });
}

function startQuiz() {
  window.clearTimeout(answerTimer);
  state.current = 0;
  state.answers = [];
  state.locked = false;
  state.resultKey = null;
  showScreen("quiz");
  renderQuestion();
}

function selectOption(optionIndex) {
  if (state.locked) return;

  state.locked = true;
  state.answers = state.answers.slice(0, state.current);
  state.answers[state.current] = optionIndex;

  optionButtons.forEach((button, index) => {
    const selected = index === optionIndex;
    button.disabled = true;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  updateBackButton();

  answerTimer = window.setTimeout(() => {
    state.locked = false;

    if (state.current === questions.length - 1) {
      finishQuiz();
      return;
    }

    state.current += 1;
    renderQuestion();
  }, 420);
}

function goBack() {
  if (state.locked || state.current === 0) return;

  window.clearTimeout(answerTimer);
  state.current -= 1;
  renderQuestion();
}

function goHome(event) {
  if (event) event.preventDefault();
  window.clearTimeout(answerTimer);
  state.locked = false;
  showScreen("intro");
}

function hashString(value) {
  let hash = 2166136261;

  for (let index = 0; index < value.length; index += 1) {
    hash ^= value.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function determineProfession() {
  const scores = Object.fromEntries(Object.keys(professions).map((key) => [key, 0]));

  state.answers.forEach((optionIndex, questionIndex) => {
    const option = questions[questionIndex].options[optionIndex];
    Object.entries(option.scores).forEach(([key, value]) => {
      scores[key] += value;
    });
  });

  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topScore = ranked[0][1];
  const tied = ranked.filter(([, score]) => score === topScore).map(([key]) => key);

  if (tied.length === 1) return tied[0];

  const seed = hashString(state.answers.join("-"));
  return tied[seed % tied.length];
}

function toRoman(number) {
  const values = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];
  let remaining = number;
  let result = "";

  values.forEach(([value, symbol]) => {
    while (remaining >= value) {
      result += symbol;
      remaining -= value;
    }
  });

  return result;
}

function finishQuiz() {
  state.resultKey = determineProfession();
  renderResult(state.resultKey);
  showScreen("result");
  elements.resultScreen.focus({ preventScroll: true });
}

function renderResult(key) {
  const result = professions[key];
  const archiveSeed = hashString(`${key}-${state.answers.join("-")}`);
  const archiveNumber = 1000 + (archiveSeed % 9000);
  const year = new Date().getFullYear();

  elements.professionCard.dataset.profession = key;
  elements.archiveNumber.textContent = `NO. ${archiveNumber}`;
  elements.professionGlyph.textContent = result.glyph;
  elements.professionEra.textContent = result.era;
  elements.professionEn.textContent = result.en;
  elements.professionTitle.textContent = result.name;
  elements.professionSubtitle.textContent = result.subtitle;
  elements.resultHeadingName.textContent = `「${result.name}」`;
  elements.archiveDate.textContent = toRoman(year);
  elements.resultQuote.textContent = result.quote;
  elements.resultDescription.textContent = result.description;
  elements.soulAge.textContent = result.soulAge;
  elements.talent.textContent = result.talent;
  elements.luckyItem.textContent = result.luckyItem;
  elements.affinity.textContent = result.affinity;
  elements.resultMemory.textContent = result.memory;

  const keywords = result.keywords.map((keyword) => {
    const tag = document.createElement("span");
    tag.className = "keyword";
    tag.textContent = keyword;
    return tag;
  });
  elements.keywordRow.replaceChildren(...keywords);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  elements.toastText.textContent = message;
  elements.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    elements.toast.classList.remove("is-visible");
  }, 2800);
}

async function copyText(value) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (error) {
      // Fall back to the old selection method when clipboard access is blocked.
    }
  }

  const textArea = document.createElement("textarea");
  textArea.value = value;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "0";
  textArea.style.left = "-9999px";
  textArea.style.opacity = "0";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }

  textArea.remove();
  return copied;
}

async function shareResult() {
  if (!state.resultKey || elements.shareButton.disabled) return;

  const result = professions[state.resultKey];
  const defaultLabel = "复制我的前世档案";
  const text = [
    `我在「前世档案馆」测出上辈子是「${result.name}」——${result.subtitle}`,
    `灵魂信物：${result.luckyItem}`,
    `你也来测测：${window.location.href}`,
  ].join("\n");

  elements.shareButton.disabled = true;
  const copied = await copyText(text);

  if (copied) {
    shareLabel.textContent = "已复制，去分享吧";
    showToast("前世档案已复制到剪贴板");
  } else {
    shareLabel.textContent = "复制失败，请重试";
    showToast("浏览器未授权复制，请手动截图保存");
  }

  window.setTimeout(() => {
    shareLabel.textContent = defaultLabel;
    elements.shareButton.disabled = false;
  }, 2400);
}

function handleKeyboard(event) {
  if (!elements.quizScreen.classList.contains("is-active") || state.locked) return;

  if (["1", "2", "3", "4"].includes(event.key)) {
    const button = optionButtons[Number(event.key) - 1];
    if (button && !button.disabled) {
      event.preventDefault();
      button.click();
    }
  }
}

elements.questionTitle.setAttribute("tabindex", "-1");
elements.resultScreen.setAttribute("tabindex", "-1");

elements.startButton.addEventListener("click", startQuiz);
elements.backButton.addEventListener("click", goBack);
elements.brandLink.addEventListener("click", goHome);
elements.restartButton.addEventListener("click", startQuiz);
elements.shareButton.addEventListener("click", shareResult);
document.addEventListener("keydown", handleKeyboard);

createStars();
setArchiveCount();
