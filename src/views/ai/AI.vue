<script setup lang="ts">
import { ref } from "vue"
import sites from "@/assets/json/sites.json"
import CardsList from "@/components/CardsList.vue"
import GSymbol from "@/components/GSymbol.vue"

const sitesList = ref(sites.ai)
</script>
<template>
  <div class="ai">
    <div class="header">
      <div class="title">A I</div>
    </div>
    <!-- <g-symbol
      color="green"
      fontStyle="italic"
      align-text
      family="rounded"
      fill
      weight="400"
      grade="0"
      size="48"
      >star</g-symbol
    > -->
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
