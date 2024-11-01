

/**
* @FilePath: /docs/.vitepress/lang/zh.js
* @Description: TODO
* @Author: zhangt tao993859833@live.cn
* @Date: 2024-10-31 11:33:51
* @LastEditors: zhangt tao993859833@live.cn
* @LastEditTime: 2024-10-31 15:31:30
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
            { text: "使用说明", link: "/zh/" },
            { text: "下载", link: "/download" },
            { text: "关于", link: "/about" },
        ],
        sidebar: {
            "/zh/": [
                {
                    text: "使用说明",
                    items: [
                        { text: "快速开始", link: "/zh/" },
                        { text: "使用说明", link: "/zh/docs/" },
                        { text: "常见问题", link: "/zh/docs/faq" },
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