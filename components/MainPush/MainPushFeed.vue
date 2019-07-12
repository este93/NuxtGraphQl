<template>

  <section class="upcoming">
    <h1 class="title">Upcoming Films</h1>
    <div class="upcoming__wrap" v-if="data">
      <MainArticle :data="data[0]"/>
      <SecondaryArticles v-for="(item,index) in data.slice(1)" :key="index" :data="item"/>
    </div>
  </section>

</template>

<script>
import MainArticle from "~/components/MainPush/Items/MainArticle"
import SecondaryArticles from "~/components/MainPush/Items/SecondaryArticles"

export default {
  props: ["data"],
  components: {
    MainArticle,
    SecondaryArticles
  }
}

</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .upcoming{
    padding-top: 145px;
    @include breakpoint(desktop) {
      padding-top: 230px;
    }
    &__wrap{
      @include breakpoint(desktop) {
        display: grid;
        grid-template-columns: 71% 25%;
        grid-column-gap: 40px;
      }      
    }
    &__title{
      font-style: italic;
      color: $color-red;
      @include font-size(20, 30);
      letter-spacing: 0.2px;
      margin-bottom: 60px;
      @include breakpoint(desktop) {
        letter-spacing: 1.7px;
        margin-bottom: 73px;
      }
    }

    &__item{
      &:nth-child(2){
        @include breakpoint(desktop) {
          padding-top: 115px;
        }
      }
    }
  }
</style>