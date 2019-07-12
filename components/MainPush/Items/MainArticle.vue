<template>
  <article class="upcoming__item">        
    <nuxt-link :to="`/films/${data.slug}`">
      <h3 class="upcoming__item__title">{{ data.title }}</h3>
      <div class="upcoming__item__img">
        <picture>
            <source :srcset="data.thumbnail.url + '?fit=crop&w=810&h=456'" alt="" media="(min-width: 1025px)">
            <img :srcset="data.thumbnail.url + '?fit=crop&w=335&h=300'" alt="">
        </picture>          
      </div>
      <div class="upcoming__item__description" v-html="data.description" v-show="data.description"></div>
    </nuxt-link>
  </article> 

</template>

<script>
export default {
  props: ["data"]
}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .upcoming__item{
    position: relative;
    margin-bottom: 31px;

    @include breakpoint(desktop) {
      grid-row: span 3;
      margin-bottom: 0;
    }

    &__title{
      @include font-size(40, 100);
      line-height: 45px;
      letter-spacing: 2.3px;
      font-weight: bold;
      margin-bottom: 3px;
      @include breakpoint(desktop) {
        letter-spacing: 0.3px;
        line-height: 115px;
        margin-bottom: 0;
      }
    }

    &__description{
      display: block;
      color: $color-gray;
      @include font-size(14, 15);
      line-height: 22px;
      padding-top: 10px;
      @include breakpoint(desktop) {
        padding-top: 14px;
        max-width: 60%;
        letter-spacing: -0.4px;
      }
    }

    &>a{
      display: block;
      position: relative;
    }

    &__img{
      img{
        width: 100%;
      }
    }
  }
</style>