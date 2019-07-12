<template>
    <div class="list">
	  <h1 class="title">Films</h1>
	  <div class="articles__wrap">

		<Item v-for="(item, index) in allPosts" :key="index" :data="item" :category="['films']" />  

	  </div>
	</div>
</template>

<script>
import { GET_FILMS } from '~/apollo/queries'
import Item from '~/components/Item'

export default {
  components: {
  	Item
  },
  apollo: {
    allPosts: {
      prefetch: true,
      query: GET_FILMS
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

  </style>