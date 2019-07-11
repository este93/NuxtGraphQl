<template>
  <div>
    <section class="upcoming">
      <h1 class="title">Upcoming Films</h1>
      <div class="upcoming__wrap">
        <article v-for="(post, index) in allPosts" :key="index" v-if="post.upcoming" class="upcoming__item">        
          <nuxt-link :to="`/films/${post.slug}`">
            <h3 class="upcoming__item__title">{{ post.title }}</h3>
            <div class="upcoming__item__img">
              <img :src="post.thumbnail.url" width="200" alt="">            
            </div>
            <p class="upcoming__item__description">{{ post.description }}</p>
          </nuxt-link>
        </article>        
      </div>
    </section>


    <section class="news">
      <h1 class="title">News</h1>
      <div class="news__wrap">
        <article class="news__item">
          <h3 class="news__title">First short fiction film</h3>
          <div class="news__bottom">
            <h4 class="news__date">January 12 — 2018</h4>
            <nuxt-link class="news__more" to="">
              more 
              <svg xmlns="http://www.w3.org/2000/svg" width="21.933" height="17.521" viewBox="0 0 21.933 17.521">
                  <path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
                  <path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
              </svg>
            </nuxt-link>
          </div>
        </article>
      </div>
    </section>

  </div>
</template>

<script>
import gql from 'graphql-tag'
import allPosts from '~/apollo/fetchPosts'

export default {
  apollo: {
    allPosts: {
      prefetch: true,
      query: allPosts
    }
  }
}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .news{
    &__wrap{

    }
    &__title{
      font-weight: bold;
      @include font-size(30, 30);
      line-height: 34px;
      margin-bottom: 20px;
    }
    &__bottom{
      display: flex;
      justify-content: space-between;
      @include font-size(16, 30);
    }
    &__date{

    }
  }

  .title{
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

  .upcoming{
    padding-top: 117px;
    @include breakpoint(desktop) {
      padding-top: 230px;
    }
    &__wrap{
      @include breakpoint(desktop) {
        display: grid;
        grid-template-columns: 71% 29%;
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
      position: relative;
      margin-bottom: 26px;
      &>a{
        display: block;
        position: relative;
      }
      &:nth-child(2){
        @include breakpoint(desktop) {
          padding-top: 107px;
        }
      }
      &:first-child{
        @include breakpoint(desktop) {
          grid-row: span 2;
        }
        .upcoming__item__title{
          @include font-size(33, 100);
          letter-spacing: 2.3px;
          font-weight: bold;
          margin-bottom: 6px;
          position: static;
          padding: 0;
          width: 100%;
          @include breakpoint(desktop) {
            letter-spacing: 0.3px;
          }
        }
        .upcoming__item__description{
          display: block;
          color: $color-gray;
          @include font-size(12, 15);
          line-height: 19px;
          padding-top: 10px;
        }
      }
      &__title{
         @include font-size(14, 15);
         position: absolute;
         bottom: -1px;
         left: -1px;
         background: $color-white;
         padding: 14px 8px 12px 2px;
         letter-spacing: 0.5px;
         width: 75%;
      }
      &__img{
        img{
          width: 100%;
        }
      }
      &__description{
        display: none;
      }
    }
  }
</style>