const courses = [
  {
    id: 1,
    phase: "theory",
    title: "触觉感知与机器人灵巧操作概论",
    meta: "FOUNDATION · 感知与操作",
    topics: ["触觉物理量", "传感器类型", "性能指标", "抓取稳定性", "滑移检测", "灵巧操作", "具身智能"],
    task: "比较两类触觉传感器的优缺点，并分析各自适合的机器人应用场景。",
    links: [
      ["论文", "A Review of Tactile Information: Perception and Action Through Touch", "https://arxiv.org/abs/2006.14135"],
      ["论文", "TacO：面向物体操作的触觉传感器基准", "https://arxiv.org/abs/2605.21976"],
      ["社区", "Touch Sensing Community", "https://www.touch-sensing.org/"]
    ]
  },
  {
    id: 2,
    phase: "theory",
    title: "视触觉传感器结构设计与触觉成像机制",
    meta: "HARDWARE · 光学与结构",
    topics: ["弹性体", "相机与光源", "反射与散射", "标记点", "GelSight", "DIGIT", "结构参数", "标定流程"],
    task: "绘制一个简易视触觉传感器结构示意图，说明各模块作用与可能的误差来源。",
    links: [
      ["论文", "GelSight：几何测量与滑移检测", "https://arxiv.org/abs/1708.00922"],
      ["论文", "DIGIT：紧凑型高分辨率触觉传感器", "https://arxiv.org/abs/2005.14679"],
      ["代码", "DIGIT Python Interface", "https://github.com/facebookresearch/digit-interface"],
      ["论文", "GelSight360：全向视触觉指尖", "https://arxiv.org/abs/2304.04268"]
    ]
  },
  {
    id: 3,
    phase: "theory",
    title: "触觉图像处理、特征提取与三维形变重建",
    meta: "PERCEPTION · 图像与重建",
    topics: ["背景差分", "接触区域检测", "标记点追踪", "稠密光流", "光度立体", "深度图", "点云", "数据集与评价"],
    task: "设计从原始触觉图像到接触特征提取的完整处理流程，并说明每一步的输入与输出。",
    links: [
      ["教程", "OpenCV Optical Flow", "https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html"],
      ["论文", "DelTact：基于稠密彩色图案的视触觉传感器", "https://arxiv.org/abs/2202.02179"],
      ["代码", "GelSight 开源图像与重建工具", "https://github.com/gelsightinc"],
      ["论文", "Taxim：用于 GelSight 的高速图像模拟", "https://arxiv.org/abs/2109.04027"]
    ]
  },
  {
    id: 4,
    phase: "theory",
    title: "触觉力学建模、多模态感知与机器人操作策略",
    meta: "CONTROL · 力学与闭环",
    topics: ["接触力学", "三轴力估计", "摩擦与滑移", "多模态融合", "触觉表征学习", "阻抗控制", "闭环抓取", "精密装配"],
    task: "选择一个机器人操作任务，设计基于触觉反馈的操作流程，明确感知量、状态判断和控制动作。",
    links: [
      ["论文", "触觉力场与熵驱动的滑移检测", "https://arxiv.org/abs/2303.00935"],
      ["论文", "Minsight：指尖尺寸的三维力场触觉传感器", "https://arxiv.org/abs/2304.10990"],
      ["论文", "VTT：视觉—触觉 Transformer 学习", "https://arxiv.org/abs/2110.03985"],
      ["Demo", "DiffTactile：可微分触觉仿真与操作", "https://difftactile.github.io/"]
    ]
  },
  {
    id: 5,
    phase: "practice",
    title: "视触觉传感器制作与实物数据采集实验",
    meta: "BUILD · 制作与采集",
    topics: ["结构组装", "光源布置", "弹性体安装", "相机调试", "标定测试", "数据采集", "图像差分", "形变可视化"],
    task: "小组搭建或调试简易视触觉传感器，采集多种接触条件数据，并分析图像变化与接触状态。",
    links: [
      ["硬件", "DIGIT 传感器设计论文与结构参考", "https://digit.ml/"],
      ["代码", "DIGIT 数据采集 Python 接口", "https://github.com/facebookresearch/digit-interface"],
      ["项目", "GelSight 官方开源仓库集合", "https://github.com/gelsightinc"],
      ["论文", "HySenSe：高灵敏、高保真视触觉传感器", "https://arxiv.org/abs/2211.04571"]
    ]
  },
  {
    id: 6,
    phase: "practice",
    title: "触觉仿真与机器人灵巧操作综合实验",
    meta: "SIMULATION · 综合实验",
    topics: ["触觉仿真", "PyBullet", "接触状态读取", "开环基线", "阈值反馈", "策略学习", "Sim2Real", "消融对比"],
    task: "完成一个触觉辅助操作任务，对比有/无触觉反馈的成功率，并讨论真实传感器与仿真模型差异。",
    links: [
      ["代码", "TACTO：开源视触觉仿真器", "https://github.com/facebookresearch/tacto"],
      ["Demo", "TACTO PyBullet DIGIT 示例", "https://github.com/facebookresearch/tacto/blob/main/examples/demo_pybullet_digit.py"],
      ["代码", "Tactile Gym 2.0", "https://github.com/ac-93/tactile_gym"],
      ["Demo", "DiffTactile 项目与视频", "https://difftactile.github.io/"],
      ["论文", "TacEx：Isaac Sim 中的 GelSight 触觉仿真", "https://arxiv.org/abs/2411.04776"],
      ["代码", "TacEx：Isaac Sim/Isaac Lab 触觉扩展", "https://github.com/DH-Ng/TacEx"],
      ["论文", "TacSL：视触觉传感器仿真与学习库", "https://arxiv.org/abs/2408.06506"],
      ["代码", "TacSL：IsaacGymEnvs tacsl 分支", "https://github.com/isaac-sim/IsaacGymEnvs/tree/tacsl"],
      ["论文", "Taxim：基于样例的 GelSight 仿真模型", "https://arxiv.org/abs/2109.04027"],
      ["代码", "Taxim：官方开源实现", "https://github.com/Robo-Touch/Taxim"]
    ]
  }
];

