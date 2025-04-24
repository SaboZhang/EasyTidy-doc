---
title: EasyTidy
titleTemplate: Download
layout: page
editLink: false
---

<script setup>
import { ref,computed } from 'vue'
import axios from 'axios'

const version = '1.3.2.423'

const ghproxy = 'https://mirror.ghproxy.com/'

const download = (type, param)=>{
    var proxy = ''
    var url = ''
    if (type === '1')
        proxy = ghproxy
    else
        proxy = ''

    if (param === 'runtime')
        url = `${proxy}https://github.com/SaboZhang/Organize/releases/download/${version}/EasyTidy_20211031_win-x64.7z`

    else if (param === 'noruntime')
        url = `${proxy}https://github.com/SaboZhang/Organize/releases/download/${version}/EasyTidy_20211031_win-x64.7z`

    else if (param === '123')
        url = 'https://www.123684.com/s/hbzgTd-fmmt'

    else if (param === '蓝奏云')
        url = 'https://wwoo.lanzouu.com/b02u2ne0eh'

    console.log('url:' + url)
    open(url)
}
</script>

<h1 :class="$style.version">{{version}}</h1>


<div :class="$style.wrap">
    <div :class="$style.download">
        <button :class="$style.button" @click="download('0', 'runtime')">
            Win x64 (Github)
            <Badge type="warning" text=".zip" />
        </button>
        <button :class="$style.button" @click="download('1', 'runtime')">
            Win x64 (Github_ghproxy)
            <Badge type="warning" text=".zip" />
        </button>
    </div>
</div>

<div :class="$style.wrap">
    <div :class="$style.download">
        <button :class="$style.button" @click="download('2', '123')">
            123 Network disk
            <Badge type="warning" text=".zip" />
        </button>
        <button :class="$style.button" @click="download('3', '蓝奏云')">
            lanzouw (Extraction code: 2025)
            <Badge type="warning" text=".zip" />
        </button>
    </div>
</div>

<style module>
    .warn {
        width: 100%;
        margin: 0 auto;
        text-align: center;
    }

    .version {
        text-align: center;
        font-weight: bold;
        font-size: 40px;
        margin: 50px 0;
        color: #77b3e5;
    }

    .info {
        width: 60%;
        margin: 50px auto;
        padding: 10px;
        font-weight: bold;
        font-size: 20px;
        background-color: #ffc13140;
        border-radius: 4px;
    }

    .wrap {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    .download {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-column-gap: 20px;
        width: 80%;
    }

    .platform {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }

    .button {
        min-width: 250px;
        width: 100%;
        height: 50px;
        padding: 10px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 20px;
        background-color: #3e63dd;
        border-radius: 6px;
    }
</style>

<!-- #  发布页面

[点击前往](https://github.com/SaboZhang/Organize/releases)

# Github链接

[前往下载](https://github.com/SaboZhang/Organize/releases/latest)

# 网盘链接

[前往下载](https://wwoo.lanzouj.com/ijQOa2dubvng)

# 123云盘

[前往下载](https://www.123684.com/s/hbzgTd-fmmt) -->