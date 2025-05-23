---
title: EasyTidy
titleTemplate: 使用指南
---
# 使用指南

EasyTidy 是一个简单的文件自动分类整理工具，能轻松组建文件工作流，使用WinUI3 .NET8 构建。

## 快速使用

建议通过 [GitHub](https://github.com/SaboZhang/EasyTidy/releases) 或者 [云盘](/download.md)进行下载，当然如果你想自己修改编译也是可以的。

**要求**

- 支持的操作系统：
  - Windows 11（所有版本）
  - Windows 10 v2004 (19041) 或更高版本
- 系统体系结构
  - 当前支持 x64 和 Arm64(理论支持，无设备测试) 体系结构。
- 安装程序需要以下运行时
  - [.NET Runtime 8.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)桌面运行时

**下载后**

使用任意解压工具进行解压，然后到`EasyTidy`目录下运行 `EasyTidy.exe` 即可，或者运行`run.bat`会生成桌面快捷方式，并自动运行。

在首次运行的时候`EasyTidy`托盘图标会被系统自动隐藏，建议手动把`EasyTidy`的图标拖放到托盘区域
![pin_logo](/images/logo_pin.gif)

### 设置过滤规则

过滤规则为在文件移动的基础之上再进一步对文件进行筛选，以进行更精确的筛选。此规则为可选规则。是否进行设定取决于自身的需求。支持使用正则表达式对文件名，文件内容等进行匹配。

- 点击添加过滤器按钮
- 设定过滤器名称，用于在[任务编排](guide/task.md)中进行关联
- 勾选需要筛选的属性（至少需要选择其中一条属性）
- 可进行筛选的属性包含、文件名、文件路径、文件大小、文件创建时间、文件修改时间、文件访问时间、是否可见、只读、系统文件等属性详情查看[过滤器](guide/filter.md)章节

### 添加任务

组织创建的文件或者文件夹（规则，包含与过滤器的关联）与操作（处理方式）之间的关联关系。

### 设置处理规则

1. **定义文件或者文件夹规则**
   - 点击任务编排界面的`添加任务`按钮
   - 填写任务名称跟任务组名称，尽量保证任务名称不重复，用于在[自动化](guide/automation.md)界面对任务进行关联
   - 点击处理规则旁边的紫色按钮，选择系统预设的处理规则或者自己直接输入文件规则，多个规则用`|`或`;`分割。例如处理压缩文件的规则`*.7z;*.zip;*.rar`

2. **关联高级规则(可选)**
   - 点击处理规则旁边的`漏斗`按钮可以选择在过滤器页面定义的规则，选择之后将进行关联。
3. **选择文件处理方式**
   - `移动`：文件从源文件夹移动到目标文件夹，文件结构跟名称不变。
   - `复制`：文件从源文件夹复制到目标文件夹，文件结构跟名称不变。
   - `重命名`：文件从源文件夹复制到目标文件夹，文件结构跟名称不变，但文件名会根据规则进行重命名。
   - `回收站`：将文件进行删除，文件结构跟名称不变，可在系统回收站中找回，前提条件是没有在文件删除之后清理过系统回收站。
   - `删除`：直接将相关文件进行删除，并且不可恢复。（请谨慎选择此操作）
   - `解压`：自动将压缩文件进行解压，如果不传入目标文件夹，文件则会在源文件夹下进行解压，如果是单独的文件，则解压到压缩包同名的文件夹下，如果是多文件，但是没有根目录，则会解压到压缩包同名的文件夹下;在传入的文件规则不为压缩包规则的情况下，则会查找源文件夹下的所有压缩文件，进行解压，并且只会提取传入的文件规则的文件。
   - `压缩`：自动将文件进行压缩，压缩包名称为文件名，压缩包类型为zip，压缩包大小为源文件大小，压缩包路径为源文件路径。
   - `上传至WebDAV`：将符合规则的文件自动上传到WebDAV服务器，需要先在设置界面进行WebDAV服务器的配置。
   - `硬连接`：在同一文件系统内创建指向原始文件的新链接，两个链接共享同一物理数据，任何一处修改均同步更新。
   - `软连接（符号链接）`：创建指向原始文件或目录的符号链接，支持跨文件系统链接。若原始文件被删除，链接将失效。
   - `文件快照`：将硬盘驱动器的完整文件夹层次结构捕获并导出为HTML格式的快照文档。
   - `文件加密`：文件加密提供两种方式：1) 7z压缩包加密，创建加密的压缩文件；2) AES-256结合PBKDF2派生密钥加密，可通过OpenSSL等常用工具解密，确保高度安全与兼容性。
   - `运行外部程序`：执行外部程序或者是脚本
   - `AI总结`：使用AI总结文件内容，并且输出为PDF文件
   - `AI分类`：使用自然语言指定分类方式，并对文件进行分类整理。需要先在AI模型设置页面添加AI模型，并设置默认的AI模型。（支持目前已有的除AI跟外部程序调用外的所有操作方式）
4. **快捷方式与启用**
   - `是否启用`：是否启用此任务，启用之后，并且在配置自动化处理的情况下，EasyTidy会自动运行此任务。
   - `快捷方式`：是否在桌面创建快捷方式，勾选时将自动创建目标文件夹到桌面的快捷方式，名称为任务编排定义的任务名称。

### 设置自动运行方式

用于配置自动处理的任务，以及自动处理的触发方式。

![automation](/images/auto.png)

1. **触发方式**
   - `文件变更`：当文件变动时，自动运行关联任务。
   - `启动时`：在EasyTidy启动时，自动运行关联任务。
   - `定期执行`：根据设定的时间间隔自动执行关联任务。
   - `按照计划`：根据设定的时间表或者CRON表达式进行执行。
2. **关联任务**
   - `任务组`：点击任务组按钮选择任务编排定义的任务，同一个分组名称下的所有任务都会被关联，并且使用相同的触发方式。需要点击下方保存配置进行保存。
   - `是否单独配置`：勾选之后，可以对单个任务进行单独配置，配置方式以及内容与任务组配置一致。

## 运行日志

运行日志用于查看EasyTidy运行过程中产生的实时日志，展示的为前100条，方便用户排查问题。，更多日志可以点击`日志目录`按钮，打开日志文件夹查看。

## 特色功能

- 根据文档内容分类支持
- 实时监控
- WebDav自动上传
- 正则表达式支持
- 日志实现显示
- CRON表达式支持

## 感谢

- [.NET](https://dotnet.microsoft.com/)
- [WinUI Gallery](https://github.com/microsoft/WinUI-Gallery) 官方组件设计参考
- [Windows社区工具包](https://github.com/CommunityToolkit/dotnet) 本地化、MVVM设计等,好用的社区扩展包
- [WinUIEx](https://github.com/dotMorten/WinUIEx) 好用的扩展包
- [PowerToys](https://github.com/microsoft/PowerToys) 界面设计灵感来源

## 交流群

包括但是不限于EasyTidy的微信交流群。

![微信群](/images/社区.jpg)
