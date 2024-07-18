<script setup lang="ts">
import { ref } from "vue"
import sites from "@/assets/json/sites.json"
import CardsList from "@/components/CardsList.vue"

const sitesList = ref(sites.fun)
</script>
<template>
  <div class="ai">
    <div class="header">
      <div class="title">图 一 乐</div>
    </div>
    <CardsList :sites="sitesList"></CardsList>
  </div>
</template>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16vmin;
  .title {
    font-size: var(--size-normal);
    color: $--color-nature;
    font-family: $--font-family-title;
  }
}
</style>
