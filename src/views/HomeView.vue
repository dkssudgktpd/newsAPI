<template>
  <div class="news-wrap">
    <h2>실시간 인기 뉴스</h2>
    <div
      v-for="(item, index) in newslist.articles"
      :key="index"
      class="news-con"
    >
      <a :href="item.url" target="_blank">
        <span>{{ item.title }}</span>
        <img :src="item.urlToImage" />
        <p>{{ item.description }}</p>
      </a>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const newslist = computed(() => store.getters.getNewList);
    console.log(newslist.articles);
    return {
      newslist,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: #333;
}

.news-wrap {
  position: relative;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.news-wrap h2 {
  display: block;
  width: 100%;
  font-size: 40px;
  text-align: center;
}
.news-con {
  width: 30%;
  margin-bottom: 5vw;
}
.news-con span {
  word-break: keep-all;
  display: block;
  text-align: center;
  font-size: 24px;
  padding-bottom: 2vw;
  height: 50px;
}
.news-con img {
  width: 100%;
  max-height: 300px;
}
</style>
