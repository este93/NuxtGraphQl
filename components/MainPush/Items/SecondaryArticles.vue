<template>
  <article class="upcoming__item">        
    <nuxt-link :to="`/films/${data.slug}`">
      <h3 class="upcoming__item__title">{{ data.title }}</h3>
      <div class="upcoming__item__img">
        <picture>
            <source :srcset="data.thumbnail.url + '?fit=crop&w=290&h=208'" alt="" media="(min-width: 1025px)">
            <img :srcset="data.thumbnail.url + '?fit=crop&w=335&h=152'" alt="">
        </picture>          
      </div>
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
    &__description{
      display: none;
    }

    &__img{
      img{
        width: 100%;
      }
    }
  }
</style>