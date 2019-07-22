<template>
    <div class="list">
	  <h1 class="title">Media</h1>
	  <div class="articles__wrap">

	  	<div class="sort">
			<div class="sort__item" @click="sorting('name')">Sort by name</div>
			<div class="sort__item" @click="sorting('date')">Sort by date</div>	  	
			<div class="sort__item" v-if="loading == 0">Number of Posts: {{ this.allMedia.length }} / {{ this.newsCount + this.postCount }}</div>	
	  	</div>

		<Item v-for="(item, index) in allMedia" :key="index" :data="item" :category="[item.category, 'a']"/>   
		
		<div v-if="loading">
			<p>Loading...</p>
	  	</div>

	  </div>
	</div>
</template>

<script>
import Item from '~/components/Item'

import gql from 'graphql-tag'
  const POSTS_PER_PAGE = 3

  const allPosts = gql`
    query allPosts($first: IntType!, $skip: IntType!) {
      allPosts(first: $first, skip: $skip) {			
		title
		description
		slug
		createdAt
		thumbnail{
			url
		} 
      }
    }
 `
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
		allMedia: [],
		loading: 0,
		gettingData: true,
		sortingBy: 'date',
		firstLoad: true
	}),

    components: {
  		Item
    },

    apollo: {
      	$loadingKey: 'loading',
	    allPosts: {
	    	prefetch: true,
	    	query: allPosts,
	    	variables: {
	          skip: 0,
	          first: POSTS_PER_PAGE
	        }
	    },    
	    allNews: {
	    	prefetch: true,
	    	query: allNews,
	    	variables: {
	          skip: 0,
	          first: POSTS_PER_PAGE
	        }
	    },
	    postCount: {
	        query: gql`{ _allPostsMeta { count } }`,
	        update: ({ _allPostsMeta }) => _allPostsMeta.count
	    },
	    newsCount: {
	        query: gql`{ _allNewsMeta { count } }`,
	        update: ({ _allNewsMeta }) => _allNewsMeta.count
	    }
    },

    methods:{
		handleScroll () {
		    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight === document.documentElement.offsetHeight
		    if (bottomOfWindow && this.newsCount + this.postCount > this.allMedia.length && this.gettingData) {
				this.loadMorePosts();
		    }
		},
	    loadMorePosts () {
	    	var _self = this;

	    	var loadData = function(){
				_self.loading = true;
				_self.gettingData = false;
		        return new Promise(function(resolve){
		    		_self.$apollo.queries.allPosts.fetchMore({
			          variables: {
			            skip: _self.allPosts.length,
			          	first: POSTS_PER_PAGE
			          },
			          updateQuery: (previousResult, { fetchMoreResult }) => {
			            if (!fetchMoreResult) {
			              return previousResult
			            }
			            return Object.assign({}, previousResult, {
			              allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts]
			            })
			          }
			        })
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
		        	}, 100)
			        resolve();
		        });
		    }

		    loadData().then(concatEverything);	
	    },

		initialConcat(){
			let _self = this;
			_self.allMedia = _self.allPosts.concat(_self.allNews).sort(function(a, b){
    			if(_self.sortingBy == 'date'){
			    	return new Date(b.createdAt) - new Date(a.createdAt);
    			}else{
				    if(a.title < b.title) { return -1; }
				    if(a.title > b.title) { return 1; }
				    return 0;
    			}
			});
		  	_self.allMedia.forEach(item => {
		  		if(item.__typename == "NewsRecord") item['category'] = 'news'
		  		else item['category'] = 'films'
		  	}) 			
		},

		sorting(type){
			if(type == 'name'){
				this.sortingBy = 'name'
				this.allMedia.sort(function(a, b){
				    if(a.title < b.title) { return -1; }
				    if(a.title > b.title) { return 1; }
				    return 0;
				})				
			}else{
				this.sortingBy = 'date'
			  	this.allMedia.sort(function(a, b){
				    return new Date(b.createdAt) - new Date(a.createdAt);
				});				
			}
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
		},    	
    },
    mounted(){
    	if(this.allPosts){
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

	.sort{
		margin-bottom: 20px;
    	display: flex;
    	&__item{
    		padding: 0 10px;
    		cursor: pointer;
    		border-right: 1px solid black;
    		&:last-child{
    			border-right: 0;
    		}
    	}
	}
  </style>