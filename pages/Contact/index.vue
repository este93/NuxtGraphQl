<template>
  <div class="contact__wrap">
    <h1 class="title">Contact</h1>
    <h2 class="contact__title">Documentary filmmaker with passion for social change.</h2>

    <ul class="contact__info">
      <li class="contact__info__item">
        E-mail:
        <a href="info@ivanatodorovic.com">info@ivanatodorovic.com</a>
      </li>
      <li class="contact__info__item">
        LinkedIn:
        <a href="info@ivanatodorovic.com">http://rs.linkedin.com/pub/ivana-todorovic/33/561/415</a>
      </li>
      <li class="contact__info__item">
        Flickr:
        <a href="info@ivanatodorovic.com">http://flickr.com/photos/131018622@N03</a>
      </li>
      <li class="contact__info__item">
        IMDb:
        <a href="info@ivanatodorovic.com">http://imdb.com/name/nm0865394</a>
      </li>
      <li class="contact__info__item">
        Vimeo:
        <a href="info@ivanatodorovic.com">http://vimeo.com/ivanatodorovic</a>
      </li>
    </ul>

  </div>
</template>

<script>

export default {
  data(){
    return{

    }
  },
}
</script>


<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  
  .contact{
    &__wrap{
      padding-top: 114px;
      @include breakpoint(desktop) {
       padding-top: 155px;
      }
      .title{
        font-size: 30px;  
        @include breakpoint(desktop) {
         margin-bottom: 76px;
        }
      }
    }

    &__title{
     @include font-size(40, 100);      
     line-height: 43px;
     margin-bottom: 55px;
     font-weight: bold;
     @include breakpoint(desktop) {
      line-height: 96px;
      max-width: 74%;
      margin-bottom: 90px;
     }
    }

    &__info{
      font-weight: bold;
      &__item{
        margin-bottom: 48px;
        @include breakpoint(desktop) {
          margin-bottom: 72px;
        }
      }
      a{
        display: block;
        font-weight: normal;
        text-decoration: underline;
        color: #0d4eff;
        margin-top: 17px;
        line-height: 24px;
      }
    }
  }
</style>
