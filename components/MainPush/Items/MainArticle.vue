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

    &__title{
    }

    &__description{
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