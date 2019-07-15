<template>

  <section class="upcoming">
    <h1 class="title">Upcoming Films</h1>
    <div class="upcoming__wrap" v-if="upcomingHp">

      <Item :data="upcomingHp[0]" :category="['films', 'featured']"/>
      <Item v-for="(item, index) in upcomingHp.slice(1)" :key="index" :data="item" :category="['films', 'upcoming']" />  

    </div>
  </section>

</template>

<script>
import Item from '~/components/Item'

export default {
  props: ["upcomingHp"],
  components: {
    Item
  }
}

</script>

<style lang='scss' scoped>
  @import "~assets/scss/main.scss";

  .upcoming{
    padding-top: 145px;
    @include breakpoint(desktop) {
      padding-top: 230px;
    }
    &__wrap{
      @include breakpoint(desktop) {
        display: grid;
        grid-template-columns: 71% 25%;
        grid-column-gap: 40px;
      }      
    }
    &__title{
      font-style: italic;
      color: $color-red;
      @include font-size(20, 30);
      letter-spacing: 0.2px;
      margin-bottom: 60px;
      @include breakpoint(desktop) {
        letter-spacing: 1.7px;
        margin-bottom: 73px;
      }
    }
  }
</style>