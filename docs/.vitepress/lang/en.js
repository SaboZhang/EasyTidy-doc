

/**
* @FilePath: /docs/.vitepress/lang/en.js
* @Description: TODO
* @Author: zhangt tao993859833@live.cn
* @Date: 2024-10-31 11:34:01
* @LastEditors: zhangt tao993859833@live.cn
* @LastEditTime: 2024-10-31 15:31:04
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
            { text: "Document", link: "/en/guide/" },
            { text: "Download", link: "/en/download" },
            { text: "About", link: "/en/about" },
        ],
        sidebar: {
            "/en/guide/": [
                {
                    text: "Document",
                    items: [
                        { text: "Quick Start", link: "/en/" },
                        { text: "Document", link: "/en/guide/" },
                        { text: "FAQ", link: "/en/guide/faq" },
                    ]
                }
            ]
        },
        editLink: {
            pattern: 'https://github.com/SaboZhang/EasyTidy-doc/edit/main/docs/:path'
        },
    }
}