const resources = [
  { type: "paper", label: "PAPER / SURVEY", title: "A Review of Tactile Information", desc: "从触觉感知到操作的综述，适合作为课程导读。", year: "2020", url: "https://arxiv.org/abs/2006.14135" },
  { type: "paper", label: "PAPER / SENSOR", title: "DIGIT", desc: "紧凑、低成本、高分辨率视触觉传感器的代表工作。", year: "2020", url: "https://arxiv.org/abs/2005.14679" },
  { type: "paper", label: "PAPER / SENSOR", title: "GelSight: Geometry & Slip", desc: "理解光度立体、表面重建和滑移感知的经典论文。", year: "2017", url: "https://arxiv.org/abs/1708.00922" },
  { type: "code", label: "CODE / HARDWARE", title: "DIGIT Interface", desc: "连接 DIGIT、读取帧与配置视频流的 Python 工具。", year: "GITHUB", url: "https://github.com/facebookresearch/digit-interface" },
  { type: "code", label: "CODE / SIMULATOR", title: "TACTO", desc: "基于 PyBullet 的视触觉渲染器，包含 DIGIT 和灵巧手示例。", year: "GITHUB", url: "https://github.com/facebookresearch/tacto" },
  { type: "demo", label: "DEMO / PHYSICS", title: "DiffTactile", desc: "面向接触丰富操作的物理可微分触觉仿真系统。", year: "PROJECT", url: "https://difftactile.github.io/" },
  { type: "code", label: "CODE / RL", title: "Tactile Gym 2.0", desc: "触觉强化学习与 Sim2Real 实验环境，涵盖推、循边和表面跟随。", year: "GITHUB", url: "https://github.com/ac-93/tactile_gym" },
  { type: "demo", label: "DEMO / VISION", title: "OpenCV Optical Flow", desc: "可直接复现的稀疏与稠密光流教程，用于标记点位移分析。", year: "DOCS", url: "https://docs.opencv.org/4.x/d4/dee/tutorial_optical_flow.html" },
  { type: "paper", label: "PAPER / BENCHMARK", title: "TacO", desc: "从操作任务角度比较视觉、声学、磁学与电阻式触觉传感器。", year: "2026", url: "https://arxiv.org/abs/2605.21976" },
  { type: "paper", label: "PAPER / SIMULATOR", title: "Taxim", desc: "基于样例的 GelSight 光学与标记点仿真模型，少量真实数据即可标定。", year: "2022", url: "https://arxiv.org/abs/2109.04027" },
  { type: "code", label: "CODE / SIMULATOR", title: "Taxim Code", desc: "Taxim 官方开源实现，含标定流程与触觉图像渲染示例。", year: "GITHUB", url: "https://github.com/Robo-Touch/Taxim" },
  { type: "paper", label: "PAPER / SIMULATOR", title: "TacSL", desc: "GPU 加速的视触觉仿真与学习库，比此前方法快 200 倍并支持 Sim2Real。", year: "2024", url: "https://arxiv.org/abs/2408.06506" },
  { type: "code", label: "CODE / SIMULATOR", title: "TacSL Code", desc: "TacSL 策略学习工具包（IsaacGymEnvs tacsl 分支），官方版将并入 Isaac Lab。", year: "GITHUB", url: "https://github.com/isaac-sim/IsaacGymEnvs/tree/tacsl" },
  { type: "paper", label: "PAPER / SIMULATOR", title: "TacEx", desc: "在 Isaac Sim 中结合软体与视触觉仿真的 GelSight Mini 模块化框架。", year: "2024", url: "https://arxiv.org/abs/2411.04776" },
  { type: "code", label: "CODE / SIMULATOR", title: "TacEx Code", desc: "TacEx 的 Isaac Sim/Isaac Lab 触觉扩展，集成 Taxim、FOTS 与 UIPC。", year: "GITHUB", url: "https://github.com/DH-Ng/TacEx" }
];

