<template>
    <div class="list">
	  <h1 class="title">News</h1>
	  <div class="articles__wrap">

		<Item v-for="(item, index) in news" :key="index" :data="item" :category="['news']"/>   

		<div v-if="loading">
			<p>Loading...</p>
	  	</div>

	  </div>
	</div>
</template>

<script>
import gql from 'graphql-tag'
import Item from '~/components/Item'
import { GET_NEWS } from '~/apollo/queries'

const POSTS_PER_PAGE = 5

const allNews = gql`
	query allNews($first: IntType!, $skip: IntType!) {
	  allNews(first: $first, skip: $skip) {	
		title
		text
		slug
		createdAt
		thumbnail{
			url
		}
	  }
	}
`

export default {
	data:  () => ({
		news: [],
		loading: 0,
		gettingData: true,
		firstLoad: true
	}),
	components: {
		Item
	},
	apollo: {
      	$loadingKey: 'loading',
		allNews: {
		  prefetch: true,
		  query: GET_NEWS,
	      variables: {
	        skip: 0,
	        first: POSTS_PER_PAGE
	       }
		},
	    newsCount: {
	        query: gql`{ _allNewsMeta { count } }`,
	        update: ({ _allNewsMeta }) => _allNewsMeta.count
	    }
	},

    methods:{
		handleScroll () {
		    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight - 100;
		    if (bottomOfWindow && this.newsCount > this.news.length && this.gettingData) {
				this.loadMorePosts();
		    }
		},
		initialConcat(){
			this.news = this.allNews
		},
	    loadMorePosts () {
	    	var _self = this;

	    	var loadData = function(){
				_self.loading = true;
				_self.gettingData = false;
		        return new Promise(function(resolve){
		    	
		    		_self.$apollo.queries.allNews.fetchMore({
			          variables: {
			            skip: _self.allNews.length,
			          	first: POSTS_PER_PAGE
			          },
			          updateQuery: (previousResult, { fetchMoreResult }) => {
			            if (!fetchMoreResult) {
			              return previousResult
			            }
			            return Object.assign({}, previousResult, {
			              allNews: [...previousResult.allNews, ...fetchMoreResult.allNews]
			            })
			          }
			        })
					resolve();
		    	});
		    }

		    var concatEverything = function(){
		        return new Promise(function(resolve){
		        	setTimeout(function(){
    					_self.initialConcat();
					  	_self.loading = false;
						_self.gettingData = true;
		        	}, 700)
			        resolve();
		        });
		    }

		    loadData().then(concatEverything);	
	    },
	},

    destroyed () {
	    if (process.browser) { 
	        window.removeEventListener('scroll', this.handleScroll);
	    }	
	},

	created () {
	    if (process.browser) { 
		    window.addEventListener('scroll', this.handleScroll);
	    }
	},
    watch: {
		loading: function(newValue) {
		    if(newValue == 0 && this.firstLoad){	
	    		this.initialConcat();
				this.firstLoad = false;
		    }
		}
    },
    mounted(){
    	if(this.allNews){
    		this.initialConcat();
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