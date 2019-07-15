<template>
  <div>
    <div class="bio__wrap">
      <h1 class="title">Lecturer</h1>
      <h2 class="bio__title">Master Classes / practical hands-on workshops</h2>
      <div class="bio__content">
        <p>How to make an intimate emotional short film working as a one-person band? (or as the cinematographer, director, and producer)
          Masterclass’ consist of Ivana showing parts of her films and explaining methods of her work.
          7-day practical hands-on filmmaking workshops are an intense film experience where students go through the process of making their own short film.
          Master classes and workshops are suitable for universities, film festivals, cultural centers and NGOs.</p>

        <p>Ivana’s work tackles complex issues that deal with the cycles of abuse and recovery. Her intimate and emotional films deal with such issues as gender and sexuality, homelessness, the education of Roma children in squatter settlements around Belgrade and youth gun violence in New York City. Currently, she is in production and postproduction with three new films; a film dealing with facing sexual abuse in the family, a film dealing with the grief over the death of a loved one and a final film, dealing with relation between emotions and pain in female bodies.</p>

        <p>Ivana’s films have been screened at prestigious film festivals worldwide, including at the 63rd Berlinale Shorts, IFF Rotterdam, the Traverse City Film Festival, Palm Springs Shorts among others. She has won awards in Serbia, Kosovo, Italy, Canada, Greece, The UK and the US, and her films have appeared at venues such as the Anthology Film Archive, the Cultura Contemporiana Barcelona and on the New York Times homepage as part of the made with Kickstarter series.</p>

        <p>Ivana works as a lecturer and her lectures have been included as part of the TEDxAUK program in Pristina. When not making films or lecturing, Ivana teaches and conducts film workshops for aspiring documentarians.</p>

        <p>Ivana directed one episode for “Everyday life Hero” for Al Jazeera Balkans with the pro.ba production from Sarajevo. She has selected films for the Belgrade Short Films and Documentary Film Festival-Martovski; German International Ethnographic Film Festival; STIFF from Rijeka, Croatia; Ethnographic International Film Festival from Belgrade, Serbia. She was also on the Jury at Dokufest, Prizren, Kosovo; Ethnofilm in Rovinj, Croatia and Europe in Heart, Heinrich-Boll Stiftung, Brussels.</p>   

        <a href="https://youtu.be/nMeUkddLEDg" target="_blank">https://youtu.be/nMeUkddLEDg</a>     
      </div>
    </div>
    
  </div>
</template>

<script>
import Lecturer from '~/components/Lecturer'

export default {
  components: {
    Lecturer
  }
}
</script>


<style lang='scss' scoped>
  @import "~assets/scss/main.scss";
  
  .bio{
    &__wrap{
      margin: 115px 0 183px 0;
      @include breakpoint(desktop) {
        margin: 155px 0 310px 0;
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
     margin-bottom: 15px;
     font-weight: bold;
     @include breakpoint(desktop) {
      line-height: 96px;
      max-width: 74%;
      margin-bottom: 30px;
     }
    }

    &__content{
      color: $color-gray;
      line-height: 24px;
      @include breakpoint(desktop) {
        max-width: 53%;
      }
      p{
        margin-bottom: 23px;
      }
      a{
        text-decoration: underline;
        color: #0d4eff;
        font-style: italic;
      }
    }
  }
</style>
