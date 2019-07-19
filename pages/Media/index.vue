<template>
    <div class="list">
	  <h1 class="title">Media</h1>
	  <div class="articles__wrap">

	  	<div class="sort">
			<div class="sort__item" @click="sortByName">Sort by name</div>
			<div class="sort__item" @click="sortByDate">Sort by date</div>	  		
	  	</div>

		<Item v-for="(item, index) in allMedia" :key="index" :data="item" :category="[item.category, 'a']"/>   

	  </div>
	</div>
</template>

<script>
import { GET_ALL } from '~/apollo/queries.js'
import Item from '~/components/Item'

export default {
	data(){
		return{
			allMedia: []
		}
	},
  components: {
  	Item
  },
  apollo: {
    allPosts: {
      query: GET_ALL
    },
    allNews: {
      query: GET_ALL
    }
  },
  methods:{
	formatDate(value) {
	  if (!value) {
	    return "(n/a)"
	  }
	  value = value.replace(/ /g, "T")
	  value = new Date(value)
	  const month = value.toLocaleString("En", { month: "long" })
	  return month + " " + value.getDate() + " - " + value.getFullYear()
	},
	sortByName(){
		this.allMedia.sort(function(a, b){
		    if(a.title < b.title) { return -1; }
		    if(a.title > b.title) { return 1; }
		    return 0;
		})
	},
	sortByDate(){		
	  	this.allMedia.sort(function(a, b){
		    return new Date(b.createdAt) - new Date(a.createdAt);
		});
	}
  },
  mounted() {
  	this.allMedia = this.allPosts.concat(this.allNews).sort(function(a, b){
	    return new Date(b.createdAt) - new Date(a.createdAt);
	});
  	this.allMedia.forEach(item => {
  		if(item.__typename == "NewsRecord") item['category'] = 'news'
  		else item['category'] = 'films'
  	})  
  },
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

	.sort{
		margin-bottom: 20px;
    	display: flex;
    	&__item{
    		margin: 0 10px;
    		cursor: pointer;
    	}
	}
  </style>