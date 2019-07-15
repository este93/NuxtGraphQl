<template>
    <div class="lecturer">
      <h1 class="title">Lecturer</h1>
      <h2 class='lecturer__title'>Master Classes / practical hands-on workshops</h2>     
      <a href="/lecturer" class="link__more">more<span class="arrow"></span></a>
    </div>
</template>

<script>

export default {
}

</script>

<style lang='scss' scoped>
	@import "~assets/scss/main.scss";

	.link__more{
	    margin-top: 39px;
	    letter-spacing: 1px;
	    display: block;
	    @include breakpoint(desktop) {
	      margin-top: 48px;
	    }
	    .arrow{
	      width: 22px;
	      height: 18px;
	      background: url('~/assets/img/right-arrow.png');
	      margin-left: 14px;
	      display: inline-block;
	      vertical-align: middle;
	    }
	}

    .lecturer{
	    &__title{
	      font-weight: bold;
	      @include font-size(30, 30);
	      line-height: 34px;
	      margin-bottom: 20px;
	      @include breakpoint(desktop) {
	        max-width: 40%;
	      }
	    }
    }
</style>