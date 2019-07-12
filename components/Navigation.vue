<template>
    <nav class="navigation" :class="{'navigation-active':navOpened}">
    	<ul>
    		<li class="navigation__item">
    			<nuxt-link to="/" class="navigation__link">Home</nuxt-link>
    		</li>
    		<li class="navigation__item">
    			<nuxt-link to="/films" class="navigation__link">Films</nuxt-link>
    		</li>
    		<li class="navigation__item">
    			<nuxt-link to="" class="navigation__link">Lecturer</nuxt-link>
    		</li>
    		<li class="navigation__item">
    			<nuxt-link to="" class="navigation__link">Bio</nuxt-link>
    		</li>
    		<li class="navigation__item">
    			<nuxt-link to="/news" class="navigation__link">News</nuxt-link>
    		</li>
    		<li class="navigation__item">
    			<nuxt-link to="/contact" class="navigation__link">Contact</nuxt-link>
    		</li>
    	</ul>
    </nav>
</template>


<script>

export default {
    props: ["navOpened"],
	data(){
		return{
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
	}
</style>