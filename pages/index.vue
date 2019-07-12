<template>
  <div>

    <MainPushFeed :data="allPosts" />

    <section class="news">
      <h1 class="title">News</h1>
      <div class="news__wrap">        
        <Item v-for="(item, index) in allNews" :key="index" :data="item" :category="['news', 'hp']"/>   
      </div>
    </section>

  </div>
</template>

<script>
import { GET_UPCOMING, GET_NEWS_HP } from '~/apollo/queries'
import MainPushFeed from "~/components/MainPush/MainPushFeed"
import Item from '~/components/Item'

export default {
  components: {
    MainPushFeed,
    Item
  },
  apollo: {
    allPosts: {
      prefetch: true,
      query: GET_UPCOMING
    },
    allNews: {
      prefetch: true,
      query: GET_NEWS_HP
    }
  },
}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .news{
    padding-top: 110px;
    @include breakpoint(desktop) {
      padding-top: 215px;
      .title{
        margin-bottom: 10px;
      }
    }
    &__wrap{
      @include breakpoint(desktop) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>