<template>
   <section class="app-about">
      <h1 class="app-listing__title section-title">О нас</h1>

      <div class="app-about__grid">
         <div class="app-about__block1">
            <h3 class="app-about__title">Проект «Millennials»</h3>
            <p class="app-about__text">
               Вдохновлен молодыми идейными людьми, увлеченными творчеством, эмоциями и желанием сделать мир лучше,
               проявить себя. У них есть талант и стремление, у нас возможность помочь им воплотить их мечту в
               реальность.
            </p>
         </div>
         <div class="app-about__block2">
            <picture class="app-about__picture">
               <source type="image/webp" srcset="assets/images/about/pic.webp" />
               <img src="assets/images/about/pic.jpg" class="app-about__img" alt="pic">
            </picture>
            <h3 class="app-about__title">Мы предоставляем площади для вашего мероприятия</h3>
            <picture class="app-about__picture2">
               <img src="assets/images/about/pic 2.jpg" class="app-about__img" alt="pic2">
            </picture>
            <p class="app-about__text2">
               И оказываем помощь с организацией, если вам это нужно. <br>
               Наша цель: вовлечь в культурную жизнь города как можно больше людей,
               помочь молодым ребятам сделать первые шаги к своей мечте
               и рассказать всем о том, что их волнует.
            </p>
         </div>
         <div class="app-about__block3">
            <picture class="app-about__picture3">
               <div class="app-about__rectangle"></div>
               <source type="image/webp" media="(max-width: 450px)" srcset="assets/images/about/pic3_mobile.webp" />
               <source media="(max-width: 450px)" srcset="assets/images/about/pic3_mobile.jpg" />
               <source type="image/webp" srcset="assets/images/about/pic3.webp" />
               <img src="assets/images/about/pic3.jpg" class="app-about__img3" alt="pic3">
            </picture>
            <p class="app-about__text3">
               Мы уже успешно организовали и провели более 100 проектов. Посмотрите, как это было классно.
            </p>
            <button class="app-about__button">
               <a href="#" class="app-about__link">Смотреть</a>
               <a href="" class="app-about__arrow">
                  <SvgIcon class="app-about__logo" name="arrow_down" width="91" height="60" />
               </a>
            </button>
         </div>

      </div>
   </section>
</template>


