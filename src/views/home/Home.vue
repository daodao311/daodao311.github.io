<script setup lang="ts">
import { ref } from "vue"

interface Entry {
  name: string
  label: string
  path: string
}
const entryList = ref<Entry[]>([
  {
    name: "AI",
    label: "\xa0\xa0A\xa0\xa0I\xa0\xa0",
    path: "/ai"
  },
  {
    name: "工具",
    label: "\xa0工\xa0具\xa0",
    path: "/tool"
  },
  {
    name: "图一乐",
    label: "图一乐",
    path: "/fun"
  }
])
</script>
<template>
  <div class="home">
    <div class="head-links">
      <ul class="head-links__details">
        <li v-for="(item, index) in entryList" :key="index">
          <div class="head-links__item">
            <figure class="avatar-link">
              <router-link :to="item.path" class="avatar-link__link">
                <!-- <img src="@/assets/imgs/daodao.svg" class="avatar-link__img" alt="" /> -->
                <figcaption class="link-label">
                  <strong class="link-underlined">{{ item.label }}</strong>
                </figcaption>
              </router-link>
            </figure>
          </div>
        </li>
      </ul>
    </div>
    <!-- <div class="entry">
      <div class="entry-item" v-for="(item, index) in entryList" :key="index">
        <router-link :to="item.path">
          <div class="entry-item-wrapper">
            <span class="cell">{{ item.label }}</span>
          </div>
          <div class="tv-screen"></div>
        </router-link>
      </div>
    </div> -->
    <!-- <div v-for="item in sitesList">
      {{ item }}
    </div> -->
  </div>
</template>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.head-links {
  &__details {
    display: flex;
    justify-content: center;
    width: 80vw;
    li {
      padding: 8vh 4vw 0;
    }
  }
  &__item {
  }
}
@media (max-width: 1023px) {
  .head-links__details {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.avatar-link {
  .avatar-link__link {
    display: flex;
    align-items: center;
    gap: 0.5em;
    min-width: -moz-fit-content;
    min-width: fit-content;
    display: inline;
    &:hover .link-underlined::before {
      background-position: 0 50%;
    }
  }
  .avatar-link__img {
    display: block;
    height: auto;
    border-radius: 50%;
    filter: grayscale(1);
  }
  .link-label {
    .link-underlined {
      position: relative;
      display: inline-block;
      line-height: 100%;
      color: $--color-nature;
      border: none;
      font-size: $--size-small;
      cursor: pointer;
      &:before {
        content: "";
        position: absolute;
        bottom: -0.2em;
        left: 0;
        width: 100%;
        height: 2px;
        background-repeat: no-repeat;
        background-image: linear-gradient(to right, $--color-nature 45%, $--color-nature-light 55%);
        background-size: 220% 100%;
        background-position: 100% 50%;
        transition: 0.3s ease-out;
      }
    }
  }
}
.entry {
  display: flex;
  justify-content: center;
  width: 100%;
  &-item {
    position: relative;
    width: 8vw;
    height: 5vw;
    margin: 0 40px;
    color: $--color-nature;
    cursor: pointer;
    &-wrapper {
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6vw;
      letter-spacing: 0.2em;
      font-family: $--font-family;
      user-select: none;
    }
    .tv-screen {
      position: relative;
      z-index: -1;
      width: 100%;
      height: 100%;
      background: $--color-nature-light;
      border-radius: 50% / 10%;
      transition: all 0.2s ease;

      &::before {
        content: "";
        position: absolute;
        top: 10%;
        bottom: 10%;
        right: -5%;
        left: -5%;
        background: inherit;
        border-radius: 5% / 50%;
      }
    }
    &:hover {
      .tv-screen {
        opacity: 0.6;
        transform: scale3d(1.1, 1.1, 1.1);
      }
    }
    &:active {
      opacity: 0.6;
    }
  }
}
</style>
