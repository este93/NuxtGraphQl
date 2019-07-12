<template>

    <article class="article__item" :class="{'article-newsHP' : category[1] == 'hp'}">        
      <nuxt-link :to="`${category[0]}/${data.slug}`">
        <h3 class="article__title">{{ data.title }}</h3>
        <div class="article__img" v-if="data.thumbnail && !category[1] == 'hp'">
          <picture>
              <source :srcset="data.thumbnail.url + '?fit=crop&w=560&h=400'" alt="" media="(min-width: 1025px)">
              <img :srcset="data.thumbnail.url + '?fit=cropw=335&h=207'" alt="">
          </picture>         
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
    </article> 	

</template>

<script>
	export default {
		props: ["data", "category"]
	}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  
  .article{
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
    &-newsHP{      
      padding-bottom: 48px;
      margin-bottom: 48px;   
      @include breakpoint(desktop) {
        margin-bottom: 0;
        padding: 95px 112px 95px 125px;
        .article__title,
        .article__bottom{
          padding: 0;
        }
        .article__bottom{
          max-width: 72%;
        }
        &>a{
          display: block;
        }
        &:first-child:after,
        &:nth-child(2):before{
          display: none;
        }
        &:first-child{
          border-right: 1px solid #DBDBDB;
          padding-left: 0;
        }
        &:nth-child(2){
          padding-right: 0;
        }
        &:last-child{
          padding-right: 0;
        }
        &:nth-child(3){
          border: none;
          border-right: 1px solid #DBDBDB;
          padding-left: 0;
          &:before, &:after{
            display: none;
          }
        }
      }
      .article__title{        
        margin-bottom: 38px;
        @include breakpoint(desktop) {
          margin-bottom: 42px;
        }
      }
    }
  }
  </style>