<style lang="less">
.app-about {
   margin-bottom: 100px;

   @media @bw768 {
      margin-bottom: 60px;
   }

   &__grid {
      .container();
      width: 100%;
      height: auto;
   }

   &__block1 {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 52px 65px;
      grid-template-areas:
         "title title"
         "text text";
      margin-bottom: 100px;

      @media @bw1340 {
         margin-bottom: 80px;
      }

      @media @bw1020 {
         gap: 25px;
      }

      @media @bw370 {
         gap: 20px;
         margin-bottom: 40px;
      }
   }

   &__block2 {
      display: grid;
      grid-template-columns: 1fr 406px;
      gap: 90px 65px;
      grid-template-areas:
         "pic pic2"
         "title pic2"
         "text2 text2";

      @media @bw1660 {
         gap: 80px 40px;
      }

      @media @bw1370 {
         gap: 80px 30px;
         margin-bottom: 52px;
         grid-template-areas:
            "pic pic"
            "title pic2"
            "text2 pic2";
      }

      @media @bw1020 {
         grid-template-columns: 1fr 262px;
         gap: 52px 27px;
      }

      @media @bw768 {
         grid-template-columns: 1fr; // Добавить промежуточный брейкпоинт
         grid-template-areas:
            "pic"
            "title"
            "text2"
            "pic2";
         gap: 30px;
      }

      @media @bw370 {
         grid-template-columns: 1fr; // Меняем: было 120px 130px
         gap: 25px; // Меняем: было 30px
         grid-template-areas:
            "pic"
            "title"
            "text2"
            "pic2";
      }
   }

   &__block3 {
      display: grid;
      grid-template-columns: 1fr 344px;
      gap: 89px 60px;
      grid-template-areas:
         "pic3 text3"
         "pic3 button";

      @media @bw1170 {
         grid-template-columns: 1fr; // Добавить: одна колонка
         grid-template-areas:
            "pic3"
            "text3"
            "button";
         gap: 40px;
      }

      @media @bw768 {
         gap: 30px;
      }

      @media @bw370 {
         grid-template-columns: 1fr; // Изменить: было 120px 120px
         grid-template-areas:
            "pic3"
            "text3"
            "button";
         gap: 25px; // Изменить: было 50px 50px
      }
   }

   &__picture {
      grid-area: pic;

      @media @bw1020 {
         align-self: start;
      }

      @media @bw768 {
         max-width: 100%;
         max-height: 100%;
      }

      @media @bw370 {
         max-width: 280px;
         max-height: 186px;
      }
   }

   &__picture2 {
      grid-area: pic2;
      align-self: flex-end;

      @media @bw1020 {
         align-self: flex-end;
      }

      @media @bw768 {
         max-width: 193px;
         justify-self: end;
      }
   }

   &__picture3 {
      grid-area: pic3;
   }

   &__img {
      width: 100%;
      height: auto;
      object-fit: cover;
   }

   &__img3 {
      width: 100%;
      max-width: 870px;
      height: 95%;
      object-fit: cover;
      margin-left: 49px;
      margin-top: -229px;

      @media @bw1660 {
         margin-top: -225px;
         margin-left: 38px;
      }

      @media @bw1370 {
         max-width: 810px;
      }

      @media @bw1170 {
         max-width: 910px;
      }

      @media @bw1020 {
         margin-top: -135px;
         margin-left: 32px;
         max-width: 672px;
         height: 277px;
      }

      @media @bw500 {
         max-width: 320px;
         height: 111px;
         margin-left: 11px;
         margin-top: -67px;
      }

      @media @bw370 {
         max-width: 320px;
         height: 111px;
         margin-left: 11px;
         margin-top: -67px;
      }
   }

   &__rectangle {
      display: block;
      width: 100%;
      height: 246px;
      background: @red;

      @media @bw1170 {
         width: 100%;
      }

      @media @bw1020 {
         height: 146px;
      }

      @media @bw768 {
         max-width: 335px;
         height: 74px;
      }
   }

   &__title {
      grid-area: title;
      font-size: 44px;
      font-weight: 700;
      margin-top: 0;
      margin-bottom: 0;

      @media @bw1170 {
         font-size: 35px;
      }

      @media @bw1020 {
         font-size: 26px;

      }

      @media @bw768 {
         font-size: 18px;
      }
   }

   &__text {
      grid-area: text;
      font-size: 18px;
      font-weight: 400;
      font-family: @font6;
      max-width: 867px;
      margin: 0 0 0 auto;

      @media @bw1340 {
         font-size: 16px;
         max-width: 637px;
         margin-left: 0px;
      }

      @media @bw1020 {
         max-width: 637px;
         margin-left: 0px;
      }

      @media @bw500 {
         max-width: 280px;
      }

      @media @bw370 {
         font-size: 16px;
         max-width: 280px;
         width: 100%;
         margin: 0;
      }
   }

   &__text2 {
      grid-area: text2;
      font-size: 18px;
      font-weight: 400;
      font-family: "Open Sans", bold;
      margin: 5px 77px 75px auto;
      max-width: 870px;
      width: 100%;

      @media @bw1340 {
         max-width: 348px;
         font-size: 16px;
      }

      @media @bw768 {
         margin: 0 0 0 auto;
      }
   }

   &__text3 {
      grid-area: text3;
      font-size: 18px;
      font-weight: 400;
      font-family: @font6;
      width: 100%;
      max-width: 344px;
      align-self: flex-end;
      margin-bottom: -115px;

      @media @bw1020 {
         margin: 0 0 0 auto;
      }

      @media @bw768 {
         font-size: 16px;
      }
   }

   &__button {
      width: 262px;
      grid-area: button;
      display: flex;
      align-items: center;
      gap: 170px;
      border: 0;
      background-color: transparent;
      align-self: flex-end;

      @media @bw1660 {
         gap: 137px;
      }

      @media @bw1020 {
         margin: 0 auto;
      }

      @media @bw768 {
         justify-content: space-between;
         padding: 0;
         margin: 0;

      }
   }

   &__link {
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      font-family: @font6;

      @media @bw768 {
         font-size: 14px;
      }
   }

   &__arrow {
      flex-shrink: 0;
      position: relative;
      display: inline-block;
      width: 92px;
      height: 60px;
      padding: 0;
      border: none;
      background: none;
      color: @black;
      font-size: 0;
      text-decoration: none;
      transition: color 0.2s;

      @media @bw1340 {
         width: 67px;
         height: 40px;
      }

      &:hover {
         color: @red;
      }

      &__icon {
         width: 100%;
         height: 100%;
      }
   }

   &__logo {
      @media @bw1170 {
         width: 67px;
         height: 40px;
      }
   }
}
</style>