const simulators = [
  {
    name: "Taxim",
    level: "入门友好",
    levelClass: "easy",
    tagline: "用一张高度图换一张触觉图，最轻量的 GelSight 仿真。",
    features: [
      "基于样例：用多项式查找表把表面形变直接映射成触觉 RGB 图像",
      "同时仿真标记点位移场，可用于剪切与滑移分析",
      "标定只需真实传感器约 100 个数据点，易迁移到其他 GelSight 变体"
    ],
    requirements: [
      "纯 Python，CPU 即可运行，无需专用物理引擎",
      "依赖 NumPy / SciPy，pip 安装即可（可选 GPU 版用 PyTorch / JAX）",
      "普通笔记本电脑就能跑，非常适合课堂演示"
    ],
    bestFor: "第一次接触触觉仿真，理解“形变 → 图像”的成像原理与数据增强。",
    links: [["论文", "https://arxiv.org/abs/2109.04027"], ["代码", "https://github.com/Robo-Touch/Taxim"]]
  },
  {
    name: "TacEx",
    level: "进阶",
    levelClass: "mid",
    tagline: "在 Isaac Sim 里把软体物理和视触觉渲染拼装到一起。",
    features: [
      "模块化框架：软体仿真(UIPC / GIPC) + 视触觉渲染(Taxim、FOTS) 可自由组合",
      "输出凝胶形变、GelSight RGB 图像与标记点流场",
      "内置 Isaac Lab 强化学习环境（推动、抓取提起、平衡杆）",
      "目前支持 GelSight Mini，可扩展自定义传感器"
    ],
    requirements: [
      "NVIDIA Isaac Sim ≥ 2024.1 + Isaac Lab ≥ 0.5（仅 Linux）",
      "NVIDIA 显卡，≥ 12GB 显存（运行 16+ 并行环境）",
      "约 16 核 CPU 跑标记点仿真，Taxim 内核需 PyTorch 1.13",
      "当前为预览版，文档仍在完善中"
    ],
    bestFor: "想对比不同仿真方法、研究软接触 + 强化学习的进阶用户。",
    links: [["论文", "https://arxiv.org/abs/2411.04776"], ["代码", "https://github.com/DH-Ng/TacEx"]]
  },
  {
    name: "TacSL",
    level: "进阶",
    levelClass: "mid",
    tagline: "GPU 大规模并行的视触觉仿真与策略学习库。",
    features: [
      "GPU 加速，触觉图像与接触力场生成比此前方法快约 200 倍",
      "同时输出 RGB 触觉图、法向力场与切向力场",
      "自带学习工具包：多种传感器模型、接触密集环境、在线 / 离线算法",
      "提出 AACD 算法，面向真机迁移（Sim2Real）"
    ],
    requirements: [
      "NVIDIA 显卡 + CUDA（Linux），适合大规模并行训练",
      "当前预览基于已弃用的 Isaac Gym（IsaacGymEnvs 的 tacsl 分支）",
      "官方正式版将并入 Isaac Lab",
      "需要一定的强化学习与 Isaac 生态基础"
    ],
    bestFor: "做大规模触觉强化学习、力场学习与真机迁移的进阶项目。",
    links: [["论文", "https://arxiv.org/abs/2408.06506"], ["代码", "https://github.com/isaac-sim/IsaacGymEnvs/tree/tacsl"]]
  }
];

