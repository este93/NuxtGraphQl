<template>
  <div>
    <div class="bio__wrap">
      <h1 class="title">Bio</h1>
      <h2 class="bio__title">Documentary filmmaker with passion for social change.</h2>
      <div class="bio__content">
        <p>Ivana Todorovic is a filmmaker and lecturer from Belgrade, Serbia. For her BA Thesis in Ethnology and Anthropology at University of Belgrade, she made her first short documentary film. After a one month course at Ateliers Varan in Belgrade, she went on to get a Graduate Certificate in Documentary Media studies in New York City. She later received an MA in Fiction Film at The Faculty of Dramatic Arts in Belgrade.</p>

        <p>Ivana’s work tackles complex issues that deal with the cycles of abuse and recovery. Her intimate and emotional films deal with such issues as gender and sexuality, homelessness, the education of Roma children in squatter settlements around Belgrade and youth gun violence in New York City. Currently, she is in production and postproduction with three new films; a film dealing with facing sexual abuse in the family, a film dealing with the grief over the death of a loved one and a final film, dealing with relation between emotions and pain in female bodies.</p>

        <p>Ivana’s films have been screened at prestigious film festivals worldwide, including at the 63rd Berlinale Shorts, IFF Rotterdam, the Traverse City Film Festival, Palm Springs Shorts among others. She has won awards in Serbia, Kosovo, Italy, Canada, Greece, The UK and the US, and her films have appeared at venues such as the Anthology Film Archive, the Cultura Contemporiana Barcelona and on the New York Times homepage as part of the made with Kickstarter series.</p>

        <p>Ivana works as a lecturer and her lectures have been included as part of the TEDxAUK program in Pristina. When not making films or lecturing, Ivana teaches and conducts film workshops for aspiring documentarians.</p>

        <p>Ivana directed one episode for “Everyday life Hero” for Al Jazeera Balkans with the pro.ba production from Sarajevo. She has selected films for the Belgrade Short Films and Documentary Film Festival-Martovski; German International Ethnographic Film Festival; STIFF from Rijeka, Croatia; Ethnographic International Film Festival from Belgrade, Serbia. She was also on the Jury at Dokufest, Prizren, Kosovo; Ethnofilm in Rovinj, Croatia and Europe in Heart, Heinrich-Boll Stiftung, Brussels.</p>        
      </div>
    </div>
    <Lecturer />

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
    }
  }
</style>
