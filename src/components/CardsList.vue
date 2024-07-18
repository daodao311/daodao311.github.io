<script setup lang="ts">
interface Site {
  name: string
  titleEN: string
  titleCN: string
  description: string
  labels: Array<string>
  site: string
  image: string
}
// 定义 props 类型
interface Props {
  sites: Array<Site>
}
const props = defineProps<Props>()
// 跳转目标网站
function handleJump(site) {
  window.open(site.site, "blank")
}
</script>
<template>
  <div class="row">
    <div class="col" v-for="(site, index) in props.sites" :key="index">
      <div class="card" @click="handleJump(site)" :title="site.description">
        <div class="title">
          <p class="ellipsis1">{{ site.titleEN }}</p>
          <p class="ellipsis1">{{ site.titleCN }}</p>
        </div>
        <div class="content">
          <!-- <span>{{ site.description }}</span> -->
          <ul class="labels">
            <li v-for="(label, index) in site.labels" :key="index">
              <div class="label">
                <span class="label-text">{{ label }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- <img :src="site.image" alt="Site Image" /> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.row {
  display: flex;
  // justify-content: center;
  flex-wrap: wrap;
  width: 96vw;
  padding: 0 4vmin;
  .col {
    flex: 0 0 25%;
    width: 25%;
    padding: 4vmin;
    .card {
      display: flex;
      flex-direction: column;
      // height: 40vmin;
      padding: 3vmin;
      border-radius: 2vmin;
      color: $--color-nature;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      background-color: rgba($--color-nature-light, 0.6);
      transition: transform 0.3s;
      cursor: pointer;
      &:hover {
        transform: scale(1.1);
      }
      .title {
        font-weight: bold;
        font-size: var(--size-small);
      }
      .content {
        // flex: 1;
        margin-top: 2vmin;
      }
    }
  }
}
.labels {
  display: flex;
  flex-direction: row-reverse;
  li {
    padding: 0 0.8vmin;
  }
  .label {
    border-radius: 1vmin;
    padding: 0.2vmin 1vmin;
    background-color: $--color-primary-light;
    .label-text {
      font-size: var(--size-mini);
    }
  }
}
@media (orientation: portrait) {
  .row .col {
    flex: 0 0 50%;
    width: 50%;
    .card {
      // padding: 2vmin;
    }
  }
}
</style>
