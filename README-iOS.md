# 英语学伴 · iOS（巨魔/TrollStore）版编译指南

iOS 应用必须在苹果的 macOS + Xcode 环境下编译，我的这台电脑是 Linux，
所以直接编不出 IPA。我已经把网页代码和云端自动编译流水线都准备好了，
你只需要一个 GitHub 账号，跟着下面 5 步操作，就能拿到可以在巨魔上安装的 IPA。

## 准备好的东西（精简版，共约 11 个文件）

- `www/`：App 的全部网页代码（单词、语法题都在里面）
- `assets/AppIcon-1024.png`：应用图标
- `package.json` / `package-lock.json` / `capacitor.config.json`：工程配置
  （包名 `com.terry.englishbuddy`，显示名"英语学伴"，版本 1.0）
- `.github/workflows/build-ipa.yml`：自动编译脚本。
  编译时会在苹果官方的 macOS 云主机上自动生成 iOS 原生工程并打包，
  产出**未签名**的 IPA（TrollStore 安装时会自动做伪签名，未签名包可以直接装）

## 操作步骤（约 10 分钟，全程手机可操作）

### 1. 新建仓库
- 在 GitHub 点右上角 `+` → `New repository`，
  仓库名填 `english-buddy`，选 **Public**（公开仓库才能免费使用苹果编译机），
  点 `Create repository`。

### 2. 上传文件
- 在新仓库页面点 `uploading an existing file`。
- 把我给你的 `英语学伴-iOS工程.zip` 解压，
  把里面的文件（`www` 文件夹、`assets` 文件夹等约 11 个）一次性拖进去，
  拉到页面底部点 `Commit changes`。

### 3. 运行自动编译
- 点仓库顶部的 `Actions` 标签页。
- 左侧找到 `Build iOS IPA（巨魔/TrollStore 版）`，点进去，
  再点右侧 `Run workflow` → `Run workflow`。
- 等待约 5～8 分钟，出现绿色 ✅ 即编译成功。
  （如果变红，把报错截图发给我，我来修。）

### 4. 下载 IPA
- 点进那次成功的运行记录，拉到最下面 `Artifacts`，
  下载 `英语学伴-iOS-v1.0`，解压得到 `英语学伴-v1.0.ipa`。

### 5. 在 iPhone 上用巨魔安装
- 把 IPA 传到 iPhone（隔空投送 / 微信文件传输助手 / 数据线都行）。
- 在 iPhone 上用 **TrollStore** 打开这个 IPA，点安装即可。
- 桌面会出现"英语学伴"图标，功能和安卓版完全一样：
  10 个主题词书（200 词）、单词闪卡、词汇测验、
  8 个语法专题（48 道题）、错题本，全部离线可用。

## 注意事项

- 手机需要已安装 TrollStore（支持 iOS 14.0 – 17.0）。
- 以后想加单词、改内容，告诉我"坦坦"即可；
  我改完后你重新跑一次 Actions 就能得到新版 IPA。
- 如果你自己有 Mac，也可以直接用 Xcode 打开编译，
  但按上面的云端方式最省事。
