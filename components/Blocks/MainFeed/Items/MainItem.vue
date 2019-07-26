<template>

    <article class="article__item">        
      <nuxt-link :to="`/${category[0]}/${data.slug}`">
        <h3 class="article__title">
          {{ data.title }}
          <span class="article__category" v-if="data.category">Category: {{ data.category }}</span>
        </h3>
        <div class="article__img" v-if="data.thumbnail && category[1] !== 'newsHp'">
          <picture>
              <source :srcset="data.thumbnail.url + `?fit=crop&w=810&h=456`" :data-srcset="data.thumbnail.url + `?fit=crop&w=810&h=456`" alt="" media="(min-width: 768px)">
              <img :src="data.thumbnail.url + `?fit=crop&w=335&h=300`" :data-src="data.thumbnail.url + `?fit=crop&w=335&h=300`" alt="" class="lazyload blur-up">
          </picture>         
        </div>
        <div class="article__description" v-html="data.description"></div>
      </nuxt-link>
    </article> 	

</template>

<script>
  import 'lazysizes';

	export default {
		props: ["data", "category"]
	}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  
  .article{

    &__item{
    	position: relative;
      margin-bottom: 31px;
	    @include breakpoint(desktop) {
        grid-row: span 3;
        margin-bottom: 0;
	    }
    }
    .article__img{
      margin-bottom: 10px;
      img{
        width: 100%;
      }
    }

    &__title{
	    font-weight: bold;
      font-size: 40px;
      line-height: 45px;
      letter-spacing: 2.3px;
      margin-bottom: 3px;
      @include breakpoint(desktop) {
        letter-spacing: 0.3px;
        line-height: 115px;
        margin-bottom: 0;
        font-size: 9.1rem;
      }
    }

    &__description{        
      display: block;
      color: $color-gray;
      @include font-size(14, 15);
      line-height: 22px;
      @include breakpoint(desktop) {
        padding-top: 4px;
        max-width: 60%;
        letter-spacing: -0.4px;
      }
    }
  }
  </style>