<template>
    <div class="list">
	  <h1 class="title">Films</h1>
	  <div class="articles__wrap">

		<Item v-for="(item, index) in films" :key="index" :data="item" :category="['films']" />  

		<div v-if="loading">
			<p>Loading...</p>
	  	</div>

	  </div>
	</div>
</template>

<script>
import Item from '~/components/Item'
import gql from 'graphql-tag'

const POSTS_PER_PAGE = 5

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
export default {
	data:  () => ({
		films: [],
		loading: 0,
		gettingData: true,
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
	    postCount: {
	        query: gql`{ _allPostsMeta { count } }`,
	        update: ({ _allPostsMeta }) => _allPostsMeta.count
	    }
	},

    methods:{
		handleScroll () {
		    let bottomOfWindow = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop) + window.innerHeight >= document.documentElement.offsetHeight - 100;
		    if (bottomOfWindow && this.postCount > this.allPosts.length && this.gettingData) {
				this.loadMorePosts();
		    }
		},
		initialConcat(){
			this.films = this.allPosts
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

  </style>