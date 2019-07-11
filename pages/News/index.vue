<template>
    <div class="list">
	  <h1 class="title">News</h1>
	  <div class="articles__wrap">

		<Item v-for="(item, index) in allNews" :key="index" :data="item" />
<!-- 	    <article v-for="(post, index) in allNews" :key="index" class="article__item">        
	      <nuxt-link :to="`/news/${post.slug}`">
	        <h3 class="article__title">{{ post.title }}</h3>
	        <div class="article__img">
	          <img :src="post.thumbnail.url" alt="">            
	        </div>
	        <div class="article__bottom">
	            <h4 class="article__date">January 12 — 2018</h4>
	            <div class="article__more">
	              more 
	              <svg xmlns="http://www.w3.org/2000/svg" width="21.933" height="17.521" viewBox="0 0 21.933 17.521">
	                  <path d="M21.6 9.096H.336a.336.336 0 0 1 0-.672H21.6a.336.336 0 1 1 0 .672z" data-name="Path 47"/>
	                  <path d="M13.171 17.517a.336.336 0 0 1-.238-.573l8.188-8.188L12.937.573a.336.336 0 0 1 .475-.475l8.425 8.419a.337.337 0 0 1 0 .476l-8.429 8.424a.333.333 0 0 1-.237.1z" data-name="Path 48"/>
	              </svg>
	            </div>
	        </div>
	      </nuxt-link>
	    </article>  -->     

	  </div>
	</div>
</template>

<script>
import gql from 'graphql-tag'
// import allNews from '~/apollo/fetchNews'
import { GET_NEWS } from '~/apollo/queries.js'
import Item from '~/components/Item'

export default {
  components: {
  	Item
  },
  apollo: {
    allNews: {
      prefetch: true,
      query: GET_NEWS
    }
  }
}
</script>


<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

	.title{
		font-style: italic;
		color: $color-red;
		@include font-size(22, 30);
		letter-spacing: 1px;
		margin-bottom: 68px;
		@include breakpoint(desktop) {
			letter-spacing: 1.7px;
		}
	}
	
	.list{
		padding-top: 122px;
	    @include breakpoint(desktop) {
			padding-top: 156px;
	    }
	}

  .article{
    &__wrap{

    }
    &__item{
    	position: relative;
    	margin-bottom: 55px;
    	border-bottom: 1px solid #DBDBDB;
    	padding-bottom: 55px;
	    @include breakpoint(desktop) {
			&>a{
				display: grid;
    			grid-template-columns: 49% 51%;
			}
	    }
    	&:last-child{
    		border: none;
    		&:before, &:after{
    			display: none;
    		}
    	}
    	&:before{
    		position: absolute;
    		content: '';
    		width: 50%;
			height: 1px;
			background: -webkit-linear-gradient(left, #ffffff 0%,#dbdbdb 100%);
			bottom: -1px;
    	}
    	&:after{
    		position: absolute;
    		content: '';
    		width: 50%;
			height: 1px;
			background: -webkit-linear-gradient(right, #ffffff 0%,#dbdbdb 100%);
			bottom: -1px;
			right: 0;
    	}
    }
    &__img{
    	margin-bottom: 23px;
	    @include breakpoint(desktop) {
			grid-row: 1/span 6;
			margin-bottom: 0;
	    }
    }
    &__title{
		font-weight: bold;
		@include font-size(30, 30);
		line-height: 34px;
		margin-bottom: 20px;
	    @include breakpoint(desktop) {
			grid-column: 2;
    		grid-row: 3;
    		padding: 0 60px 0 120px;
    		margin-bottom: 55px;
	    }
    }
    &__bottom{
		display: flex;
		justify-content: space-between;
	    @include breakpoint(desktop) {
			grid-column: 2;
    		grid-row: 4;
    		padding: 0 120px;
	    }
    }
    &__date{
      letter-spacing: 0.8px;
    }
    &__more{
    	display: flex;
    	align-items: center;
    	svg{
    		margin-left: 14px;
    	}
    }
  }
  </style>