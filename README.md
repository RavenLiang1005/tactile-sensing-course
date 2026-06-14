# 触觉传感器和机器人灵巧操作

根据《触觉传感器和机器人灵巧操作》课程大纲制作的研究型课程网站，内容不按课次排列，而按研究主题组织：

- 触觉传感器类型：压阻、电容、压电与视触觉
- 视触觉组成原理与 GelSight 案例
- 9DTact、Tac3D、GelSlim、DIGIT、DenseTact 等代表传感器
- 标定、数据采集、触觉仿真与灵巧操作融合
- 配套论文、项目主页、开源代码和 Demo
- 响应式布局，支持手机与桌面浏览

## 本地预览

直接打开 `index.html`，或在目录中启动任意静态文件服务器：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 部署到 GitHub Pages

1. 在 GitHub 新建仓库并推送本目录文件。
2. 进入仓库的 `Settings` → `Pages`。
3. 在 `Build and deployment` 中选择 `Deploy from a branch`。
4. 选择 `main` 分支和根目录 `/ (root)`，保存后等待部署完成。

## 内容维护

页面内容位于 `index.html`，样式位于 `styles.css`；`app.js` 仅负责导航状态。

> 部分历史开源仓库已进入只读归档状态，但代码、文档和示例仍可用于教学。引用论文或代码时请遵循原项目许可。
