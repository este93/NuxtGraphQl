<template>
  <div>

    <UpcomingHpFeed :upcomingHp="allPosts" />

    <NewsHpFeed :newsHp="allNews" />

    <div class="bio">
      <h1 class="title">Bio</h1>
      <h2 class='bio__title'>Documentary Filmmaker With Passion For Social Change.</h2>
      <p class='bio__text'>Ivana Todorovic is a filmmaker and lecturer from Belgrade, Serbia. For her BA Thesis in Ethnology and Anthropology at University of Belgrade, she made her first short documentary film. After a one month course at Ateliers Varan in Belgrade, she went on to get a Graduate Certificate in Documentary Media studies in New York City. She later received an MA in Fiction Film at The Faculty of Dramatic Arts in Belgrade.</p>  
      <a href="/bio" class="link__more">more<span class="arrow"></span></a>
    </div>

    <Lecturer />

  </div>
</template>

<script>
import { GET_UPCOMING, GET_NEWS_HP } from '~/apollo/queries'
import UpcomingHpFeed from '~/components/Blocks/UpcomingHpFeed'
import NewsHpFeed from '~/components/Blocks/NewsHpFeed'
import Lecturer from '~/components/Lecturer'

export default {
  components: {
    UpcomingHpFeed,
    NewsHpFeed,
    Lecturer
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

  .link__more{
    margin-top: 39px;
    letter-spacing: 1px;
    display: block;
    @include breakpoint(desktop) {
      margin-top: 48px;
    }
    .arrow{
      width: 22px;
      height: 18px;
      background: url('~/assets/img/right-arrow.png');
      margin-left: 14px;
      display: inline-block;
      vertical-align: middle;
    }
  }

  .bio{
    margin: 87px 0 200px 0;
    @include breakpoint(desktop) {
      margin: 215px 0 325px 0;
    }
    &__title{
      font-weight: bold;
      @include font-size(40, 100);
      line-height: 39px;
      margin-bottom: 10px;
      @include breakpoint(desktop) {
        line-height: 95px;
        max-width: 78%;
      }
    }
    &__text{          
      color: $color-gray;
      @include font-size(16, 16);
      line-height: 24px;
      @include breakpoint(desktop) {
        padding-top: 14px;
        max-width: 58%;
      }
    }
  } 
</style>