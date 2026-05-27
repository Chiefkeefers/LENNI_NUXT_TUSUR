<template>
  <div class="app-offers">
    <h3 class="app-offers__title">Я хочу:</h3>
    <div class="app-offers__btns" style="margin-bottom: 231px;">
      <button class="app-offers__btn--red" type="button" @click="openPopup()">Провести мероприятие</button>
      <button class="app-offers__btn" type="button">Стать арендатором</button>
    </div>
    <ModalWindow alive :name="'getOffer'" :title="' Заполните форму<br />и мы подберем площадку'">
      <EventsForm @close="closePopup" />
    </ModalWindow>
  </div>
</template>

<script setup>
const store = useStore();

const openPopup = () => {
  store.openModal("getOffer");
};
const closePopup = () => {
  store.closeModal("getOffer");
};
</script>


<style lang="less">
.app-offers {
  display: block;
  width: 100%;
  .container();

  &__title {
    font-size: 22px;
    font-weight: 400;
    text-align: center;
    font-family: @font2;
    text-transform: uppercase;
    align-items: center;
    margin-top: 54px;
    margin-bottom: 40px;

    @media @bw768 {
      font-size: 13px;
      margin-bottom: 25px;
    }
  }

  &__btns {
    display: flex;
    justify-content: center;
    gap: 106px;
    margin-bottom: 100px;

    @media @bw1170 {
      gap: 60px;
      margin-bottom: 130px;
    }

    @media @bw1020 {
      gap: 56px;
      margin-bottom: 130px;
    }

    @media @bw768 {
      flex-direction: column-reverse;
      align-items: center;
      gap: 25px;
    }

    @media @bw370 {
      flex-direction: column-reverse;
      align-items: center;
      gap: 25px;
    }
  }

  &__btn {
    background: none;
    border: solid 1px @black;
    outline: none;
    box-shadow: none;
    font-size: 16px;
    width: 250px;
    height: 52px;
    font-weight: 600;

    &:hover,
    &:active {
      background-color: @black;
      color: @white;
    }

    @media @bw1660 {
      width: 246px;
    }

    @media @bw1340 {
      width: 238px;
    }

    @media @bw768 {
      width: 280px;
    }

    @media @bw370 {
      font-size: 14px;
      width: 280px;
    }
  }

  &__btn--red {
    font-size: 16px;
    width: 272px;
    height: 52px;
    font-weight: 600;
    font-family: @font1;
    background-color: @red;
    border: none;
    color: @white;

    &:hover,
    &:active {
      background-color: @red_dark;
      color: @white;
    }

    @media @bw1020 {
      width: 272px;
    }

    @media @bw768 {
      width: 280px;
    }

    @media @bw370 {
      font-size: 14px;
    }
  }
}
</style>