<template>
	<section class="news">
	  <h1 class="title">News</h1>
	  <div class="news__wrap">    

	    <Item v-for="(item, index) in newsHp" :key="index" :data="item" :category="['news', 'newsHp']"/>   

	  </div>
	</section>
</template>

<script>
import Item from '~/components/Item'

export default {
  props: ["newsHp"],
  components: {
    Item
  }
}
</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .news{
    padding-top: 110px;
    @include breakpoint(desktop) {
      padding-top: 215px;
      .title{
        margin-bottom: 10px;
      }
    }
    &__wrap{
      @include breakpoint(desktop) {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
</style>