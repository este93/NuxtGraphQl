<template>
    <footer>
      <div class="backTop" @click="scrollToTop">
        back to top
      </div>
      <div class="copy">               
        © 2019. <strong>After</strong> all rights reserved
      </div>
    </footer>
</template>

<script>

export default {
	methods: {
		scrollToTop(){
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
}

</script>


<style lang='scss' scoped>
	@import "~assets/scss/main.scss";

	footer{
	    text-align: center;
	    color: $color-gray;
	    border-top: 1px solid $color-gray;
	    padding-top: 25px;
	    margin-top: 70px;
	    @include breakpoint(desktop) {
	      margin-top: 76px;
	      padding-top: 38px;
	      display: flex;
	      justify-content: space-between;
	    }
	    strong{
	      font-weight: bold;
	      color: $color-black;
	    }
	}

	.backTop{
	    margin-bottom: 70px;
	    font-weight: bold;
	    text-align: center;
	    color: $color-black;
	    cursor: pointer;
	    @include breakpoint(desktop) {
	      order: 2;
	      margin-bottom: 0;
	    }
	}
</style>