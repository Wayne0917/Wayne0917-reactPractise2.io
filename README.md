# 🚀 React 產品列表實作 (Vite 版)

這是一個使用 **React 18/19** 與 **Vite** 開發的產品清單展示專案。主要練習 React 的狀態管理、Props 傳遞以及元件化開發（Component-Based Architecture）。

## 🔗 作品連結
[👉 點此查看 Demo 網頁](https://wayne0917.github.io/Wayne0917-reactPractise2.io/)

---

## ✨ 核心功能

* **產品清單渲染**：透過 `map` 處理陣列資料，動態呈現 Bootstrap 表格。
* **元件化開發 (Component-Based)**：
    * `LoginInterface`：獨立封裝登入表單介面，負責呈現帳號密碼輸入欄位，並透過 props 接收表單資料與事件處理函式。
    * `ProductList`：獨立封裝左側列表邏輯，負責處理產品選擇事件。
    * `ProductDescription`：獨立封裝右側詳細資訊展示，處理單一產品的詳細圖文呈現。
* **狀態管理**：使用 `useState` 同步更新當前選中的產品資訊，實現即時交互體驗。
* **響應式設計**：採用 Bootstrap 5 框架，確保在不同螢幕尺寸下皆有良好的佈局。

## 🛠 使用技術

* **框架**：React (Hooks)
* **建構工具**：Vite
* **樣式**：Bootstrap 5
* **部署工具**：gh-pages

## 📂 檔案結構 (src)

```text
src/
├── components/          # 子元件資料夾
│   ├── LoginInterface.jsx # 登入介面元件
│   ├── ProductList.jsx    # 左側產品清單元件
│   └── ProductDetail.jsx  # 右側細節展示元件
├── App.jsx              # 父元件 (管理核心 State)
├── main.jsx             # 渲染進入點
└── style.css            # 全域自定義樣式
```

## 📦 專案執行方式

1. Clone 專案

   ```bash
   git clone https://github.com/Wayne0917/Wayne0917-reactPractise2.io.git
   ```
2. 安裝必要套件
   
   ```bash
   npm install
   ```
4. 安裝必要套件

   ```bash
   npm run dev
   ```
