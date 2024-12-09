---
title: EasyTidy
titleTemplate: Usage Guide
---
# User Guide

EasyTidy is a simple automatic file classification and organization tool that can easily set up a file workflow and is built using WinUI3 .NET8.

## Quick use

It is recommended to download through [GitHub](https://github.com/SaboZhang/EasyTidy/releases) or [云盘](/download.md). Of course, if you want to modify and compile it yourself, you can also do it.

**Require**

- Supported operating systems:
- Windows 11 (all versions)
- Windows 10 v2004 (19041) or higher
- System architecture
- Currently supports x64 and Arm64 (theoretical support, no device testing) architectures.
- The installer requires the following runtimes
- [.NET Runtime 8.0](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0) desktop runtime

**After Download**

Use any decompression tool to decompress, then go to the `EasyTidy` directory and run `EasyTidy.exe`, or run `run.bat` to generate a desktop shortcut and run it automatically.

When running for the first time, the `EasyTidy` tray icon will be automatically hidden by the system. It is recommended to manually drag and drop the `EasyTidy` icon to the tray area.
![pin_logo](/images/logo_pin.gif)

### Set filtering rules

The filtering rules further filter files based on file movement for more precise filtering. This rule is optional. Whether to set it depends on your own needs. Supports the use of regular expressions to match file names, file contents, etc.

- Click the Add Filter button
- Set filter name for association in [任务编排](guide/task.md)
- Check the attributes that need to be filtered (at least one of the attributes needs to be selected)
- Filterable attributes include file name, file path, file size, file creation time, file modification time, file access time, visibility, read-only, system files and other attributes. For details, please see the [过滤器](guide/filter.md) chapter.

### Add task

The association between files or folders (rules, including associations with filters) created by an organization and operations (processing methods).

### Set processing rules

1. **Define file or folder rules**

- Click the `添加任务` button on the task arrangement interface
- Fill in the task name and task group name, and try to ensure that the task names are not repeated. They are used to associate tasks on the [自动化](guide/automation.md) interface.
- Click the purple button next to the processing rule, select the system's preset processing rule or directly enter the file rule yourself. Multiple rules are separated by `|` or `;`. For example, the rule `*.7z;*.zip;*.rar` for processing compressed files

2. **Associate additional filtering rules (optional)**

- Click the `漏斗` button next to the processing rule to select the rule defined on the filter page, which will be associated after selection.

3. **Select file processing method**

- `移动`: The file is moved from the source folder to the target folder, and the file structure and name remain unchanged.
- `复制`: The file is copied from the source folder to the target folder, and the file structure and name remain unchanged.
- `重命名`: The file is copied from the source folder to the target folder. The file structure and name remain unchanged, but the file name will be renamed according to the rules.
- `回收站`: Delete the file, the file structure and name remain unchanged, and can be retrieved in the system recycle bin. The prerequisite is that the system recycle bin has not been cleaned after the file is deleted.
- `删除`: Delete related files directly and cannot be recovered. (Please choose this operation carefully)
- `解压`: Automatically decompress the compressed file. If the target folder is not passed in, the file will be decompressed in the source folder. If it is a separate file, it will be decompressed to the folder with the same name as the compressed package. If it is multiple file, but does not have a root directory, it will be decompressed to a folder with the same name as the compressed package; if the incoming file rule is not a compressed package rule, all compressed files in the source folder will be searched, decompressed, and Only files for the passed file rule will be extracted.
- `压缩`: Automatically compress the file, the compressed package name is the file name, the compressed package type is zip, the compressed package size is the source file size, and the compressed package path is the source file path.
- `上传至WebDAV`: To automatically upload files that meet the rules to the WebDAV server, you need to configure the WebDAV server in the settings interface first.

4. **Shortcuts and activation**

- `是否启用`: Whether to enable this task. After enabling it, EasyTidy will automatically run this task if automated processing is configured.
- `快捷方式`: Whether to create a shortcut on the desktop. When checked, a shortcut will be automatically created from the target folder to the desktop. The name is the task name defined by the task arrangement.

### Set automatic operation mode

Used to configure automatic processing tasks and how to trigger automatic processing.

![automation](/images/auto.png)

1. **Trigger mode**

- `文件变更`: Automatically run associated tasks when files change.
- `启动时`: Automatically run associated tasks when EasyTidy starts.
- `定期执行`: Automatically execute associated tasks according to set time intervals.
- `按照计划`: Execute according to the set schedule or CRON expression.

2. **Associated tasks**

- `任务组`: Click the task group button to select the task defined by task arrangement. All tasks under the same group name will be associated and use the same triggering method. You need to click Save Configuration below to save it.
- `是否单独配置`: After checking, a single task can be configured individually. The configuration method and content are consistent with the task group configuration.

## run log

The running log is used to view the real-time logs generated during the operation of EasyTidy. The first 100 logs are displayed to facilitate users to troubleshoot problems. , for more logs, click the `日志目录` button to open the log folder to view.

## Features

- Support classification based on document content
- Real-time monitoring
- WebDav automatic upload
- Regular expression support
- Log implementation display
- CRON expression support

## Thanks

- [.NET](https://dotnet.microsoft.com/)
- [WinUI Gallery](https://github.com/microsoft/WinUI-Gallery) official component design reference
- [Windows社区工具包](https://github.com/CommunityToolkit/dotnet) localization, MVVM design, etc., useful community expansion pack
- [WinUIEx](https://github.com/dotMorten/WinUIEx) Useful expansion pack
- [PowerToys](https://github.com/microsoft/PowerToys) Source of inspiration for interface design
