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
    <div :class="['title', isHome ? 'is-home' : 'not-home']">
      <div class="back" @click="goBack()" v-if="!isHome">返回</div>
      <h1 class="text">
        <span>刀刀de</span>
        <transition name="fade" mode="out-in">
          <span v-if="isHome">玩</span>
          <span v-else>工</span>
        </transition>
        <span>具箱</span>
      </h1>
      <transition-group name="correct" appear>
        <span class="line" v-if="isHome"></span>
        <em class="correct" v-if="isHome">工</em>
      </transition-group>
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
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEWFhYWDg4N3d3dtbW17e3t1dXWBgYGHh4d5eXlzc3OLi4ubm5uVlZWPj4+NjY19fX2JiYl/f39ra2uRkZGZmZlpaWmXl5dvb29xcXGTk5NnZ2c8TV1mAAAAG3RSTlNAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAvEOwtAAAFVklEQVR4XpWWB67c2BUFb3g557T/hRo9/WUMZHlgr4Bg8Z4qQgQJlHI4A8SzFVrapvmTF9O7dmYRFZ60YiBhJRCgh1FYhiLAmdvX0CzTOpNE77ME0Zty/nWWzchDtiqrmQDeuv3powQ5ta2eN0FY0InkqDD73lT9c9lEzwUNqgFHs9VQce3TVClFCQrSTfOiYkVJQBmpbq2L6iZavPnAPcoU0dSw0SUTqz/GtrGuXfbyyBniKykOWQWGqwwMA7QiYAxi+IlPdqo+hYHnUt5ZPfnsHJyNiDtnpJyayNBkF6cWoYGAMY92U2hXHF/C1M8uP/ZtYdiuj26UdAdQQSXQErwSOMzt/XWRWAz5GuSBIkwG1H3FabJ2OsUOUhGC6tK4EMtJO0ttC6IBD3kM0ve0tJwMdSfjZo+EEISaeTr9P3wYrGjXqyC1krcKdhMpxEnt5JetoulscpyzhXN5FRpuPHvbeQaKxFAEB6EN+cYN6xD7RYGpXpNndMmZgM5Dcs3YSNFDHUo2LGfZuukSWyUYirJAdYbF3MfqEKmjM+I2EfhA94iG3L7uKrR+GdWD73ydlIB+6hgref1QTlmgmbM3/LeX5GI1Ux1RWpgxpLuZ2+I+IjzZ8wqE4nilvQdkUdfhzI5QDWy+kw5Wgg2pGpeEVeCCA7b85BO3F9DzxB3cdqvBzWcmzbyMiqhzuYqtHRVG2y4x+KOlnyqla8AoWWpuBoYRxzXrfKuILl6SfiWCbjxoZJUaCBj1CjH7GIaDbc9kqBY3W/Rgjda1iqQcOJu2WW+76pZC9QG7M00dffe9hNnseupFL53r8F7YHSwJWUKP2q+k7RdsxyOB11n0xtOvnW4irMMFNV4H0uqwS5ExsmP9AxbDTc9JwgneAT5vTiUSm1E7BSflSt3bfa1tv8Di3R8n3Af7MNWzs49hmauE2wP+ttrq+AsWpFG2awvsuOqbipWHgtuvuaAE+A1Z/7gC9hesnr+7wqCwG8c5yAg3AL1fm8T9AZtp/bbJGwl1pNrE7RuOX7PeMRUERVaPpEs+yqeoSmuOlokqw49pgomjLeh7icHNlG19yjs6XXOMedYm5xH2YxpV2tc0Ro2jJfxC50ApuxGob7lMsxfTbeUv07TyYxpeLucEH1gNd4IKH2LAg5TdVhlCafZvpskfncCfx8pOhJzd76bJWeYFnFciwcYfubRc12Ip/ppIhA1/mSZ/RxjFDrJC5xifFjJpY2Xl5zXdguFqYyTR1zSp1Y9p+tktDYYSNflcxI0iyO4TPBdlRcpeqjK/piF5bklq77VSEaA+z8qmJTFzIWiitbnzR794USKBUaT0NTEsVjZqLaFVqJoPN9ODG70IPbfBHKK+/q/AWR0tJzYHRULOa4MP+W/HfGadZUbfw177G7j/OGbIs8TahLyynl4X4RinF793Oz+BU0saXtUHrVBFT/DnA3ctNPoGbs4hRIjTok8i+algT1lTHi4SxFvONKNrgQFAq2/gFnWMXgwffgYMJpiKYkmW3tTg3ZQ9Jq+f8XN+A5eeUKHWvJWJ2sgJ1Sop+wwhqFVijqWaJhwtD8MNlSBeWNNWTa5Z5kPZw5+LbVT99wqTdx29lMUH4OIG/D86ruKEauBjvH5xy6um/Sfj7ei6UUVk4AIl3MyD4MSSTOFgSwsH/QJWaQ5as7ZcmgBZkzjjU1UrQ74ci1gWBCSGHtuV1H2mhSnO3Wp/3fEV5a+4wz//6qy8JxjZsmxxy5+4w9CDNJY09T072iKG0EnOS0arEYgXqYnXcYHwjTtUNAcMelOd4xpkoqiTYICWFq0JSiPfPDQdnt+4/wuqcXY47QILbgAAAABJRU5ErkJggg==);
  filter: contrast(1.3) saturate(1.5);
  // -webkit-mask: radial-gradient(#000, #0009);
  .lines {
    width: 1px;
    height: 100%;
    background-color: $--color-primary-light;
    opacity: 0.5;
  }
}
.title {
  position: relative;
  text-align: center;
  user-select: none;
  transition: all 0.3s;
  &.is-home {
    width: auto;
    margin-top: 30vh;
    background-color: transparent;
    .text {
      font-size: $--size-large;
    }
    .line,
    .correct {
      opacity: 1;
    }
  }
  &.not-home {
    width: 100%;
    margin-top: 0;
    background-color: rgba($--color-primary-light, 0.5);
    -webkit-mask: radial-gradient(#000, #0009);
    .text {
      font-size: $--size-normal;
    }
    .line,
    .correct {
      opacity: 0;
    }
  }
  .text {
    transition: all 0.3s;
    color: $--color-nature;
    font-family: $--font-family-title;
  }
  .line {
    position: absolute;
    top: 43%;
    right: 31.5%;
    width: calc($--size-large + 2vmin);
    height: calc($--size-large / 10);
    transform: rotate(30deg);
    border-radius: 0.2vmin;
    font-family: $--font-family-title;
    font-weight: bolder;
    font-size: $--size-large;
    background-color: $--color-error;
    animation: lineMove 2s ease;
  }
  .correct {
    position: absolute;
    top: -60%;
    right: 25%;
    color: $--color-error;
    font-family: $--font-family-title;
    font-size: $--size-large;
    animation: correctMove 2s ease;
  }
  .back {
    position: absolute;
    top: 50%;
    left: 2vmin;
    transform: translateY(-50%);
    width: calc($--size-normal * 2);
    color: $--color-nature;
    font-size: calc($--size-normal * 0.8);
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
