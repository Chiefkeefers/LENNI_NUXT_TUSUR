<template>
  <footer class="page-footer">
    <div class="page-footer__border"></div>

    <div class="page-footer__wrapper">
      <nav class="page-footer__nav">
        <a href="#" class="page-footer__nav-link">Календарь мероприятий</a>
        <a href="#" class="page-footer__nav-link">Провести мероприятие</a>
        <a href="#" class="page-footer__nav-link">Стать арендатором</a>
        <a href="#" class="page-footer__nav-link">Наши проекты</a>
        <a href="#" class="page-footer__nav-link">Контакты</a>
      </nav>

      <SubscribeForm class="page-footer__subscribe-form" />
    </div>

    <div class="page-footer__vault">
      <div class="page-footer__terms">
        <div class="page-footer__copyrights">
          © Millennials {{ new Date().getFullYear() }}
        </div>

        <div class="page-footer__terms-links">
          <a href="#" class="page-footer__terms-link"
            >Политика конфедециальности</a
          >
          <a href="#" class="page-footer__terms-link">Cookies</a>
        </div>
      </div>

      <AppSocials class="page-footer__socials" />

      <div class="page-footer__devs">
        <a href="#" class="page-footer__devs-link">
          Создание и продвижение

          <SvgIcon
            class="page-footer__devs-icon"
            name="dignity"
            width="80"
            height="35"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<style lang="less">
  .page-footer {
    .container;
    padding-bottom: 75px;
    @media @bw768 {
      padding-bottom: 50px;
    }
    &__border {
      display: flex;
      margin-bottom: 60px;
      &::before,
      &::after {
        content: "";
        flex-grow: 1;
        width: 2px;
        height: 2px;
      }
      &::before {
        margin-right: 50px;
        background: linear-gradient(
          270deg,
          #1c1b1b 0%,
          rgba(255, 255, 255, 0) 82.86%
        );
        @media @bw1660 {
          margin-right: 45px;
        }
        @media @bw1340 {
          margin-right: 25px;
        }
        @media @bw768 {
          margin-right: 10px;
        }
      }
      &::after {
        margin-left: 50px;
        background: linear-gradient(
          90deg,
          #1c1b1b 0%,
          rgba(255, 255, 255, 0) 82.86%
        );
        @media @bw1660 {
          margin-left: 45px;
        }
        @media @bw1340 {
          margin-left: 25px;
        }
        @media @bw768 {
          margin-left: 10px;
        }
      }
    }
    &__wrapper {
      display: flex;
      justify-content: space-between;
      margin-bottom: 60px;
      @media @bw768 {
        flex-direction: column;
      }
    }
    &__nav {
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-left: 20px;
      border-left: 4px solid @red;
      @media @bw768 {
        margin-bottom: 60px;
      }
    }
    &__nav-link {
      margin: 0 0 20px;
      color: @black;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      transition: color 0.2s;
      &:last-child {
        margin: 0;
      }
      &:active {
        color: @red;
      }
      &:hover {
        @media (hover: hover) {
          color: @red;
        }
      }
    }
    &__subscribe-form {
      @media @bw1170 {
        width: 390px;
      }
      @media @bw768 {
        width: 100%;
      }
    }
    &__vault {
      display: flex;
      align-items: flex-end;
      @media @bw1170 {
        position: relative;
        padding-top: 118px;
      }
      @media @bw768 {
        flex-direction: column;
        align-items: stretch;
      }
    }
    &__socials {
      margin: 0 auto;
      @media @bw1170 {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        justify-content: center;
      }
    }
    &__terms {
      width: 400px;
      @media @bw1170 {
        width: auto;
      }
      @media @bw768 {
        display: flex;
        flex-direction: column;
      }
    }
    &__copyrights {
      margin: 0 0 20px;
      font-size: 16px;
      line-height: 22px;
      @media @bw768 {
        order: 1;
        margin: 15px 0 0 auto;
        @media @bw1170 {
          font-size: 14px;
          line-height: 19px;
        }
      }
    }
    &__terms-links {
      display: flex;
      @media @bw768 {
        flex-direction: column;
        align-items: flex-start;
      }
    }
    &__terms-link {
      margin-right: 60px;
      color: @black;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      transition: color 0.2s;
      @media @bw1340 {
        margin-right: 40px;
      }
      @media @bw1170 {
        margin-right: 15px;
        font-size: 14px;
        line-height: 19px;
      }
      @media @bw768 {
        margin-right: 0;
        margin-bottom: 20px;
      }
      &:active {
        color: @red;
      }
      &:hover {
        @media (hover: hover) {
          color: @red;
        }
      }
      &:last-child {
        margin: 0;
      }
    }
    &__devs {
      display: flex;
      justify-content: flex-end;
      width: 400px;
      @media @bw1170 {
        width: auto;
        margin-left: auto;
      }
    }
    &__devs-link {
      display: flex;
      align-items: baseline;
      color: @black;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-decoration: none;
      @media @bw1170 {
        font-size: 14px;
        line-height: 19px;
      }
      @media @bw768 {
        margin-top: 7px;
      }
    }
    &__devs-icon {
      position: relative;
      top: 4px;
      margin-left: 15px;
    }
  }
</style>