function simulatorTemplate(sim) {
  return `
    <article class="sim-card">
      <span class="sim-level ${sim.levelClass}">${sim.level}</span>
      <h3>${sim.name}</h3>
      <p class="sim-tagline">${sim.tagline}</p>
      <div class="sim-block">
        <h4>特色亮点</h4>
        <ul class="feat">${sim.features.map(f => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="sim-block">
        <h4>配置要求</h4>
        <ul class="req">${sim.requirements.map(r => `<li>${r}</li>`).join("")}</ul>
      </div>
      <p class="sim-bestfor"><strong>适合：</strong>${sim.bestFor}</p>
      <div class="sim-links">
        ${sim.links.map(([type, url]) => `<a href="${url}" target="_blank" rel="noreferrer">${type} ↗</a>`).join("")}
      </div>
    </article>`;
}

document.querySelector("#sim-grid").innerHTML = simulators.map(simulatorTemplate).join("");

function courseTemplate(course) {
  const links = course.links.map(([type, title, url]) =>
    `<a href="${url}" target="_blank" rel="noreferrer"><small>${type.toUpperCase()}</small><b>${title}</b><span>↗</span></a>`
  ).join("");
  return `
    <article class="course-item" id="course-${course.id}">
      <button class="course-head" aria-expanded="false">
        <span class="course-no">0${course.id} / 06</span>
        <h3>${course.title}</h3>
        <span class="course-meta">${course.meta}</span>
        <span class="toggle" aria-hidden="true">+</span>
      </button>
      <div class="course-body">
        <div class="course-content">
          <div>
            <h4>CORE TOPICS / 核心内容</h4>
            <div class="topic-tags">${course.topics.map(topic => `<span>${topic}</span>`).join("")}</div>
            <p class="course-note"><strong>课后 / 实践任务：</strong>${course.task}</p>
          </div>
          <div>
            <h4>READ & BUILD / 配套资源</h4>
            <div class="course-links">${links}</div>
          </div>
        </div>
      </div>
    </article>`;
}

document.querySelector("#course-list").innerHTML = courses.filter(c => c.phase === "theory").map(courseTemplate).join("");
document.querySelector("#practice-list").innerHTML = courses.filter(c => c.phase === "practice").map(courseTemplate).join("");

document.querySelectorAll(".course-head").forEach(button => {
  button.addEventListener("click", () => {
    const item = button.closest(".course-item");
    const body = item.querySelector(".course-body");
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", isOpen);
    body.style.maxHeight = isOpen ? `${body.scrollHeight}px` : "0px";
  });
});

document.querySelector("#resource-grid").innerHTML = resources.map(resource => `
  <a class="resource-card" data-type="${resource.type}" href="${resource.url}" target="_blank" rel="noreferrer">
    <span class="resource-type">${resource.label}</span>
    <h3>${resource.title}</h3>
    <p>${resource.desc}</p>
    <div class="resource-foot"><span>${resource.year}</span><span>↗</span></div>
  </a>
`).join("");

document.querySelectorAll(".filters button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".resource-card").forEach(card => {
      card.classList.toggle("hidden", filter !== "all" && card.dataset.type !== filter);
    });
  });
});

if (location.hash.startsWith("#course-")) {
  const target = document.querySelector(location.hash);
  target?.querySelector(".course-head")?.click();
}
