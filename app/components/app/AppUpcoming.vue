<template>
  <section class="app-upcoming">
    <div class="app-upcoming__wrapper">
      <div class="app-upcoming__container">
        <h2 class="app-upcoming__title section-title">Мероприятия</h2>

        <TheSwiper :component="EventCard" :list="list" class="app-upcoming__swiper" />

        <a href="#" class="app-upcoming__link link">Смотреть все</a>
      </div>
    </div>
  </section>
</template>


<script setup>
import { EventCard } from "#components";


const list = ref([]);
const URL = "http://localhost:3000/json/events.json";

const { data } = await useAsyncData(`upcoming`, () => {
  return $fetch(URL);
});
if (data?.value) list.value = data.value;

</script>

<style lang="less">
.app-upcoming {
  position: relative;
  width: 100%;
  padding: 35px 0;
  overflow: hidden;
  margin-bottom: 54px;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 0;
    height: 0;
    border-bottom: 35px solid fade(@white, 60%);
  }

  &::before {
    left: 0;
    border-right: 34vw solid transparent;
  }

  &::after {
    right: 0;
    border-left: 66vw solid transparent;
  }

  &__wrapper {
    width: 100%;
    padding: 90px 0;
    background-color: fade(@white, 60%);

    &::before,
    &::after {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      border-top: 35px solid fade(@white, 60%);
    }

    &::before {
      left: 0;
      border-right: 60vw solid transparent;
    }

    &::after {
      right: 0;
      border-left: 39vw solid transparent;
    }
  }

  &__container {
    .container();
    display: flex;
    flex-direction: column;
  }

  &__link {
    width: 100%;
    text-align: right;
    text-decoration: none;

    &:hover {
      color: @red;
    }
  }

  &__title {
    margin-bottom: 147px;
    margin-top: -10px;
  }
}
</style>