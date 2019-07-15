 <template>
  <div class="list-single">
    <h1 class="title">Films</h1>
    <div class="list-single__top">
      <picture v-if="post.thumbnail">
          <source :srcset="post.thumbnail.url + '?fit=cropw=1140&h=652'" alt="" media="(min-width: 1025px)">
          <img :srcset="post.thumbnail.url + '?fit=cropw=335&h=207'" alt="">
      </picture>
      <h2 class="list-single__title">{{ post.title }}</h2>
    </div>
    <iframe v-if="post.video" width="560" height="315" :src="`https://www.youtube.com/embed/${post.video.providerUid}`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div class="list-single__content" v-html="post.content"></div>
  </div>
</template>

<script>
import { GET_FILM } from '~/apollo/queries'

export default {
  data(){
    return{
      post: {},
      img: ''
    }
  },
  apollo: {
    post: {
      prefetch: true,
      query: GET_FILM,
      error() { 
        this.$root.error({'statusCode': 404, 'message': 'OK'})
      },
      prefetch({route}) {
        return {
          slug: route.params.id
        }
      },
      variables() {
        return {
          slug: this.$route.params.id,
        }
      }
    }
  },
}
</script>


<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  .list-single{
    padding-top: 175px;
    @include breakpoint(desktop) {
      padding-top: 156px;
    }

    &__top{
      position: relative;
      margin-bottom: 95px;
      @include breakpoint(desktop) {
        margin-bottom: 197px;
      }
      img{
        width: 100%;
      }
    }

    &__title{      
     font-size: 30px;
     font-weight: bold;
     position: absolute;
     bottom: -1px;
     left: -1px;
     background: $color-white;
     padding: 14px 8px 4px 2px;
     letter-spacing: -0.1px;
     width: 85%;
     word-break: break-word;
     @include breakpoint(desktop) {
      bottom: -50px;
      width: 75.5%;
      padding: 28px 8px 4px 2px;
      font-size: 9.1rem;
     }
    }

    &__content{
     color: $color-gray;
     line-height: 24px;
     font-size: 16px;
     @include breakpoint(desktop) {
      max-width: 57%;
     }
     /deep/ h1,
     /deep/ h2,
     /deep/ h3{
      font-weight: bold;
      color: $color-black;
      margin-top: 75px;
      margin-bottom: 24px;      
     }
     /deep/ strong{
      // font-weight: bold;
      color: $color-black;
     }
     /deep/ ul{
      list-style: disc;
      margin-left: 15px;
      @include breakpoint(desktop) {
        margin-left: 58px;
      }
      li{
        margin-bottom: 18px;
        @include breakpoint(desktop) {
          margin-bottom: 5px;
        }
      }
     }
     /deep/ a{
      color: #0d4eff;
      text-decoration: underline;
     }
    }
  }
</style>
