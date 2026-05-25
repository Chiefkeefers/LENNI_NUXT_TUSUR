<template>
  <nav class="events__link">
    <NuxtLink to="/" class="events__nav-link">Главная /</NuxtLink>
    <NuxtLink to="/events" class="events__nav-link">Мероприятия</NuxtLink>
  </nav>
  <div class="events">
    <AppListing v-slot="{ list }" title="Мероприятия" :moreBtn="true" :url="'http://localhost:3000/json/events.json'"
      class="events__listing">
      <EventCard v-for="(card, index) in list" :key="index" :data="card" class="app-listing__card" />
    </AppListing>

    <AppServices class="events__services" />
    <AppOffers class="events__offers" />
    <AppList class="events__list" />


  </div>
</template>

<script setup>

</script>

<style lang="less">
.events {
  width: 100%;
  margin-top: 140px;
  margin-bottom: 140px;

  @media @bw1020 {
    margin-top: 150px;
  }

  @media @bw768 {
    margin-top: 80px;
    margin-bottom: 90px;
  }

  &__link {
    .container();
    display: flex;
    margin-top: 40px;
    gap: 5px;
  }

  &__nav-link {
    font-size: 16px;
    font-weight: 400;
    font-family: @font8;
    text-decoration: none;

    &:hover,
    &:active {
      color: @red;
    }

    @media @bw1020 {
      font-size: 14px;
    }

    @media @bw370 {
      display: none;
    }
  }
}
</style>