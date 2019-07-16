<template>
  <div>
    <h1 class="error_title" v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else class="error_title">An error occurred</h1>
  </div>
</template>

<script>
	export default {
	  props: ['error']
	}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  .error_title{
    text-align: center;
    font-size: 70px;
    margin: 150px 0;
  }
</style>