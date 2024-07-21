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
    margin-bottom: 10vmin;
    opacity: 0;
    animation: slide-down 1s ease forwards;
    &:nth-child(4n-3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4n-2) {
      animation-delay: 0.4s;
    }
    &:nth-child(4n-1) {
      animation-delay: 0.6s;
    }
    &:nth-child(4n) {
      animation-delay: 0.8s;
    }
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
@keyframes slide-down {
  0% {
    opacity: 0;
    margin-bottom: 10vmin;
    transform: translateY(50%);
  }
  100% {
    opacity: 1;
    margin-bottom: 0;
    transform: translateY(0);
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
    &:nth-child(2n-1) {
      animation-delay: 0.2s;
    }
    &:nth-child(2n) {
      animation-delay: 0.4s;
    }
    .card {
      // padding: 2vmin;
    }
  }
}
</style>
