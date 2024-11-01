

<!--
 * @FilePath: /docs/.vitepress/theme/Layout.vue
 * @Description: TODO
 * @Author: zhangt tao993859833@live.cn
 * @Date: 2024-11-01 10:22:47
 * @LastEditors: zhangt tao993859833@live.cn
 * @LastEditTime: 2024-11-01 12:32:00
 * 世界上最遥远的距离不是生与死，而是你亲手制造的BUG就在你眼前，你却怎么都找不到她
 * Copyright (c) 2024 by zhangt email: tao993859833@live.cn, All Rights Reserved
-->
<script setup>
import Twikoo from './Twikoo.vue'

</script>

<template>
  <Twikoo></Twikoo>
</template>

<style>
.home-comment-container {
  position: relative;
  margin-top: 64px;
  padding: 0 24px;
}

@media (min-width: 640px) {
  .home-comment-container {
    padding: 0 48px;
  }
}

@media (min-width: 960px) {
  .home-comment-container {
    padding: 0 64px;
  }
}

.home-comment-container .comment-container {
  margin: 0 auto;
  max-width: 1152px;
}

.twikoo .el-loading-spinner .circular {
  margin-left: auto;
  margin-right: auto;
}
</style>