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
    position: relative;
    margin-bottom: 31px;
    @include breakpoint(desktop) {
      margin-bottom: 43px;
    }

    &>a{
      display: block;
      position: relative;
    }

    &__description{
      display: none;
    }

    &__img{
      img{
        width: 100%;
      }
    }

    &__title{
     @include font-size(16, 15);
     line-height: 18px;
     letter-spacing: 0.8px;
     position: absolute;
     bottom: -1px;
     left: -1px;
     background: $color-white;
     padding: 17px 5px 14px 3px;
     width: 75%;
     @include breakpoint(desktop) {
        width: 86%;
        padding: 16px 5px 6px 0px;
        letter-spacing: 1.3px;
     }
    }
  }
</style>