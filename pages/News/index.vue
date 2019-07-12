<template>
    <div class="list">
	  <h1 class="title">News</h1>
	  <div class="articles__wrap">

		<Item v-for="(item, index) in allNews" :key="index" :data="item" :category="['news']"/>   

	  </div>
	</div>
</template>

<script>
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
  </style>