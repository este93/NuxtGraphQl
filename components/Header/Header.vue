<template>
    <header class="header" :class="{'menu-opened': navOpened}">
    	<div class="header__top">
	    	<Logo />
	        <div class="header__trigger" @click="navOpened = !navOpened" v-show="!navOpened">
				<svg xmlns="http://www.w3.org/2000/svg" width="23.95" height="15.967" viewBox="0 0 23.95 15.967">
				    <path d="M0 15.967h23.95v-2.661H0zm0-6.653h23.95V6.653H0zM0 0v2.661h23.95V0z" data-name="Path 49"/>
				</svg>
	        </div>
	        <div v-show="navOpened" @click="navOpened = !navOpened">
				<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 19.092 19.092">
					<path d="M9.546 11.667l-7.425 7.425L0 16.97l7.425-7.424L0 2.121 2.121 0l7.425 7.425L16.97 0l2.121 2.121-7.424 7.425 7.425 7.425-2.122 2.121z"/>
				</svg>
	        </div>    		
    	</div>

        <Navigation :navOpened="navOpened" />
	</header>
</template>


<script>
import Logo from "~/components/Header/Logo"
import Navigation from "~/components/Header/Navigation"

export default {
	components: {
		Logo,
		Navigation
	},
	data(){
		return{
			navOpened: false
		}
	}
}

</script>


<style lang='scss' scoped>
	@import "~assets/scss/main.scss";
	.header{
		@include breakpoint(desktop) {
		    display: flex;
		    justify-content: space-between;
		    align-items: baseline;
		}
		&__top{
			display: flex;
	    	justify-content: space-between;
	    	align-items: center;	
		}
		&__trigger{		
		  position: relative;
		  top: 2px;
	      @include breakpoint(desktop) {
	        display: none;
	      }
		}
	}
</style>