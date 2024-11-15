

/**
* @FilePath: /docs/.vitepress/lang/zh.js
* @Description: TODO
* @Author: zhangt tao993859833@live.cn
* @Date: 2024-10-31 11:33:51
* @LastEditors: zhangt tao993859833@live.cn
* @LastEditTime: 2024-11-15 17:05:39
* @世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她
* @Copyright (c) 2024 by zhangt email: tao993859833@live.cn, All Rights Reserved
*/

export const META_URL = "https://easytidy.luckyits.com";
export const META_TITLE = "EasyTidy";
export const META_DESCRIPTION =
    "一个简单易用的桌面整理工具";

export const zh = {
    description: META_DESCRIPTION,
    themeConfig: {
        nav: [
            { text: "首页", link: "/" },
            { text: "使用指南", link: "/zh/" },
            { text: "下载", link: "/download" },
            {
                text: "社区交流",
                items: [
                  // { text: "Telegram", link: "" },
                  // { text: "Matrix", link: "" },
                  { text: "反馈论坛", link: "https://support.qq.com/products/676090" },
                  // { text: "QQ群组", link: "/img/qq_group.png" },
                  { text: "电子邮件", link: "mailto:service@luckyits.com" },
                ],
            },
            { text: "关于", link: "/about" },
        ],
        sidebar: {
            "/zh/": [
                {
                    text: "使用指南",
                    items: [
                        { text: "安装指南", link: "/zh/install/" },
                        { 
                            text: "软件配置", 
                            collapsed: true, 
                            items: [
                                { text: "常规配置", link: "/zh/guide/general" },
                                { text: "过滤器配置", link: "/zh/guide/filter" },
                                { text: "任务编排", link: "/zh/guide/task" },
                                { text: "规则示例", link: "/zh/guide/rules" },
                                { text: "自动化", link: "/zh/guide/automation" },
                                { text: "快捷键设置", link: "/zh/guide/shortcut" },
                            ]
                        },
                        { text: "常见问题", link: "/zh/faq/" },
                    ]
                }
            ]
        },
        editLink: {
            pattern: 'https://github.com/SaboZhang/EasyTidy-doc/edit/main/docs/:path',
            text: '在 GitHub 上编辑此页面'
        },
        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2024 至今 SaboZhang`
        },
    }
}