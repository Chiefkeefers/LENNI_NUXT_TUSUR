<template>
   <section class="app-hero">
          <h1 class="app-hero__title">арт — пространство</h1>  
          <SvgIcon
          class="app-hero__logo"
          name="lenni"
          width="202"
          height="147"
        />
        <h1 class="app-hero__title">для людей, горящих сердцем и делом
            <br>место для настоящего </h1> 
    </section>
</template>

<style lang="less">
.app-hero {
   display: block;
   align-items: center;
   width: 100%;
   margin: 0 auto;
   &__title,
   &__text {
    font-size: 45px;
    text-align: center;
    font-family: @font2;
    text-transform: uppercase;
    align-items: center;
    font-weight: 400;
    margin-bottom: 70px;
    margin-top: 0;
    @media @bw1660 {  
    font-size: 35px;
   }
    @media @bw1170 {
    margin-bottom: 51px;   
    font-size: 30px;
    font-weight: 400;
   }
    @media @bw768 {
    font-size: 13px; 
    margin: 0;
    }
   }

   &__logo {
   max-width: 1920px;
   width: 100%;
   height: 325px;
   margin-bottom: 57px;
   @media @bw1660 {
   margin: 0 auto;
   width: 100%;
   max-width: 1518px;
   height: 257px;   
   }
   @media @bw1020 {
   margin: 0 auto;
   width: 100%;
   max-width: 974px;
   height: 165px;
   }
   @media @bw768 {
   width: 100%;
   max-width: 438px;
   height: 74px;
   margin: 29px auto;
   }
   }
}    
    
</style>