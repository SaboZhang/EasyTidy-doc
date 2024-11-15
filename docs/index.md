---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "EasyTidy"
  text: "一个简单的文件自动分类整理工具"
  tagline: 告别文件混乱无序
  image:
    src: /logo/logo.svg
    alt: EasyTidy
  actions:
    - theme: brand
      text: 立即下载
      link: /download
    - theme: alt
      text: 使用指南
      link: /zh/api-examples

features:
  - title: 文件和文件夹过滤
    details: 按名称、目录、大小、日期、属性、内容或正则表达式分类
  - title: 文件夹监控
    details: 实时对文件夹展开变动情况的监控，并且依据预先设定好的时间规则，自动完成对文件夹内文件的分类操作。
  - title: 定时执行
    details: 依据匹配到的文件及文件夹相关条件，自动按照设定好的定时任务来执行相应操作
  - title: CRON 表达式支持
    details: 支持自定义 CRON 表达式以及可依据输入的执行日期来对文件进行分类。精准把控文件分类
  - title: 支持多种操作方式
    details: 根据匹配的文件和文件夹自动执行操作
  - title: 本地和 WebDav 备份支持
    details: 提供本地和 WebDav 备份支持功能，可借助 WebDav 协议对相关数据进行备份操，或者在本地文件夹进行备份
---

