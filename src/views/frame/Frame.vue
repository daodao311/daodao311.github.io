<script setup lang="ts">
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

// 获取当前路由对象
const route = useRoute()
const isHome = ref(true)
// 监听路由变化
watch(route, newRoute => {
  isHome.value = newRoute.name === "Home"
})

function goBack() {
  history.back()
}
</script>
<template>
  <div class="frame">
    <div class="background">
      <div class="lines" v-for="item in 5" :key="item"></div>
    </div>
    <div :class="['header', isHome ? 'is-home' : 'not-home']">
      <transition name="fade">
        <div class="back" @click="goBack()" v-if="!isHome">返回</div>
      </transition>
      <div class="title">
        <span class="cell">
          <span>刀刀de</span>
          <transition name="fade" mode="out-in">
            <span v-if="isHome">玩</span>
            <span v-else>工</span>
          </transition>
          <span>具箱</span>
          <transition-group name="correct" appear>
            <span class="line" v-if="isHome"></span>
            <em class="correct" v-if="isHome">工</em>
          </transition-group>
        </span>
      </div>
      <!-- <img src="@/assets/imgs/daodao.svg" class="daodao" alt="" /> -->
      <!-- <img src="@/assets/imgs/daodaos-toolbox.svg" class="daodao" alt="" /> -->
    </div>
    <router-view></router-view>
  </div>
</template>
<style lang="scss" scoped>
.frame {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.background {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
  display: inline-flex;
  justify-content: space-around;
  background-color: $--color-primary-background;
  background-image: url("@/assets/imgs/texture.png");
  transition: background-color 1s ease-in;
  // background-color: #ddd;
  .lines {
    width: 1px;
    height: 100%;
    background-color: $--color-primary-light;
    opacity: 0.5;
  }
}
.header {
  position: sticky;
  top: 0;
  width: 100%;
  text-align: center;
  user-select: none;
  transition: all 0.4s ease-in-out;
  &.is-home {
    margin-top: 28vh;
    background-color: transparent;
    .title {
      font-size: var(--size-large);
    }
    .line,
    .correct {
      opacity: 1;
    }
  }
  &.not-home {
    margin-top: 0;
    background-color: rgba($--color-primary-light, 1);
    -webkit-mask: radial-gradient(#000, #0009);
    .title {
      font-size: var(--size-normal);
    }
    .line,
    .correct {
      opacity: 0;
    }
  }
  .title {
    transition: all 0.3s;
    color: $--color-nature;
    font-family: $--font-family-title;
    .cell {
      position: relative;
    }
  }
  .line {
    position: absolute;
    top: 43%;
    right: 31.5%;
    width: calc(var(--size-large) + 2vmin);
    height: calc(var(--size-large) / 10);
    transform: rotate(30deg);
    border-radius: 0.2vmin;
    font-family: $--font-family-title;
    font-weight: bolder;
    font-size: var(--size-large);
    background-color: $--color-error;
    animation: lineMove 2s ease;
  }
  .correct {
    position: absolute;
    top: -110%;
    right: 25%;
    color: $--color-error;
    font-family: $--font-family-title;
    font-size: var(--size-large);
    animation: correctMove 2s ease;
  }
  .back {
    position: absolute;
    top: 50%;
    left: 2vmin;
    transform: translateY(-50%);
    width: calc(var(--size-normal) * 2);
    color: $--color-nature;
    font-size: calc(var(--size-normal) * 0.8);
    font-family: $--font-family-title;
    cursor: pointer;
    transition: color 0.2s ease;
    &:hover {
      color: rgba($--color-nature, 0.6);
    }
    &:active {
      opacity: 0.6;
    }
  }
  .daodao {
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    opacity: 0.2;
  }
}
@keyframes lineMove {
  0% {
    transform: scaleX(0) rotate(30deg);
  }
  50% {
    transform: scaleX(0) rotate(30deg);
  }
  100% {
    transform: scaleX(1) rotate(30deg);
  }
}
@keyframes correctMove {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
}
</style>
