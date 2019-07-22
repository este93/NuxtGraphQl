<template>
    <nav class="navigation" :class="{'navigation-active':navOpened}">
    	<ul>
    		<li class="navigation__item" v-for="(link, index) in links" :key="index" @click="routeChanged">
    			<nuxt-link :to="link.url" class="navigation__link">{{ link.title }}</nuxt-link>
    		</li>
    	</ul>
    </nav>
</template>


<script>

export default {
    props: ["navOpened"],
	data(){
		return{
			links: [
				{url: '/', title: 'Home'},
				{url: '/films',title:  'Films'},
				{url: '/lecturer',title:  'Lecturer'},
				{url: '/bio',title:  'Bio'},
				{url: '/news',title:  'News'},
				{url: '/media',title:  'Media'},
				{url: '/contact',title:  'Contact'},
			]
		}
	},
	methods: {
		routeChanged(){
			this.$emit('routeChanged')
		}
	}
}

</script>


<style lang='scss' scoped>
	@import "~assets/scss/main.scss";

	.navigation{		
	    padding: 0;
	    max-height: 0;
	    opacity: 0;
	    transition: opacity 0.3s, max-height 0s 0.3s, padding 0s 0.3s;
		@include breakpoint(desktop) {
			max-height: 99999px;
			opacity: 1;
			margin-right: -14px;
			position: relative;
    		top: -5px;
		}
	    &-active {
	      transition: opacity 0.3s, max-height 0s;
	      max-height: 99999px;
	      opacity: 1;
	      padding-top: 58px;
	    }
	    &__item{
	    	margin-bottom: 17px;
			@include breakpoint(desktop) {
				margin: 0 11px;
				display: inline-block;
			}
	    }
		&__link{
			letter-spacing: 0.6px;
			@include font-size(14, 16);
		}

		.nuxt-link-exact-active{
			border-bottom: 1px solid $color-red;
		}
	}
</style>