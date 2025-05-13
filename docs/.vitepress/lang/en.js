

/**
* @FilePath: /docs/.vitepress/lang/en.js
* @Description: TODO
* @Author: zhangt tao993859833@live.cn
* @Date: 2024-10-31 11:34:01
* @LastEditors: zhangt tao993859833@live.cn
* @LastEditTime: 2024-11-15 17:55:03
* @世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她
* @Copyright (c) 2024 by zhangt email: tao993859833@live.cn, All Rights Reserved
*/
export const META_URL = "https://easytidy.luckyits.com";
export const META_TITLE = "EasyTidy";
export const META_DESCRIPTION =
    "An easy-to-use desktop organizer";

export const en = {
    description: META_DESCRIPTION,
    themeConfig: {
        nav: [
            { text: "Home", link: "/en/" },
            { text: "Document", link: "/en/docs/" },
            { text: "Download", link: "/en/download" },
            {
                text: "Community",
                items: [
                  // { text: "Telegram", link: "" },
                  // { text: "Matrix", link: "" },
                  { text: "Forum", link: "https://support.qq.com/products/676090" },
                  // { text: "QQ群组", link: "/img/qq_group.png" },
                  { text: "Mail", link: "mailto:service@luckyits.com" },
                ],
            },
            { text: "About", link: "/en/about" },
        ],
        sidebar: {
            "/en/docs/": [
                {
                    text: "Document",
                    items: [
                        { text: "Install Guide", link: "/en/docs/install/" },
                        { 
                            text: "Software Config", 
                            collapsed: true, 
                            items: [
                                { text: "General", link: "/en/docs/guide/general" },
                                { text: "AI Settings", link: "/en/docs/guide/AI" },
                                { text: "Filter", link: "/en/docs/guide/filter" },
                                { text: "Task Orchestration", link: "/en/docs/guide/task" },
                                { text: "Example of Rules", link: "/en/docs/guide/rules" },
                                { text: "Automation", link: "/en/docs/guide/automation" },
                                { text: "Hotkey", link: "/en/docs/guide/shortcut" },
                            ]
                        },
                        { text: "FAQ", link: "/en/docs/faq/" },
                    ]
                }
            ]
        },
        editLink: {
            pattern: 'https://github.com/SaboZhang/EasyTidy-doc/edit/main/docs/:path'
        },
    }
}