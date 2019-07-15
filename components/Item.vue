<template>

    <article class="article__item" :class="classObject">        
      <nuxt-link :to="`${category[0]}/${data.slug}`">
        <h3 class="article__title">{{ data.title }}</h3>
        <div class="article__img" v-if="data.thumbnail && category[1] !== 'hp'">
          <picture>
              <source :srcset="data.thumbnail.url + `?fit=crop&${imageSizesResolver[0]}`" alt="" media="(min-width: 1025px)">
              <img :srcset="data.thumbnail.url + `?fit=crop&${imageSizesResolver[1]}`" alt="">
          </picture>         
        </div>
        <div class="upcoming__item__description" v-html="data.description" v-if="category[1] == 'featured'"></div>
        <div class="article__bottom" v-if="category[1] !== 'upcoming' && category[1] !== 'featured'">
            <h4 class="article__date">{{ formatDate(data.createdAt) }}</h4>
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
		props: ["data", "category"],
    data() {
      return{        
        classObject: {
          'article-newsHP'  : this.category[1] == 'hp',          
          'article-upcoming': this.category[1] == 'upcoming',
          'article-featured': this.category[1] == 'featured'
        },
        imageSizes: []
      }
    },
    computed: {
      imageSizesResolver(){
        if(this.category[1] == 'featured'){
          this.imageSizes[0] = 'w=810&h=456';
          this.imageSizes[1] = 'w=335&h=300';
        }else if(this.category[1] == 'upcoming'){
          this.imageSizes[0] = 'w=290&h=208';
          this.imageSizes[1] = 'w=335&h=152';          
        }else{
          this.imageSizes[0] = 'w=560&h=400';
          this.imageSizes[1] = 'w=335&h=207';             
        }
        return this.imageSizes;
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
      .upcoming__item__description{        
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
      .article__title{        
        @include font-size(40, 100);
        line-height: 45px;
        letter-spacing: 2.3px;
        margin-bottom: 3px;
        @include breakpoint(desktop) {
          letter-spacing: 0.3px;
          line-height: 115px;
          margin-bottom: 0;
          padding: 0;
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
  </style>