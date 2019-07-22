<template>

    <article class="article__item" :class="classObject">        
      <nuxt-link :to="`/${category[0]}/${data.slug}`">
        <h3 class="article__title">
          {{ data.title }}
          <span class="article__category" v-if="data.category">Category: {{ data.category }}</span>
        </h3>
        <div class="article__img" v-if="data.thumbnail && category[1] !== 'newsHp'">
          <picture>
              <source :srcset="data.thumbnail.url + `?fit=crop&${imageSizesResolver[0]}`" :data-srcset="data.thumbnail.url + `?fit=crop&${imageSizesResolver[0]}`" alt="" media="(min-width: 768px)">
              <img :src="data.thumbnail.url + `?fit=crop&${imageSizesResolver[1]}`" :data-src="data.thumbnail.url + `?fit=crop&${imageSizesResolver[1]}`" alt="" class="lazyload blur-up">
          </picture>         
        </div>
        <div class="upcoming__item__description" v-html="data.description" v-if="category[1] == 'featured'"></div>
        <div class="article__bottom" v-if="category[1] !== 'upcoming' && category[1] !== 'featured'">
            <h4 class="article__date">{{ formatDate(data.createdAt) }}</h4>
            <div class="article__more">more<span class="arrow"></span></div>            
        </div>
      </nuxt-link>
    </article> 	

</template>

<script>
  import 'lazysizes';

	export default {
		props: ["data", "category"],
    data() {
      return{        
        classObject: {
          'article-newsHP'  : this.category[1] == 'newsHp',          
          'article-upcoming': this.category[1] == 'upcoming',
          'article-featured': this.category[1] == 'featured'
        },
      }
    },
    computed: {
      imageSizesResolver(){
        var imageSizes = [];
        if(this.category[1] == 'featured'){
          imageSizes[0] = 'w=810&h=456';
          imageSizes[1] = 'w=335&h=300';
        }else if(this.category[1] == 'upcoming'){
          imageSizes[0] = 'w=290&h=208';
          imageSizes[1] = 'w=335&h=152';          
        }else{
          imageSizes[0] = 'w=560&h=400';
          imageSizes[1] = 'w=335&h=207';             
        }
        return imageSizes;
      } 
    }
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
    &__category{
     @include font-size(16, 15);
     display: block;
     font-weight: normal;
    }
    &__date{
      letter-spacing: 0.8px;
    }
    &__more{
    	display: flex;
    	align-items: center;
      .arrow{
        width: 22px;
        height: 18px;
        background: url('~/assets/img/right-arrow.png');
        margin-left: 14px;
      }
    }
    
    &-featured{      
      margin-bottom: 31px;
      border: none;
      padding: 0;
      &:before, &:after{
        display: none;
      }
      @include breakpoint(desktop) {
        grid-row: span 3;
        margin-bottom: 0;
      }
      &>a{
        display: block;
        position: relative;
      }
      .article__img{
        margin-bottom: 10px;
        img{
          width: 100%;
        }
      }
      .upcoming__item__description{        
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
      .article__title{        
        font-size: 40px;
        line-height: 45px;
        letter-spacing: 2.3px;
        margin-bottom: 3px;
        @include breakpoint(desktop) {
          letter-spacing: 0.3px;
          line-height: 115px;
          margin-bottom: 0;
          padding: 0;
          font-size: 9.1rem;
        }
      }
    }

    &-upcoming{
      margin-bottom: 31px;
      border: none;
      padding-bottom: 0;
      &:before, &:after{
        display: none;
      }
      @include breakpoint(desktop) {
        margin-bottom: 43px;
      }
      &:nth-child(2){
        @include breakpoint(desktop) {
          padding-top: 115px;
        }
      }
      &>a{
        display: block;
        position: relative;
      }
      .article__img{
        img{
          width: 100%;
        }
      }
      .article__title{
       @include font-size(16, 15);
       font-weight: normal;
       line-height: 18px;
       letter-spacing: 0.8px;
       position: absolute;
       bottom: -1px;
       left: -1px;
       background: $color-white;
       padding: 17px 5px 14px 3px;
       width: 75%;
       margin-bottom: 0;
       z-index: 1;
       @include breakpoint(desktop) {
          width: 86%;
          padding: 16px 5px 6px 0px;
          letter-spacing: 1.3px;
       }        
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

  .blur-up {
    -webkit-filter: blur(5px);
    filter: blur(5px);
    transition: filter 400ms, -webkit-filter 400ms;
  }

  .blur-up.lazyloaded {
    -webkit-filter: blur(0);
    filter: blur(0);
  }
  </style>